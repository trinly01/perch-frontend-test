import{d as n,u as l,c as d,r as i,o as t,a as e,b as o,F as _,e as m,f as u,w as p,t as g}from"./index-1778efc5.js";const h={class:"p-4"},f={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl"},x=["src"],v={class:"text-xl fo''nt-bold"},C=n({__name:"Home",setup(w){const a=l(),r=d(()=>a.posts);return(b,k)=>{const c=i("router-link");return t(),e("div",h,[o("div",f,[(t(!0),e(_,null,m(r.value,s=>(t(),e("div",{key:s.id,class:"bg-white rounded-lg shadow-md p-4"},[u(c,{to:`/post/${s.id}`},{default:p(()=>[o("img",{src:`https://picsum.photos/id/${s.id}/200/300`,alt:"Post Image",class:"w-full h-48 object-cover mb-4"},null,8,x),o("h3",v,g(s.title),1)]),_:2},1032,["to"])]))),128))])])}}});export{C as default};
