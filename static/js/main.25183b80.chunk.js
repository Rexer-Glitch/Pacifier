(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{14:function(n,t,e){n.exports=e.p+"static/media/weight.201606ea.png"},15:function(n,t,e){n.exports=e(23)},20:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(8),o=e.n(i),c=e(3),u=(e(20),e(1)),l=e(2);function d(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  @media (min-width: 768px) {\n    margin: 10px;\n  }\n  @media (min-width: 992px) {\n    margin: 50px 20%;\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row-reverse;\n \n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n    color: black;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 10px;\n    background: grey;\n"]);return f=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 50px;\n  min-height: 50px;\n  margin: 10px;\n  margin-left: 0;\n\n  font-weight: bold;\n  font-size: 1.3rem;\n\n  background-color: white;\n  border-radius: 50%;\n\n  color: black;\n\n  box-shadow: 0px 1px 5px rgba(0,0,0,0.4);\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 400px;\n  height: 400px;\n  border-radius: 5px;\n  background-color: grey;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);\n  margin-top: 20px;\n"]);return b=function(){return n},n}function m(){var n=Object(u.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n  transition: all ease-in-out 250ms;\n  cursor: pointer;\n  border: none;\n  background: none;\n  color: red;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return m=function(){return n},n}function p(){var n=Object(u.a)([""]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  width: 100%;\n"]);return g=function(){return n},n}function x(){var n=Object(u.a)(["\n  margin: 10%;\n  background-color: white;\n  padding: 30px;\n  border-radius: 4px;\n  position: relative;\n\n  animation: "," 0.2s linear;\n"]);return x=function(){return n},n}function v(){var n=Object(u.a)(["\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return n},n}function w(){var n=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 20px;\n    border-radius: 5px;\n    border: 1px solid rgba(0,0,0,0.2);\n    background-color: grey;\n    margin 20px auto;\n    cursor: pointer;\n    transition: all ease-in-out 250ms;\n    box-shadow: 0px 1px 5px rgba(0,0,0,0.3);\n    color: black;\n    font-weight: bold;\n    font-size: 1.3rem;\n    width: 100px;\n    &:hover {\n      background-color: white;\n    }\n"]);return w=function(){return n},n}function j(){var n=Object(u.a)(["\n  text-align: center;\n  font-size: 1.5rem;\n  \n  \n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  margin: 40px auto;\n  min-width: 300px;\n"]);return O=function(){return n},n}function y(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-item: center;\n\n  color: white;\n\n  margin-top: 100px;\n\n  padding: 20px;\n"]);return y=function(){return n},n}function k(){var n=Object(u.a)(["\n  background-color: ","; \n  color: ",";\n  padding: 10px;\n  border-radius: 4px;\n  font-weight: bold;\n  transition: color ease-in-out 250ms;\n  cursor: pointer;\n  margin-top: 4px;\n\n"]);return k=function(){return n},n}function E(){var n=Object(u.a)(["\nfrom{\n transform: scale(0);\n}to{\ntransform: scale(1);\n}\n"]);return E=function(){return n},n}var M=Object(l.b)(E()),C=l.a.div(k(),(function(n){return n.correct?"red":n.disabled?"grey":n.checked?"#2A9D8F":"#264653"}),(function(n){return n.disabled||n.checked?"white":"black"})),W=l.a.div(y()),A=l.a.div(O()),S=l.a.h1(j()),B=l.a.button(w()),F=l.a.div(v()),z=l.a.div(x(),M),N=l.a.img(g()),q=l.a.div(p()),J=l.a.button(m()),T=(l.a.div(b()),l.a.div(h())),D=l.a.div(f()),I=(l.a.div(s()),l.a.div(d()));function Q(n){var t=n.label,e=n.cB,r=n.id,i=n.checked,o=n.isCorrect,c=n.disabled;return a.a.createElement(C,{checked:i,onClick:function(){return!1===c&&e(r)},disabled:c,correct:o},t)}function G(n){n.id;var t=n.data,e=n.cB,i=n.qNumber,o=Object(r.useState)(null),u=Object(c.a)(o,2),l=u[0],d=u[1],s=Object(r.useState)(!1),f=Object(c.a)(s,2),h=f[0],b=f[1],m=Object(r.useState)(null),p=Object(c.a)(m,2),g=p[0],x=p[1],v=function(n){d(n)};return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null,a.a.createElement(I,null,a.a.createElement(T,null,i),a.a.createElement(S,null,t.statement)),a.a.createElement(A,null,t.answers.map((function(n){return a.a.createElement(Q,{key:n.id,checked:l===n.id,id:n.id,label:n.statement,cB:v,isCorrect:g===n.id,disabled:null!==g&&g!==n.id})}))),a.a.createElement(B,{disabled:null===l,onClick:function(){var n=t.answers.filter((function(n){return!0===n.isCorrect}))[0];n&&(n.id===l?(e(null===g),x(null)):(d(n.id),b(!0),x(n.id)))}},"Answer")),h&&a.a.createElement(F,null,a.a.createElement(z,null,a.a.createElement(J,{onClick:function(){b(!1)}},"x"),a.a.createElement("h1",null,"Tutorial"),t.tutor&&a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{src:t.tutor.image,alt:"Tutorial"}),a.a.createElement(q,null,t.tutor.calculation))))))}var H=e(12),K=e(13);var L=function(){function n(t){Object(H.a)(this,n),this.birthWeight=t.birthWeight||3200,this.age=t.age,this.height=t.height,this.weight=t.weight,this.headCircum=t.headCircum,this.chestCircum=t.chestCircm}return Object(K.a)(n,[{key:"estimatedAge",get:function(){return function(n,t){if(n>=3e4)return[Math.floor((n+2e4)/5e3),"years"];if(n<3e4&&n>1e4){for(var e=1,r=10500;r<=n;)r+=2e3,e++;return[e-1,e-1!==1?"years":"year"]}if(n>t+6200)return[1,"year"];if(n>t+3e3){for(var a=4,i=t+3e3;i<=n;)i+=400,a++;return[a-1,"months"]}if(n>t+600){for(var o=1,c=t+600;c<=n;)c+=800,o++;return[o-1,"months"]}return[1,"month"]}(this.weight,this.birthWeight)}}]),n}(),P=e(14),R=e.n(P),U=e(25),V=[{type:"aW",template:[{data:"A [g], born with the weight of [bw], currently weighs [cw]. What is her expected age?"},{data:"A [g], with a birth weight of [bw], Examined by a pediatrician, weighs [cw]. What is her expected age?"}]}];function X(n){var t=0;return(t=n?Math.floor(800*Math.random())+2600:Math.floor(61600*Math.random())+3200)>=9999?[t/1e3,"kg"]:[t,"g"]}function Y(){var n=X(!0),t=X(!1),e=1===Math.floor(Math.random())?"boy":"girl",r=new L({birthWeight:"kg"===n[1]?1e3*n[0]:n[0],weight:"kg"===t[1]?1e3*t[0]:t[0]}),a=Math.floor(2*Math.random()),i=V[0].template[a].data.replace("[g]",e).replace("[bw]",n[0]+" "+n[1]).replace("[cw]",t);return{id:Object(U.a)(),type:"aW",statement:i,answers:Z(r.estimatedAge).sort((function(n,t){return n.id<t.id})),tutor:{image:R.a}}}function Z(n){return function(n){for(var t=0,e=0,r=n.length-1;r>0;r--)e=Math.floor(Math.random()*r),t=n[r],n[r]=n[e],n[e]=t;return n}([{id:Object(U.a)(),statement:n[0]+" "+n[1],isCorrect:!0},{id:Object(U.a)(),statement:$(n[0])},{id:Object(U.a)(),statement:$(n[0])},{id:Object(U.a)(),statement:$(n[0])}])}function $(n){for(var t=Math.floor(17*Math.random())+1;t===n;)t=Math.floor(17*Math.random())+1;var e="years";return t<12&&(e=0===Math.floor(2*Math.random())?"months":"years"),1===t&&e.replace("s",""),t+" "+e}var _=function(){var n=Object(r.useState)(null),t=Object(c.a)(n,2),e=t[0],i=t[1],o=Object(r.useState)(0),u=Object(c.a)(o,2),l=u[0],d=u[1],s=Object(r.useState)(1),f=Object(c.a)(s,2),h=f[0],b=f[1];return Object(r.useEffect)((function(){var n=Y();i(n)}),[i]),a.a.createElement("div",{className:"App"},a.a.createElement(D,null,"Question passed: ",l),a.a.createElement(G,{data:e,cB:function(n){n&&d((function(n){return n+1})),i(Y()),b((function(n){return n+1}))},qNumber:h}))};o.a.render(a.a.createElement(_,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.25183b80.chunk.js.map