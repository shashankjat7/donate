(window.webpackJsonpdonate=window.webpackJsonpdonate||[]).push([[0],{35:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/vampire.41dca3be.jpeg"},47:function(e,t,a){e.exports=a(84)},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),c=a(6),i=a(7),u=a(9),m=a(8),s=a(10),d=(a(35),a(14)),p=a(43),h=a.n(p),E=a(16),b=a.n(E),g=(a(41),function(e){var t=e.bank,a=e.onRequest,n=e.onDonate,r=e.onDetails,o=[];return o.push(t),l.a.createElement("div",{className:"item bank-item"},l.a.createElement("div",{className:"ui image"},l.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/1297/1297136.png",alt:""})),l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,t.hospital),l.a.createElement("div",{className:"meta"},l.a.createElement("span",null,"Address: ",t.address)),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"Phone : ",t.phone),l.a.createElement("p",null,"O+: ",t.OP," O-: ",t.ON," A+:",t.AP," A-:",t.AN," B+: ",t.BP," B-: ",t.BN," AB+: ",t.ABP," AB-: ",t.ABN)),l.a.createElement("div",{className:"extra"},l.a.createElement("button",{className:"ui red button",onClick:function(){return a(t._id)}},"Request"),l.a.createElement("button",{className:"ui green button",onClick:function(){return n(t._id)}},"Donate"),l.a.createElement("button",{className:"ui blue button",onClick:function(){return r(o)}},"Details"))))}),f=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui big text loader"},e.message))};f.defaultProps={message:"Loading..."};var v=f,N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={banks:[],cards:[]},a.renderBanks=function(){if(0!==a.state.banks.length){console.log("yes");var e=a.state.banks.map(function(e){return l.a.createElement("div",{className:"item"},l.a.createElement(g,{bank:e,onRequest:a.props.onRequest,onDonate:a.props.onDonate,onDetails:a.props.onDetails}))});return l.a.createElement("div",{className:"ui divided items bank-list"},e)}return l.a.createElement("div",null,l.a.createElement(v,{message:"fetching data..."}))},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://ancient-mountain-97159.herokuapp.com/banks",{}).then(function(t){e.setState({banks:t.data})})}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderBanks())}}]),t}(l.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100 requestimg",src:"https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80",alt:"First slide"}),l.a.createElement(d.a.Caption,null,l.a.createElement("h1",null,"Donate Blood Save Lives"),l.a.createElement("p",null,"Your life is worthless..at least save someone else's"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.props.changeId(1)},className:"ui orange button"},"Donate"),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100 requestimg",src:"https://images.unsplash.com/photo-1538901742566-3bdf406c1f1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:"Third slide"}),l.a.createElement(d.a.Caption,null,l.a.createElement("h1",null,"Find Blood Banks"),l.a.createElement("p",null,"EMERGENCY!!! Find Blood banks..and request for blood"),l.a.createElement("br",null),l.a.createElement("button",{className:"ui red button",onClick:function(){e.props.changeId(1)}},"FIND"),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(d.a.Item,null,l.a.createElement("img",{className:"d-block w-100 requestimg",src:h.a,alt:"Third slide"}),l.a.createElement(d.a.Caption,null,l.a.createElement("h3",null,"VAMPIRE MODE"),l.a.createElement("p",null,"Are you a VAMPIRE..and experience difficulty surviving in this cruel world...we've got you covered"),l.a.createElement("br",null),l.a.createElement("button",{className:"ui red button"},"I'm Feeling Bloody"),l.a.createElement("button",{className:"ui green button"},"Find Blood Banks"),l.a.createElement("button",{className:"ui blue button"},"Sell Blood"),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(l.a.Component),O=a(24),k=a(22),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=function(){e.props.changeId(0)};return l.a.createElement(O.a,{bg:"dark",expand:"lg",className:"x",variant:"dark",fixed:"top"},l.a.createElement(O.a.Brand,{href:"#home",onClick:t},"Donate"),l.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(k.a,{className:"mr-auto"},l.a.createElement(k.a.Link,{href:"#home",onClick:t},"Home"),l.a.createElement(k.a.Link,{href:"#donate",onClick:function(){e.props.changeId(1)}},"Donate"),l.a.createElement(k.a.Link,{href:"#request",onClick:function(){e.props.changeId(1)}},"Request"),l.a.createElement(k.a.Link,{href:"#vampire"},"Vampire"))))}}]),t}(l.a.Component),C=a(21),q=a.n(C),I=a(27),A=(a(82),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",group:"",quantity:null},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onGroupChange=function(e){a.setState({group:e.target.value})},a.onQuantityChange=function(e){a.setState({quantity:e.target.value})},a.onFormSubmit=function(){var e=Object(I.a)(q.a.mark(function e(t){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.preventDefault(),b.a.post("https://ancient-mountain-97159.herokuapp.com/request",{id:a.props.bankId,name:a.state.name,group:a.state.group,quantity:a.state.quantity}),a.props.changeId(1),alert("HAPPY TO HELP..GOD BLESS YOU\nDONT FORGET TO DONATE IF YOU CAN!!");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.bankId),l.a.createElement("div",{className:"ui container form-container"},l.a.createElement("h1",null,"Fill out the form to request for blood"),l.a.createElement("br",null),l.a.createElement("form",{action:"/request",className:"ui form",onSubmit:this.onFormSubmit,method:"post"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:""},"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:this.onNameChange,required:!0})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:""},"Blood Group"),l.a.createElement("input",{onChange:this.onGroupChange,type:"text",name:"group",placeholder:"blood group: OP/ON/AP/AN/BP/BN/ABP/ABN",required:!0})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:""},"Quantity(ml)"),l.a.createElement("input",{onChange:this.onQuantityChange,type:"number",name:"quantity",placeholder:"enter the quantity in ml",required:!0})),l.a.createElement("button",{className:"ui button"},"Submit")))}}]),t}(l.a.Component)),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",group:"",quantity:null},a.onNameChange=function(e){a.setState({name:e.target.value})},a.onGroupChange=function(e){a.setState({group:e.target.value})},a.onQuantityChange=function(e){a.setState({quantity:e.target.value})},a.onFormSubmit=function(){var e=Object(I.a)(q.a.mark(function e(t){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t.preventDefault(),b.a.post("https://ancient-mountain-97159.herokuapp.com/donate",{id:a.props.bankId,name:a.state.name,group:a.state.group,quantity:a.state.quantity}),a.props.changeId(1),alert("THANK YOU FOR YOUR DONATION");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.bankId),l.a.createElement("div",{className:"ui container form-container"},l.a.createElement("h1",null,"Donate Blood"),l.a.createElement("br",null),l.a.createElement("form",{action:"/request",className:"ui form",onSubmit:this.onFormSubmit,method:"post"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:""},"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"name",onChange:this.onNameChange,required:!0})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:""},"Blood Group"),l.a.createElement("input",{onChange:this.onGroupChange,type:"text",name:"group",placeholder:"blood group: OP/ON/AP/AN/BP/BN/ABP/ABN",required:!0})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:""},"Quantity(ml)"),l.a.createElement("input",{onChange:this.onQuantityChange,type:"number",name:"quantity",placeholder:"enter the quantity in ml",required:!0})),l.a.createElement("button",{className:"ui button"},"Submit")))}}]),t}(l.a.Component),D=(a(83),function(e){var t=e.item;return l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Name"},t.name),l.a.createElement("td",{"data-label":"Blood Group"},t.group),l.a.createElement("td",{"data-label":"Quantity"},t.quantity),l.a.createElement("td",{"data-label":"Donate/Request"},t.type),l.a.createElement("td",{data_label:"Date"},t.date))}),P=function(e){var t=e.bank,a=t.history.map(function(e){return l.a.createElement("tbody",null,l.a.createElement(D,{item:e}))});return console.log(t),l.a.createElement("div",{className:"ui container details"},l.a.createElement("h1",null,t.hospital),l.a.createElement("p",null,t.address),l.a.createElement("h5",null,"Phone : ",t.phone),l.a.createElement("h2",null,"Availability: "),l.a.createElement("table",{className:"ui table"},l.a.createElement("thead",{className:"center aligned"},l.a.createElement("tr",null,l.a.createElement("th",null,"Blood Group"),l.a.createElement("th",null,"Quantity(ml)"))),l.a.createElement("tbody",{className:"center aligned"},l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"O+"),l.a.createElement("td",{"data-label":"Quantity"},t.OP)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"O-"),l.a.createElement("td",{"data-label":"Quantity"},t.ON)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"A+"),l.a.createElement("td",{"data-label":"Quantity"},t.AP)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"A-"),l.a.createElement("td",{"data-label":"Quantity"},t.AN)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"B+"),l.a.createElement("td",{"data-label":"Quantity"},t.BP)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"B-"),l.a.createElement("td",{"data-label":"Quantity"},t.BN)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"AB+"),l.a.createElement("td",{"data-label":"Quantity"},t.ABP)),l.a.createElement("tr",null,l.a.createElement("td",{"data-label":"Blood Group"},"AB-"),l.a.createElement("td",{"data-label":"Quantity"},t.ABN)))),l.a.createElement("br",null),l.a.createElement("h2",null,"History"),l.a.createElement("table",{className:"ui table center aligned"},l.a.createElement("thead",{className:"center aligned"},l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Blood Group"),l.a.createElement("th",null,"Quantity(ml)"),l.a.createElement("th",null,"Donate/Request"),l.a.createElement("th",null,"Date"))),a))},S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={component_id:0,selected_id:null,selected_bank:[]},a.changeComponentId=function(e){a.setState({component_id:e})},a.onRequest=function(e){console.log(e),a.setState({component_id:4,selected_id:e})},a.onDonate=function(e){a.setState({component_id:2,selected_id:e})},a.onDetails=function(e){a.setState({component_id:3,selected_bank:e})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return 0===this.state.component_id?l.a.createElement("div",null,l.a.createElement(B,{changeId:this.changeComponentId}),l.a.createElement(y,{changeId:this.changeComponentId})):1===this.state.component_id?l.a.createElement("div",{className:"ui container"},l.a.createElement(B,{changeId:this.changeComponentId}),l.a.createElement(N,{onRequest:this.onRequest,onDonate:this.onDonate,onDetails:this.onDetails})):4===this.state.component_id?l.a.createElement("div",null,l.a.createElement(B,{changeId:this.changeComponentId}),l.a.createElement(A,{bankId:this.state.selected_id,changeId:this.changeComponentId})):2===this.state.component_id?l.a.createElement("div",null,l.a.createElement(B,{changeId:this.changeComponentId}),l.a.createElement(j,{bankId:this.state.selected_id,changeId:this.changeComponentId})):3===this.state.component_id?l.a.createElement("div",null,l.a.createElement(B,{changeId:this.changeComponentId}),l.a.createElement(P,{bank:this.state.selected_bank[0],changeId:this.changeComponentId})):void 0}}]),t}(l.a.Component);o.a.render(l.a.createElement(S,null),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.389540cd.chunk.js.map