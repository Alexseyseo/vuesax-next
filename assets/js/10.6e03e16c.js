(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(t,n,e){var s=e(1),r=e(4),o=e(89),i=[].slice,a=function(t){return function(n,e){var s=arguments.length>2,r=s?i.call(arguments,2):void 0;return t(s?function(){("function"==typeof n?n:Function(n)).apply(this,r)}:n,e)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:a(r.setTimeout),setInterval:a(r.setInterval)})},453:function(t,n,e){},666:function(t,n,e){"use strict";var s=e(453);e.n(s).a},836:function(t,n,e){"use strict";e.r(n);e(332);var s={data:function(){return{progress:0}},methods:{openLoading:function(){var t=this,n=this.$vs.loading({progress:0}),e=setInterval((function(){t.progress<=100&&n.changeProgress(t.progress++)}),40);setTimeout((function(){n.close(),clearInterval(e),t.progress=0}),4100)}}},r=(e(666),e(41)),o=Object(r.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"target",staticClass:"center",attrs:{id:"target"}},[n("vs-button",{attrs:{flat:""},on:{click:this.openLoading}},[this._v("Open Loading "),n("b",[this._v("Progress")])])],1)}),[],!1,null,"77030046",null);n.default=o.exports}}]);