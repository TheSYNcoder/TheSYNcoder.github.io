(this["webpackJsonpshuvayan-website"]=this["webpackJsonpshuvayan-website"]||[]).push([[0],{194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},202:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),o=n(49),c=n.n(o),i=(n(84),n(4)),a=n(24),A=n(10),l=n(26),d=function(e,t){switch(t.type){case"NEW_WINDOW":var n=t.payload,r=void 0===e.windowsOpen.find((function(e){return e.id===n.id}))?[].concat(Object(l.a)(e.windowsOpen),[{id:n.id,header:n.header,title:n.title}]):e.windowsOpen;return Object(A.a)(Object(A.a)({},e),{},{focusedWindow:n.id,windowsOpen:r});case"FOCUSED_WINDOW":return Object(A.a)(Object(A.a)({},e),{},{focusedWindow:t.payload});case"CLOSE_WINDOW":return Object(A.a)(Object(A.a)({},e),{},{focusedWindow:null,windowsOpen:e.windowsOpen.filter((function(e){return e.id!==t.payload}))});default:return e}},u=n(2),m={error:null,windowsOpen:[],focusedWindow:null,terminal:{lastLogin:localStorage.getItem("lastLogin")||new Date,history:localStorage.getItem("history")||[]}},p=Object(r.createContext)(m),b=function(e){var t=e.children,n=Object(r.useReducer)(d,m),s=Object(i.a)(n,2),o=s[0],c=s[1];return Object(u.jsx)(p.Provider,{value:[o,c],children:t})},x=(n(98),function(e){var t=s.a.useContext(p),n=Object(i.a)(t,2),r=n[0],o=n[1],c=s.a.useState("30rem"),a=Object(i.a)(c,2),A=a[0],l=a[1],d=s.a.useState("40rem"),m=Object(i.a)(d,2),b=m[0],x=m[1],y=s.a.useRef(r);s.a.useEffect((function(){h(document.getElementById(e.id)),window.screen.width>600&&g(document.getElementById(e.id));var t=document.getElementById(e.id);return t.addEventListener("click",j,!1),function(){return t.removeEventListener("click",j,!1)}}),[]),s.a.useEffect((function(){y.current=r}),[r]);var h=function(t){var n=0,r=0,s=0,o=0;document.getElementById(e.id+"header")&&(document.getElementById(e.id+"header").onmousedown=function(e){(e=e||window.event).preventDefault(),s=e.clientX,o=e.clientY,document.onmouseup=c,document.onmousemove=i});var c=function(e){document.onmouseup=null,document.onmousemove=null},i=function(e){(e=e||window.event).preventDefault(),n=s-e.clientX,r=o-e.clientY,s=e.clientX,o=e.clientY,t.style.top=t.offsetTop-r+"px",t.style.left=t.offsetLeft-n+"px"}};function j(e){for(var t=e.target;""===t.id;)t=t.parentNode;var n=t.id;-1!==n.lastIndexOf("header")&&(n=n.substr(0,n.lastIndexOf("header"))),document.getElementById(n).classList.remove("z-20","z-40"),document.getElementById(n).classList.add("z-40"),y.current.windowsOpen.filter((function(e){return e.id!==n})).forEach((function(e){document.getElementById(e.id).classList.remove("z-20","z-40"),document.getElementById(e.id).classList.add("z-20")})),o({type:"FOCUSED_WINDOW",payload:n})}var g=function(e){var t,n,r,s,o=null,c=document.createElement("div");c.parent=e,c.type="plus",e.appendChild(c),c.addEventListener("mousedown",b,!1),c.style.setProperty("width","5px"),c.style.setProperty("height","100%"),c.style.setProperty("position","absolute"),c.style.setProperty("background","transparent"),c.style.setProperty("right",0),c.style.setProperty("bottom",0),c.style.setProperty("cursor","ew-resize"),c.style.setProperty("z-index","60");var i=document.createElement("div");i.parent=e,i.type="plus",e.appendChild(i),i.addEventListener("mousedown",b,!1),i.style.setProperty("width","100%"),i.style.setProperty("height","5px"),i.style.setProperty("position","absolute"),i.style.setProperty("background","transparent"),i.style.setProperty("right",0),i.style.setProperty("bottom",0),i.style.setProperty("cursor","ns-resize"),i.style.setProperty("z-index","60");var a=document.createElement("div");a.parent=e,a.type="plus",e.appendChild(a),a.addEventListener("mousedown",b,!1),a.style.setProperty("width","5px"),a.style.setProperty("height","5px"),a.style.setProperty("position","absolute"),a.style.setProperty("background","transparent"),a.style.setProperty("right",0),a.style.setProperty("bottom",0),a.style.setProperty("cursor","nwse-resize"),a.style.setProperty("z-index","60");var A=document.createElement("div");A.parent=e,A.type="minus",A.left="yes",e.appendChild(A),A.addEventListener("mousedown",b,!1),A.style.setProperty("width","5px"),A.style.setProperty("height","100%"),A.style.setProperty("position","absolute"),A.style.setProperty("background","transparent"),A.style.setProperty("left",0),A.style.setProperty("bottom",0),A.style.setProperty("cursor","ew-resize"),A.style.setProperty("z-index","60");var d=document.createElement("div");d.parent=e,d.type="minus",d.left="yes",e.appendChild(d),d.addEventListener("mousedown",b,!1),d.style.setProperty("width","5px"),d.style.setProperty("height","5px"),d.style.setProperty("position","absolute"),d.style.setProperty("background","transparent"),d.style.setProperty("left",0),d.style.setProperty("bottom",0),d.style.setProperty("cursor","nesw-resize"),d.style.setProperty("z-index","60");var u=document.createElement("div");u.parent=e,u.type="minus",u.top="yes",u.left="yes",e.appendChild(u),u.addEventListener("mousedown",b,!1),u.style.setProperty("width","5px"),u.style.setProperty("height","5px"),u.style.setProperty("position","absolute"),u.style.setProperty("background","transparent"),u.style.setProperty("top",0),u.style.setProperty("left",0),u.style.setProperty("cursor","nwse-resize"),u.style.setProperty("z-index","60");var m=document.createElement("div");m.parent=e,m.type="minus",m.top="yes",e.appendChild(m),m.addEventListener("mousedown",b,!1),m.style.setProperty("width","100%"),m.style.setProperty("height","5px"),m.style.setProperty("position","absolute"),m.style.setProperty("background","transparent"),m.style.setProperty("top",0),m.style.setProperty("left",0),m.style.setProperty("cursor","ns-resize"),m.style.setProperty("z-index","60");var p=document.createElement("div");function b(e){o=this.parent,t=e.clientX,n=e.clientY,r=parseInt(document.defaultView.getComputedStyle(o).width,10),s=parseInt(document.defaultView.getComputedStyle(o).height,10),"minus"===this.type?("yes"===this.top&&"yes"===this.left?document.documentElement.addEventListener("mousemove",h,!1):"yes"===this.top?document.documentElement.addEventListener("mousemove",g,!1):document.documentElement.addEventListener("mousemove",j,!1),document.documentElement.addEventListener("mouseup",w,!1)):(document.documentElement.addEventListener("mousemove",y,!1),document.documentElement.addEventListener("mouseup",f,!1))}function y(e){r+e.clientX-t>480&&(o.style.width=r+e.clientX-t+"px",x(o.style.width)),r+e.clientX-t>640&&(o.style.height=s+e.clientY-n+"px",l(o.style.height))}function h(e){r+e.clientX-t>480&&(o.style.width=r-e.clientX+t+"px",x(o.style.width)),r+e.clientX-t>640&&(o.style.height=s-e.clientY+n+"px",l(o.style.height)),o.style.top=e.clientY+"px",o.style.left=e.clientX+"px"}function j(e){r-e.clientX+t!==o.style.minWidth&&(o.style.left=e.clientX+"px"),r+e.clientX-t>480&&(o.style.width=r-e.clientX+t+"px",x(o.style.width)),r+e.clientX-t>640&&(o.style.height=s-e.clientY+n+"px",l(o.style.height))}function g(e){r+e.clientX-t>480&&(o.style.width=r-e.clientX+t+"px",x(o.style.width)),r+e.clientX-t>640&&(o.style.height=s-e.clientY+n+"px",l(o.style.height)),o.style.top=e.clientY+"px"}function f(){document.documentElement.removeEventListener("mousemove",y,!1),document.documentElement.removeEventListener("mouseup",f,!1)}function w(){document.documentElement.removeEventListener("mousemove",h,!1),document.documentElement.removeEventListener("mousemove",j,!1),document.documentElement.removeEventListener("mousemove",g,!1),document.documentElement.removeEventListener("mouseup",w,!1)}p.parent=e,p.type="plus",e.appendChild(p),p.addEventListener("mousedown",b,!1),p.style.setProperty("width","5px"),p.style.setProperty("height","5px"),p.style.setProperty("position","absolute"),p.style.setProperty("background","transparent"),p.style.setProperty("top",0),p.style.setProperty("right",0),p.style.setProperty("cursor","nesw-resize"),p.style.setProperty("z-index","60")},f=e.title||"Hello",w={height:A,width:b};return Object(u.jsxs)("div",{id:e.id,className:"absolute bg-gray-50 shadow-2xl rounded-xl min-h-1/4 min-w-1/4",children:[e.header&&Object(u.jsx)("div",{id:"".concat(e.id,"header"),className:"p-2 dark:bg-gray-900 rounded-t-xl bg-gray-100 cursor-move dark:text-white text-black",children:Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsxs)("div",{className:"flex justify-start flex-row",children:[Object(u.jsx)("div",{onClick:function(e){return function(e){for(var t=e.target;""===t.id;)t=t.parentNode;var n=t.id;-1!==n.lastIndexOf("header")&&(n=n.substr(0,n.lastIndexOf("header"))),localStorage.setItem("lastLogin",new Date),o({type:"FOCUSED_WINDOW",payload:null}),o({type:"CLOSE_WINDOW",payload:n})}(e)},className:"h-3.5 w-3.5  rounded-2xl m-1 cursor-pointer table "+(r.focusedWindow===e.id?"bg-red-600":"bg-gray-300"),children:Object(u.jsx)("ion-icon",{name:"close-outline",style:{fontSize:"10px",display:"table-cell",verticalAlign:"middle",textAlign:"center",opacity:"0.4"}})}),Object(u.jsx)("div",{className:"h-3.5 w-3.5  rounded-2xl m-1 cursor-pointer table "+(r.focusedWindow===e.id?"bg-yellow-500":"bg-gray-300"),children:Object(u.jsx)("ion-icon",{name:"remove-outline",style:{fontSize:"10px",display:"table-cell",verticalAlign:"middle",textAlign:"center",opacity:"0.4"}})}),Object(u.jsx)("div",{className:"h-3.5 w-3.5  rounded-2xl m-1 cursor-pointer table "+(r.focusedWindow===e.id?"bg-green-400":"bg-gray-300"),children:Object(u.jsx)("ion-icon",{name:"resize-outline",style:{fontSize:"8px",display:"table-cell",verticalAlign:"middle",textAlign:"center",opacity:"0.4"}})})]}),Object(u.jsx)("div",{className:"flex flex-grow justify-center",children:f})]})}),Object(u.jsx)("div",{children:s.a.cloneElement(e.children,{context:w})})]})}),y=function(e){switch(e){case 0:return"SUN";case 1:return"MON";case 2:return"TEU";case 3:return"WED";case 4:return"THU";case 5:return"FRI";case 6:return"SAT";default:return"SUN"}},h=function(e){return Object(u.jsxs)("div",{className:"overflow-hidden relative",style:{zIndex:5,backgroundColor:"rgb(227, 226, 252, 0.3)"},children:[Object(u.jsxs)("div",{className:"float-left text-black flex flex-row ml-3",style:{zIndex:10},children:[Object(u.jsx)("div",{className:"text-center font-sans text-xl text-white m-1 mr-4 mt-0",children:"\uf8ff"}),Object(u.jsx)("div",{className:"text-center font-sans text-md text-white m-1",children:"Finder"})]}),Object(u.jsxs)("div",{className:"float-right text-white text-sm flex-row flex mr-3",style:{zIndex:10},children:[Object(u.jsxs)("div",{className:"text-center font-sans text-md text-white m-1",children:[y((new Date).getDay)," "," "," ",(new Date).getDate()," "," "," ",(t=(new Date).getMonth(),["January","February","March","April","May","June","July","August","September","October","November","December"][t])]}),Object(u.jsx)("div",{className:"text-center font-sans text-md text-white m-1",children:(new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})})]})]});var t},j=n.p+"static/media/pic1.e4635060.jpg",g=(n.p,n.p,function(){var e=s.a.useState(j),t=Object(i.a)(e,2),n=t[0];t[1];return Object(u.jsx)("div",{className:"fixed top-0 w-screen h-screen bg-cover z-0",children:Object(u.jsx)("img",{src:n,className:"w-screen h-screen bg-no-repeat absolute md:top-0 md:right-0 md:left-0 md:bottom-0"})})}),f=n(27),w=function(e){var t=e.menu,n=function(){var e=s.a.useState("0px"),t=Object(i.a)(e,2),n=t[0],r=t[1],o=s.a.useState("0px"),c=Object(i.a)(o,2),a=c[0],A=c[1],l=s.a.useState(!1),d=Object(i.a)(l,2),u=d[0],m=d[1],p=function(e){e.preventDefault(),console.log("handle",e.pageX,e.clientX,e.clientY,e.pageY),r("".concat(e.pageX,"px")),A("".concat(e.pageY,"px")),m(!0)},b=s.a.useCallback((function(e){var t=document.getElementById("popover"),n=e.target;do{if(n===t)return;n=n.parentNode}while(n.parentNode&&n);u&&m(!1)}),[u]);return s.a.useEffect((function(){return document.addEventListener("click",b),document.addEventListener("contextmenu",p),function(){document.removeEventListener("click",b),document.removeEventListener("contextmenu",p)}})),{xPos:n,yPos:a,showMenu:u}}(),r=n.xPos,o=n.yPos,c=n.showMenu;return console.log(r,o,c),Object(u.jsx)(f.Motion,{defaultStyle:{opacity:0},style:{opacity:c?Object(f.spring)(1):Object(f.spring)(0)},children:function(e){return Object(u.jsx)("div",{id:"popover",children:c?Object(u.jsx)("div",{className:"absolute z-60",style:{top:o,left:r,opacity:e.opacity},children:t}):Object(u.jsx)("div",{})})}})},v=function(){var e=s.a.useContext(p),t=Object(i.a)(e,2),n=(t[0],t[1]);return Object(u.jsxs)("div",{className:"relative h-auto w-auto flex flex-col rounded-lg p-2 ring-1 ring-gray-600 ring-inset",style:{minWidth:"13rem",zIndex:10,backgroundColor:"rgb(34, 35, 54, 0.3)"},children:[Object(u.jsx)("div",{className:"text-xs text-white pl-5 pt-0.5  rounded-sm hover:bg-blue-500 mb-1 cursor-pointer",children:"New Folder"}),Object(u.jsx)("hr",{className:"border border-gray-300 ml-2 mr-2 opacity-50"}),Object(u.jsx)("div",{className:"text-xs text-white pl-5 pt-1 pb-0.5 mt-1  rounded-sm hover:bg-blue-500 mb-1 cursor-pointer",onClick:function(){return n({type:"NEW_WINDOW",payload:{id:"PROFILE",header:!0}})},children:"Get Info"}),Object(u.jsx)("div",{className:"text-xs text-white pl-5 pt-1 pb-0.5 rounded-sm hover:bg-blue-500 mb-1 cursor-pointer",children:"Change Desktop Background"}),Object(u.jsx)("hr",{className:"border border-gray-300 ml-2 mr-2 opacity-50"}),Object(u.jsx)("div",{className:"text-xs text-gray-300 pl-5 pt-1 mt-1  rounded-sm hover:bg-blue-500 mb-1 cursor-not-allowed",children:"\u2713 Use Stacks"})]})},O=(n(203),n(199),n.p+"static/media/photo.fa388ab8.jpg"),N=n(80),E=n.n(N),P=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"items-center flex flex-col h-full w-full",children:[Object(u.jsx)("img",{src:O,className:" h-3/5 w-2/5 overflow-hidden rounded-3xl mt-2 ring-4 ring-black"}),Object(u.jsx)("div",{className:"text-black dark:text-white mt-4 font-black text-2xl",children:"Shuvayan Ghosh Dastidar"}),Object(u.jsxs)("div",{className:"text-black dark:text-white mt-4 font-semibold text-lg flex flex-row",children:["Hey, I am a",Object(u.jsx)(E.a,{options:{strings:["- Web Developer","- Computer Vision Enthusiast","- Competitive Programmer"],autoStart:!0,loop:!0}})," "]}),Object(u.jsxs)("div",{className:"absolute bottom-0 mb-4 flex flex-row justify-center",children:[Object(u.jsx)("a",{href:"https://www.facebook.com/shuvayan.ghoshdastidar",children:Object(u.jsx)("ion-icon",{name:"logo-facebook",style:{fontSize:"30px",color:"blue",margin:"2px"}})}),Object(u.jsx)("a",{href:"https://www.instagram.com/chroma_mania/",children:Object(u.jsx)("img",{src:"data:image/jpeg;base64,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",style:{width:"30px",margin:"2px"}})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/shuvayan-ghosh-dastidar-3b5383166/",children:Object(u.jsx)("ion-icon",{name:"logo-linkedin",style:{fontSize:"30px",color:"#0077B5",margin:"2px"}})}),Object(u.jsx)("a",{href:"https://github.com/TheSYNcoder/",children:Object(u.jsx)("ion-icon",{name:"logo-github",style:{fontSize:"30px",color:"black",margin:"2px"}})}),Object(u.jsx)("a",{href:"https://twitter.com/TheSYNcoder",children:Object(u.jsx)("ion-icon",{name:"logo-twitter",style:{fontSize:"30px",color:"lightblue",margin:"2px"}})})]})]})})},D=function(){return Object(u.jsx)("div",{className:"text-black",children:"Projects and more "})},z=function(){return Object(u.jsx)("div",{className:"text-black",children:"Research"})},S=n.p+"static/media/profile.789992e9.svg",C=n.p+"static/media/project.cb868764.svg",k=n.p+"static/media/research.8335af3b.svg",M=function(e){var t=s.a.useState("about"),n=Object(i.a)(t,2),r=n[0],o=n[1],c=s.a.useState(!1),a=Object(i.a)(c,2),A=a[0],l=a[1],d={about:Object(u.jsx)(P,{}),projects:Object(u.jsx)(D,{}),research:Object(u.jsx)(z,{})},m=function(e){localStorage.setItem("profile",e),o(e)};s.a.useEffect((function(){var e=localStorage.getItem("profile");null!==e&&void 0!==e||(e="about"),o(e),m(e)}),[]);var p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{tabIndex:"0",onFocus:function(){return m("about")},className:("about"===r?" bg-gray-300  bg-opacity-100 hover:bg-opacity-95":" hover:bg-gray-50 hover:bg-opacity-5 ")+" w-28 md:w-full rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5",children:[Object(u.jsx)("img",{className:" w-2 md:w-4 ",alt:"About",src:S,style:{color:"white"}}),Object(u.jsx)("span",{className:" ml-1 md:ml-2 text-black text-xs dark:text-white ",children:"About Me"})]}),Object(u.jsxs)("div",{tabIndex:"0",onFocus:function(){return m("projects")},className:("projects"===r?" bg-gray-300  bg-opacity-100 hover:bg-opacity-95":" hover:bg-gray-50 hover:bg-opacity-5 ")+" w-28 md:w-full rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5",children:[Object(u.jsx)("img",{className:" w-2 md:w-4 ",alt:"Projects",src:C}),Object(u.jsx)("span",{className:" ml-1 md:ml-2 text-black text-xs dark:text-white",children:"Projects"})]}),Object(u.jsxs)("div",{tabIndex:"0",onFocus:function(){return m("research")},className:("research"===r?" bg-gray-300  bg-opacity-100 hover:bg-opacity-95":" hover:bg-gray-50 hover:bg-opacity-5 ")+" w-28 md:w-full  rounded-lg cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex items-center pl-2 md:pl-2.5",children:[Object(u.jsx)("img",{className:" w-2 md:w-4 ",alt:"Research",src:k}),Object(u.jsx)("span",{className:" ml-1 md:ml-2 text-black text-xs dark:text-white",children:"Research"})]})]})},b=e.context;return window.screen.width<600&&(b={height:"30rem",width:window.screen.width-100}),Object(u.jsxs)("div",{className:"flex relative",style:{height:b.height,width:b.width,minHeight:"30rem"},children:[Object(u.jsx)("div",{className:"md:flex hidden flex-col w-1/4 md:w-1/5 h-full bg-gray-200 dark:bg-gray-700 text-sm overflow-y-auto rounded-bl-xl",style:{height:b.height},children:p()}),Object(u.jsxs)("div",{onClick:function(){return l(!A)},className:"md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1",children:[Object(u.jsx)("div",{className:" w-3.5 border-t border-black"}),Object(u.jsx)("div",{className:" w-3.5 border-t border-black",style:{marginTop:"2pt",marginBottom:"2pt"}}),Object(u.jsx)("div",{className:" w-3.5 border-t border-black"}),Object(u.jsx)("div",{className:(A?" visible animateShow z-30 ":" invisible ")+" md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20",children:p()})]}),Object(u.jsx)("div",{className:"flex flex-col w-3/4 md:w-4/5 justify-start items-center rounded-br-xl flex-grow bg-white dark:bg-gray-900  overflow-y-auto windowMainScreen font-sans",children:d[r]})]})},B=(n(201),n(50)),X=(n(202),function(e){var t=s.a.useContext(p),n=Object(i.a)(t,2),r=n[0],o=(n[1],s.a.useRef(r)),c=e.context;s.a.useEffect((function(){o.current=r}),[r]);var a=s.a.useState([]),A=Object(i.a)(a,2),d=A[0],m=A[1],b=s.a.useState(""),x=Object(i.a)(b,2),y=x[0],h=x[1];return Object(u.jsxs)("div",{className:"flex flex-col dark:bg-gray-800 bg-white rounded-b-xl overflow-y-auto",style:{height:c.height,width:c.width},children:[Object(u.jsxs)("div",{className:"text-sm mt-2",children:["Last login : ",o.current.terminal.lastLogin.toString()]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:d.map((function(e,t){return Object(u.jsxs)("div",{className:"text-sm",children:["Shuvayans-MacBook-Air:~ shuvayan$ ",e]})}))}),Object(u.jsxs)("div",{className:"flex flex-row",children:[Object(u.jsx)("div",{className:"text-sm",children:"Shuvayans-MacBook-Air:~ shuvayan$ "}),Object(u.jsx)("input",{className:"outline-none text-sm",value:y,onChange:function(e){return h(e.target.value)},onKeyDown:function(e){return function(e){13===e.keyCode&&(m([].concat(Object(l.a)(d),[y])),h(""))}(e)},style:{backgroundColor:"inherit"},autoComplete:"off"})]})]})}),L=n.p+"static/media/hdd.9b8dbc3b.png",W=n(25),G=n.n(W);B.a.initialize("G-7NQQVYC6KN"),B.a.pageview(window.location.pathname+window.location.search);var T=function(){var e=Object(a.b)(),t=(e.theme,e.setTheme,Object(r.useContext)(p)),n=Object(i.a)(t,2),s=n[0],o=(n[1],function(e){switch(e){case"PROFILE":return Object(u.jsx)(M,{});case"TERMINAL":return Object(u.jsx)(X,{});default:return Object(u.jsx)("div",{children:"Some Content"})}});return Object(u.jsx)("div",{className:"relative bg-transparent",style:{zIndex:2},children:Object(u.jsx)("div",{children:s.windowsOpen.map((function(e){return Object(u.jsx)(x,{id:e.id,header:e.header,title:e.title,children:o(e.id)},e.id)}))})})},I=function(){var e=Object(r.useContext)(p),t=Object(i.a)(e,2),n=(t[0],t[1]);return Object(u.jsxs)("div",{className:"absolute right-0 mr-10 flex flex-col bg-transparent z-10",children:[Object(u.jsx)("img",{src:L,className:"m-4 mb-0 h-12 w-12 md:h-16 md:w-16  shadow-xl"}),Object(u.jsx)("div",{className:"text-xs text-white ml-1 font-black mt-2",children:"Macintosh HD"}),Object(u.jsxs)("div",{className:"cursor-pointer focus:bg-gray-400 z-10",onClick:function(){return n({type:"NEW_WINDOW",payload:{id:"PROFILE",header:!0}})},children:[Object(u.jsx)("img",{src:"data:image/png;base64,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",className:"m-4 mb-0 h-12 w-12 md:h-16 md:w-16 shadow-xl"}),Object(u.jsx)("div",{className:"text-xs text-white ml-4 font-black mt-2",children:"About Me"})]})]})},Y=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)(a.a,{attribute:"class",defaultTheme:"dark",children:[Object(u.jsxs)(G.a,{children:[Object(u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(u.jsx)("meta",{charSet:"utf-8"}),Object(u.jsx)("title",{children:"Shuvayan's website"}),Object(u.jsx)("meta",{name:"description",content:"This is the personal website of Shuvayan Ghosh Dastidar. The portfolio website is made using ReactJs and tailwindcss."})]}),Object(u.jsx)(h,{}),Object(u.jsx)(T,{}),Object(u.jsx)(I,{}),Object(u.jsx)(g,{}),Object(u.jsx)(w,{menu:Object(u.jsx)(v,{})})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),o(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(Y,{})}),document.getElementById("root")),V()},78:function(e,t){},84:function(e,t,n){}},[[204,1,2]]]);
//# sourceMappingURL=main.f934a790.chunk.js.map