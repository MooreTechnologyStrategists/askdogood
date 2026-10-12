
import {useLocation} from 'wouter';
const notes=[
 {title:'A tiny food team-up',text:'Vitamin C helps your body absorb iron from plant foods. Think beans with bell peppers.',source:'https://ods.od.nih.gov/factsheets/Iron-Consumer/',label:'NIH • Iron'},
 {title:'Your pharmacist is on your team.',text:'Ask about medicine, food and supplement interactions. A good question is a useful next step.',source:'https://www.fda.gov/consumers/consumer-updates/fda-pharmacists-help-you-use-medicines-safely',label:'FDA • Medicine safety'},
 {title:'Black girl magic needs rest, too.',text:'You do not have to earn a quiet moment. Put one on your calendar.'},
 {title:'Your to-do list called.',text:'It can wait while you drink some water and enjoy your lunch.'},
 {title:'Progress can wear house slippers.',text:'One doable step counts. Start where you are, with what you have.'},
 {title:'A boundary is a full sentence.',text:'“I cannot take that on today” is a perfectly useful response.'}
];
export default function LifeSticker({slot=0}:{slot?:number}){
 const [path]=useLocation();if(path==='/my-toolkit')return null;
 const hash=[...path+new Date().toISOString().slice(0,10)].reduce((n,c)=>n+c.charCodeAt(0),0);
 const note=notes[(hash+slot*3)%notes.length];
 return <aside className="life-sticker-wrap" aria-label="A little AskDoGood encouragement"><details className="life-sticker"><summary>{note.title}<span> Open a little good ↗</span></summary><p>{note.text}</p>{note.source?<a href={note.source} target="_blank" rel="noopener noreferrer">{note.label} →</a>:<small>An original AskDoGood reminder</small>}</details></aside>;
}
