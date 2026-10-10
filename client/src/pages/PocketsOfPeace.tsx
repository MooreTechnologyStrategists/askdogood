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
      <p style={{fontSize:"1.2rem",maxWidth:690}}>Maybe your day has been bills, family obligations, job worries, or one more thing you did not plan for. This page offers four small, free ways to reset: try a gardening idea, reflect on a song, make something simple to eat, or put a hard-earned lesson into words. None of it replaces the practical help you may need.</p>
      <a href="#take-five" style={{display:"inline-block",background:"#225c45",color:"white",padding:"0.85rem 1.3rem",borderRadius:10,fontWeight:700}}>Take five minutes for yourself →</a>
    </header>
    <section aria-label="Explore pockets of peace" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,margin:"2rem 0"}}>
      {[
        {title:"The Garden Grows",img:"/images/personal/rosee-garden-2026.webp",description:"Explore existing garden guides and growing-season notes. Start with one manageable task, whether that is checking soil moisture, choosing seeds, or learning when to transplant.",href:"/garden",cta:"Step into the garden"},
        {title:"The Soundtrack of Us",description:"Think of a song from hip-hop, go-go, or soul that carries a memory. Use the reflection below to name what it taught you. We do not host a music player or licensed tracks here.",href:"#take-five",cta:"Find your song"},
        {title:"Beats, Plants & Plates",description:"Browse existing recipe pages and meal ideas. Check ingredients, serving needs, and instructions before cooking; recipes are not personalized medical nutrition advice.",href:"/whats-good-to-eat",cta:"Explore the kitchen"},
        {title:"Lessons I Didn't Know I Was Learning",description:"Read personal stories about starting over, relationships, faith, and lessons learned. These are experiences to consider, not promises that your path will look the same.",href:"/journey",cta:"Read the stories"}
      ].map((item,i)=><article key={item.title} style={{border:"1px solid #e4d8c7",borderRadius:18,overflow:"hidden",background:"#fffaf2",padding:18}}>
        {item.img?<img src={item.img} alt="RoSeé in her garden" style={{width:"100%",height:175,objectFit:"cover",borderRadius:12}}/>:<div aria-hidden="true" style={{height:175,borderRadius:12,background:["","#d6dfd2","#ead5bd","#e7d4d0"][i],display:"grid",placeItems:"center",fontSize:46}}>{["","♫","✦","❧"][i]}</div>}
        <h2 style={{fontSize:"1.4rem",margin:"1rem 0 .5rem"}}>{item.title}</h2><p>{item.description}</p><a href={item.href} style={{fontWeight:800,color:"#a4493b"}}>{item.cta} →</a>
      </article>)}
    </section>
    <section aria-label="Practical pocket of peace guides" style={{padding:"1rem 0 2rem"}}>
      <h2 style={{fontSize:"clamp(1.6rem,4vw,2.3rem)"}}>A little more than a feel-good quote.</h2>
      <p>Try something small today. These ideas are starting points, not promises that a difficult situation will disappear.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:18}}>
        <article style={{background:"#fffaf2",border:"1px solid #e4d8c7",borderRadius:16,padding:20}}>
          <h3>Garden: when your plant is struggling</h3>
          <p>Before buying fertilizer or another plant, check the basics. Put a finger about an inch into the soil. If it feels damp, hold off watering and check that the pot drains. If it is dry, water slowly until the soil is evenly moist. Look at how many hours of light the plant gets, and identify the plant before changing its routine. Different plants need different care.</p>
          <p><strong>Try today:</strong> Write down the plant name, light conditions, and last watering date. Observe it for a few days instead of changing everything at once.</p>
          <a href="/garden" style={{fontWeight:800,color:"#a4493b"}}>Explore the seasonal garden notes →</a>
        </article>
        <article style={{background:"#fffaf2",border:"1px solid #e4d8c7",borderRadius:16,padding:20}}>
          <h3>Music: make a three-song check-in</h3>
          <p>Some songs take us straight back to a kitchen, a family gathering, a go-go show, or a younger version of ourselves. Pick three songs: one that matches how you feel, one that reminds you of your strength, and one that makes you want to move. You do not need a perfect playlist or a subscription to reflect on what they mean.</p>
          <p><strong>Try today:</strong> Write down one lyric-free memory each song brings up, then ask yourself what you want to carry into the rest of the day.</p>
          <a href="#take-five" style={{fontWeight:800,color:"#a4493b"}}>Use the music reflection →</a>
        </article>
        <article style={{background:"#fffaf2",border:"1px solid #e4d8c7",borderRadius:16,padding:20}}>
          <h3>Kitchen: dinner when energy is low</h3>
          <p>Not every evening calls for a full recipe. Check what you already have: a grain, a protein such as beans or eggs, and a vegetable. A simple bowl can come together with cooked rice, rinsed canned beans, warmed vegetables, and seasoning you like. Follow food safety instructions and adjust ingredients for your needs.</p>
          <p><strong>Try today:</strong> Choose one meal from what is already in the kitchen before adding more to the grocery list.</p>
          <a href="/whats-good-to-eat" style={{fontWeight:800,color:"#a4493b"}}>Browse recipe ideas →</a>
        </article>
        <article style={{background:"#fffaf2",border:"1px solid #e4d8c7",borderRadius:16,padding:20}}>
          <h3>Stories: keep the lesson, not the harm</h3>
          <p>Sometimes a relationship, a job, or an unexpected ending leaves you with both pain and useful knowledge. You can acknowledge what hurt without pretending it was worth it. Ask what you learned, what boundary you would set sooner, and which part of your experience might help somebody else. You never owe anyone the details of your story.</p>
          <p><strong>Try today:</strong> Write one sentence beginning “Next time, I will…” and make it specific enough to act on.</p>
          <a href="/journey" style={{fontWeight:800,color:"#a4493b"}}>Read the personal stories →</a>
        </article>
      </div>
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
    <section style={{padding:"2rem 0"}}><h2>Take what helps. Leave what does not.</h2><p>This page is free. If you need help with work, housing, food, or another urgent issue, start with our practical resource links rather than relying on a reflection exercise alone.</p><p><Link href="/resources/start">Find practical support →</Link> · <Link href="/community">Connect with the community →</Link></p></section>
  </div>;
}
