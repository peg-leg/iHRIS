(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fhir-name"],{"89c1":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ihris-complex-card",{attrs:{complexField:t.field,slotProps:t.slotProps,label:t.label},scopedSlots:t._u([{key:"default",fn:function(s){return[t._t("default",null,{source:s.source})]}}],null,!0)})},r=[],l=e("fa57"),o={name:"fhir-human-name",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit"],data:function(){return{}},components:{IhrisComplexCard:l["a"]}},i=o,n=e("2877"),u=Object(n["a"])(i,a,r,!1,null,null,null);s["default"]=u.exports},fa57:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-card",[e("v-card-subtitle",{staticClass:"primary--text text-uppercase font-weight-bold"},[t._v(t._s(t.display))]),e("v-card-text",[t._t("default",null,{source:t.source})],2)],1)},r=[],l={name:"ihris-complex-card",props:["complexField","slotProps","label"],data:function(){return{source:{path:"",data:{}}}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source)if(this.source={path:this.slotProps.source.path+"."+this.complexField,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var t=this.$fhirutils.pathFieldExpression(this.complexField);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t)}}},computed:{display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label}}},o=l,i=e("2877"),n=e("6544"),u=e.n(n),c=e("b0af"),p=e("99d9"),d=Object(i["a"])(o,a,r,!1,null,null,null);s["a"]=d.exports;u()(d,{VCard:c["a"],VCardSubtitle:p["b"],VCardText:p["c"]})}}]);
//# sourceMappingURL=fhir-name.d1241f12.js.map