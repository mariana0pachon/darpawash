(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon-1.a3a5dfcd.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-2.29b4ca3c.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-3.4c8d2bc6.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-4.16643722.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-5.b85845d3.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-6.06e798b9.svg"},function(e,t,a){e.exports=a.p+"static/media/diagram1.88be7315.jpg"},function(e,t,a){e.exports=a.p+"static/media/diagram2.61cc818a.jpg"},function(e,t,a){e.exports=a.p+"static/media/diagram3.fb859c95.jpg"},function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(7),i=a.n(r),s=(a(23),a(1)),l=a(2),m=a(4),o=a(3),u=a(5),d=(a(25),function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"menuClick",value:function(e){switch(this.props.menuClick(e),document.getElementById(e).className=" current-menu ",e){case"overview":document.getElementById("people").className-=" current-menu ",document.getElementById("news").className-=" current-menu ",document.getElementById("contact").className-=" current-menu ";break;case"people":document.getElementById("overview").className-=" current-menu ",document.getElementById("news").className-=" current-menu ",document.getElementById("contact").className-=" current-menu ";break;case"news":document.getElementById("overview").className-=" current-menu ",document.getElementById("people").className-=" current-menu ",document.getElementById("contact").className-=" current-menu ";break;case"contact":document.getElementById("overview").className-=" current-menu ",document.getElementById("news").className-=" current-menu ",document.getElementById("people").className-=" current-menu "}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"menu"},n.a.createElement("a",{id:"overview",onClick:function(){return e.menuClick("overview")}},"Overview"),n.a.createElement("a",{id:"people",onClick:function(){return e.menuClick("people")}},"People"),n.a.createElement("div",null,"Logo"),n.a.createElement("a",{id:"news",onClick:function(){return e.menuClick("news")}},"News"),n.a.createElement("a",{id:"contact",onClick:function(){return e.menuClick("contact")}},"Contact"))}}]),t}(c.Component)),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={quote:1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"changeQuote_Click",value:function(e){switch(this.setState({quote:e}),document.getElementById("home-circle-"+e).className=" current-slider ",e){case 1:document.getElementById("home-circle-2").className=" slider-circle ",document.getElementById("home-circle-3").className=" slider-circle ",document.getElementById("home-circle-4").className=" slider-circle ";break;case 2:document.getElementById("home-circle-1").className=" slider-circle ",document.getElementById("home-circle-3").className=" slider-circle ",document.getElementById("home-circle-4").className=" slider-circle ";break;case 3:document.getElementById("home-circle-1").className=" slider-circle ",document.getElementById("home-circle-2").className=" slider-circle ",document.getElementById("home-circle-4").className=" slider-circle ";break;case 4:document.getElementById("home-circle-1").className=" slider-circle ",document.getElementById("home-circle-2").className=" slider-circle ",document.getElementById("home-circle-3").className=" slider-circle "}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"homepage"},n.a.createElement("div",{className:"home-title"},"Warfighter Analytics for Smartphone Healthcare"),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("div",{className:"home-divider"})),n.a.createElement("div",{className:"home-subtitle"},"Worcester Polytechnic Institute"),1===this.state.quote?n.a.createElement("div",{className:"home-quote"},'"One of four notable quotes"'):2===this.state.quote?n.a.createElement("div",{className:"home-quote"},'"Two of four notable quotes"'):3===this.state.quote?n.a.createElement("div",{className:"home-quote"},'"Three of four notable quotes"'):4===this.state.quote?n.a.createElement("div",{className:"home-quote"},'"Four of four notable quotes"'):null,n.a.createElement("div",{className:"centering-guide"},n.a.createElement("div",{id:"home-circle-1",onClick:function(){return e.changeQuote_Click(1)},className:" current-slider "}),n.a.createElement("div",{id:"home-circle-2",onClick:function(){return e.changeQuote_Click(2)},className:" slider-circle "}),n.a.createElement("div",{id:"home-circle-3",onClick:function(){return e.changeQuote_Click(3)},className:" slider-circle "}),n.a.createElement("div",{id:"home-circle-4",onClick:function(){return e.changeQuote_Click(4)},className:" slider-circle "})),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("div",{className:"down-arrow"})))}}]),t}(c.Component),h=a(8),E=a.n(h),v=a(9),p=a.n(v),N=a(10),f=a.n(N),b=a(11),y=a.n(b),k=a(12),w=a.n(k),I=a(13),B=a.n(I),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"overview-text"},n.a.createElement("div",{className:"overview-description"},n.a.createElement("b",null,"Warfighters face an increased exposure to "),"various ailments such as Traumatic Brain Injury (TBI) and infectious diseases. Digital biomarkers are smartphone-sensable user behaviors that can reliably indicate the health status, ailment symptoms and condition of the smartphone user. For example, an ailing smartphone user may exhibit reduced daily step counts or stay longer in sedentary activity states during their day.",n.a.createElement("br",null),n.a.createElement("br",null),"Funded by the DARPA Warfighter Analytics using Smartphones for Health (WASH) project, our team is researching and developing machine/deep learning algorithms that synthesize reliable smartphone biomarkers that enable continuous, real-time assessment of TBI and infectious diseases afflicting warfighters by leveraging data unobtrusively captured from smartphone sensors."),n.a.createElement("div",{className:"overview-icons centering-guide"},n.a.createElement("div",{className:"icon-title"},"Our approach includes:"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"icon-row"},n.a.createElement("div",{className:"centering-guide"},n.a.createElement("img",{src:E.a,className:"icon"}),n.a.createElement("p",{className:"icon-description"},"Feature engineering of smartphone sensor data")),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("img",{src:p.a,className:"icon"}),n.a.createElement("p",{className:"icon-description"},"Statistical modeling of personalized behavior typical of a smartphone user")),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("img",{src:f.a,className:"icon"}),n.a.createElement("p",{className:"icon-description"},"Detection of higher-order activity states from low-level signals"))),n.a.createElement("div",{className:"icon-row"},n.a.createElement("div",{className:"centering-guide"},n.a.createElement("img",{src:y.a,className:"icon"}),n.a.createElement("p",{className:"icon-description"},"Machine/Deep learning of robust outliers or deviations from normal, healthy behavior")),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("img",{src:w.a,className:"icon"}),n.a.createElement("p",{className:"icon-description"},"Inference of classes of diseases affecting a smartphone user")),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("img",{src:B.a,className:"icon"}),n.a.createElement("p",{className:"icon-description"},"Empirical study and evaluation of robustness of biomarker detectors")))))}}]),t}(c.Component),j=a(14),O=a.n(j),_=a(15),q=a.n(_),x=a(16),D=a.n(x),S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={current_diagram:1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"changeDiagram_Click",value:function(e){switch(this.setState({current_diagram:e}),document.getElementById("diagram-circle-"+e).className=" current-slider ",e){case 1:document.getElementById("diagram-circle-2").className=" slider-circle ",document.getElementById("diagram-circle-3").className=" slider-circle ";break;case 2:document.getElementById("diagram-circle-1").className=" slider-circle ",document.getElementById("diagram-circle-3").className=" slider-circle ";break;case 3:document.getElementById("diagram-circle-1").className=" slider-circle ",document.getElementById("diagram-circle-2").className=" slider-circle "}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"diagram-layout"},n.a.createElement("div",{className:"diagram-slider-top"},n.a.createElement("div",{id:"diagram-back-arrow",className:"back-arrow"}),1===this.state.current_diagram?n.a.createElement("img",{src:O.a,className:"diagram-content"}):2===this.state.current_diagram?n.a.createElement("img",{src:q.a,className:"diagram-content"}):3===this.state.current_diagram?n.a.createElement("img",{src:D.a,className:"diagram-content"}):null,n.a.createElement("div",{id:"diagram-front-arrow",className:"front-arrow"})),n.a.createElement("div",{className:"centering-guide"},n.a.createElement("div",{id:"diagram-circle-1",onClick:function(){return e.changeDiagram_Click(1)},className:" current-slider "}),n.a.createElement("div",{id:"diagram-circle-2",onClick:function(){return e.changeDiagram_Click(2)},className:" slider-circle "}),n.a.createElement("div",{id:"diagram-circle-3",onClick:function(){return e.changeDiagram_Click(3)},className:" slider-circle "})))}}]),t}(c.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"overview"},n.a.createElement(C,null),n.a.createElement(S,null))}}]),t}(c.Component),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).menuClick=function(t){e.setState({current_page:t}),console.log(e.state.current_page)},e.state={current_page:"home"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(d,{menuClick:this.menuClick}),n.a.createElement(g,null),n.a.createElement(W,null))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.b7e56e3a.chunk.js.map