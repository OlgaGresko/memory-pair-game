const e={apple:"../src/images/apple.png",banana:"../src/images/banana.png",cherry:"../src/images/cherry.png",pineapple:"../src/images/pineapple.png",pumpkin:"../src/images/pumpkin.png",watermelon:"../src/images/watermelon.png"};const s=[];for(let e=1;e<=12;e++){const t=document.getElementById(`${e}`);s.push(t)}const t=[];for(const s in e)t.push(e[s],e[s]);const n=t.sort((()=>Math.random()-.5));for(let t=0;t<s.length;t++){const o=(a=n,Math.floor(Math.random()*a.length)),c=s[t].querySelector(".flip-card-back");if(c){const a=n[o],r=Object.keys(e).find((s=>e[s]===a)),i=r?`image-${r}`:"";i&&s[t].classList.add(i),console.log("currentImage",a),c.style.backgroundImage=`url('${a}')`}n.splice(o,1)}var a;let o=[];function c(e){const t=document.getElementById(e.currentTarget.id),n=t.querySelector(".flip-card-inner");t.classList.add("open"),n.style.transform="rotateY(180deg)";let a;t.classList.forEach((e=>{e.startsWith("image-")&&(a=e)})),s.forEach((e=>{let s;if(e.classList.forEach((e=>{e.startsWith("image-")&&(s=e)})),e.id!==t.id&&e.classList.contains(a)&&e.classList.contains("open"))return console.log("match"),o.push(a),void console.log("openedClasses",o);if(e.id===t.id||e.classList.contains(a)||o.includes(s)||!e.classList.contains("open"))e.id===t.id||e.classList.contains("open");else{e.classList.remove("open"),t.classList.remove("open");const s=e.querySelector(".flip-card-inner");setTimeout((()=>{n.style.transform="rotateY(0deg)",s.style.transform="rotateY(0deg)"}),700)}})),6===o.length&&setTimeout((()=>{alert("Вітаємо! Ви виграли!"),location.reload()}),700)}s.forEach((e=>{e.addEventListener("click",c)}));
//# sourceMappingURL=index.f05b8fb1.js.map
