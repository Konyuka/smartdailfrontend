(function(e){function n(n){for(var o,a,i=n[0],c=n[1],s=n[2],u=0,m=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(n);while(m.length)m.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==r[i]&&(o=!1)}o&&(l.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},a={app:0},r={app:0},l=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0be70b":"46c42e2d","chunk-7131d3d0":"1408cfd2"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-7131d3d0":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0be70b":"31d6cfe0","chunk-7131d3d0":"be5f62ba"}[e]+".css",r=c.p+o,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var s=l[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===r))return n()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){s=m[i],u=s.getAttribute("data-href");if(u===o||u===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var o=n&&n.target&&n.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=o,delete a[e],d.parentNode.removeChild(d),t(l)},d.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var l=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=l);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var m=new Error;s=function(n){u.onerror=u.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",m.name="ChunkLoadError",m.type=o,m.request=a,t[1](m)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var m=0;m<s.length;m++)n(s[m]);var d=u;l.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("d3b7"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],l=t("2f62"),i={user:null,token:"",onCall:!1,campaign:null,status:null,dispositionModal:!1,successModal:!1,errorModal:!1,infoModal:!1,campaigns:[],Phonenumber:null,selectedIngroups:[],ingroups:[],callType:"Outgoing",callStatus:"",dispositionOptions:[],codeOptions:[],pauseCode:"LoggedIn",pauseafterCall:"",numberCalled:null,hangupError:!1,hangupReason:"",callWaiting:!0,ongoingCall:!1,TransferCall:!1,callQueue:[],transfer:"",transferedCall:!1,dtmfTrue:!1,errorTitle:"Dynamic Error Title",errorText:"Dynamic Error Body Dynamic Error Body Dynamic Error Body Dynamic Error BodyDynamic Error BodyDynamic Error Bodyv v ",activeUsers:[],liveTransferred:!1,addedNumber:null,grabTrue:!1,userState:"",socket:null,dialable_leads:0,callLogs:[],activeAgents:[],callbacks:[],pause_code:null,agent_log_id:null,dial_method:null,iframe:"http://172.16.10.202/login"},c=i,s={loggedIn:function(e){return!!e.user},campaign:function(e){return e.campaign},dtmfTrue:function(e){return e.dtmfTrue}},u=s,m={setUserData:function(e,n){e.user=n.user,e.campaigns=n.campaigns,localStorage.setItem("user",n.user),localStorage.setItem("token",n.token)},clearUserData:function(e){e.user=null,e.token="",e.onCall=!1,e.campaign=null,e.campaigns=null,e.Phonenumber=null,e.selectedIngroups=[],e.liveTransferred=!1,localStorage.removeItem("user"),localStorage.removeItem("phone"),localStorage.removeItem("token"),localStorage.removeItem("campaign"),localStorage.removeItem("ingroups"),localStorage.removeItem("onWebsocket"),sessionStorage.clear()},setPhonenumber:function(e,n){e.Phonenumber=n.phone,e.ingroups=n.inbound,e.campaign=n.campaign,e.dispositionOptions=n.dispos,e.pauseafterCall=n.pause_after,e.codeOptions=n.pause_codes,e.userState=n.userState,e.pause_code=n.pause_code,e.agent_log_id=n.agent_log_id,e.dial_method=n.dial_method,e.userState=n.state,localStorage.setItem("phone",n.phone),localStorage.setItem("campaign",n.campaign)},clearCampaign:function(e){e.campaign=null},changeCampaign:function(e,n){e.campaign=n},dispositionModal:function(e){e.dispositionModal=!0},pauseCall:function(e){e.paused=!0},campaigns:function(e,n){e.campaigns=n},setIngroups:function(e,n){e.ingroups=n},setselectedingroups:function(e,n){e.selectedIngroups=n},fromWebsockets:function(e,n){var t=n.dial_status,o=n.isloggedin,a=n.queue,r=n.hangup_reason,l=n.code,i=n.agents,c=n.call_details,s=n.dialable_leads,u=n.callbacks,m=n.user_status;null==i&&void 0==i||(e.activeUsers=i),null==u&&void 0==u||(e.callbacks=u),null==n.agents&&void 0==n.agents||(e.activeAgents=n.agents),null==a&&void 0==a||(a.length>0?(console.log(a),e.callQueue=a):e.callQueue=[]),null==s&&void 0==s||(e.dialable_leads=s),null==m&&void 0==m||(e.userState=m),null!=a&&void 0!=a||(e.callQueue=[]),0==o&&(e.campaign=null),"calling"==t&&(e.callStatus=t,e.ongoingCall=!1),"livecall"==t&&(e.callStatus=t,localStorage.setItem("lead_id",c.lead_id),localStorage.setItem("callerid",c.callerid),localStorage.setItem("numberCalled",c.phone_number),void 0==c.url||null==c.url||(e.iframe=c.url),e.callWaiting=!1,e.ongoingCall=!0,e.liveTransferred?(e.ongoingCall=!1,e.transferedCall=!0):(e.ongoingCall=!0,e.transferedCall=!1)),"hangup"==t&&("OK"!=r&&(e.hangupReason=l+" "+r,e.hangupError=!0,e.liveTransferred?e.ongoingCall=!1:e.ongoingCall=!0,e.callWaiting=!0,e.ongoingCall=!1),e.callStatus="hangup",e.transferedCall=!1),"transfer"==t&&(e.transfer="transfer",e.hangupReason=l)},resetonCall:function(e){e.callWaiting=!1,e.ongoingCall=!1,e.liveTransferred=!1},pauseStatus:function(e){e.paused=!e.paused},setPausecode:function(e,n){e.pause_code=n},numberCalled:function(e,n){e.numberCalled=n,e.callWaiting=!0,e.ongoingCall=!1},resetError:function(e,n){e.errorTitle=n.title,e.errorText=n.text},remove:function(e,n){},incoming:function(e){e.callType="Incoming"},ongoingcallFalse:function(e){e.ongoingCall=!1},dtmf:function(e,n){e.dtmf=n},addedNumber:function(e,n){e.addedNumber=n},liveCall:function(e){e.callWaiting=!1,e.ongoingCall=!1},resetDisposition:function(e){e.hangupError=!1,e.hangupReason="",e.callStatus="",e.callWaiting=!0,e.ongoingCall=!1,e.liveTransferred=!1,e.transferedCall=!1},ongoingFalseTransferTrue:function(e){e.ongoingCall=!1,e.transferedCall=!0,e.liveTransferred=!0,e.grabTrue=!1},beforeCall:function(e){e.callWaiting=!0,e.ongoingCall=!1,e.transferedCall=!1,e.liveTransferred=!1},grabTrue:function(e){e.grabTrue=!0},addPark:function(e){e.grabTrue=!0,e.ongoingCall=!1,e.transferedCall=!0},addCustomer:function(e){e.grabTrue=!0,e.ongoingCall=!1,e.transferedCall=!0},userState:function(e,n){e.userState=n},webosocket:function(e,n){e.socket=n},normalCall:function(e){e.liveTransferred=!1,e.transferedCall=!1,e.ongoingCall=!0},websocket:function(e,n){e.socket=n},iframe:function(e,n){e.iframe=n},callDetails:function(e,n){e.iframe=n.url},callLogs:function(e,n){e.callLogs=null==n?[]:n},clearCallbacks:function(e){e.callbacks=[]}},d=m,g={login:function(e,n){var t=e.commit;t("setUserData",n)},switchCampaign:function(e,n){var t=e.commit;t("changeCampaign",n)},disposition:function(e){var n=e.commit;n("dispositionModal")},resetDisposition:function(e){var n=e.commit;n("resetDisposition")},pause:function(e){var n=e.commit;n("pauseCall")},logout:function(e){var n=e.commit;n("clearUserData")},setCampaigns:function(e,n){var t=e.commit;t("campaigns",n)},setPhoneCamps:function(e,n){var t=e.commit;t("setPhonenumber",n)},setIngroups:function(e,n){var t=e.commit;t("setIngroups",n)},removeCampaign:function(e){var n=e.commit;n("clearCampaign")},setSelectedingroups:function(e,n){var t=e.commit;t("setselectedingroups",n)},fromWebsocket:function(e,n){var t=e.commit;t("fromWebsockets",n)},pauseStatus:function(e){var n=e.commit;n("pauseStatus")},setPausecode:function(e,n){var t=e.commit;t("setPausecode",n)},numberCalled:function(e,n){var t=e.commit;t("numberCalled",n)},resetError:function(e,n){var t=e.commit;t("resetError",n)},remove:function(e,n){var t=e.commit;t("remove",n)},incoming:function(e){var n=e.commit;n("incoming")},transferCall:function(e){var n=e.commit;n("transferCall")},resetonCall:function(e){var n=e.commit;n("resetonCall")},ongoingcallFalse:function(e){var n=e.commit;n("ongoingcallFalse")},dtmf:function(e){var n=e.commit;n("dtmf")},addedNumber:function(e,n){var t=e.commit;t("addedNumber",n)},liveCall:function(e){var n=e.commit;n("liveCall")},ongoingFalseTransferTrue:function(e){var n=e.commit;n("ongoingFalseTransferTrue")},beforeCall:function(e){var n=e.commit;n("beforeCall")},grabTrue:function(e){var n=e.commit;n("grabTrue")},addPark:function(e){var n=e.commit;n("addPark")},userState:function(e,n){var t=e.commit;t("userState",n)},websocket:function(e,n){var t=e.commit;t("websocket",n)},normalCall:function(e){var n=e.commit;n("normalCall")},addCustomer:function(e){var n=e.commit;n("addCustomer")},iframe:function(e,n){var t=e.commit;t("iframe",n)},callLogs:function(e,n){var t=e.commit;t("callLogs",n)},callDetails:function(e,n){var t=e.commit;t("callDetails",n)},clearCallbacks:function(e){var n=e.commit;n("clearCallbacks")}},f=g,p=t("0e44");o["a"].use(l["a"]);var v=new l["a"].Store({getters:u,mutations:d,state:c,actions:f,strict:!1,plugins:[Object(p["a"])({storage:window.sessionStorage})]}),h={name:"App",created:function(){this.webSocket()},methods:{webSocket:function(){var e=this,n=new WebSocket("ws://"+this.$socket+"/api/v1/ws");if(console.log("Connecting to the websocket server..."),null==localStorage.getItem("user")||null==localStorage.getItem("phone"))return console.log("Username or phone still null,websocket connection failed, no user"),void v.dispatch("websocket","OFF");n.onopen=function(){n.send(JSON.stringify({username:localStorage.getItem("user"),phone:localStorage.getItem("phone"),campaign:localStorage.getItem("campaign")})),console.log(JSON.stringify({username:localStorage.getItem("user"),phone:localStorage.getItem("phone"),campaign:localStorage.getItem("campaign")})),v.dispatch("websocket","ON"),console.log("connected successfully")},n.onmessage=function(e){var n=JSON.parse(e.data);v.dispatch("websocket","ON"),v.dispatch("fromWebsocket",n)},n.onclose=function(){console.log("Socket closed: ON CLOSE"),e.$parent.showcampaignModal=!0,v.dispatch("websocket","OFF")},n.onerror=function(){console.log("Socket closed : ON ERROR")}}},computed:{socket:function(){return v.state.socket}},watch:{socket:function(e){"OFF"==e&&(console.log("Socket off!"),this.webSocket())}}},b=h,C=t("2877"),S=Object(C["a"])(b,a,r,!1,null,null,null),k=S.exports,y=(t("def6"),t("859b")),T=(t("d355"),t("bc3a")),w=t.n(T);w.a.defaults.baseURL="http://172.16.10.209:8080",w.a.defaults.headers.common["Content-Type"]="application/json",w.a.defaults.headers.common["Accept"]="application/json";var _=w.a,I=(t("45fc"),t("8c4f"));o["a"].use(I["a"]);var O=new I["a"]({mode:"history",base:"",routes:[{path:"/",name:"Auth",component:function(){return t.e("chunk-2d0be70b").then(t.bind(null,"2fef"))},children:[]},{path:"/dialer",name:"Dialer",component:function(){return t.e("chunk-7131d3d0").then(t.bind(null,"9e86"))},meta:{auth:!0},children:[]}]});O.beforeEach((function(e,n,t){var o=localStorage.getItem("user"),a=localStorage.getItem("token");e.matched.some((function(e){return e.meta.auth}))&&null==o&&null==a&&t({path:"/",query:{redirect:e.fullPath}}),t()}));var E=O;_.interceptors.response.use((function(e){return e}),(function(e){if("undefined"==e.response&&console.log("Backend Server is down"),console.log(e.response),401!==e.response.status)return Promise.reject(e);console.log(e.response),console.log(" logout the user response"),v.dispatch("logout").then((function(){E.push("/")}))})),o["a"].prototype.$iframe="http://172.16.10.202/login",o["a"].prototype.$socket="172.16.10.209:8080",o["a"].prototype.$http=_;var P="http://172.16.10.202/login";v.dispatch("iframe",P),o["a"].use(l["a"]),o["a"].use(y["Datetime"]),o["a"].config.productionTip=!1,new o["a"]({store:v,router:E,render:function(e){return e(k)}}).$mount("#app")},def6:function(e,n,t){}});
//# sourceMappingURL=app.d907b9ea.js.map