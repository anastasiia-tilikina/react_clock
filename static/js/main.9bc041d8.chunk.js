(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),l=n(5),i=n(4),s=n(1),m=n(0),u=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timerIdClock=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdClock=window.setInterval((function(){e.setState({today:new Date}),console.info(e.formatDate())}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerIdClock)}},{key:"formatDate",value:function(){return this.state.today.toUTCString().slice(-12,-4)}},{key:"render",value:function(){var e=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.formatDate()})]})}}]),n}(s.Component),d=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerIdName=0,e.onClickHandler=function(){e.setState({hasClock:!0}),e.timerIdName=window.setInterval(e.setNewClockName,3300)},e.onContextHandler=function(t){t.preventDefault(),e.setState({hasClock:!1}),clearInterval(e.timerIdName)},e.getRandomName=function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)},e.setNewClockName=function(){var t=e.state.clockName;e.setState({clockName:e.getRandomName()}),console.debug("Renamed from ".concat(t," to ").concat(e.state.clockName))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.timerIdName=window.setInterval(this.setNewClockName,3300),document.addEventListener("click",this.onClickHandler),document.addEventListener("contextmenu",this.onContextHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.onClickHandler),document.removeEventListener("contextmenu",this.onContextHandler)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsx)(u,{clockName:t})]})}}]),n}(s.Component);n(13);a.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9bc041d8.chunk.js.map