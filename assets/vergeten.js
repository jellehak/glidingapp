import{_ as a,r as t,o as r,c as l,w as _,a as p}from"./app.js";const i={methods:{ok(o){Object.assign(this.$state,o),console.log(this.$state);try{localStorage.access_token=o.access_token}catch{}this.$router.push("/")}}};function u(o,e,d,h,m,s){const n=t("LoginForm"),c=t("ModalLayout");return r(),l(c,null,{default:_(()=>[p(n,{onOk:s.ok,style:{width:"400px"}},null,8,["onOk"])]),_:1})}const f=a(i,[["render",u]]);export{f as default};
