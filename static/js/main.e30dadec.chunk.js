(this["webpackJsonprgb-idle"]=this["webpackJsonprgb-idle"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),s=(n(14),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),d=n(8),x=function(){function e(t){Object(s.a)(this,e),this.Hex=void 0,this.Hex=t}return Object(c.a)(e,[{key:"getString",value:function(){return this.Hex.toString()}}]),e}(),v=function(){function e(t,n,a){Object(s.a)(this,e),this.Red=void 0,this.Green=void 0,this.Blue=void 0,this.rgbToHex=function(e,t,n){return"#"+[e,t,n].map((function(e){var t=e.toString(16);return 1===t.length?"0"+t:t})).join("")},this.Red=new x(t),this.Green=new x(n),this.Blue=new x(a)}return Object(c.a)(e,[{key:"getColorString",value:function(){return this.rgbToHex(this.Red.Hex,this.Green.Hex,this.Blue.Hex)}}]),e}(),b=function(e){var t=e.text,n=e.value;return i.a.createElement("div",{class:"h3"},t,": ",n)},m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:"abc",colors:[],pixels:100,to_next_pixel:0,pixel_speed:1,color_cost:5},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){e.once_a_second()}),1e3)}},{key:"once_a_second",value:function(){var e=this.state,t=e.to_next_pixel,n=e.pixel_speed;this.setState((function(){return{to_next_pixel:t+n}})),this.checkToPixels()}},{key:"checkToPixels",value:function(){var e=this.state,t=e.pixels,n=e.to_next_pixel;n>=100&&this.setState((function(){return{to_next_pixel:n-100,pixels:t+1}}))}},{key:"handleChange",value:function(e){this.setState({name:e})}},{key:"handleClick",value:function(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),n=Math.floor(255*Math.random()),a=new v(e,t,n),i=this.state,o=i.color_cost,r=i.pixels;r>=o&&this.setState((function(e){return{colors:[].concat(Object(d.a)(e.colors),[a.getColorString()]),pixels:r-o,color_cost:o+1}}))}},{key:"handlePieceClick",value:function(){var e=this.state.to_next_pixel;this.setState((function(){return{to_next_pixel:e+1}})),this.checkToPixels()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col"},i.a.createElement(b,{text:"To Next Pixel",value:this.state.to_next_pixel})),i.a.createElement("div",{class:"col"},i.a.createElement(b,{text:"Pixels",value:this.state.pixels})),i.a.createElement("div",{class:"col"},i.a.createElement(b,{text:"Colors",value:this.state.colors.length}))),i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col"},i.a.createElement("button",{class:"btn btn-primary btn-block",onClick:function(t){return e.handlePieceClick(t)}},"Get Pixel Piece"),i.a.createElement("div",{class:"progress-bar",role:"progressbar","aria-valuenow":this.state.to_next_pixel,"aria-valuemin":"0","aria-valuemax":"100",style:{width:this.state.to_next_pixel+"%",height:"30px"}})),i.a.createElement("div",{class:"col"},i.a.createElement("div",{class:"row"},i.a.createElement("button",{id:"color-btn",class:"btn btn-primary btn-block",disabled:this.state.pixels<this.state.color_cost,onClick:function(t){return e.handleClick(t)}},"Add New Color (Cost: ",this.state.color_cost," Pixels)")),i.a.createElement("div",{class:"row"},this.state.colors.map((function(e){return i.a.createElement("button",{class:"btn btn-color",disabled:!0,style:{backgroundColor:e}},e)}))))))}}]),t}(a.Component),p=(n(15),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m,null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e30dadec.chunk.js.map