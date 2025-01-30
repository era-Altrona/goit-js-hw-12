import{S as b,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const w="48362167-980900dd24403cbb12294ed40",L="https://pixabay.com/api/";function f(r,t){const i=new URLSearchParams({key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});return fetch(`${L}?${i}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function E(r){return r.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:s,comments:l,downloads:F})=>`<li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img class="gallery-image" src="${t}" alt="${o}"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${s}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${l}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${F}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const u=document.getElementById("search-form"),p=document.querySelector(".gallery"),m=document.querySelector(".loader"),a=document.querySelector(".btn");m.style.display="none";a.style.display="none";let d="",c=1,h=15,y=0;const S=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(r){p.insertAdjacentHTML("beforeend",E(r)),S.refresh()}a.addEventListener("click",async()=>{c+=1,a.disabled=!0,m.style.display="inline-block";try{const r=await f(d,c),t=r.hits;y=r.totalHits,g(t);const i=document.querySelector(".gallery-item");if(i){const{height:o}=i.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}Math.ceil(y/h)===c&&(a.style.display="none",n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}))}catch(r){n.error({position:"topRight",message:r.message})}finally{a.disabled=!1,m.style.display="none"}});u.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.target.elements.query.value.trim(),c=1,p.innerHTML="",!d){n.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}try{const t=await f(d,c);if(y=t.totalHits,t.hits.length===0){n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),a.style.display="none";return}g(t.hits),y>h?a.style.display="inline-block":a.style.display="none"}catch(t){n.error({position:"topRight",message:t.message})}finally{m.style.display="none",u.reset()}});
//# sourceMappingURL=index.js.map
