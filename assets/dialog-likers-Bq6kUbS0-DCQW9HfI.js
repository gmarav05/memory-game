const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CuFCxNYP.js","assets/index-BiztjA6Q.css"])))=>i.map(i=>d[i]);
import{M as k,D as y,J as f,B as g,q as b,F as v,y as $,_ as w}from"./index-CuFCxNYP.js";const m=(t,e=m,o=e.f||(e.f=["assets/zap-utils-BiKkJPt6.js","assets/nostr-service-CA0Qx4nJ.js","assets/nostr-login-service-D2FmscPI.js","assets/preload-helper-D7HrI6pR.js","assets/utils--bxLbhGF.js"]))=>t.map(r=>o[r]);function P(t="light"){const e=t==="dark";return`
    .likers-dialog-content {
      padding: 0;
      max-height: 60vh;
      overflow-y: auto;
    }

    .likers-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .like-entry {
      display: flex;
      align-items: center;
      padding: 12px;
      border-radius: 8px;
      background: ${e?"#2a2a2a":"#f8f9fa"};
      border: 1px solid ${e?"#3a3a3a":"#e9ecef"};
      transition: background-color 0.2s ease;
    }

    .like-entry:hover {
      background: ${e?"#3a3a3a":"#e9ecef"};
    }

    .like-author-info {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    .like-author-picture {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    .like-author-picture-default {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${e?"#3a3a3a":"#e9ecef"};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }

    .like-author-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }

    .like-author-link {
      color: ${e?"#ffffff":"#000000"};
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      transition: color 0.2s ease;
    }

    .like-author-link:hover {
      color: ${e?"#4a9eff":"#1877f2"};
      text-decoration: underline;
    }

    .like-date {
      color: ${e?"#b0b0b0":"#65676b"};
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .like-status {
      font-weight: 500;
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 4px;
    }

    .like-status.liked {
      color: ${e?"#4a9eff":"#1877f2"};
      background: ${e?"rgba(74, 158, 255, 0.1)":"rgba(24, 119, 242, 0.1)"};
    }

    .like-status.disliked {
      color: #d32f2f;
      background: rgba(211, 47, 47, 0.1);
    }

    .no-likes {
      text-align: center;
      color: ${e?"#b0b0b0":"#65676b"};
      font-size: 14px;
      padding: 40px 20px;
    }

    /* Skeleton loading states */
    .skeleton-entry {
      opacity: 0.7;
    }

    .skeleton-picture {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(90deg, 
        ${e?"#3a3a3a":"#f0f0f0"} 25%, 
        ${e?"#4a4a4a":"#e0e0e0"} 50%, 
        ${e?"#3a3a3a":"#f0f0f0"} 75%
      );
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      flex-shrink: 0;
    }

    .skeleton-name {
      width: 120px;
      height: 14px;
      background: linear-gradient(90deg, 
        ${e?"#3a3a3a":"#f0f0f0"} 25%, 
        ${e?"#4a4a4a":"#e0e0e0"} 50%, 
        ${e?"#3a3a3a":"#f0f0f0"} 75%
      );
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 2px;
    }

    @keyframes skeleton-loading {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    /* Responsive */
    @media (max-width: 480px) {
      .likers-dialog-content {
        max-height: 70vh;
      }

      .like-entry {
        padding: 10px;
      }

      .like-author-picture,
      .like-author-picture-default,
      .skeleton-picture {
        width: 36px;
        height: 36px;
      }

      .like-author-link {
        font-size: 13px;
      }

      .like-date {
        font-size: 11px;
      }
    }

    /* Scrollbar styling */
    .likers-dialog-content::-webkit-scrollbar {
      width: 6px;
    }

    .likers-dialog-content::-webkit-scrollbar-track {
      background: ${e?"#2a2a2a":"#f1f1f1"};
      border-radius: 3px;
    }

    .likers-dialog-content::-webkit-scrollbar-thumb {
      background: ${e?"#555":"#c1c1c1"};
      border-radius: 3px;
    }

    .likers-dialog-content::-webkit-scrollbar-thumb:hover {
      background: ${e?"#777":"#a8a8a8"};
    }
  `}const N=(t="light")=>{document.querySelectorAll("style[data-likers-dialog-styles]").forEach(o=>o.remove());const e=document.createElement("style");e.setAttribute("data-likers-dialog-styles","true"),e.textContent=P(t),document.head.appendChild(e)};function x(t,e){const o=g(t.authorName||"Unknown liker"),r=`https://njump.me/${t.authorNpub||k(t.authorPubkey)}`,n=v(t.authorPicture||"")&&t.authorPicture||"",i=n?`<img src="${n}" alt="${o}" class="like-author-picture" />`:'<div class="like-author-picture-default">👤</div>',s=t.content==="-",a=s?"Disliked":"Liked",l=s?"disliked":"liked";return`
    <div class="like-entry" data-like-index="${e}" data-author-pubkey="${t.authorPubkey}">
      <div class="like-author-info">
        ${i}
        <div class="like-author-details">
          <a href="${r}" target="_blank" rel="noopener noreferrer" class="like-author-link">
            ${o}
          </a>
          <div class="like-date">
            ${b(Math.floor(t.date.getTime()/1e3))}
            <span class="like-status ${l}">${a}</span>
          </div>
        </div>
      </div>
    </div>
  `}function L(t,e,o){const r=t.content==="-",n=r?"Disliked":"Liked",i=r?"disliked":"liked";return`
    <div class="like-entry skeleton-entry" data-like-index="${o}" data-author-pubkey="${t.authorPubkey}">
      <div class="like-author-info">
        <div class="skeleton-picture"></div>
        <div class="like-author-details">
          <div class="like-author-link skeleton-name">
            ${g(e)}
          </div>
          <div class="like-date">
            ${b(Math.floor(t.date.getTime()/1e3))}
            <span class="like-status ${i}">${n}</span>
          </div>
        </div>
      </div>
    </div>
  `}async function S(t){var e;const{likeDetails:o,theme:r="light"}=t;N(r),customElements.get("dialog-component")||await customElements.whenDefined("dialog-component");const n=document.createElement("dialog-component");n.setAttribute("header","Likers"),t.theme&&n.setAttribute("data-theme",t.theme);const i=await D(o);n.innerHTML=i,n.showModal();const s=n.querySelector(".nostr-base-dialog")||((e=n.shadowRoot)==null?void 0:e.querySelector(".nostr-base-dialog"))||document.body.querySelector(".nostr-base-dialog");if(!s)throw console.error("[openLikersDialog] Failed to find dialog element after showModal()"),new Error("Dialog element not found. The dialog may not have been created properly.");const a=s;return a&&o.length>0&&_(a,o),n}async function D(t){if(t.length===0)return`
      <div class="likers-dialog-content">
        <div class="likers-list">
          <div class="no-likes">No likes yet</div>
        </div>
      </div>
    `;const e=t.map(o=>k(o.authorPubkey));return`
    <div class="likers-dialog-content">
      <div class="likers-list">
        ${t.map((o,r)=>L(o,e[r],r)).join("")}
      </div>
    </div>
  `}async function _(t,e){const o=t.querySelector(".likers-list");if(!o)return;const r=[...new Set(e.map(n=>n.authorPubkey))];console.log("Nostr-Components: Likers dialog: Fetching profiles for",r.length,"unique authors");try{const n=await y(r),i=new Map;n.forEach(a=>{i.set(a.id,a.profile)});const s=new Map;r.forEach(a=>{s.set(a,k(a))});for(let a=0;a<e.length;a++){const l=e[a],d=i.get(l.authorPubkey),c=s.get(l.authorPubkey)||l.authorPubkey;let h;if(d){const u=f(d);h={...l,authorName:u.display_name||u.name||c,authorPicture:u.picture,authorNpub:c}}else h={...l,authorName:c,authorNpub:c};const p=o.querySelector(`[data-like-index="${a}"]`);if(p){const u=x(h,a);p.outerHTML=u}}console.log("Nostr-Components: Likers dialog: Progressive enhancement completed for",e.length,"like entries")}catch(n){console.error("Nostr-Components: Likers dialog: Error in batched profile enhancement",n),console.log("Nostr-Components: Likers dialog: Falling back to individual profile fetching"),await E(t,e)}}async function E(t,e){const o=t.querySelector(".likers-list");if(!o)return;const r=new Map,n=e.map(async(i,s)=>{if(r.has(i.authorPubkey)){const a=r.get(i.authorPubkey);return{index:s,enhanced:{...i,authorName:a.authorName,authorPicture:a.authorPicture,authorNpub:a.authorNpub}}}try{const{getProfileMetadata:a}=await $(async()=>{const{getProfileMetadata:p}=await w(()=>import("./index-CuFCxNYP.js").then(u=>u.z),__vite__mapDeps([0,1]));return{getProfileMetadata:p}},m([0,1,2,3,4])),l=await a(i.authorPubkey),d=f(l),c=k(i.authorPubkey),h={...i,authorName:d.display_name||d.name||c,authorPicture:d.picture,authorNpub:c};return r.set(i.authorPubkey,h),{index:s,enhanced:h}}catch(a){console.error("Nostr-Components: Likers dialog: Error fetching profile for",i.authorPubkey,a);const l=k(i.authorPubkey),d={...i,authorName:l,authorNpub:l};return r.set(i.authorPubkey,d),{index:s,enhanced:d}}});for(const i of n)try{const{index:s,enhanced:a}=await i,l=o.querySelector(`[data-like-index="${s}"]`);if(l){const d=x(a,s);l.outerHTML=d}}catch(s){console.error("Nostr-Components: Likers dialog: Error processing profile enhancement",s)}}export{N as injectLikersDialogStyles,S as openLikersDialog};
