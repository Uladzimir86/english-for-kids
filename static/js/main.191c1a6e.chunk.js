(this["webpackJsonpenglish-for-kids"]=this["webpackJsonpenglish-for-kids"]||[]).push([[0],{20:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s,r,n,c=a(1),i=a.n(c),o=a(21),d=a.n(o),l=(a(27),a(2)),u=a(9),h=a(10),j=a(12),m=a(11),b=a(8),g=a(3),p=(a(28),a(29),a(30),a(0)),_=function(e){var t=e.index,a=void 0===t?"0":t,s=e.cardsArray,r=void 0===s?[]:s,n=["Main Page"].concat(Object(l.a)(r)).map((function(e,t){var s="sidebar__link";return t.toString()===a&&(s="sidebar__link sidebar__link_onClick"),Object(p.jsx)("li",{className:"sidebar__item",children:Object(p.jsx)(b.b,{to:"/main/"+t,className:s,children:e})},e.toString())}));return Object(p.jsx)("ul",{className:"sidebar__list",children:n})},y=function(e){return Object(p.jsxs)("div",{className:e.class,children:[Object(p.jsx)(_,{index:e.index,cardsArray:e.cardsArray}),Object(p.jsx)("button",{type:"button",className:"sidebar__button",onClick:e.showLogin,children:"Login"})]})},O=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).toggleSwitch=function(){s.setState((function(e){return{trainOn:!e.trainOn}})),s.props.setTrain()},s.state={sidebarHidden:!0,trainOn:!0},s}return Object(h.a)(a,[{key:"render",value:function(){var e="sidebar",t="menu-toggle";this.props.sidebar&&(e+=" sidebar_hidden",t+=" menu-toggle_set-hidden");var a="switch",s="switch__handle",r="switch__text",n="train";return this.state.trainOn!==this.props.train&&this.setState((function(e){return{trainOn:!e.trainOn}})),this.state.trainOn||(a+=" switch_game",s+=" switch__handle_game",r="switch__text_game",n="game",e+=" sidebar_game"),Object(p.jsxs)("header",{className:"header",id:"headerId",children:[Object(p.jsx)(y,{class:e,index:this.props.index,id:"sidebarId",showLogin:this.props.showLogin,cardsArray:this.props.cardsArray}),Object(p.jsx)("div",{className:t,onClick:this.props.toggleSidebar}),Object(p.jsxs)("div",{className:a,onClick:this.toggleSwitch,children:[Object(p.jsx)("div",{className:s}),Object(p.jsx)("div",{className:r,children:n})]})]})}}]),a}(i.a.Component),x=(a(20),a(37),function(){return Object(p.jsx)("div",{className:"star"})}),f=function(){return Object(p.jsx)("div",{className:"star_lose"})},v="card_train";function N(){s.classList.remove("flipped"),s.removeEventListener("mouseleave",N)}function C(e){"card__button"===e.target.className?((s=e.currentTarget.closest(".card-container")).className+=" flipped",s.addEventListener("mouseleave",N)):w(n+e.currentTarget.dataset.audio)}function w(e){var t=new Audio(e);t.currentTime=0,t.play()}var S=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).playGame=function(){var e=[];s.state.cards&&(e=Object(l.a)(s.state.cards));var t=Math.floor(Math.random()*e.length),a="object"===typeof e[t]?n+e[t].audioSrc:"";setTimeout((function(){return w(a)}),700),r=e[t].word,s.setState({playedSoundAddr:a,cardDelete:t})},s.checkCard=function(e){if(s.state.gamePlay)if(e.target.alt===r){var t=[];s.state.cards&&(t=Object(l.a)(s.state.cards)),t.splice(s.state.cardDelete,1),s.setState({cards:Object(l.a)(t)}),w("/audio/correct.mp3"),e.target.closest(".card").classList.add("card_guessed"),s.addStar(Object(p.jsx)(x,{})),setTimeout((function(){t.length>0&&s.playGame()}))}else w("/audio/error.mp3"),s.addStar(Object(p.jsx)(f,{}))},s.addStar=function(e){s.setState((function(t){return{starsList:[e].concat(Object(l.a)(t.starsList))}}))},s.getCategoryList=function(){return s.state.categoryList.map((function(e,t){if(s.state.cardsArray[t+1].length){var a=Object(l.a)(s.state.cardsArray[t+1]),r=n+a[0].image;return Object(p.jsx)("div",{className:"card-container",children:Object(p.jsxs)(b.b,{to:"/main/"+(t+1),className:"card "+v,children:[Object(p.jsx)("img",{src:r,alt:a[0].word,className:"card__image_back"}),e]},e.toString())},e)}return Object(p.jsx)("div",{className:"card-container",children:Object(p.jsxs)(b.b,{to:"/main/"+(t+1),className:"card "+v,children:[Object(p.jsx)("img",{src:"/image/no-image.jfif",alt:"no foto",className:"card__image_back"}),e]},e.toString())},e)}))},s.getGameList=function(e,t){var a=0===Number(e)?1:Number(e);return s.state.cardsArray[a].map((function(e){var a=e,r=n+a.image;return t?Object(p.jsxs)("div",{className:"card-container",children:[Object(p.jsxs)("div",{className:"card card_eng","data-audio":a.audioSrc,onClick:C,children:[Object(p.jsx)("img",{src:r,alt:a.word,className:"card__image_front"}),a.word,Object(p.jsx)("div",{className:"card__button"})]}),Object(p.jsxs)("div",{className:"card card_ru",children:[Object(p.jsx)("img",{src:r,alt:a.word,className:"card__image_front"}),a.translation]})]},a.word):Object(p.jsx)("div",{className:"card-container",children:Object(p.jsx)("div",{className:"card","data-audio":a.audioSrc,children:Object(p.jsx)("img",{src:r,alt:a.word,className:"card__image_front",onClick:function(e){return s.checkCard(e)}})})},a.word)}))},s.state={cardDelete:0,starsList:[],playedSoundAddr:"",buttonStart:!1,gamePlay:!1,cardsArray:Object(l.a)(s.props.cardsArray),cards:Object(l.a)(s.props.cardsArray[Number(s.props.index)]),categoryList:Object(l.a)(s.props.cardsArray[0])},s}return Object(h.a)(a,[{key:"render",value:function(){var e=this;console.log("this.state.cards.length",this.state.cards.length),n=this.props.server;var t=this.props.index,a=this.props.train;v=a?"card_train":"card_game",a&&(r="");var s=a||"0"===t?"main__button hidden":"main__button";this.props.gameStarted&&!this.state.gamePlay&&Number(this.props.index)?(this.setState({gamePlay:!0,cards:Object(l.a)(this.props.cardsArray[Number(this.props.index)])}),setTimeout((function(){return e.playGame()}),100)):!this.props.gameStarted&&this.state.gamePlay&&this.setState({gamePlay:!1,cards:Object(l.a)(this.props.cardsArray[Number(this.props.index)]),starsList:[]});var c="0"===t?this.getCategoryList():this.getGameList(t,a);return this.state.cardsArray[Number(t)].length?this.state.gamePlay?this.state.cards.length?Object(p.jsxs)("div",{className:"main_wrapper",children:[Object(p.jsx)("div",{className:"star-container",children:Object(p.jsx)("div",{className:"star-container_wrapper",children:this.state.starsList})}),Object(p.jsx)("main",{className:"main",children:c}),Object(p.jsx)("button",{className:"main__button main__button_repeat",onClick:function(){return function(e){var t=document.querySelector(".main__button");null===t||void 0===t||t.classList.add("main__button_push"),setTimeout((function(){null===t||void 0===t||t.classList.remove("main__button_push")}),500),setTimeout((function(){w(e)}),600)}(e.state.playedSoundAddr)}})]}):8===this.state.starsList.length?(w("/audio/success.mp3"),setTimeout((function(){e.setState({cards:Object(l.a)(e.props.cardsArray[Number(e.props.index)])}),e.props.setTrain(),e.props.history.push("/")}),3e3),Object(p.jsx)("div",{className:"win-lose-image_wrapper",children:Object(p.jsx)("img",{src:"/image/success.jpg",alt:"success",className:"win-lose-image"})})):(w("/audio/failure.mp3"),setTimeout((function(){e.setState({cards:Object(l.a)(e.props.cardsArray[Number(e.props.index)])}),e.props.setTrain(),e.props.history.push("/")}),3e3),Object(p.jsxs)("div",{className:"win-lose-image_wrapper",children:[Object(p.jsx)("img",{src:"/image/failure.jpg",alt:"failure",className:"win-lose-image"}),Object(p.jsxs)("span",{className:"win-lose-image__text",children:["You have ",this.state.starsList.length-8," mistake(s)!"]})]})):Object(p.jsxs)("div",{className:"main_wrapper",children:[Object(p.jsx)("main",{className:"main",children:c}),Object(p.jsx)("button",{className:s,onClick:this.props.startGame})]}):Object(p.jsx)("div",{className:"main_wrapper",children:Object(p.jsx)("main",{className:"main",children:Object(p.jsx)("h3",{className:"no-cards",children:"Sorry, but this category is empty..."})})})}}]),a}(i.a.Component),A=Object(g.f)(S),k=(a(38),a.p+"static/media/rs_school_js.ad178c0d.svg"),L=function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsxs)("a",{href:"https://github.com/uladzimir86",className:"footer__link",children:[Object(p.jsx)("svg",{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true",children:Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}),Object(p.jsx)("span",{className:"footer__text",children:"uladzimir86"})]}),Object(p.jsx)("a",{href:"https://rs.school/js/",className:"footer__link",children:Object(p.jsx)("img",{src:k,className:"footer__logo"})})]})};a(39);var T=function(e){var t=e.log?"login__wrapper":"login__wrapper hidden";return Object(p.jsx)("div",{className:t,children:Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__h2",children:"Login"}),Object(p.jsx)("input",{type:"text",id:"input-login",className:"login__input",placeholder:"login (admin)"}),Object(p.jsx)("input",{type:"password",id:"input-password",className:"login__input",placeholder:"password (admin)"}),Object(p.jsxs)("div",{className:"login__footer",children:[Object(p.jsx)("button",{type:"button",id:"button-cancel",className:"login__button login__button_cancel",onClick:e.showLogin,children:"Cancel"}),Object(p.jsx)("button",{type:"button",id:"button-login",className:"login__button",onClick:e.sendLogin,children:"login"})]})]})})},P=(a(40),function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).showUpdateCategory=function(){s.setState((function(e){return{update:!e.update}}))},s.updateCategory=function(e){var t=e.target.dataset.id,a=document.getElementById("card-category__input-".concat(t));s.props.sendUpdateCategory(t,a.value),s.showUpdateCategory()},s.state={update:!1},s}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.item,s=e.cards;if(this.state.update)return Object(p.jsxs)("div",{className:"card-category",children:[Object(p.jsx)("div",{className:"card-category__delete",onClick:this.props.deleteCategory,"data-id":t}),Object(p.jsx)("div",{className:"card-category__small-text",children:"Category Name"}),Object(p.jsx)("input",{type:"text",className:"card-category__input",placeholder:a,id:"card-category__input-"+t}),Object(p.jsxs)("div",{className:"card-category__buttons-container",children:[Object(p.jsx)("button",{className:"card-category__button card-category__button_update card-category__button_cancel","data-id":t,onClick:this.showUpdateCategory,children:"Cancel"}),Object(p.jsx)("button",{className:"card-category__button card-category__button_update","data-id":t,onClick:this.updateCategory,children:"Create"})]})]},a);var r=s?s.length:0;return Object(p.jsxs)("div",{className:"card-category",children:[Object(p.jsx)("div",{className:"card-category__delete",onClick:this.props.deleteCategory,"data-id":t}),Object(p.jsx)("h3",{className:"card-category__title",children:a}),Object(p.jsxs)("div",{className:"card-category__text",children:["WORDS: ",r]}),Object(p.jsxs)("div",{className:"card-category__buttons-container",children:[Object(p.jsx)("button",{className:"card-category__button","data-id":t,onClick:this.showUpdateCategory,children:"Update"}),Object(p.jsx)("button",{className:"card-category__button","data-id":t,children:"Add word"})]})]},a)}}]),a}(i.a.Component)),U=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).showCreateCategory=function(){s.setState((function(e){return{create:!e.create}}))},s.createCategory=function(){var e=document.getElementById("card-category-new");s.props.sendCreateCategory(e.value),s.showCreateCategory()},s.state={create:!1},s}return Object(h.a)(a,[{key:"render",value:function(){return this.state.create?Object(p.jsxs)("div",{className:"card-category",children:[Object(p.jsx)("div",{className:"card-category__small-text",children:"Category Name"}),Object(p.jsx)("input",{type:"text",className:"card-category__input",placeholder:"New category",id:"card-category-new"}),Object(p.jsxs)("div",{className:"card-category__buttons-container",children:[Object(p.jsx)("button",{className:"card-category__button card-category__button_update card-category__button_cancel",onClick:this.showCreateCategory,children:"Cancel"}),Object(p.jsx)("button",{className:"card-category__button card-category__button_update",onClick:this.createCategory,children:"Create"})]})]}):Object(p.jsxs)("div",{className:"card-category card-category_new",children:[Object(p.jsx)("h3",{className:"card-category__title",children:"Create new Category"}),Object(p.jsx)("div",{className:"card-category__button-add-new",onClick:this.showCreateCategory})]})}}]),a}(i.a.Component);var E=function(e){var t=Object(l.a)(e.cards),a=t[0].map((function(a,s){return Object(p.jsx)(P,{id:s,item:a,cards:t[s+1],update:!1,deleteCategory:e.deleteCategory,sendUpdateCategory:e.sendUpdateCategory})}));return Object(p.jsxs)("div",{className:"admin",children:[Object(p.jsxs)("header",{className:"admin__header",children:[Object(p.jsxs)("nav",{className:"header__nav",children:[Object(p.jsx)(b.b,{to:"/admin/categories",className:"header__link",children:"Categories"}),Object(p.jsx)(b.b,{to:"#",className:"header__link del-underline",children:"Words"})]}),Object(p.jsx)("button",{className:"header__button",onClick:e.showAdminPage,children:"Log out"})]}),Object(p.jsxs)("main",{className:"admin__main",children:[a,Object(p.jsx)(U,{sendCreateCategory:e.sendCreateCategory})]})]})},G=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).sendLogin=function(){var e=document.getElementById("input-login"),t=document.getElementById("input-password"),a={l:e.value,p:t.value};fetch(s.state.server+"login",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){e.ok?s.showAdminPage():e.text().then((function(e){return alert(e)}))}))},s.deleteCategory=function(e){var t=e.target.dataset.id;fetch(s.state.server+"categories/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){s.setState({cardsArray:Object(l.a)(e)})}))},s.sendUpdateCategory=function(e,t){var a={category:t};fetch(s.state.server+"categories/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){s.setState({cardsArray:Object(l.a)(e)})}))},s.sendCreateCategory=function(e){var t=s.state.cardsArray[0].length+1,a={category:e};fetch(s.state.server+"categories/".concat(t),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){s.setState({cardsArray:Object(l.a)(e)})}))},s.startGame=function(){var e=document.querySelector(".main__button");null===e||void 0===e||e.classList.add("main__button_push"),setTimeout((function(){null===e||void 0===e||e.classList.remove("main__button_push")}),500),setTimeout((function(){s.setState({gameStarted:!0})}),600)},s.setTrain=function(){s.setState((function(e){return{train:!s.state.train}}))},s.hideSidebar=function(e){!1===s.state.sidebarHidden&&s.state.gameStarted&&document.querySelectorAll(".sidebar__link").forEach((function(t){e.target===t&&s.setState({gameStarted:!1})}));(e.target!==document.querySelector(".sidebar")&&e.target!==document.querySelector(".sidebar__list")&&e.target!==document.querySelector(".sidebar__button")&&!1===s.state.sidebarHidden||e.target===document.querySelector(".menu-toggle"))&&s.setState({sidebarHidden:!s.state.sidebarHidden})},s.showLogin=function(){s.setState((function(e){return{log:!e.log}}))},s.showAdminPage=function(){s.setState((function(e){return{adminPage:!e.adminPage,log:!1}}))},s.state={sidebarHidden:!0,gameStarted:!1,train:!0,cardsArray:[],log:!1,adminPage:!1,server:"https://sheltered-shore-31833.herokuapp.com/"},s.getCardsArray(),s}return Object(h.a)(a,[{key:"getCardsArray",value:function(){var e=this;fetch(this.state.server+"main").then((function(e){return e.json()})).then((function(t){e.setState({cardsArray:Object(l.a)(t)})}))}},{key:"playSound",value:function(e){var t=new Audio("/"+e);t.currentTime=0,t.play()}},{key:"render",value:function(){var e=this,t=this.state.train;return t&&this.state.gameStarted&&this.setState({gameStarted:!1}),this.state.cardsArray[0]?this.state.adminPage?Object(p.jsxs)(b.a,{children:[Object(p.jsx)(g.a,{from:"/",to:"/admin/categories"}),Object(p.jsx)(g.b,{path:"/admin/categories",exact:!0,children:Object(p.jsx)(E,{cards:this.state.cardsArray,deleteCategory:this.deleteCategory,showAdminPage:this.showAdminPage,sendUpdateCategory:this.sendUpdateCategory,sendCreateCategory:this.sendCreateCategory})})]}):Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"app",onClick:this.hideSidebar,children:[Object(p.jsx)(g.a,{from:"/admin",to:"/"}),Object(p.jsx)(g.b,{path:"/",exact:!0,children:Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{index:"0",train:t,toggleSidebar:this.hideSidebar,sidebar:this.state.sidebarHidden,setTrain:this.setTrain,showLogin:this.showLogin,cardsArray:this.state.cardsArray[0]}),Object(p.jsx)(A,{train:t,index:"0",startGame:this.startGame,gameStarted:this.state.gameStarted,setTrain:this.setTrain,cardsArray:this.state.cardsArray,server:this.state.server}),Object(p.jsx)(T,{showLogin:this.showLogin,log:this.state.log,sendLogin:this.sendLogin}),Object(p.jsx)(L,{})]})}),Object(p.jsx)(g.b,{path:"/main/:id",render:function(a){var s=a.match.params.id;return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{index:s,train:t,toggleSidebar:e.hideSidebar,sidebar:e.state.sidebarHidden,setTrain:e.setTrain,showLogin:e.showLogin,cardsArray:e.state.cardsArray[0]}),Object(p.jsx)(A,{index:s,train:t,startGame:e.startGame,gameStarted:e.state.gameStarted,setTrain:e.setTrain,cardsArray:e.state.cardsArray,server:e.state.server}),Object(p.jsx)(T,{showLogin:e.showLogin,log:e.state.log,sendLogin:e.sendLogin}),Object(p.jsx)(L,{})]})}})]})}):Object(p.jsx)("div",{children:Object(p.jsx)("span",{children:"Connection..."})})}}]),a}(i.a.Component);d.a.render(Object(p.jsx)(G,{train:!0}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.191c1a6e.chunk.js.map