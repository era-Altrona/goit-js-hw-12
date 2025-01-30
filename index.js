import{S as F,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const L="48362167-980900dd24403cbb12294ed40",w="https://pixabay.com/api/";function h(e){const s=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${w}?${s}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function p(e){return e.map(({webformatURL:s,largeImageURL:i,tags:l,likes:t,views:r,comments:n,downloads:b})=>`<li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img class="gallery-image" src="${s}" alt="${l}"/>
            </a>
                <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${t}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${r}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${n}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${b}</p>
                    </li>
                </ul>
            
    </li>`).join("")}const u=document.getElementById("search-form"),y=document.querySelector(".gallery"),c=document.querySelector(".loader"),o=document.querySelector(".btn");c.style.display="none";o.style.display="none";let d="",m=1,k=15,f=0;const g=new F(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function E(e){y.insertAdjacentHTML("beforeend",p(e)),g.refresh()}o.addEventListener("click",async()=>{m+=1,o.disabled=!0,c.style.display="inline-block";try{const e=await h(d,m),s=e.hits;f=e.totalHits,e.hits.length>0&&(y.insertAdjacentHTML("beforeend",p(e.hits)),g.refresh()),e.hits.length===0?(o.style.display="none",a.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):o.style.display="inline-block";const i=document.querySelector(".gallery-item");if(i){const{height:l}=i.getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"})}}catch(e){a.error({position:"topRight",message:e.message})}finally{o.disabled=!1,c.style.display="none"}});u.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements.query.value.trim(),m=1,y.innerHTML="",!d){a.show({backgroundColor:"#EF4040",message:"Enter the data for the search!",messageColor:"#FFFFFF",position:"topRight"});return}c.style.display="inline-block";try{const s=await h(d,m);f=s.totalHits,s.hits.length===0?a.show({title:"",backgroundColor:"#EF4040",messageColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):(E(s.hits),f>k?o.style.display="inline-block":o.style.display="none")}catch(s){a.error({position:"topRight",message:s.message})}finally{c.style.display="none",u.reset()}});
//# sourceMappingURL=index.js.map
