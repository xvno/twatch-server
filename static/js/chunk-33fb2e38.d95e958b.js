(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33fb2e38"],{"8a00":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",[e("v-card",{attrs:{"contextual-style":"dark"}},[e("span",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.$t("general.welcome"))+" ")]),e("div",{attrs:{slot:"body"},slot:"body"},[t.recording?e("button",{on:{click:t.stopRecording}},[t._v(" StopRecording ")]):e("button",{on:{click:t.startRecording}},[t._v("Record voices")]),e("p",[t._v("step: "+t._s(t.step))]),e("ul",{staticClass:"recList",staticStyle:{height:"400px",overflow:"scroll"}},t._l(t.recList,(function(a){return e("li",{key:a.name,staticStyle:{display:"block",height:"55px","list-style":"none","line-height":"55px"}},[e("span",{staticStyle:{display:"inline-block",width:"200px"}},[t._v(t._s(a.name)+".wav")]),e("audio",{staticStyle:{height:"50px"},attrs:{controls:""}},[e("source",{attrs:{src:a.url,type:"audio/m4a"}}),e("source",{attrs:{src:a.url,type:"audio/mpeg"}}),t._v(" 您的浏览器不支持 audio 元素。 ")])])})),0)]),e("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("Make'em better!")])])],1)},n=[],r=e("ea2a"),o=e("ae8d"),i={name:"HomeIndex",components:{VLayout:r["a"],VCard:o["a"]},data:function(){return{step:0,loop:!0,recList:[{url:"/assets/stylus/rec.m4a",name:Date.now()}],recording:!0,recordingHandler:0}},methods:{fetchStep:function(){var t=this;return t.$http.get("/api/step").then((function(a){t.step=a.step||1}))},timer:function(t){var a=this,e=t||3e3;setTimeout((function(){a.loop&&a.fetchStep().then(a.timer.bind(a))}),e)},stopRecording:function(){this.recording=!1,clearInterval(this.recordingHandler)},startRecording:function(){var t=this,a=t.recList[0];t.recording=!0,t.recordingHandler=setInterval((function(){t.recList.push({url:a.url,name:"rec_".concat(Date.now())})}),3500)}},created:function(){var t=this;t.timer(0),t.startRecording()}},l=i,c=e("2877"),u=Object(c["a"])(l,s,n,!1,null,null,null);a["default"]=u.exports},ae8d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[t.hasSlot("header")?e("h4",{class:t.classNamesHeader},[t._t("header")],2):t._e(),t.hasSlot("body")?e("div",{staticClass:"card-body"},[t._t("body")],2):t._e(),t.hasSlot("footer")?e("div",{staticClass:"card-footer"},[t._t("footer")],2):t._e()])},n=[],r={methods:{hasSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.$slots[t]}}},o={name:"Card",mixins:[r],props:{contextualStyle:{default:"primary",type:String,required:!1}},computed:{classNamesHeader:function(){var t=["card-header"];return this.contextualStyle?(t.push("bg-".concat(this.contextualStyle)),t.push("text-white")):t.push("bg-default"),t}}},i=o,l=e("2877"),c=Object(l["a"])(i,s,n,!1,null,null,null);a["a"]=c.exports},ea2a:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home.index"}}},[t._v(" VNO's making them better! ")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:t.toggleMenu}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",class:{show:t.menuCollapsed}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("router-link",{staticClass:"nav-item",attrs:{to:{name:"home.index"},"active-class":"active",tag:"li"}},[e("a",{staticClass:"nav-link"},[t._v(" Home ")])]),e("router-link",{staticClass:"nav-item",attrs:{to:{name:"account.index"},"active-class":"active",tag:"li"}},[e("a",{staticClass:"nav-link"},[t._v(" Account ")])])],1),e("span",{staticClass:"navbar-text"},[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("i",{staticClass:"fa fa-sign-out"})])])])],1),e("div",{staticClass:"container pt-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col col-12"},[t._t("default")],2)])])])},n=[],r={name:"DefaultLayout",data:function(){return{menuCollapsed:!1}},methods:{logout:function(){this.$store.dispatch("auth/logout")},toggleMenu:function(){this.menuCollapsed=!this.menuCollapsed}}},o=r,i=e("2877"),l=Object(i["a"])(o,s,n,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-33fb2e38.d95e958b.js.map