(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),u=n.n(a),i=n(17),l=n.n(i),r=(n(25),n(7)),s=n(1),c=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Hello, welcome to my blog"))},o=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"About Me"))},m=function(){return u.a.createElement("h1",null,"404: Page not Found")},d=n(6),p=n.n(d),v=n(9),f=n(11),g=function(e){var t=e.articles;return u.a.createElement(u.a.Fragment,null,t.map((function(e,t){return u.a.createElement(r.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},u.a.createElement("h3",null,e.title),u.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},b=function(e){var t=e.comments;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return u.a.createElement("div",{className:"comment",key:t},u.a.createElement("h4",null,e.username),u.a.createElement("p",null,e.text))})))},h=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,i=function(){var e=Object(v.a)(p.a.mark((function e(){var n,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:u=e.sent,a(u);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",{id:"upvotes-section"},u.a.createElement("button",{onClick:function(){return i()}},"Add Upvote"),u.a.createElement("p",null,"This post has been upvoted ",n," times"))},E=function(e){var t=e.articleName,n=e.setArticleInfo,i=Object(a.useState)(""),l=Object(f.a)(i,2),r=l[0],s=l[1],c=Object(a.useState)(""),o=Object(f.a)(c,2),m=o[0],d=o[1],g=function(){var e=Object(v.a)(p.a.mark((function e(){var a,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:r,text:m}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:u=e.sent,n(u),s(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",{id:"add-comment-form"},u.a.createElement("h3",null,"Add a Comment"),u.a.createElement("label",null,"Name:",u.a.createElement("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)}})),u.a.createElement("label",null,"Comment:",u.a.createElement("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return d(e.target.value)}})),u.a.createElement("button",{onClick:function(){return g()}},"Add Comment"))},N=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.\n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,\n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut\n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at\n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.\n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,\n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut\n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at\n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.\n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,\n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut\n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at\n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus.\n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan\n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus\n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor\n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id\n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],q=function(e){var t=e.match.params.name,n=N.find((function(e){return e.name===t})),i=Object(a.useState)({upvotes:0,comments:[]}),l=Object(f.a)(i,2),r=l[0],s=l[1];if(Object(a.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),s(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return u.a.createElement(m,null);var c=N.filter((function(e){return e.name!==t}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,n.title),u.a.createElement(h,{articleName:t,upvotes:r.upvotes,setArticleInfo:s}),n.content.map((function(e,t){return u.a.createElement("p",{key:t},e)})),u.a.createElement(b,{comments:r.comments}),u.a.createElement(E,{articleName:t,setArticleInfo:s}),u.a.createElement("h3",null,"Other Articles:"),u.a.createElement(g,{articles:c}))},y=function(e){e.props;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Articles"),u.a.createElement(g,{articles:N}))},w=function(){return u.a.createElement("nav",null,u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(r.b,{to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(r.b,{to:"/about"},"About")),u.a.createElement("li",null,u.a.createElement(r.b,{to:"/articles-list-page"},"Articles"))))};n(32);var A=function(){return u.a.createElement(r.a,null,u.a.createElement("div",{className:"App"},u.a.createElement(w,null),u.a.createElement("div",{id:"page-body"},u.a.createElement(s.c,null,u.a.createElement(s.a,{path:"/",component:c,exact:!0}),u.a.createElement(s.a,{path:"/about",component:o,exact:!0}),u.a.createElement(s.a,{path:"/articles-list-page",component:y,exact:!0}),u.a.createElement(s.a,{path:"/article/:name",component:q,exact:!0}),u.a.createElement(s.a,{component:m})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6e50d6bc.chunk.js.map