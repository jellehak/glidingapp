import{u as oe,i as _,d as ne,j as D,k as b,e as ae,r as o,o as k,c as C,w as t,l as le,a as e,m as de,g as l,b as d,t as a,n as se,q as ce,f as L}from"./app-ac235d82.js";const ie={__name:"index",props:{id:String},setup(u){const N=u,T=oe(),s=_("$t");_("api");const h=_("service"),w=_("state"),i=ne({dialogs:{},items:[],loading:null,form:{}}),r=D("open");D(i.dialogs);const p=D(i.loading),v=b(()=>le("status")(w.events.days)),m=b(()=>({open:[...v.value.open||[]],closed:[...v.value.locked||[],...v.value.closed||[]]})),A=b(()=>w.events.days.find(g=>String(g.dag_id)===N.id)),M=async()=>{i.loading=!0,await h.events.getAll(),i.loading=!1};ae(()=>{M()});function U(g,{item:c}){T.push(`/events/${c.raw.dag_id}`)}return(g,c)=>{const V=o("v-btn"),F=o("BtnToggle"),G=o("v-spacer"),H=o("EventList"),x=o("v-card-title"),R=o("DateTimeAgo"),q=o("v-card-subtitle"),B=o("v-card-text"),f=o("Button"),P=o("v-card-actions"),O=o("Card"),z=o("DataView"),$=o("v-card"),y=o("v-col"),E=o("v-divider"),I=o("DayForm"),J=o("DialogCardActions"),K=o("AppDialogCard"),Q=o("AppEventService"),W=o("AppDialog"),S=o("v-row"),j=o("PageContainer"),X=o("EventPageHandler"),Y=o("PageLoader");return k(),C(Y,{loading:p.value},{default:t(()=>[u.id?L("",!0):(k(),C(j,{key:0,fluid:""},{default:t(()=>[e(de),e(S,null,{default:t(()=>[e(y,{cols:12,md:8},{default:t(()=>[e($,null,{default:t(()=>[e(z,{value:"table",supports:["table","json"],items:l(m)[r.value],loading:p.value},{actions:t(()=>[e(F,{color:"primary",modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=n=>r.value=n)},{default:t(()=>[e(V,{value:"open"},{default:t(()=>{var n;return[d(a(l(s)("open"))+" ("+a(((n=l(m).open)==null?void 0:n.length)||0)+")",1)]}),_:1}),e(V,{value:"closed"},{default:t(()=>{var n;return[d(a(l(s)("closed"))+" ("+a(((n=l(m).closed)==null?void 0:n.length)||0)+")",1)]}),_:1})]),_:1},8,["modelValue"]),e(G)]),table:t(({items:n})=>[e(H,{items:n,"onClick:row":U,loading:p.value,"sort-by":[{key:"datum",order:r.value==="open"?"asc":"desc"}]},null,8,["items","loading","sort-by"])]),grid:t(({item:n})=>[e(O,null,{default:t(()=>[e(x,null,{default:t(()=>[d(a(n.datum)+" "+a(n.briefing_tijd),1)]),_:2},1024),e(q,null,{default:t(()=>[e(R,{value:n.datum},null,8,["value"]),d(" "+a(n.vertrek_vliegveld),1)]),_:2},1024),e(B,{flex:""},{default:t(()=>[d(a(n.type_dag||"-"),1)]),_:2},1024),e(P,null,{default:t(()=>[e(f,{to:`/events/${n.dag_id}`},{default:t(()=>[d(a(l(s)("Bekijk")),1)]),_:2},1032,["to"]),e(f,{variant:"text",onClick:c[1]||(c[1]=se(()=>{},["stop"])),to:`/start/${n.dag_id}`},{default:t(()=>[d(a(l(s)("Manage")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]),_:1},8,["items","loading"])]),_:1})]),_:1}),e(y,{cols:12,md:4},{default:t(()=>[e(S,null,{default:t(()=>[e(y,{cols:12},{default:t(()=>[e($,null,{default:t(()=>[e(x,null,{default:t(()=>[d(a(l(s)("Acties")),1)]),_:1}),e(E),e(P,null,{default:t(()=>[e(W,null,{activator:t(({props:n})=>[e(f,ce({color:"primary"},n),{default:t(()=>[d(a(l(s)("Nieuwe dag")),1)]),_:2},1040)]),default:t(({close:n})=>[e(Q,{form:l(A),onDone:n},{default:t(({submitting:Z,form:ee,onUpdate:te})=>[e(K,null,{title:t(()=>[d(a(l(s)("Nieuwe dag")),1)]),default:t(()=>[e(B,null,{default:t(()=>[e(I,{modelValue:ee,"onUpdate:modelValue":te},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(E),e(J,{submitting:Z},null,8,["submitting"])]),_:2},1024)]),_:2},1032,["form","onDone"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})),u.id?(k(),C(j,{key:1,fluid:""},{default:t(()=>[e(X,{event:l(A),id:u.id},null,8,["event","id"])]),_:1})):L("",!0)]),_:1},8,["loading"])}}};export{ie as default};
