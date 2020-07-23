(this["webpackJsonpreinforcement-demo"]=this["webpackJsonpreinforcement-demo"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),r=n(3),s=n.n(r),o=(n(12),n(13),n(6)),h=n(1),c=n(4),l=n(5),u=function(){function t(e){var n=e.two,i=e.x,a=e.y;Object(c.a)(this,t);var r=[0,0];this.baseX=r[0],this.baseY=r[1];var s={x:this.baseX-15,y:this.baseY+8},o=this.baseX+15;this.baseY;this.two=n;var l=new h.a.Ellipse(this.baseX,this.baseY,30,10);l.fill="#AAAAAA";var u=new h.a.ArcSegment(this.baseX,this.baseY,0,15,-Math.PI,0);u.fill="#DDDDDD",this.leftFlameTip=new h.a.Anchor(s.x,s.y+15);var f=[new h.a.Anchor(s.x-5,s.y),this.leftFlameTip,new h.a.Anchor(s.x+5,s.y)],g=new h.a.Path(f,!1,!1);g.fill="Red";var y=g.clone();this.rightFlameTip=y.vertices[1],y.vertices.forEach((function(t){t.x+=o-s.x})),this.group=n.makeGroup(g,y,l,u),n.add(this.group),this.group.translation.set(i,a),this.leftEngine=!0,this.rightEngine=!0,this.v=new h.a.Vector(0,0),this.aV=0}return Object(l.a)(t,[{key:"reset",value:function(t,e){this.group.translation.set(t,e),this.group.rotation=0,this.v.set(0,0),this.aV=0,this.leftEngine=!0,this.rightEngine=!0}},{key:"applyPhysics",value:function(t){if(!((t/=1e3)>1)){var e=this.acceleration,n=this.angularAcceleration;this.group.translation.addSelf(this.v.clone().multiplyScalar(t));var i=this.group.translation.clone();i.x=Math.max(this.minX,Math.min(i.x,this.maxX)),i.y=Math.max(this.minY,Math.min(i.y,this.maxY)),this.group.translation=i,this.group.rotation+=this.aV*t,this.v.multiplyScalar(1-t*this.velocityDecay),this.v.addSelf(e.multiplyScalar(t)),this.v.x=this.minX<i.x&&i.x<this.maxX?this.v.x:this.v.x/1e3,this.v.y=this.minY<i.y&&i.y<this.maxY?this.v.y:this.v.y/1e3,this.aV*=1-t*this.angularDecay,this.aV+=n}}},{key:"theta",get:function(){return this.group.rotation-Math.PI/2}},{key:"state",get:function(){return{pos:this.group.translation,v:this.v,aV:this.aV}}},{key:"gravity",get:function(){return 300}},{key:"engineForce",get:function(){return 250}},{key:"engineTorque",get:function(){return.1}},{key:"velocityDecay",get:function(){return.2}},{key:"angularDecay",get:function(){return.2}},{key:"maxY",get:function(){return this.two.height-20}},{key:"maxX",get:function(){return this.two.width-20}},{key:"minY",get:function(){return 20}},{key:"minX",get:function(){return 20}},{key:"acceleration",get:function(){var t=this.theta,e=[this.le,this.re],n=((e[0]?1:0)+(e[1]?1:0))*this.engineForce,i=this.gravity+n*Math.sin(t),a=n*Math.cos(t);return new h.a.Vector(a,i)}},{key:"angularAcceleration",get:function(){var t=[this.leftEngine,this.rightEngine],e=t[0],n=t[1];return e&&!n?this.engineTorque:!e&&n?-this.engineTorque:0}},{key:"le",get:function(){return this.leftEngine},set:function(t){this.leftEngine=t,this.leftFlameTip.y=t?this.baseY+23:this.baseY}},{key:"re",get:function(){return this.rightEngine},set:function(t){this.rightEngine=t,this.rightFlameTip.y=t?this.baseY+23:this.baseY}}]),t}(),f=new h.a({height:500,width:800,autostart:!0});f.makePath(0,0,0,500,15,480,15,0,!0).fill="#e5e5e5",f.makePath(15,480,800,480,800,500,0,500).fill="#ccddcc",f.makeLine(390,240,410,260),f.makeLine(410,240,390,260);var g=new u({two:f,x:100,y:100});function y(t){var e=Object(i.useRef)(null),n=Object(i.useState)(!1),r=Object(o.a)(n,2),s=r[0],h=r[1];return Object(i.useEffect)((function(){f&&(f.appendTo(e.current),f.play())}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(t){t.preventDefault(),g.reset(100,100),s&&(f.bind("update",(function(t,e){g.applyPhysics(e)})),h(!1))}},"Reset"),a.a.createElement("button",{onClick:function(t){t.preventDefault(),s?(f.bind("update",(function(t,e){g.applyPhysics(e)})),h(!1)):(f.unbind("update"),h(!0))}},s?"Start":"Stop"),a.a.createElement("p",null,"Use \u2190 and \u2192 to turn on the left and right engines. Aim for the X."),a.a.createElement("br",null),a.a.createElement("div",{ref:e,style:{border:"solid",display:"inline-block"}}))}document.addEventListener("keydown",(function(t){switch(t.keyCode){case 37:t.preventDefault(),g.le=!g.le;break;case 39:t.preventDefault(),g.re=!g.re;break;default:return}})),f.bind("update",(function(t,e){g.applyPhysics(e)}));var m=function(){return a.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.c3bf9620.chunk.js.map