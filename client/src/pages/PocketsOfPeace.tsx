import { useState } from "react";
import { Link } from "wouter";

const moments = [
  { label: "Grow", title: "Give something room to grow", prompt: "What in your life needs patience rather than pressure?", action: "Tend a plant, start a seed, or give one important thing five minutes of care." },
  { label: "Listen", title: "Put a little music on it", prompt: "Which song reminds you of a version of yourself worth celebrating?", action: "Play the whole song. Write down one memory and one lesson it left you." },
  { label: "Make", title: "Comfort from your own kitchen", prompt: "What meal feels like home to you?", action: "Choose three ingredients you already have and make something nourishing." },
  { label: "Reflect", title: "Keep the lesson, release the weight", prompt: "What did a difficult chapter teach you that can help someone else?", action: "Write down the lesson and one small step you can take today." },
];

export default function PocketsOfPeace() {
  const [selected, setSelected] = useState(0);
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState(false);
  const moment = moments[selected];
  const saveReflection = () => {
    const blob = new Blob([`AskDoGood · Pocket of Peace\n\n${moment.prompt}\n\n${reflection}\n\nNext step: ${moment.action}\n`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a"); link.href = url; link.download = "askdogood-pocket-of-peace.txt"; link.click();
    URL.revokeObjectURL(url); setSaved(true);
  };
  return <div className="adg-page" style={{maxWidth:1120,margin:"0 auto",padding:"clamp(1rem,4vw,3rem)",color:"#214b3b"}}>
    <header style={{background:"#f6efe3",padding:"clamp(1.5rem,5vw,4rem)",borderRadius:24}}>
      <p style={{textTransform:"uppercase",letterSpacing:2,fontWeight:800,color:"#a4493b"}}>AskDoGood · Pockets of Peace</p>
      <h1 style={{fontSize:"clamp(2.2rem,6vw,4.4rem)",lineHeight:1.08,margin:"1rem 0"}}>Life is doing the most. Find a little room to breathe.</h1>
      <p style={{fontSize:"1.2rem",maxWidth:690}}>A garden lesson. A song that knows your story. Something good from the kitchen. A moment to remember how far you have come. This is where we make space for joy without pretending life is easy.</p>
      <a href="#take-five" style={{display:"inline-block",background:"#225c45",color:"white",padding:"0.85rem 1.3rem",borderRadius:10,fontWeight:700}}>Take five minutes for yourself →</a>
    </header>
    <section aria-label="Explore pockets of peace" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,margin:"2rem 0"}}>
      {[
        {title:"The Garden Grows",img:"/images/personal/rosee-garden-2026.webp",description:"Real growing seasons, useful garden lessons, and the wisdom we harvest along the way.",href:"/garden",cta:"Step into the garden"},
        {title:"The Soundtrack of Us",description:"Hip-hop, go-go, soul, and the music that holds our memories.",href:"#take-five",cta:"Find your song"},
        {title:"Beats, Plants & Plates",description:"Comfort, creativity, and approachable food made for real life.",href:"/whats-good-to-eat",cta:"Explore the kitchen"},
        {title:"Lessons I Didn't Know I Was Learning",description:"Stories about starting over, relationships, faith, and keeping the wisdom.",href:"/journey",cta:"Read the stories"}
      ].map((item,i)=><article key={item.title} style={{border:"1px solid #e4d8c7",borderRadius:18,overflow:"hidden",background:"#fffaf2",padding:18}}>
        {item.img?<img src={item.img} alt="RoSeé in her garden" style={{width:"100%",height:175,objectFit:"cover",borderRadius:12}}/>:<div aria-hidden="true" style={{height:175,borderRadius:12,background:["","#d6dfd2","#ead5bd","#e7d4d0"][i],display:"grid",placeItems:"center",fontSize:46}}>{["","♫","✦","❧"][i]}</div>}
        <h2 style={{fontSize:"1.4rem",margin:"1rem 0 .5rem"}}>{item.title}</h2><p>{item.description}</p><a href={item.href} style={{fontWeight:800,color:"#a4493b"}}>{item.cta} →</a>
      </article>)}
    </section>
    <section id="take-five" style={{background:"#edf3e9",borderRadius:22,padding:"clamp(1.2rem,4vw,2.5rem)"}}>
      <p style={{fontWeight:800,color:"#a4493b",letterSpacing:1}}>YOUR FIVE-MINUTE RESET</p>
      <h2 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)"}}>What kind of peace do you need today?</h2>
      <div role="group" aria-label="Choose a reflection" style={{display:"flex",flexWrap:"wrap",gap:10,margin:"1.2rem 0"}}>
        {moments.map((item,i)=><button type="button" key={item.label} aria-pressed={selected===i} onClick={()=>{setSelected(i);setReflection("");setSaved(false)}} style={{border:"2px solid #225c45",borderRadius:999,padding:"0.7rem 1rem",background:selected===i?"#225c45":"white",color:selected===i?"white":"#225c45",fontWeight:800,cursor:"pointer"}}>{item.label}</button>)}
      </div>
      <h3 style={{fontSize:"1.45rem"}}>{moment.title}</h3><p style={{fontSize:"1.1rem",fontWeight:700}}>{moment.prompt}</p><p>{moment.action}</p>
      <label htmlFor="peace-reflection" style={{display:"block",fontWeight:700,marginBottom:8}}>Your private reflection (optional)</label>
      <textarea id="peace-reflection" value={reflection} onChange={e=>{setReflection(e.target.value);setSaved(false)}} rows={4} placeholder="Write whatever comes to mind..." style={{width:"100%",maxWidth:700,padding:12,borderRadius:10,border:"1px solid #9eaa9c",background:"white",color:"#214b3b"}}/>
      <div style={{marginTop:12}}><button type="button" onClick={saveReflection} style={{padding:"0.8rem 1.2rem",background:"#225c45",color:"white",border:0,borderRadius:10,fontWeight:800,cursor:"pointer"}}>Save reflection to my device</button></div>
      <p style={{fontSize:".9rem"}}>Your writing stays in this browser until you download it. We do not submit it to AskDoGood. {saved?"Your file was prepared for download.":""}</p>
    </section>
    <section style={{padding:"2rem 0"}}><h2>One good moment can lead to another.</h2><p>Explore a recipe, read a story, or take a practical next step. You do not have to buy anything to belong here.</p><p><Link href="/resources/start">Find practical support →</Link> · <Link href="/community">Connect with the community →</Link></p></section>
  </div>;
}
