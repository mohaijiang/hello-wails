var u=Object.defineProperty;var a=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(r,e,t)=>e in r?u(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,i=(r,e)=>{for(var t in e||(e={}))n.call(e,t)&&o(r,t,e[t]);if(a)for(var t of a(e))p.call(e,t)&&o(r,t,e[t]);return r};import{u as l}from"./useECharts.a0cb2ec4.js";import{b as c}from"./props.f48aca0b.js";import{A as f,r as h,_ as m,B as d,D as b,X as y}from"./vendor.90239796.js";import"./index.f6f72250.js";const w=f({props:i({},c),setup(r){const e=h(null),{setOptions:t}=l(e);return m(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(s,x)=>(d(),b("div",{ref_key:"chartRef",ref:e,style:y({height:s.height,width:s.width})},null,4))}});export{w as default};
