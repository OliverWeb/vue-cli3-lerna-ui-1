(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a01d72a4"],{"2bdc":function(t,o,a){"use strict";var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("h-table",{attrs:{data:t.data,stripe:!0,border:!0,caption:t.caption,shadow:!0,"head-style":"default"}},[a("h-table-column",{attrs:{prop:"para",label:"参数",width:80}}),a("h-table-column",{attrs:{prop:"native",label:"是否是原生属性",width:120}}),a("h-table-column",{attrs:{prop:"desc",label:"描述",width:450}}),a("h-table-column",{attrs:{prop:"type",label:"类型",width:100}}),a("h-table-column",{attrs:{prop:"option",label:"可选值",width:300}}),a("h-table-column",{attrs:{prop:"default",label:"默认值",width:100}})],1)},i=[],e={name:"propsTable",props:{data:Array,caption:String}},n=e,l=a("2877"),p=Object(l["a"])(n,s,i,!1,null,null,null);o["a"]=p.exports},d426:function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("h3",[t._v("提示")]),a("h5",[t._v("基础类型")]),a("h-tooltip",{attrs:{placement:"top",content:"this is tooltip this is too long"}},[a("h-btn",{staticClass:"h-btn-click h-btn-class",attrs:{semantic:"primary",radius:"small"}},[t._v("Tooltip on top left resize")])],1),a("h-tooltip",{attrs:{placement:"right",content:"this is tooltip this is too long"}},[a("h-btn",{staticClass:"h-btn-click h-btn-class",attrs:{semantic:"success",radius:"small"}},[t._v("Tooltip on right")])],1),a("h-tooltip",{attrs:{placement:"bottom",content:"this is tooltip this is too long"}},[a("h-btn",{staticClass:"h-btn-click h-btn-class",attrs:{semantic:"info",radius:"small"}},[t._v("Tooltip on bottom")])],1),a("h-tooltip",{attrs:{placement:"left",content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"danger",radius:"small"}},[t._v("Tooltip on left")])],1),a("h-tooltip",{attrs:{placement:"top",content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"primary",radius:"small"}},[t._v("Tooltip on top")])],1),a("h5",[t._v("语义类型")]),a("h-tooltip",{attrs:{placement:"top",semantic:"dark",content:"this is tooltip this is too long"}},[a("h-btn",{staticClass:"h-btn-click h-btn-class",attrs:{semantic:"dark",radius:"small"}},[t._v("Dark tooltip on top ")])],1),a("h-tooltip",{attrs:{placement:"right",semantic:"primary",content:"this is tooltip this is too long"}},[a("h-btn",{staticClass:"h-btn-click h-btn-class",attrs:{semantic:"primary",radius:"small"}},[t._v("Primary tooltip on right")])],1),a("h-tooltip",{attrs:{placement:"bottom",semantic:"success",content:"this is tooltip this is too long"}},[a("h-btn",{staticClass:"h-btn-click h-btn-class",attrs:{semantic:"success",radius:"small"}},[t._v("Success tooltip on bottom")])],1),a("h-tooltip",{attrs:{placement:"left",semantic:"info",content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"info",radius:"small"}},[t._v("Info tooltip on left")])],1),a("h-tooltip",{attrs:{placement:"top",semantic:"warning",content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"warning",radius:"small"}},[t._v("Warning Tooltip on top")])],1),a("h-tooltip",{attrs:{placement:"top",semantic:"danger",content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"danger",radius:"small"}},[t._v("Danger Tooltip on top")])],1),a("h5",[t._v("延时")]),a("h-tooltip",{attrs:{placement:"top",semantic:"danger",delay:1e3,content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"danger",radius:"small"}},[t._v("Danger Tooltip Delay 1000ms")])],1),a("h5",[t._v("disabled")]),a("h-tooltip",{attrs:{disabled:"",semantic:"danger",content:"this is tooltip this is too long"}},[a("h-btn",{attrs:{semantic:"danger",radius:"small"}},[t._v("Danger Tooltip Disabled")])],1),a("h5",[t._v("圆角")]),a("h-tooltip",{attrs:{semantic:"dark",radius:"small",placement:"top",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h-tooltip",{attrs:{semantic:"dark",radius:"large",placement:"top",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h5",[t._v("大小")]),a("h-tooltip",{attrs:{semantic:"dark",size:"small",radius:"small",placement:"top",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h-tooltip",{attrs:{semantic:"dark",radius:"small",placement:"top",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h-tooltip",{attrs:{semantic:"dark",size:"large",radius:"small",placement:"left",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h5",[t._v("最大宽度")]),a("h-tooltip",{attrs:{"max-width":"100",semantic:"dark",radius:"small",placement:"right",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h5",[t._v("内容追加")]),a("h-tooltip",{attrs:{radius:"small",placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("h4",[t._v("content")]),a("hr"),a("p",[t._v("this is slot content")])]),a("h-input")],1),a("h5",[t._v("偏移量")]),a("h-tooltip",{attrs:{semantic:"dark",offset:t.offset,"arrow-offset":t.arrowOffset,radius:"small",placement:"right",content:"this is tooltip this is too long"}},[a("h-input")],1),a("h3",[t._v("参数示例")]),a("props-table",{attrs:{data:t.props,caption:"提示框属性"}}),a("props-table",{attrs:{data:t.eventProps,caption:"提示框事件"}})],1)},i=[],e=a("2bdc"),n={name:"tooltip",components:{propsTable:e["a"]},data:function(){return{offset:{left:100,top:0},arrowOffset:{left:0,top:0},props:[{para:"placement",native:"false",desc:"显示位置",type:"String",option:"top、right、left、bottom",default:"false"},{para:"radius",native:"false",desc:"圆角",type:"String",option:"small、large",default:"-"},{para:"delay",native:"false",desc:"显示延时(单位ms)",type:"Number",option:"-",default:"0"},{para:"content",native:"false",desc:"显示内容",type:"String",option:"top、right、left、bottom",default:"right"},{para:"semantic",native:"false",desc:"语义类型",type:"String",option:"dark、primary、success、info、warning、danger",default:"-"},{para:"offset",native:"false",desc:"tooltip主体相对于当前位置的偏移量(谨慎使用)",type:"Object",option:"offset.left, offset.right, Number",default:"-"},{para:"arrow-offset",native:"false",desc:"tooltip箭头相对于当前位置的偏移量(谨慎使用)",type:"Object",option:"arrowOffset.left, arrowOffset.right, Number",default:"-"},{para:"size",native:"false",desc:"尺寸",type:"String",option:"small、large",default:"-"},{para:"max-width",native:"false",desc:"最大宽度(多余内容自动换行)",type:"String",option:"-",default:"300px"}],eventProps:[{para:"open",native:"false",desc:"tooltip打开时触发",type:"Function",option:"-",default:"-"},{para:"close",native:"false",desc:"tooltip关闭时触发",type:"Function",option:"-",default:"-"}]}},methods:{}},l=n,p=a("2877"),r=Object(p["a"])(l,s,i,!1,null,null,null);o["default"]=r.exports}}]);
//# sourceMappingURL=chunk-a01d72a4.b20d2f5b.js.map