(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(t,n,e){var c=e(1),i=e(4),r=e(89),o=[].slice,a=function(t){return function(n,e){var c=arguments.length>2,i=c?o.call(arguments,2):void 0;return t(c?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};c({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:a(i.setTimeout),setInterval:a(i.setInterval)})},452:function(t,n,e){},665:function(t,n,e){"use strict";var c=e(452);e.n(c).a},835:function(t,n,e){"use strict";e.r(n);e(332);var c={data:function(){return{percent:0}},methods:{openLoading:function(){var t=this,n=this.$vs.loading({percent:this.percent}),e=setInterval((function(){t.percent<=100&&n.changePercent("".concat(t.percent++,"%"))}),40);setTimeout((function(){n.close(),clearInterval(e),t.percent=0}),4800)}}},i=(e(665),e(41)),r=Object(i.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"target",staticClass:"center",attrs:{id:"target"}},[n("vs-button",{attrs:{flat:""},on:{click:this.openLoading}},[this._v("Open Loading "),n("b",[this._v("Percent")])])],1)}),[],!1,null,"3e9db075",null);n.default=r.exports}}]);