import{S as s,i as t,s as a,e,a as r,t as l,b as o,f as c,c as n,g as h,d as i,h as f,j as m,k as u,l as d,q as v,n as g,m as p}from"./client.287fdfc8.js";import{t as E}from"./tsv.6a7ced64.js";import{s as b}from"./helpers.ce81ccb7.js";function A(s,t,a){const e=s.slice();return e[2]=t[a],e}function I(s,t,a){const e=s.slice();return e[2]=t[a],e}function N(s){let t,a,v,g,p,E,A,I,N,$,w,x=s[2].name+"",j=s[2].otherName?`  (${s[2].otherName})`:"";return{c(){t=e("div"),a=e("a"),v=e("img"),E=r(),A=l(x),I=r(),N=l(j),w=r(),this.h()},l(s){t=o(s,"DIV",{class:!0});var e=c(t);a=o(e,"A",{href:!0});var r=c(a);v=o(r,"IMG",{class:!0,src:!0,alt:!0}),E=n(r),A=h(r,x),I=n(r),N=h(r,j),r.forEach(i),w=n(e),e.forEach(i),this.h()},h(){f(v,"class","bio-photo svelte-1uzmr0d"),v.src!==(g="img/bios/"+s[2].username+".jpeg")&&f(v,"src",g),f(v,"alt",p=s[2].name),f(a,"href",$="artists/"+b(s[2].name)),f(t,"class","bio-box svelte-1uzmr0d")},m(s,e){m(s,t,e),u(t,a),u(a,v),u(a,E),u(a,A),u(a,I),u(a,N),u(t,w)},p(s,t){1&t&&v.src!==(g="img/bios/"+s[2].username+".jpeg")&&f(v,"src",g),1&t&&p!==(p=s[2].name)&&f(v,"alt",p),1&t&&x!==(x=s[2].name+"")&&d(A,x),1&t&&j!==(j=s[2].otherName?`  (${s[2].otherName})`:"")&&d(N,j),1&t&&$!==($="artists/"+b(s[2].name))&&f(a,"href",$)},d(s){s&&i(t)}}}function $(s){let t,a,v,g,p,E,A,I=s[2].name+"",N=s[2].otherName?`  (${s[2].otherName})`:"";return{c(){t=e("li"),a=e("a"),v=l(I),g=r(),p=l(N),A=r(),this.h()},l(s){t=o(s,"LI",{});var e=c(t);a=o(e,"A",{href:!0});var r=c(a);v=h(r,I),g=n(r),p=h(r,N),r.forEach(i),A=n(e),e.forEach(i),this.h()},h(){f(a,"href",E="artists/"+b(s[2].name))},m(s,e){m(s,t,e),u(t,a),u(a,v),u(a,g),u(a,p),u(t,A)},p(s,t){1&t&&I!==(I=s[2].name+"")&&d(v,I),1&t&&N!==(N=s[2].otherName?`  (${s[2].otherName})`:"")&&d(p,N),1&t&&E!==(E="artists/"+b(s[2].name))&&f(a,"href",E)},d(s){s&&i(t)}}}function w(s){let t,a,d,E,b,w,x,j,D,V,M,R,y,z,C,S,F=s[0],G=[];for(let t=0;t<F.length;t+=1)G[t]=N(I(s,F,t));let H=s[0],L=[];for(let t=0;t<H.length;t+=1)L[t]=$(A(s,H,t));return{c(){t=r(),a=e("section"),d=e("div"),E=e("div"),b=e("h1"),w=l("Artists"),x=r(),j=e("h2"),D=l("MA/MFA Computational Arts 2020 - Goldsmiths"),V=r(),M=e("section"),R=e("div"),y=e("div"),z=e("div");for(let s=0;s<G.length;s+=1)G[s].c();C=r(),S=e("ul");for(let s=0;s<L.length;s+=1)L[s].c();this.h()},l(s){v('[data-svelte="svelte-1xemdmz"]',document.head).forEach(i),t=n(s),a=o(s,"SECTION",{class:!0});var e=c(a);d=o(e,"DIV",{class:!0});var r=c(d);E=o(r,"DIV",{class:!0});var l=c(E);b=o(l,"H1",{class:!0});var f=c(b);w=h(f,"Artists"),f.forEach(i),x=n(l),j=o(l,"H2",{class:!0});var m=c(j);D=h(m,"MA/MFA Computational Arts 2020 - Goldsmiths"),m.forEach(i),l.forEach(i),r.forEach(i),e.forEach(i),V=n(s),M=o(s,"SECTION",{class:!0});var u=c(M);R=o(u,"DIV",{class:!0});var g=c(R);y=o(g,"DIV",{class:!0});var p=c(y);z=o(p,"DIV",{class:!0});var A=c(z);for(let s=0;s<G.length;s+=1)G[s].l(A);A.forEach(i),C=n(p),S=o(p,"UL",{});var I=c(S);for(let s=0;s<L.length;s+=1)L[s].l(I);I.forEach(i),p.forEach(i),g.forEach(i),u.forEach(i),this.h()},h(){document.title="Final Show - 2020",f(b,"class","title"),f(j,"class","subtitle"),f(E,"class","container"),f(d,"class","hero-body"),f(a,"class","hero is-primary"),f(z,"class","bio-boxes svelte-1uzmr0d"),f(y,"class","content"),f(R,"class","container"),f(M,"class","section")},m(s,e){m(s,t,e),m(s,a,e),u(a,d),u(d,E),u(E,b),u(b,w),u(E,x),u(E,j),u(j,D),m(s,V,e),m(s,M,e),u(M,R),u(R,y),u(y,z);for(let s=0;s<G.length;s+=1)G[s].m(z,null);u(y,C),u(y,S);for(let s=0;s<L.length;s+=1)L[s].m(S,null)},p(s,[t]){if(1&t){let a;for(F=s[0],a=0;a<F.length;a+=1){const e=I(s,F,a);G[a]?G[a].p(e,t):(G[a]=N(e),G[a].c(),G[a].m(z,null))}for(;a<G.length;a+=1)G[a].d(1);G.length=F.length}if(1&t){let a;for(H=s[0],a=0;a<H.length;a+=1){const e=A(s,H,a);L[a]?L[a].p(e,t):(L[a]=$(e),L[a].c(),L[a].m(S,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=H.length}},i:g,o:g,d(s){s&&i(t),s&&i(a),s&&i(V),s&&i(M),p(G,s),p(L,s)}}}async function x({params:s}){return{artistsRows:await this.fetch("artists.tsv").then(s=>s.text())}}function j(s,t,a){let e,{artistsRows:r}=t;return s.$set=s=>{"artistsRows"in s&&a(1,r=s.artistsRows)},s.$$.update=()=>{2&s.$$.dirty&&a(0,e=E(r))},[e,r]}export default class extends s{constructor(s){super(),t(this,s,j,w,a,{artistsRows:1})}}export{x as preload};
