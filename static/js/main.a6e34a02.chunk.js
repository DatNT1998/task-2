(this["webpackJsonpgoal-manager"]=this["webpackJsonpgoal-manager"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),o=a.n(l),r=(a(9),a(1));var i=function(e){var t=e.goal,a=e.updates;return console.log(a,"update nay nay"),c.a.createElement("div",null,c.a.createElement("label",{className:"label-title"},c.a.createElement("input",{type:"checkbox",defaultChecked:t.fields.complete,disabled:!0}),c.a.createElement("h2",null," ",t.fields.title)),c.a.createElement("div",{className:"details"},c.a.createElement("h3",null," DETAILS "),c.a.createElement("p",null," ",t.fields.details)),c.a.createElement("div",{className:"updates"},c.a.createElement("h3",null," UPDATES "),a.map((function(e,t){return c.a.createElement("p",{key:t}," ",e.fields.update)}))))};a(10);var s=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),s=Object(r.a)(o,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){fetch("https://api.airtable.com/v0/appk1k59lSJbYpMfh/goals?api_key=keyF3WkWva6D8mdhC").then((function(e){return e.json()})).then((function(e){l(e.records)})).catch((function(e){})),fetch("https://api.airtable.com/v0/appk1k59lSJbYpMfh/updates?api_key=keyF3WkWva6D8mdhC").then((function(e){return e.json()})).then((function(e){m(e.records)})).catch((function(e){}))}),[]),console.log(u,"update"),c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"main-title"}," My Goal"),a.map((function(e){return c.a.createElement(i,{key:e.id,goal:e,updates:u.filter((function(t){return t.fields.goalID[0]===e.id}))})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.a6e34a02.chunk.js.map