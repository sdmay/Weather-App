(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),i=(a(22),a(10)),c=a(11),u=a(14),s=a(12),m=a(15),p=a(13),v=a.n(p),E=(a(43),function(e){var t=e.city[0].toUpperCase()+e.city.substr(1),a=e.state.toUpperCase();return o.a.createElement("div",null,o.a.createElement("h1",null,"It is ",e.temperature," degrees in ",t,", ",a))}),h=function(e){return o.a.createElement("div",null,o.a.createElement("h2",{style:{color:"red"}},e.city," was not found."))},d=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={loaded:!1,error:!1,city:"",state:"",temperature:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"cityChange",value:function(e){e.preventDefault(),this.setState({city:e.currentTarget.value})}},{key:"handleStateSelection",value:function(e){console.log(e.currentTarget.value),this.setState({state:e.currentTarget.value})}},{key:"getTemperature",value:function(){var e=this;if(console.log("CLICKIII"),0===this.state.city.length)return alert("You must enter a city!"),!1;if(""===this.state.state)return alert("You must select a state!"),!1;console.log(this.state.city,this.state.state);v.a.get("weather/".concat(this.state.city,"/").concat(this.state.state)).then(function(t){t.data.error&&(console.log(t.data.error),e.setState({loaded:!0,error:!0})),t.data.temperature&&(console.log("It is ".concat(t.data.temperature," degrees in ").concat(e.state.city,", ").concat(e.state.state)),e.setState({temperature:t.data.temperature,loaded:!0}))}).catch(function(e){return e})}},{key:"resetState",value:function(){this.setState({loaded:!1,error:!1,city:"",state:"",temperature:0})}},{key:"render",value:function(){var e=this;return console.log(this.state.city),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"CNC Machines Weather App"),this.state.loaded?null:o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{name:"City",placeholder:"Enter City",onChange:function(t){return e.cityChange(t)}}),o.a.createElement("select",{value:this.state.state,onChange:function(t){return e.handleStateSelection(t)}},o.a.createElement("option",{value:""},"Select State"),o.a.createElement("option",{value:"AL"},"Alabama"),o.a.createElement("option",{value:"AK"},"Alaska"),o.a.createElement("option",{value:"AZ"},"Arizona"),o.a.createElement("option",{value:"AR"},"Arkansas"),o.a.createElement("option",{value:"CA"},"California"),o.a.createElement("option",{value:"CO"},"Colorado"),o.a.createElement("option",{value:"CT"},"Connecticut"),o.a.createElement("option",{value:"DE"},"Delaware"),o.a.createElement("option",{value:"FL"},"Florida"),o.a.createElement("option",{value:"GA"},"Georgia"),o.a.createElement("option",{value:"HI"},"Hawaii"),o.a.createElement("option",{value:"ID"},"Idaho"),o.a.createElement("option",{value:"IL"},"Illinois"),o.a.createElement("option",{value:"IN"},"Indiana"),o.a.createElement("option",{value:"IA"},"Iowa"),o.a.createElement("option",{value:"KS"},"Kansas"),o.a.createElement("option",{value:"KY"},"Kentucky"),o.a.createElement("option",{value:"LA"},"Louisiana"),o.a.createElement("option",{value:"ME"},"Maine"),o.a.createElement("option",{value:"MD"},"Maryland"),o.a.createElement("option",{value:"MA"},"Massachusetts"),o.a.createElement("option",{value:"MI"},"Michigan"),o.a.createElement("option",{value:"MN"},"Minnesota"),o.a.createElement("option",{value:"MS"},"Mississippi"),o.a.createElement("option",{value:"MO"},"Missouri"),o.a.createElement("option",{value:"MT"},"Montana"),o.a.createElement("option",{value:"NE"},"Nebraska"),o.a.createElement("option",{value:"NV"},"Nevada"),o.a.createElement("option",{value:"NH"},"New Hampshire"),o.a.createElement("option",{value:"NJ"},"New Jersey"),o.a.createElement("option",{value:"NM"},"New Mexico"),o.a.createElement("option",{value:"NY"},"New York"),o.a.createElement("option",{value:"NC"},"North Carolina"),o.a.createElement("option",{value:"ND"},"North Dakota"),o.a.createElement("option",{value:"OH"},"Ohio"),o.a.createElement("option",{value:"OK"},"Oklahoma"),o.a.createElement("option",{value:"OR"},"Oregon"),o.a.createElement("option",{value:"PA"},"Pennsylvania"),o.a.createElement("option",{value:"RI"},"Rhode Island"),o.a.createElement("option",{value:"SC"},"South Carolina"),o.a.createElement("option",{value:"SD"},"South Dakota"),o.a.createElement("option",{value:"TN"},"Tennessee"),o.a.createElement("option",{value:"TX"},"Texas"),o.a.createElement("option",{value:"UT"},"Utah"),o.a.createElement("option",{value:"VT"},"Vermont"),o.a.createElement("option",{value:"VA"},"Virginia"),o.a.createElement("option",{value:"WA"},"Washington"),o.a.createElement("option",{value:"WV"},"West Virginia"),o.a.createElement("option",{value:"WI"},"Wisconsin"),o.a.createElement("option",{value:"WY"},"Wyoming"))," "),this.state.loaded?o.a.createElement("button",{onClick:function(){return e.resetState()}},"Reset"):o.a.createElement("button",{onClick:function(){return e.getTemperature()}},"Get Temperature"),this.state.loaded&&!this.state.error?o.a.createElement(E,{temperature:this.state.temperature,city:this.state.city,state:this.state.state}):null,this.state.loaded&&this.state.error?o.a.createElement(h,{city:this.state.city}):null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.293300a3.chunk.js.map