export const tracks = [
  {id:'health',name:'Know your health',symbol:'✿',description:'Small facts. Clearer questions.',href:'/health-stories'},
  {id:'love',name:'Love with respect',symbol:'♡',description:'Boundaries, listening, and care.',href:'/support/relationships'},
  {id:'fun',name:'Joy & rhythm',symbol:'♫',description:'Music memories and playful thinking.',href:'/pockets-of-peace'},
  {id:'spirit',name:'Faith in motion',symbol:'✧',description:'Bible knowledge with room to reflect.',href:'/journey'},
  {id:'foundation',name:'Build your foundation',symbol:'⌂',description:'Self-worth and one useful next step.',href:'/resources/start'},
];
export const puzzles = [
 {phrase:'Make room for your next good chapter',clue:'A reminder that the story can keep growing.',meaning:'A new chapter can begin with one small decision.'},
 {phrase:'Your worth is bigger than one setback',clue:'A stumble does not get the final word.',meaning:'Review what happened without turning it into your identity.'},
 {phrase:'Plant small seeds and give them time',clue:'A garden lesson for the rest of life.',meaning:'Some progress needs patience and consistent care.'},
 {phrase:'Let your boundaries make space for peace',clue:'Limits can protect the room you need.',meaning:'A clear boundary can help you describe what you need.'},
 {phrase:'Turn the lesson into your next step',clue:'Something useful can come from a hard chapter.',meaning:'You do not have to celebrate the hurt to use what you learned.'},
 {phrase:'Keep your rhythm while making room to grow',clue:'Music and reinvention can share the same verse.',meaning:'You can value who you are and still welcome change.'},
 {phrase:'Small acts of kindness can carry great meaning',clue:'Impact does not always need a spotlight.',meaning:'Choose an act of care that fits your energy today.'},
];
export const pocketCards = [
 {title:'The soundtrack question',prompt:'Which song brings you back to a version of yourself you want to celebrate?',action:'Play it, or remember it. Name one lesson you want to carry forward.',href:'/pockets-of-peace'},
 {title:'A little room to grow',prompt:'What needs patience rather than pressure in your life?',action:'Choose one small act of care. Let that be enough for this moment.',href:'/garden'},
 {title:'The love language of listening',prompt:'Who helps you feel heard—and how do you return that care?',action:'If it feels right, thank them for one specific thing.',href:'/support/relationships'},
 {title:'Faith with feet',prompt:'What would a small act of mercy look like in your day?',action:'Consider one kind action that respects both your needs and theirs.',href:'/journey'},
 {title:'Your foundation check-in',prompt:'What strength have you used recently without giving yourself credit?',action:'Name it. Consider how it could help with your next step.',href:'/resources/start'},
 {title:'Future-you says thank you',prompt:'What tiny task would make tomorrow feel a little lighter?',action:'Choose a manageable start, not a complete life renovation.',href:'/resources/start'},
 {title:'Kitchen nostalgia',prompt:'What meal carries a good memory for you?',action:'Explore a recipe or remember who made that meal feel special.',href:'/whats-good-to-eat'},
 {title:'Keep the lesson',prompt:'What have you learned that could help someone else?',action:'Share only what you feel ready to share. Your story remains yours.',href:'/journey'},
];
export function dayKey(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);}
export function dayNumber(date=new Date()){const key=dayKey(date);const parts=key.split('-').map(Number);return Math.floor(Date.UTC(parts[0],parts[1]-1,parts[2])/86400000);}
export function shuffle<T>(items:T[],seed:number){const out=[...items];let value=(seed>>>0)||1;for(let i=out.length-1;i>0;i--){value=(Math.imul(value,1664525)+1013904223)>>>0;const j=value%(i+1);[out[i],out[j]]=[out[j],out[i]];}return out;}
export function isSolved(order:number[],length:number){return order.length===length&&order.every((value,i)=>value===i);}
