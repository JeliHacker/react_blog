(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),s=(a(46),a(11)),o=a(1),m=a(3),u=a(34),i=a.n(u)()({projectId:"tac1jag3",dataset:"production"});function g(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){i.fetch('*[_type == "post"]{\n        title,\n        slug,\n        mainImage{\n          asset->{\n            _id,\n            url\n          }\n        }\n      }').then(function(e){return r(e)}).catch(console.error)},[]),l.a.createElement("div",{className:"bg-green-100 min-h-screen p-12"},l.a.createElement("div",{className:"container mx-auto"},l.a.createElement("h2",{className:"text-5xl flex justify-center"},"Blog Posts!"),l.a.createElement("h3",{className:"text-lg text-gray-600 flex justify-center mb-12"},"Welcome to my blog posts page!"),l.a.createElement("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8"},a&&a.map(function(e,t){return l.a.createElement(s.b,{to:"/"+e.slug.current,key:e.slug.current},l.a.createElement("span",{className:"block bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-800",key:t},l.a.createElement("img",{className:"w-full h-full rounded-r object-cover absolute",src:e.mainImage.asset.url,alt:"main hero image for blog post"}),l.a.createElement("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4"},l.a.createElement("h2",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded"},e.title))))}))))}var d=a(36),f=a.n(d),p=a(35),b=a.n(p),h=f()(i);function E(e){return h.image(e)}function x(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(o.o)().slug;return Object(n.useEffect)(function(){i.fetch('*[slug.current == $slug]{\n        title,\n        slug,\n        mainImage{\n          asset->{\n            _id,\n            url\n          }\n        },\n        body,\n        "name": author->name,\n        "authorImage": author->image\n      }',{slug:c}).then(function(e){return r(e[0])}).catch(console.error)},[c]),a?l.a.createElement("div",{className:"bg-gray-200 min-h-screen p-12"},l.a.createElement("div",{className:"container shawdow-lg mx-auto bg-green-100 rounded-lg"},l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"absolute h-full w-full flex items-center justify-center p-8"},l.a.createElement("div",{className:"bg-white bg-opacity-75 rounded p-12"},l.a.createElement("h2",{className:"text-3xl lg:text-6xl mb-4"},a.title),l.a.createElement("div",{className:"flex justify-center text-gray-800"},l.a.createElement("img",{className:"w-10 h-10 rounded-full",src:E(a.authorImage).width(100).url(),alt:"Author is Eli"}),l.a.createElement("h4",{className:"flex items-center pl-2 text-2xl"},a.name)))),l.a.createElement("img",{className:"w-full object-cover rounded-t",style:{height:"400px"},src:E(a.mainImage).width(200).url(),alt:"main image of post"})),l.a.createElement("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"},l.a.createElement(b.a,{blocks:a.body,projectId:i.clientConfig.projectId,dataset:i.clientConfig.dataset})))):l.a.createElement("div",null,"Loading...")}var v=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{element:l.a.createElement(g,null),path:"/",exact:!0}),l.a.createElement(o.a,{element:l.a.createElement(x,null),path:"/:slug"}))))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null))),y()},37:function(e,t,a){e.exports=a(114)},46:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.dfc6bf23.chunk.js.map