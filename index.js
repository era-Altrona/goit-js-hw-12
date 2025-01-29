import{S as L,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="48362167-980900dd24403cbb12294ed40",k="https://pixabay.com/api/";function p(r){const t=new URLSearchParams({key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${k}?${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function h(r){return r.map(({webformatURL:t,largeImageURL:o,tags:d,likes:e,views:s,comments:l,downloads:F})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img class="gallery-image" src="${t}" alt="${d}"/>
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
            
    </li>`).join("")}const u=document.getElementById("search-form"),y=document.querySelector(".gallery"),c=document.querySelector(".loader"),i=document.querySelector(".btn");c.style.display="none";i.style.display="none";let m="",a=1,g=15,f=0;const b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function E(r){y.insertAdjacentHTML("beforeend",h(r)),b.refresh()}i.addEventListener("click",async()=>{a+=1,i.disabled=!0,c.style.display="inline-block";try{const r=await p(m,a);f=r.totalHits,r.hits.length>0&&(y.insertAdjacentHTML("beforeend",h(r.hits)),b.refresh()),a*g>=f?(i.style.display="none",n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):i.style.display="inline-block";const t=document.querySelector(".gallery-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch(r){n.error({position:"topRight",message:r.message})}finally{i.disabled=!1,c.style.display="none"}});u.addEventListener("submit",async r=>{if(r.preventDefault(),m=r.target.elements.query.value.trim(),y.innerHTML="",a=1,!m){n.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}c.style.display="inline-block";try{const t=await p(m,a);f=t.totalHits,t.hits.length===0?n.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):(E(t.hits),f>g?i.style.display="inline-block":i.style.display="none")}catch(t){n.error({position:"topRight",message:t.message})}finally{c.style.display="none",u.reset()}});
//# sourceMappingURL=index.js.map
