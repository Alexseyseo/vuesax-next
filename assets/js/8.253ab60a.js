(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{332:function(n,o,t){var e=t(1),i=t(4),a=t(89),s=[].slice,c=function(n){return function(o,t){var e=arguments.length>2,i=e?s.call(arguments,2):void 0;return n(e?function(){("function"==typeof o?o:Function(o)).apply(this,i)}:o,t)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},450:function(n,o,t){},663:function(n,o,t){"use strict";var e=t(450);t.n(e).a},832:function(n,o,t){"use strict";t.r(o);t(90),t(91),t(332);var e={data:function(){return{color:"#d5397b",hasOpenLoading:!1,types:["default","waves","corners","border","points","square","gradient","rectangle","circles","square-rotate","scale"]}},methods:{handleClickLoading:function(n){var o=this,t=this.$vs.loading({type:n,color:this.color});this.hasOpenLoading=!0,setTimeout((function(){t.close(),o.hasOpenLoading=!1}),3e3)},openLoading:function(n,o){this.$vs.loading({target:this.$refs[o][0],text:n,type:n,color:this.color})}},watch:{color:function(){var n=this;this.$refs.loadings.querySelectorAll(".box-loading").forEach((function(n){n.innerHTML=""})),this.types.forEach((function(o,t){n.openLoading(o,"box".concat(t))}))}},mounted:function(){var n=this;this.types.forEach((function(o,t){n.openLoading(o,"box".concat(t))}))}},i=(t(663),t(41)),a=Object(i.a)(e,(function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"center",class:{hasOpenLoading:n.hasOpenLoading}},[t("div",{staticClass:"con-input",style:"background: "+n.color+";"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.color,expression:"color"}],attrs:{type:"color"},domProps:{value:n.color},on:{input:function(o){o.target.composing||(n.color=o.target.value)}}}),n._v(" "),t("i",{staticClass:"bx bxs-color-fill"})]),n._v(" "),t("div",{ref:"loadings",staticClass:"con-loadings"},n._l(n.types,(function(o,e){return t("div",{ref:"box"+e,refInFor:!0,staticClass:"box-loading",on:{click:function(t){return n.handleClickLoading(o)}}})})),0)])}),[],!1,null,"ff83b258",null);o.default=a.exports}}]);