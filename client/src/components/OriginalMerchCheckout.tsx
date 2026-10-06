import { useEffect, useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const API = 'https://energetic-endurance-production.up.railway.app/api';
const sizes = ['S', 'M', 'L', 'XL', '2XL'];
const pieces = [
  { id: 'adg_hoodie', name: 'Embroidered black hoodie', price: 59, description: 'AskDoGood crab, DC stars and bars, hearts and wordmark stitched across the chest. Gildan 18500, 50% cotton / 50% polyester.' },
  { id: 'adg_set', name: 'Embroidered hoodie + jogger set', price: 95, description: 'Black embroidered hoodie and tapered embroidered joggers. Choose a separate size for each piece. Save $9 compared with buying both separately.' },
  { id: 'adg_tee', name: 'AskDoGood cream tee', price: 29, description: 'The detailed AskDoGood logo printed on a soft cream tee. Made to order.' },
];
type Product = { name: string; price: number; available: boolean };
type ImageProduct = { key: string; image?: string };
export default function OriginalMerchCheckout() {
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState<Record<string, Product>>({});
  const [images, setImages] = useState<Record<string, string>>({});
  const [product, setProduct] = useState('adg_tee');
  const [message, setMessage] = useState('Checking checkout availability…');
  const [busy, setBusy] = useState(false);
  const [paid, setPaid] = useState(false);
  const [confirmation, setConfirmation] = useState('');
  useEffect(() => {
    fetch(`${API}/merch/catalog`).then(r => { if (!r.ok) throw new Error(); return r.json(); }).then(data => {
      setCatalog(data.products || {});
      setMessage(data.available ? 'Select your sizes and US delivery details. Shipping is calculated at secure Stripe checkout.' : 'Checkout is temporarily unavailable. Please check back shortly.');
    }).catch(() => setMessage('We could not check availability. Please try again shortly.')).finally(() => setLoading(false));
    fetch(`${API}/merch/apparel-check`).then(r => r.json()).then(data => {
      setImages(Object.fromEntries((data.products || []).filter((p: ImageProduct) => p.image).map((p: ImageProduct) => [p.key, p.image])));
    }).catch(() => {});
    const params = new URLSearchParams(window.location.search);
    if (params.get('order') === 'canceled') setConfirmation('Checkout was canceled. You can return to your order below.');
    if (params.get('order') !== 'received') return;
    setConfirmation('Checking your payment. Please do not submit another order.');
    const session = params.get('session_id');
    if (!session) { setConfirmation('If you completed payment, please do not pay again. Contact AskDoGood to confirm your order.'); return; }
    fetch(`${API}/merch/order-status?session_id=${encodeURIComponent(session)}`).then(async r => {
      const data = await r.json(); if (!r.ok) throw new Error(data.error);
      if (!data.paid) throw new Error('Payment has not been confirmed. Please contact AskDoGood before paying again.');
      setPaid(true);
      if (data.live && Number.isFinite(data.itemTotal)) {
        const key = 'adg_purchase_' + session;
        let recorded = false;
        try { recorded = localStorage.getItem(key) === '1'; } catch { /* Storage can be unavailable. */ }
        if (!recorded) {
          trackEvent('purchase', { transaction_id: session, value: data.itemTotal / 100,
            shipping: data.shippingTotal / 100, currency: 'USD',
            items: [{ item_id: 'adg_merch_order', item_name: 'AskDoGood merchandise order', item_brand: 'AskDoGood', price: data.itemTotal / 100, quantity: 1 }] });
          try { localStorage.setItem(key, '1'); } catch { /* GA4 also receives the stable transaction ID. */ }
        }
      }
      setConfirmation(`Payment confirmed — thank you! Order ${data.orderReference}. Total paid: ${(data.total / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}. ${data.fulfillment === 'production' ? 'Your order has been sent to production.' : 'Your order is being processed for fulfillment.'} Your payment receipt will be emailed to the address used at checkout.`);
    }).catch(error => setConfirmation(error.message || 'We could not verify payment. Please contact AskDoGood before paying again.'));
  }, []);
  async function checkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!catalog[product]?.available || busy) return;
    const form = new FormData(event.currentTarget);
    const address = Object.fromEntries(['first_name','last_name','email','phone','address1','address2','city','region','zip'].map(key => [key, String(form.get(key) || '')]));
    setBusy(true); setMessage('Calculating shipping and opening secure checkout…');
    try {
      const response = await fetch(`${API}/merch/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ address, selection: { product, size: form.get('size'), hoodieSize: form.get('hoodieSize'), joggersSize: form.get('joggersSize') } }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error);
      const url = new URL(data.url); if (url.protocol !== 'https:' || url.hostname !== 'checkout.stripe.com') throw new Error('Checkout could not be opened. No payment was taken.');
      trackEvent('begin_checkout', { product_id: product, product_brand: 'askdogood', value: catalog[product].price / 100, currency: 'USD' });
      window.location.assign(url.href);
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Checkout is unavailable. No payment was taken.'); setBusy(false); }
  }
  const inputClass = 'mt-2 w-full rounded-xl border border-[#173c32]/20 bg-white p-3 text-foreground';
  return <>
    {confirmation && <div id="order-confirmation" role="status" className="mb-8 rounded-2xl border border-primary/30 bg-white p-6 text-lg font-medium">{confirmation}</div>}
    <div className="mt-8 grid gap-6 md:grid-cols-3">{pieces.map(piece => <article key={piece.id} className="overflow-hidden rounded-2xl border bg-white">
      {piece.id === 'adg_set' ? <div className="grid grid-cols-2 bg-white">{['adg_hoodie','adg_joggers'].map(id => images[id] && <img key={id} src={images[id]} alt={id === 'adg_hoodie' ? 'Actual embroidered hoodie mockup' : 'Actual embroidered jogger mockup'} className="aspect-[1/2] w-full object-contain" />)}</div> : images[piece.id] ? <img src={images[piece.id]} alt={`${piece.name} production mockup`} className="aspect-square w-full object-contain" /> : <div className="flex aspect-square items-center justify-center bg-[#173c32]/5 p-8 text-center">{piece.name}</div>}
      <div className="space-y-3 p-5"><h3 className="text-xl font-bold">{piece.name}</h3><p className="text-sm leading-6">{piece.description}</p><p className="font-semibold">${piece.price} · S–2XL · before shipping</p><p className="text-sm">{catalog[piece.id]?.available ? 'Available to order' : loading ? 'Checking availability…' : 'Temporarily unavailable'}</p><a href="#original-checkout" onClick={e => { if (!catalog[piece.id]?.available) { e.preventDefault(); return; } setProduct(piece.id); trackEvent('merch_cta_click', { product_id: piece.id, product_brand: 'askdogood', cta_location: 'original_collection' }); }} aria-disabled={!catalog[piece.id]?.available} className={`inline-flex rounded-full px-5 py-3 font-semibold ${catalog[piece.id]?.available ? 'bg-primary text-primary-foreground' : 'pointer-events-none bg-muted text-muted-foreground'}`}>{catalog[piece.id]?.available ? 'Shop Now' : loading ? 'Checking availability…' : 'Temporarily unavailable'}</a></div>
    </article>)}</div>
    <p className="mt-5 text-sm leading-6">Made to order. Mockups show the selected production design; final stitching, color and placement may vary slightly. The hoodie and joggers use different fleece blends and may ship separately. US delivery only.</p>
    {!paid && <form id="original-checkout" onSubmit={checkout} className="mt-10 scroll-mt-24 rounded-2xl border bg-white p-6 md:p-8"><h3 className="text-2xl font-bold">Order your AskDoGood pieces</h3><div className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2">Product<select className={inputClass} value={product} onChange={e => setProduct(e.target.value)}>{pieces.map(piece => <option key={piece.id} value={piece.id} disabled={!catalog[piece.id]?.available}>{piece.name} — ${piece.price}{!catalog[piece.id]?.available ? (loading ? ' — Checking availability…' : ' — Temporarily unavailable') : ''}</option>)}</select></label>
      {(product === 'adg_set' ? ['hoodieSize','joggersSize'] : ['size']).map(name => <label key={name}>{name === 'hoodieSize' ? 'Hoodie size' : name === 'joggersSize' ? 'Jogger size' : 'Size'}<select name={name} className={inputClass}>{sizes.map(size => <option key={size}>{size}</option>)}</select></label>)}
      {[
        ['first_name','First name','given-name',80,true,'text'],['last_name','Last name','family-name',80,true,'text'],['email','Email','email',254,true,'email'],['phone','Phone (optional)','tel',32,false,'tel'],['address1','Street address','address-line1',120,true,'text'],['address2','Apartment / suite (optional)','address-line2',120,false,'text'],['city','City','address-level2',80,true,'text'],['region','State (2 letters)','address-level1',2,true,'text'],['zip','ZIP code','postal-code',10,true,'text']
      ].map(([name,label,auto,max,required,type]) => <label key={String(name)}>{label}<input name={String(name)} autoComplete={String(auto)} maxLength={Number(max)} required={Boolean(required)} type={String(type)} pattern={name === 'region' ? '[A-Za-z]{2}' : name === 'zip' ? '[0-9]{5}(-[0-9]{4})?' : undefined} className={inputClass} /></label>)}
    </div><p role="status" className="mt-6 text-sm">{message}</p><button type="submit" disabled={busy || !catalog[product]?.available} className="mt-5 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-50">{busy ? 'Opening checkout…' : 'Continue to Secure Checkout'}</button></form>}
  </>;
}
