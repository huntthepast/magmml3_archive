/*! For license information please see silverstar.js.LICENSE.txt */
(()=>{"use strict";var e,t={"./src/js/silverstar.js":(e,t,o)=>{o.r(t);var r=o("./node_modules/lenis/dist/lenis.mjs"),a=(o("./node_modules/sweetalert2/dist/sweetalert2.all.js"),o("./src/database/stages.json"));gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),document.addEventListener("DOMContentLoaded",(()=>{const e=new r.default({duration:1.5,direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1}),t=document.querySelector(".SilverStarModal"),o=new r.default({wrapper:t,content:t,duration:1.5,direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1});let n=e;function i(){o.resize()}function s(t=!1){t?(e.stop(),o.start(),o.on("scroll",ScrollTrigger.update),n=o,window.lenis=e):(o.stop(),e.start(),e.on("scroll",ScrollTrigger.update),n=e,window.lenis=e)}requestAnimationFrame((function e(t){n&&(n.raf(t),ScrollTrigger.update()),requestAnimationFrame(e)}));const l=document.querySelector('input[name="opLayoutDisplay"]:checked'),c=document.querySelector('input[name="opLayoutPage"]:checked'),u=document.querySelector('input[name="opLayoutVisibility"]:checked'),d=document.querySelector('input[name="opStarVisibility"]:checked'),h=document.querySelector('input[name="opLayoutSort"]:checked'),m=document.querySelector('input[name="opLayoutSortBy"]:checked'),p=document.querySelector(".silverStar-menu"),g=document.querySelector(".silverstar-mobile-index");let y=document.querySelector(".SilverStar").classList.contains("-translate-y-full"),S=l||null!=l?l.value:"grid",f=c||null!=c?c.value:20,v=u||null!=u?u.value:"show",b=d||null!=d?d.value:"show",_=h||null!=h?h.value:"descend",w=m||null!=m?m.value:"entry",D="",L=1,T=0;async function k(e,t){L=e,T=t,function(){const e=document.querySelectorAll(".silverStar-Next"),t=a.find((e=>e.Id===L));t&&e.forEach((e=>{e.disabled=T>=t.Star_Count}))}(),function(){const e=document.querySelectorAll(".silverStar-Home"),t=document.querySelectorAll(".silverStar-Prev");a.find((e=>e.Id===L))&&(t.forEach((e=>{e.disabled=T<=0})),e.forEach((e=>{e.disabled=T<=0})))}(),function(){const e=document.querySelector(".silverstar-img-star"),t=document.querySelector(".silverstar-img-button");e.classList.remove("hidden"),t.classList.add("hidden")}();const o={stageName:document.querySelector(".level-name"),starTitle:document.querySelector(".silverstar-title"),stageDescription:document.querySelector(".stage-description"),stageImage:document.querySelector(".silverstar-img-star img"),stageImageSource:document.querySelector(".silverstar-img-star source"),stageImageButton:document.querySelector(".silverstar-img-button img"),stageImageSourceButton:document.querySelector(".silverstar-img-button source"),indexContainer:document.querySelector(".silverstar-index"),indexContainerMobile:document.querySelector(".silverstar-index-m"),imageToggleButton:document.querySelectorAll(".silverstar-img-toggle button"),silverstarVideoLink:document.querySelectorAll(".silverstar-video-link a")},r=a.find((t=>t.Id===e));if(!r)return;const{title:n,description:s}=function(e,t){let o,r;0===t?(o="Stage Introduction",r=`Star placed by: ${e.Star_Creator}; ${e.Stage_Description}`||"No description available."):t>=1&&t<=5&&(o=`Star ${t}`,r=e[`Star${t}_Description`]||`No description for star ${t}.`);return{title:o,description:r}}(r,t),l=function(e){return e.split(";").map((e=>`<p>${e.trim()}</p>`)).join("")}(s);!function(e,t,o,r){e.starTitle.innerHTML=o,e.stageName.innerHTML=`<p class="text-[4.615vw] lg:text-[1.25vw] font-semibold"> ${t.Stage_Name} </p>\n                                        <p class="text-[4.103vw] lg:text-[1.111vw] text-white/70"> (${t.Stage_Creator})</p>`||"Stage name is missing",e.stageDescription.innerHTML=r.replace(/<br>/g,"<br>")}(o,r,n,l),function(e,t,o,r){const a=`img/silver_star/cover/Entry${t.Stage_Entry}_Cover`,n=`img/silver_star/Entry${t.Stage_Entry}_Star${o}`,i=r.match(/Star Type:\s*([^;()]*)/),s=i?i[1].trim().toLowerCase():"normal";0===o?(e.stageImageSource.srcset=`${a}.webp`,e.stageImage.src=`${a}.PNG`,e.stageImage.alt=`${t.Stage_Name} / Silver Star Cover`):"normal"===s?(e.stageImageSource.srcset=`${n}.webp`,e.stageImage.src=`${n}.PNG`,e.stageImage.alt=`${t.Stage_Name} / Silver Star`):(e.stageImageSource.srcset=`${n}.webp`,e.stageImage.src=`${n}.PNG`,e.stageImage.alt=`${t.Stage_Name} / Silver Star`,e.stageImageSourceButton.srcset=`${n}_B.webp`,e.stageImageButton.src=`${n}_B.PNG`,e.stageImageButton.alt=`${n}_B / Silver Star`)}(o,r,t,s),function(e,t){const o=t.match(/Star Type:\s*([^;()]*)/);"normal"===(o?o[1].trim().toLowerCase():"normal")?e.forEach((e=>{e.disabled=!0,e.classList.add("opacity-50")})):e.forEach((e=>{e.disabled=!1,e.classList.remove("opacity-50")}))}(o.imageToggleButton,s),function(e,t){e.forEach(((e,o)=>{const r=t[`Youtube_Link_E${o+1}`];r?(e.href=r,e.classList.add("hover:bg-amber-400","hover:text-black","hover:scale-110","hover:border-black","cursor-pointer"),e.classList.remove("opacity-50","cursor-default")):(e.href="#",e.classList.remove("hover:bg-amber-400","hover:text-black","hover:scale-110","hover:border-black","cursor-pointer"),e.classList.add("opacity-50","cursor-default"))}))}(o.silverstarVideoLink,r),i()}function E(e,t){e.innerHTML="";for(let o=0;o<t.Star_Count;o++)e.innerHTML+=`\n                <button type="button" data-level="${t.Id}/${o+1}" class="silverstar-index-btn flex items-center justify-center p-[3.077vw] lg:p-[0.833vw] gap-[2.051vw] lg:gap-[0.278vw] lg:max-h-[2.917vw] font-semibold text-[text-[4.103vw] lg:text-[1.111vw] text-white/60 bg-black hover:bg-amber-400 hover:text-black lg:hover:scale-110 rounded-[1.111vw] border-[0.139vw] border-primary hover:border-black overflow-hidden transition duration-300 cursor-pointer">\n                    <i class="grid place-content-center bi bi-star-fill text-[2.051vw] lg:text-[0.833vw]"></i>    \n                    <p>${o+1}</p>\n                </button>\n            `}async function B(e="grid",t=20,o="show",r="show",n="descend",l="entry",c=""){const u=[],d=document.getElementById("stageGallery");d.innerHTML="";let h=a.filter((e=>{let t=c.toLowerCase();if(e.Stage_Name.toLowerCase().includes(t))return!0;let o=t.match(/^tier (\d+)$/);if(o&&parseInt(o[1])===e.Stage_Tier)return!0;let r=t.match(/^entry (\d+)$/);return!(!r||parseInt(r[1])!==e.Stage_Entry)}));h.sort(((e,t)=>"entry"===l?"descend"===n?e.Id-t.Id:t.Id-e.Id:"name"===l?"descend"===n?e.Stage_Name.localeCompare(t.Stage_Name):t.Stage_Name.localeCompare(e.Stage_Name):void 0)),h=h.slice(0,t),0===h.length?d.innerHTML='\n            <div class="col-span-4 row-span-3 grid p-[1.667vw] gap-[1.111vw] text-center bg-primary/20 text-white text-[1.25vw] rounded-[1.111vw]">\n                No level found <br>\n                <span class="text-white/60">If you\'re trying to search by tier number or entry number, use this format: Tier X or Entry X, where X is the number.</span>\n            </div>\n            ':h.forEach(((e,t)=>{const a=t%2==0?"hover:rotate-3":"hover:-rotate-3";let n,i;switch(o){case"show":default:n="grid",i="absolute bottom-0 grid place-content-center";break;case"blur":n="grid blur-xs",i="absolute bottom-0 grid place-content-center";break;case"hide":n="hidden",i="relative bottom-0 grid"}const s=document.createElement("div");s.className="grid content-between p-[2.051vw] lg:p-[0.833vw] gap-[2.051vw] lg:gap-[0.833vw] bg-primary rounded-[2.051vw] lg:rounded-[1.111vw] opacity-0",s.innerHTML=`\n                    <button type="button" data-level="${e.Id}/0" class="silverstar-btn group relative grid rounded-[2.051vw] lg:rounded-[1.111vw] overflow-hidden ${a} shadow-black shadow-sm lg:shadow-md transition duration-300 cursor-pointer">\n                        <picture>\n                            <source srcset="img/silver_star/cover/Entry${e.Stage_Entry}_Cover.webp" type="image/webp">\n                            <img loading="lazy" src="img/silver_star/cover/Entry${e.Stage_Entry}_Cover.PNG" alt="${e.Stage_Name} / Silver Star" class="${n} w-full h-full object-center object-cover scale-105 group-hover:hover:scale-125 transition duration-300">\n                        </picture>    \n                        <div class="${i} p-[2.564vw] lg:p-[0.833vw] gap-[1.026vw] lg:gap-[0.278vw] w-full text-center text-white bg-black/70 group-hover:bg-amber-400 group-hover:text-black pointer-events-none transition duration-300">\n                            <h1 class="font-semibold text-[3.077vw] lg:text-[1.25vw]">${e.Stage_Name}</h1>\n                            <p class="text-[2.564vw] lg:text-[1.111vw] text-gray-300 group-hover:text-black transition duration-300">Tier ${e.Stage_Tier} / Entry ${e.Stage_Entry}</p>\n                        </div>\n                    </button>\n                    <div class="${"show"==r?"grid":"hidden"} grid-cols-3 grid-rows-2 lg:grid-cols-5 lg:grid-rows-1 lg:content-center lg:items-center gap-[1.026vw] lg:gap-[0.556vw]">\n                        ${Array.from({length:e.Star_Count},((t,o)=>`\n                            <button type="button" data-level="${e.Id}/${o+1}" class="silverstar-btn ${o+1==e.Star_Count?"row-span-2 row-start-1 col-start-3 lg:row-auto lg:col-auto":""} flex items-center justify-center p-[2.051vw] lg:p-[0.833vw] gap-[1.026vw] lg:gap-[0.278vw] lg:max-h-[2.917vw] font-semibold text-[2.051vw] lg:text-[1.111vw] text-white/60 bg-black hover:bg-amber-400 hover:text-black hover:scale-110 rounded-[1.111vw] border-[0.139vw] border-black overflow-hidden transition duration-300 cursor-pointer">\n                                <i class="grid place-content-center bi bi-star-fill text-[1.538vw] lg:text-[0.833vw]"></i>    \n                                <p>${o+1}</p>\n                            </button>\n                        `)).join("")}\n                    </div>\n                `,d.appendChild(s),u.push(s)}));(()=>{const e=document.querySelector(".SilverStarModal"),t=document.querySelector(".SilverStar"),o=document.querySelectorAll(".silverstar-btn"),r=document.querySelector(".silverstar-index"),n=document.querySelector(".silverstar-index-m");o.forEach((o=>{o.addEventListener("click",(l=>{const[c,u]=o.getAttribute("data-level").split("/").map(Number),d=a.find((e=>e.Id===c));k(c,u),E(r,d),E(n,d),document.querySelectorAll(".silverstar-index-btn").forEach((e=>{e.addEventListener("click",(()=>{const[t,o]=e.getAttribute("data-level").split("/").map(Number);k(t,o),g.classList.add("-translate-y-full")}))}));e.classList.remove("opacity-0"),e.classList.remove("pointer-events-none"),t.classList.remove("-translate-y-full"),t.classList.remove("scale-75"),y=!1,setTimeout((()=>{i(),s(!0)}),500),history.state&&history.state.modalOpen||history.pushState({modalOpen:!0},"")}))}))})(),gsap.to(u,{opacity:1,y:0,duration:1,stagger:.1,ease:"power3.out"})}p&&p.addEventListener("click",(()=>{g.classList.toggle("-translate-y-full")})),function(){const e=document.querySelectorAll(".silverStar-Next"),t=document.querySelectorAll(".silverStar-Prev"),o=document.querySelectorAll(".silverStar-Home");e.forEach((e=>{e.addEventListener("click",(()=>{T++,k(L,T)}))})),t.forEach((e=>{e.addEventListener("click",(()=>{T--,k(L,T)}))})),o.forEach((e=>{e.addEventListener("click",(()=>{T=0,k(L,T)}))}))}(),function(){const e=document.querySelector(".silverstar-img-star"),t=document.querySelector(".silverstar-img-button"),o=document.querySelector(".star-img"),r=document.querySelector(".button-img");o.addEventListener("click",(()=>{e.classList.remove("hidden"),t.classList.add("hidden")})),r.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.remove("hidden")}))}(),B(S,f,v,b,_,w,D);(()=>{const e=document.getElementById("searchInput");function t(){B(S,f,v,b,_,w,D)}function o(){D=e.value.trim(),t()}function r(e){const o=e.target.id;"opLayoutPage20"===o&&(f=20),"opLayoutPage40"===o&&(f=40),"opLayoutPage60"===o&&(f=60),"opLayoutVisShow"===o&&(v="show"),"opLayoutVisBlur"===o&&(v="blur"),"opLayoutVisHide"===o&&(v="hide"),"opStarVisShow"===o&&(b="show"),"opStarVisHide"===o&&(b="hide"),"opLayoutSortDescend"===o&&(_="descend"),"opLayoutSortAscend"===o&&(_="ascend"),"opLayoutSortByNumber"===o&&(w="entry"),"opLayoutSortByAlphabet"===o&&(w="name"),t()}document.getElementById("searchButton").addEventListener("click",o),e.addEventListener("keypress",(e=>{"Enter"===e.key&&o()})),document.querySelectorAll(".SelectionRadio").forEach((e=>{e.addEventListener("change",r)}))})();(()=>{const e=document.querySelectorAll('input[name="silverSetting"]'),t=document.getElementById("slDisplay");function o(){const e=document.querySelector('input[name="silverSetting"]:checked').value;t.classList.remove("grid"),t.classList.add("hidden"),"display"===e&&(t.classList.add("grid"),t.classList.remove("hidden"))}o(),e.forEach((e=>{e.addEventListener("change",o)}))})();(()=>{const t=document.querySelector(".sidebar"),o=document.querySelectorAll(".sidebar-btn");let a=t.classList.contains("-translate-x-full");const n=new r.default({wrapper:t,content:t,duration:1.5,direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1});requestAnimationFrame((function e(t){n.raf(t),ScrollTrigger.update(),requestAnimationFrame(e)})),n.on("scroll",ScrollTrigger.update),window.SidebarModalLenis=n;const i=()=>{t.classList.add("-translate-x-full"),a=!0,setTimeout((()=>{e.start()}),300),history.state&&history.state.modalOpen&&history.back()};o.forEach((e=>{e.addEventListener("click",(()=>{1==a?(t.classList.remove("-translate-x-full"),a=!1,setTimeout((()=>{n.start()}),500),history.state&&history.state.modalOpen||history.pushState({modalOpen:!0},"")):i()}))})),window.addEventListener("popstate",(e=>{e.state&&e.state.modalOpen||i()})),window.addEventListener("resize",(()=>{window.innerWidth>=1024&&history.state&&history.state.modalOpen&&0==a&&i()}))})();(()=>{const t=document.querySelector(".SettingModal"),o=document.querySelector(".Setting"),a=document.querySelectorAll(".setting-btn");let n=o.classList.contains("-translate-y-full");const i=new r.default({wrapper:t,content:t,duration:1.5,direction:"vertical",gestureDirection:"vertical",smooth:!0,smoothTouch:!1,touchMultiplier:2,infinite:!1});requestAnimationFrame((function e(t){i.raf(t),ScrollTrigger.update(),requestAnimationFrame(e)})),i.on("scroll",ScrollTrigger.update),window.SettingModalLenis=i;const s=()=>{t.classList.add("opacity-0"),t.classList.add("pointer-events-none"),o.classList.add("-translate-y-full"),o.classList.add("scale-75"),n=!0,setTimeout((()=>{e.start()}),300),history.state&&history.state.modalOpen&&history.back()};a.forEach((e=>{e.addEventListener("click",(()=>{1==n?(t.classList.remove("opacity-0"),t.classList.remove("pointer-events-none"),o.classList.remove("-translate-y-full"),o.classList.remove("scale-75"),n=!1,setTimeout((()=>{i.start()}),300),history.state&&history.state.modalOpen||history.pushState({modalOpen:!0},"")):s()}))})),window.addEventListener("popstate",(e=>{e.state&&e.state.modalOpen||s()}))})();(()=>{const t=document.querySelector(".SilverStarModal"),o=document.querySelector(".SilverStar"),r=document.querySelectorAll(".silverStarExit"),a=()=>{t.classList.add("opacity-0"),t.classList.add("pointer-events-none"),o.classList.add("-translate-y-full"),o.classList.add("scale-75"),y=!0,setTimeout((()=>{e.start(),s(!1)}),300),history.state&&history.state.modalOpen&&history.back()};r.forEach((e=>{e.addEventListener("click",(()=>{a()}))})),window.addEventListener("popstate",(e=>{e.state&&e.state.modalOpen||a()}))})();(()=>{function e(){document.querySelectorAll(".categoryRadio, .SelectionRadio").forEach((e=>{let t=e.nextElementSibling;t&&"DIV"===t.tagName&&(e.checked?e.classList.contains("categoryRadio")?(t.classList.remove("bg-primary"),t.classList.add("bg-primary","hover:bg-amber-600","text-black")):e.classList.contains("SelectionRadio")&&(t.classList.remove("bg-black","hover:bg-amber-200","text-white"),t.classList.add("bg-amber-400","hover:bg-amber-600","text-black")):e.classList.contains("categoryRadio")?(t.classList.remove("bg-primary","hover:bg-amber-600","text-black"),t.classList.add("bg-primary")):e.classList.contains("SelectionRadio")&&(t.classList.remove("bg-amber-400","hover:bg-amber-600","text-black"),t.classList.add("bg-black","hover:bg-amber-200","text-white")))}))}e(),document.querySelectorAll(".categoryRadio, .SelectionRadio").forEach((t=>{t.addEventListener("change",e)}))})()}))},"./src/database/stages.json":e=>{e.exports=JSON.parse('[{"Id":1,"Stage_Name":"X6Meme","Stage_Creator":"It the it","Star_Creator":"E-Clare","Stage_Tier":1,"Stage_Entry":175,"Star_Count":5,"Stage_Description":"Despite how frustrating this level can be, the Silver Star placements are surprisingly fair. Most are positioned in obvious spots, and the one in the vertical section is quite generous—it could have been placed mid-scroll instead of conveniently at the start and end. That said, the final star can be downright cruel if you\'re not prepared for it.;\\nIf you’ve skipped this level before, revisiting it might feel unbearable. I wouldn’t recommend this as your first star. Crashman Simulator offers a much smoother introduction to these mechanics. But hey, if you\'re up for the challenge, who am I to stop you?","Star1_Description":"Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: P.Vortex, E.Cable;  \\nPretty much a free star. It is placed on the bottom left of the fourth ice pit at the start of the level. Use P. Vortex or E.Cable to safely drop down if needed, but you just need to drop down while holding left to grab it.","Star2_Description":"Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: R.Bike; \\nAnother free star. It is placed inside the Red Sniper Joe on the bottom of the vertical section. You can either slide from the 1-tile gap above or use Rush Bike to navigate over the magma below.","Star3_Description":"Difficulty: 3/10; \\nStar Type: Button (4 Second); \\nRecommended Weapon: M.Beam;\\nThe button is located at the top of the vertical section just below the teleporter next to the blue orb, while the star is on the far left. Use Magnet Beam to create a long platform to make it easier to press it and grab the star. be careful not to hit the spike below or you have to restart from the bottom again.","Star4_Description":" Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: M.Beam, E.Cable; \\nThis star is located at the top of the second magma pit after the vertical section, the one with the green Sniper Joe. Use M.Beam or E.Cable to reach it.","Star5_Description":"Difficulty: 6/10; \\nStar Type: Normal; \\nRecommended Weapon: R.Jet, T.Blow, B.Wail, T.Shoe; \\nThis star is located on the right side of the spike in the last room where the Energy Element is located. It’s a bit complicated to get. In previous versions, you could clip through the top section of the room before the boss, but that’s been patched in the latest version.; \\nInstead, after beating the boss and going through the screen transition, stand still for a bit so the element locks onto your position, then slide to the platform below. From there, use Rush Jet to reach the far right area.;\\nFrom here you have two options: <br> 1. Jump and switch to T. Blow to gain enough momentum. <br> 2. Use B. Wail to become invisible, then use T. Shoe to climb up. When the invisibility is about to run out, use B. Wail again, and repeat with T. Shoe until you reach the star.","Youtube_Link_E1":"https://youtu.be/v1p2VsTq_OU","Youtube_Link_E2":"","Youtube_Link_E3":""},{"Id":2,"Stage_Name":"CrashMan Simulator","Stage_Creator":"boris225","Star_Creator":"Protty","Stage_Tier":1,"Stage_Entry":174,"Star_Count":5,"Stage_Description":"Crashman Simulator stands out from other levels in the competition due to its unique layout. Unlike traditional stages that feature multiple rooms and transitions, this level consists of a single, expansive space with no transitions. Because of this design, it is one of the few levels that bends the usual \\"one Silver Star per room\\" rule found in other stages.;\\nIf you\'re new to the challenge, this is the perfect place to get a feel for how Silver Stars work before tackling more difficult levels.","Star1_Description":"Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: R.Jet, E.Cable; \\nAt the very start of the level, you\'ll find this Silver Star hidden inside a wall to your left. However, you won\'t be able to collect it right away. To make it accessible, you must first defeat both Crashman Twin and Flashman. Once they’re taken care of, use Rush Jet or Electric Cable near the staircase to reach the star and claim your reward.","Star2_Description":"Difficulty: 3/10; \\nStar Type: Button (20 Second); \\nRecommended Weapon: R.Bike, M.Beam;\\nYour ability to handle Rush Bike will determine whether this challenge is a breeze or a tough ordeal.;\\nAfter defeating all the bosses, head to the top-right corner of the level, where you\'ll find the button. To reach it, use either Rush Coil or Magnet Beam. Once activated, switch to Rush Bike immediately and navigate your way to the top-left corner of the level as quickly as possible.;\\nJust like with the button, you\'ll need Rush Coil or Magnet Beam to make the final jump and grab the Silver Star.","Star3_Description":"Difficulty: 4/10; \\nStar Type: Button (2 second); \\nRecommended Weapon: R.Coil; \\nThis challenge tests both your timing and precision. The button is located on the left wall near the transition to the water section, while the star is just to its right.;\\nTo complete this challenge, place a Rush Coil near the button before activating it. The moment you press the button, quickly jump onto Rush Coil and move as fast as possible to the other side to reach the star before time runs out.","Star4_Description":"Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: R.Jet, E.Cable; \\nThis star is similar to the first one. You must defeat all the bosses before attempting to collect it. Once they’re taken care of, return to the ladder. However, instead of going left, use Rush Jet or the Electric Cable to reach the right side this time.","Star5_Description":"Difficulty: 2/10; \\nStar Type: Button (7 second); \\nRecommended Weapon: R.Bike, R.Coil, M.Beam; \\nThis button is located in the water section, next to a wall with a two-tile gap. The star itself is positioned above the exit of the water section on the right.;\\nAfter pressing the button, immediately switch to Rush Bike and ride to the right. If you hold the dash button (slide button by default) and jump at the right moment, you can just barely clear the two-tile gap in the wall and reach the other side. From there, continue heading right until you reach the exit. Once at the exit, switch to either Magnet Beam or Rush Coil to reach the star at the top.","Youtube_Link_E1":"https://youtu.be/M2BZs_ga7Vk","Youtube_Link_E2":"","Youtube_Link_E3":""},{"Id":3,"Stage_Name":"Glitched up Beta","Stage_Creator":"Garion / Garebel / ShatteredCards","Star_Creator":"Dragon Fogel","Stage_Tier":1,"Stage_Entry":173,"Star_Count":5,"Stage_Description":"Glitch Up Beta is another great starting point for players looking to get familiar with the Silver Star challenge. Most of its stars are easy to collect and are well telegraphed throughout the level. In fact, it introduces many recurring patterns that players will encounter in future stages, such as a death trap, a speed challenge, stars hidden in plain sight, and those tucked beneath platforms above a pit.;\\nIf you can clear all of these stars, you\'ll be well-equipped to handle the majority of Silver Stars you encounter in later levels.","Star1_Description":"Difficulty: 2/10; \\nStar Type: Normal; \\nRecommended Weapon: M.Beam; \\nThis Silver Star is located in the upper area of the second room, inside the U-shaped 0 tile formation. From your starting point, head to the next room on the right and jump over four 0 tiles. Then, use the Magnet Beam to create a platform, allowing you to access the U-shaped 0 tile formation from above. Be careful not to touch any of the 0 tiles, as they will instantly kill you on contact.","Star2_Description":"Difficulty: 2/10; \\nStar Type: Button (3 Second); \\nRecommended Weapon: R.Bike;\\nThe button is located on the second floor, on a red tile above a 0 tile near the ladder, while the star itself is on the second red tile on the right side. To reach it, use the Rush Bike on the ladder and dash to the right as fast as possible until you’re stopped by the platform ahead. Immediately jump and navigate through the obstacles until you reach the 1-tile gap above the red tile, then drop down to collect the star.","Star3_Description":"Difficulty: 2/10; \\nStar Type: Button (4 Second); \\nRecommended Weapon: M.Beam, R.Bike; \\nThe button is located on the third floor, on the ceiling of the second red and white pillar, while the star is positioned in the middle of the first pillar to its left.;\\nYou can use Rush Coil combined with Tornado Blow to reach the button, but it\'s easier to simply use the Magnet Beam. Once you activate the button, move to the left screen as quickly as possible, either by using Rush Bike or the Electric Cable on the ceiling above. When you reach the second pillar, use R.Coil or M.Beam again to reach and collect the star, or just drop down if you use E.Cable.","Star4_Description":"Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: M.Beam; \\nThe fourth star is located on the fourth floor in the first room with the Met plush sign symbol in the background. Once you spot it, use the Magnet Beam to reach the star on top of the plush sign.","Star5_Description":"Difficulty: 1/10; \\nStar Type: Normal; \\nRecommended Weapon: E.Cable, B.Wail, M.Beam;\\nThe last star in this level is located on the fifth floor, beneath the fifth floating platform from the left.;\\nYou can use the Electric Cable and Banshee Wail to slowly drop down and grab it, or use the Magnet Beam on the ladder as soon as you reach the fifth floor for a safer approach.","Youtube_Link_E1":"https://youtu.be/lX0butBzI8c","Youtube_Link_E2":"","Youtube_Link_E3":""},{"Id":4,"Stage_Name":"You Don\'t Know the Drill","Stage_Creator":"Papyrus Semi","Star_Creator":"snoruntpyro","Stage_Tier":1,"Stage_Entry":172,"Star_Count":5,"Stage_Description":"Despite its many secret rooms, You Don\'t Know the Drill doesn’t use them to hide its Silver Stars. Instead, most of the stars are placed in plain sight.;\\nThis is the first level that will truly test your problem-solving skills—if you don’t know what to do, it’s easy to feel lost. Many of its stars and buttons are cleverly placed, and the final star, in particular, was one of the biggest mysteries for many players when Silver Stars were first introduced. Once you figure out the solutions, the challenge becomes more manageable, but it remains one of the toughest skill checks you’ll face on your journey.;\\nDon\'t be shy to skip the last star if you don\'t know the solution. Some of the future star could help you figure out.","Star1_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/qhlmwu2QwUI","Youtube_Link_E2":"","Youtube_Link_E3":""},{"Id":5,"Stage_Name":"Not Delivering On Promises","Stage_Creator":"Giga Otomia","Star_Creator":"MystSvin","Stage_Tier":1,"Stage_Entry":171,"Star_Count":5,"Stage_Description":"","Star1_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/PH-0DYwvoYU","Youtube_Link_E2":"","Youtube_Link_E3":""},{"Id":6,"Stage_Name":"A piece of cake, but with aesthetics","Stage_Creator":"Nixbg","Star_Creator":"Flashman85","Stage_Tier":1,"Stage_Entry":170,"Star_Count":5,"Stage_Description":"","Star1_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/ZJQv4zOFvVQ","Youtube_Link_E2":"https://youtu.be/N-afwpHzrQs","Youtube_Link_E3":""},{"Id":7,"Stage_Name":"The Cave Level That Exists ","Stage_Creator":"BigRockerEnding","Star_Creator":"GniefFiar","Stage_Tier":1,"Stage_Entry":169,"Star_Count":5,"Stage_Description":"","Star1_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/ZB7zwRHoriU","Youtube_Link_E2":"","Youtube_Link_E3":""},{"Id":8,"Stage_Name":"Cycle Facility","Stage_Creator":"Sharker da Shark","Star_Creator":"PhazonMotherBrain","Stage_Tier":1,"Stage_Entry":168,"Star_Count":5,"Stage_Description":"","Star1_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/ETGtJnGnJvQ","Youtube_Link_E2":"https://youtu.be/lwvhcIcKzJk","Youtube_Link_E3":""},{"Id":9,"Stage_Name":"The Level Equivalent of An Old Man Rambling at You","Stage_Creator":"Zunzet","Star_Creator":"Flashman85","Stage_Tier":1,"Stage_Entry":167,"Star_Count":5,"Stage_Description":"","Star1_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/oJHBT8WR-G4","Youtube_Link_E2":"https://youtu.be/8UphKsc_8NI","Youtube_Link_E3":""},{"Id":10,"Stage_Name":"Ultimate Level","Stage_Creator":"SM3000L","Star_Creator":"Uni","Stage_Tier":1,"Stage_Entry":166,"Star_Count":5,"Stage_Description":"","Star1_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star2_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star3_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Star4_Description":"Difficulty: 0/10; \\nStar Type: Normal; \\nRecommended Weapon: ; \\nDescription","Star5_Description":"Difficulty: 0/10; \\nStar Type: Button; \\nRecommended Weapon: ; \\nDescription","Youtube_Link_E1":"https://youtu.be/q0mpTXrDMgA","Youtube_Link_E2":"","Youtube_Link_E3":""}]')}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var n=o[e]={exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,a,n)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,a,n]=e[u],s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,a,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={silverstar:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var u=l(r)}for(t&&t(o);c<i.length;c++)n=i[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},o=self.webpackChunkmagmml3_archive=self.webpackChunkmagmml3_archive||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=r.O(void 0,["vendors"],(()=>r("./src/js/silverstar.js")));a=r.O(a)})();