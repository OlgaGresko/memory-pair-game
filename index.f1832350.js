!function(){var e={apple:"../src/images/apple.png",banana:"../src/images/banana.png",cherry:"../src/images/cherry.png",pineapple:"../src/images/pineapple.png",pumpkin:"../src/images/pumpkin.png",watermelon:"../src/images/watermelon.png"};for(var n=[],a=1;a<=12;a++){var t=document.getElementById("".concat(a));n.push(t)}var s=[];for(var r in e)s.push(e[r],e[r]);for(var o,c=s.sort((function(){return Math.random()-.5})),i=0;i<n.length;i++){var l=(o=c,Math.floor(Math.random()*o.length)),p=n[i].querySelector(".flip-card-back");if(p){var d=c[l],g=Object.keys(e).find((function(n){return e[n]===d})),u=g?"image-".concat(g):"";u&&n[i].classList.add(u),console.log("currentImage",d),p.style.backgroundImage="url('".concat(d,"')")}c.splice(l,1)}var m=[];function f(e){var a,t=document.getElementById(e.currentTarget.id),s=t.querySelector(".flip-card-inner");t.classList.add("open"),s.style.transform="rotateY(180deg)",t.classList.forEach((function(e){e.startsWith("image-")&&(a=e)})),n.forEach((function(e){var n;if(e.classList.forEach((function(e){e.startsWith("image-")&&(n=e)})),e.id!==t.id&&e.classList.contains(a)&&e.classList.contains("open"))return console.log("match"),m.push(a),void console.log("openedClasses",m);if(e.id===t.id||e.classList.contains(a)||m.includes(n)||!e.classList.contains("open"))e.id===t.id||e.classList.contains("open");else{e.classList.remove("open"),t.classList.remove("open");var r=e.querySelector(".flip-card-inner");setTimeout((function(){s.style.transform="rotateY(0deg)",r.style.transform="rotateY(0deg)"}),700)}})),6===m.length&&setTimeout((function(){alert("Вітаємо! Ви виграли!"),location.reload()}),700)}n.forEach((function(e){e.addEventListener("click",f)}))}();
//# sourceMappingURL=index.f1832350.js.map
