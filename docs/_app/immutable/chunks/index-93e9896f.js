import"./index-74fc1a12.js";const $="/block";function b(r){const n=r-1;return n*n*n+1}function f(r,{delay:n=0,duration:e=400,easing:i=b,x:t=0,y:d=0,opacity:c=0}={}){const a=getComputedStyle(r),p=+a.opacity,m=a.transform==="none"?"":a.transform,g=p*(1-c);return{delay:n,duration:e,easing:i,css:(s,l)=>`
			transform: ${m} translate(${(1-s)*t}px, ${(1-s)*d}px);
			opacity: ${p-g*l}`}}function y(r,{delay:n=0,duration:e=400,easing:i=b}={}){const t=getComputedStyle(r),d=+t.opacity,c=parseFloat(t.height),a=parseFloat(t.paddingTop),p=parseFloat(t.paddingBottom),m=parseFloat(t.marginTop),g=parseFloat(t.marginBottom),s=parseFloat(t.borderTopWidth),l=parseFloat(t.borderBottomWidth);return{delay:n,duration:e,easing:i,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*d};height: ${o*c}px;padding-top: ${o*a}px;padding-bottom: ${o*p}px;margin-top: ${o*m}px;margin-bottom: ${o*g}px;border-top-width: ${o*s}px;border-bottom-width: ${o*l}px;`}}export{$ as b,f,y as s};
