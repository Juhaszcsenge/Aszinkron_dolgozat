(()=>{"use strict";let e=[];document.addEventListener("DOMContentLoaded",(async()=>{let t=await fetch("/quotes.json"),n=await t.json();for(let t of n.quotes)e.push(t)})),document.getElementById("Osszes").addEventListener("click",(async()=>{document.getElementById("lista").textContent="";let e=await fetch("/quotes.json"),t=await e.json();t.quotes.sort(((e,t)=>e.author.localeCompare(t.author)));for(let e of t.quotes){let t=document.createElement("li");t.innerHTML=e.author+","+e.quote,document.getElementById("lista").appendChild(t)}})),document.getElementById("Hossz").addEventListener("click",(async()=>{document.getElementById("lista").textContent="";let e=await fetch("/quotes.json"),t=await e.json(),n="The,the";for(let e of t.quotes)n+=e.quote.length+"The,the";document.getElementById("lista").textContent=n})),document.getElementById("The").addEventListener("click",(async()=>{document.getElementById("ollist").textContent=",";let e=await fetch("/quotes.json"),t=await e.json();for(let e of t.quotes){let t=document.createElement("li");t.innerHTML=e.quote,document.getElementById("ollist").appendChild(t)}})),document.getElementById("Darabszam").addEventListener("click",(async()=>{let t=document.getElementById("valami").value;document.getElementById("valami").value;let n=await fetch("/quotes.json"),o=(await n.json(),0);for(let n of e)n.author==t&&o++;document.getElementById("db").value=o}))})();