var b=Object.defineProperty;var j=(i,e,s)=>e in i?b(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var o=(i,e,s)=>(j(i,typeof e!="symbol"?e+"":e,s),s);import{i as f,d as v,e as k,r as p,o as d,c as u,w as C,f as M}from"./app.js";const x={__name:"MainApp",setup(i){const e=f("http"),s=f("state");async function g(a){const{profile:t}=a;t.loading=!0;const n=await e("/gegevens/profile.json");if(!n.ok)throw new Error("Could not fetch club info.");const r=await n.json(),{club:c}=r;Object.assign(a.club,{...c,logo:`https://zweefapp.s3.amazonaws.com/media/${c.logo}`,startingMethods:["lier","sleep","zelf","tmg"],days:c.dag_types.split(","),pilots:c.default_vliegers.split(","),groups:c.groups_aanmeld.split(","),groupFilters:c.groups_filter.split(",")}),Object.assign(t,r.profile,r.gegevens),Object.assign(t,{bestanden:r.bestanden}),t.loading=!1}async function _(a){const t=await e("/flights/base_data.json",{});if(!t.ok)throw new Error("Could not fetch base info.");const n=await t.json();a.base=n}class w{constructor(t){o(this,"aanmeldingen",[]);o(this,"days",[]);o(this,"mijn_aanmeldingen",[]);o(this,"mijn_diensten",[]);o(this,"notities",[]);o(this,"totals",[]);Object.assign(this,t)}}async function m(a){const t=await e("/days.json");if(!t.ok)throw new Error("Could not fetch base info.");const n=await t.json();a.events=new w(n)}const l=v({ready:!1,loading:!1});async function h(){Promise.all([g(s),_(s),m(s)])}async function y(){l.loading=!0,await h(),l.loading=!1,l.ready=!0}return k(y),(a,t)=>{const n=p("router-view"),r=p("MainLayout");return d(),u(r,null,{default:C(()=>[l.ready?(d(),u(n,{key:0})):M("",!0)]),_:1})}}};export{x as default};
