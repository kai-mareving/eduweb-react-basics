(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports={wrapper:"Form_wrapper__2HZ7H",form:"Form_form__2f6Q_",formItem:"Form_formItem__3RIme",formItemBar:"Form_formItemBar__1ThQP",label:"Form_label__1CVzo",input:"Form_input__tsJkO",textarea:"Form_textarea__2hUfK"}},18:function(e,t,a){e.exports={button:"Button_button__1jHGa",secondary:"Button_secondary__2yUEp"}},19:function(e,t,a){e.exports={noItems:"List_noItems__V8zVT"}},22:function(e,t,a){e.exports={wrapper:"Header_wrapper__3r140",logo:"Header_logo__Xz2Yb"}},23:function(e,t,a){e.exports={wrapper:"Modal_wrapper__2y3i6",closeButton:"Modal_closeButton__MCOgO"}},24:function(e,t,a){e.exports={radio:"FormRadio_radio__O6wzm",radioButton:"FormRadio_radioButton__3d5c-"}},30:function(e,t,a){e.exports={title:"Title_title__EJtcA"}},32:function(e,t,a){e.exports=a.p+"static/media/logo.a87d0f35.svg"},34:function(e,t,a){e.exports=a(57)},39:function(e,t,a){},4:function(e,t,a){e.exports={wrapper:"HeaderNavigation_wrapper__2xsGa",navItem:"HeaderNavigation_navItem__qt4p_",navItemLink:"HeaderNavigation_navItemLink__pVt4H",navItemLinkActive:"HeaderNavigation_navItemLinkActive__2tdUa"}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=a(29),i=a(5),m=a(33),s=a(10),u=a(11),p=a(13),d=a(12),_=a(14),f=r.a.createContext(),h=a(6),E=a(1),g=(a(39),a(9)),v=a.n(g),I=a(15),w=a(18),b=a.n(w),N=function(e){var t=e.children,a=e.href,n=e.secondary,l=Object(I.a)(e,["children","href","secondary"]),c=n?b.a.secondary:b.a.button;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:c},t):r.a.createElement("button",Object.assign({className:c},l),t))},k=a(30),y=a.n(k),x=function(e){var t=e.children;return r.a.createElement("h2",{className:y.a.title},t)},O=function(e){var t=e.title,a=e.description,n=e.link,l=e.image,c=e.type,o=l?"img":"div";return r.a.createElement("li",{className:v.a.wrapper},l&&r.a.createElement(o,{src:l,className:l?v.a.image:v.a.imageNone,alt:t}),r.a.createElement("div",null,r.a.createElement(x,null,t),r.a.createElement("p",{className:v.a.description},a),n&&r.a.createElement(N,{href:n},"visit ",c," page")))};O.defaultProps={image:null,link:null};var C=O,F=a(19),L=a.n(F),j=function(e){var t=e.items;return r.a.createElement(r.a.Fragment,null,t.length?r.a.createElement("ul",{className:L.a.wrapper},t.map(function(e,t){return r.a.createElement(C,Object.assign({key:t},e))})):r.a.createElement("h1",{className:L.a.noItems},"There is nothing here yet. Please add an item!"))},M=function(){return r.a.createElement(f.Consumer,null,function(e){return r.a.createElement(j,{items:e.article})})},B=function(){return r.a.createElement(f.Consumer,null,function(e){return r.a.createElement(j,{items:e.note})})},T=function(){return r.a.createElement(f.Consumer,null,function(e){return r.a.createElement(j,{items:e.twitter})})},A=a(4),H=a.n(A),U=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:H.a.wrapper},r.a.createElement("li",{className:H.a.navItem},r.a.createElement(h.b,{exact:!0,activeClassName:H.a.navItemLinkActive,className:H.a.navItemLink,to:"/"},"twitters")),r.a.createElement("li",{className:H.a.navItem},r.a.createElement(h.b,{activeClassName:H.a.navItemLinkActive,className:H.a.navItemLink,to:"/articles"},"articles")),r.a.createElement("li",{className:H.a.navItem},r.a.createElement(h.b,{activeClassName:H.a.navItemLinkActive,className:H.a.navItemLink,to:"/notes"},"notes"))))},z=a(22),S=a.n(z),J=a(32),P=a.n(J),Q=function(e){var t=e.openModalFn;return r.a.createElement("header",{className:S.a.wrapper},r.a.createElement("img",{className:S.a.logo,src:P.a,alt:"FavNote logo"}),r.a.createElement(U,null),r.a.createElement(N,{onClick:t,secondary:!0},"new item"))},V=a(23),q=a.n(V),G=a(16),K=a.n(G),R=a(7),D=a.n(R),X=function(e){var t=e.tag,a=e.name,n=e.label,l=e.maxLength,c=Object(I.a)(e,["tag","name","label","maxLength"]);return r.a.createElement("div",{className:D.a.formItem},r.a.createElement(t,Object.assign({className:"textarea"===t?D.a.textarea:D.a.input,type:"text",name:a,id:a,required:!0,maxLength:l,placeholder:" "},c)),r.a.createElement("label",{className:D.a.label,htmlFor:a},n),r.a.createElement("div",{className:D.a.formItemBar}))};X.defaultProps={tag:"input",maxLength:200};var Y=X,Z=a(24),W=a.n(Z),$=function(e){var t=e.id,a=e.checked,n=e.changeFn,l=e.children;return r.a.createElement("label",{className:W.a.radio},r.a.createElement("input",{id:t,type:"radio",checked:a,onChange:n}),r.a.createElement("div",{className:W.a.radioButton}),l)},ee={twitter:"twitter",article:"article",note:"note"},te={twitter:"Twitter account",article:"Article",note:"Note"},ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={type:ee.twitter,title:"",link:"",image:"",description:""},a.handleFormType=function(e){a.setState({type:e})},a.handleInputChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value)),console.log("\n      title: ".concat(a.state.title,",\n      link: ").concat(a.state.link,",\n      image: ").concat(a.state.image,",\n      description: ").concat(a.state.description,",\n    "))},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.type;return r.a.createElement(f.Consumer,null,function(a){return r.a.createElement("div",{className:K.a.wrapper},r.a.createElement(x,null,"Add new ",te[e.state.type]),r.a.createElement("form",{autoComplete:"off",className:K.a.form,onSubmit:function(t){return a.addItem(t,e.state)}},r.a.createElement("div",{className:K.a.formOptions},r.a.createElement($,{id:ee.twitter,checked:e.state.type===ee.twitter,changeFn:function(){return e.handleFormType(ee.twitter)}},"Twitter"),r.a.createElement($,{id:ee.article,checked:t===ee.article,changeFn:function(){return e.handleFormType(ee.article)}},"Article"),r.a.createElement($,{id:ee.note,checked:t===ee.note,changeFn:function(){return e.handleFormType(ee.note)}},"Note")),r.a.createElement(Y,{onChange:e.handleInputChange,value:e.state.title,name:"title",label:t===ee.twitter?"Twitter Name":"Title"}),t!==ee.note?r.a.createElement(Y,{onChange:e.handleInputChange,value:e.state.link,name:"link",label:t===ee.twitter?"Twitter Link":"Link"}):null,t===ee.twitter?r.a.createElement(Y,{onChange:e.handleInputChange,value:e.state.image,name:"image",label:"Image"}):null,r.a.createElement(Y,{onChange:e.handleInputChange,value:e.state.description,tag:"textarea",name:"description",label:"Description"}),r.a.createElement(N,null,"add new item")))})}}]),t}(r.a.Component),ne=function(e){var t=e.closeModalFn;return r.a.createElement("div",{className:q.a.wrapper},r.a.createElement("button",{onClick:t,className:q.a.closeButton}),r.a.createElement(ae,null))},re=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={twitter:[],article:[],note:[],isModalOpen:!1},a.addItem=function(e,t){e.preventDefault(),console.log("newItem:",t),a.setState(function(e){return Object(i.a)({},t.type,Object(m.a)(e[t.type]).concat([t]))}),e.target.reset(),a.closeModal()},a.openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a}return Object(_.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.isModalOpen,t=Object(o.a)({},this.state,{addItem:this.addItem});return r.a.createElement(h.a,null,r.a.createElement(f.Provider,{value:t},r.a.createElement(Q,{openModalFn:this.openModal}),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:T}),r.a.createElement(E.a,{path:"/articles",component:M}),r.a.createElement(E.a,{path:"/notes",component:B}),r.a.createElement(E.a,{path:"/notes/:id",component:B})),e&&r.a.createElement(ne,{closeModalFn:this.closeModal})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(re,null),document.getElementById("root"))},7:function(e,t,a){e.exports={formItem:"Input_formItem__2EuYw",formItemBar:"Input_formItemBar__3gtUL",label:"Input_label__1f69B",input:"Input_input__23XLJ",textarea:"Input_textarea__1Qe2F"}},9:function(e,t,a){e.exports={wrapper:"ListItem_wrapper__4qGKd",appear:"ListItem_appear__1jMzI",image:"ListItem_image__2UK1l",imageNone:"ListItem_imageNone__UCUv0",description:"ListItem_description__2azZs",button:"ListItem_button__1MwQw"}}},[[34,2,1]]]);
//# sourceMappingURL=main.6c631de8.chunk.js.map