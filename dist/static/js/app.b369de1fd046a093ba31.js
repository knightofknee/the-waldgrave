webpackJsonp([1],{"1qwR":function(e,t){},"7Rt9":function(e,t){},EEEj:function(e,t){},KklS:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),a=o("uLgv");o("hZls"),o("dih4");a.a.initializeApp({apiKey:"AIzaSyCbwLfs403aClVKHAZVWyqX0N28MQIxFio",authDomain:"readtogether-fa359.firebaseapp.com",databaseURL:"https://readtogether-fa359-default-rtdb.firebaseio.com",projectId:"readtogether-fa359",storageBucket:"readtogether-fa359.appspot.com",messagingSenderId:"917905795997",appId:"1:917905795997:web:977e48ba1080b24be19d74"});var r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=o("VU/8")({name:"App"},r,!1,function(e){o("EEEj")},null,null).exports,s=o("/ocq"),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"hello"},[n("h1",{staticStyle:{"z-index":"2"}},[e._v(e._s(e.msg))]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Core Values")]),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"purple-circle-container"},[n("router-link",{attrs:{to:"/thepurplecircle"}},[n("img",{staticClass:"purple-circle",attrs:{src:o("a5VG")}})])],1),e._v(" "),n("h2",[e._v("Goals")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("We are like the tiny aliens in Men in Black who run around inside the heads of human robots. The Waldgrave aims to create spaces where you can comfortably and safely exit your robot for a bit with your alien friends. Current projects and goals of the Waldgrave include "),n("router-link",{attrs:{to:"/teganandsara"}},[e._v(" a music blog")]),e._v(", "),n("router-link",{attrs:{to:"/readtogether"}},[n("img",{staticClass:"purple-circle"}),e._v("a bookclub app")]),e._v(", a notes app, fixing social security, reducing income equality and "),n("router-link",{attrs:{to:"/endoftheuniverse"}},[e._v("how to survive the heat death of the universe")])],1)])]),e._v(" "),e._m(2)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{margin:"-2em 0"}},[t("img",{staticClass:"bigw",attrs:{src:o("SQrB")}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("span",[this._v("Creativity")])]),this._v(" "),t("li",[t("span",[this._v("Weird")])]),this._v(" "),t("li",[t("span",[this._v("Effort")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"rg_embed_link",attrs:{id:"rg_embed_link_4726856","data-song-id":"4726856"}},[this._v("Read "),t("a",{attrs:{href:"https://genius.com/Tegan-and-sara-hold-my-breath-until-i-die-lyrics"}},[this._v("“Hold My Breath Until I Die” by Tegan and Sara")]),this._v(" on Genius")])])}]};var m=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"The Waldgrave Welcomes You"}}},l,!1,function(e){o("KklS")},"data-v-015e79c4",null).exports,u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello",staticStyle:{"background-image":"url('../assets/thepurplecircle.jpg')"}},[t("h1",[this._v(this._s(this.msg))]),this._v(" "),t("div",[t("router-link",{attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),t("h2")])},staticRenderFns:[]};var c=o("VU/8")({name:"MyHomepage",data:function(){return{msg:"Here I will post my own creative endeavors"}}},u,!1,function(e){o("7Rt9")},"data-v-03059a10",null).exports,d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.comment.pageNumber>0?o("div",{staticStyle:{display:"flex",flexDirection:"column",justifyContent:"center"}},[o("span",[e._v(e._s(e.comment.author)+" - ("+e._s(e.comment.pageNumber)+")")]),e._v(" "),o("span",[e._v(e._s(e.comment.text))]),e._v(" "),e.comment.replies&&e.comment.replies.length>0?o("ul",e._l(e.comment.replies,function(t){return o("div",{key:t.text},[e._v("\n      "+e._s(t.author+" : "+t.text)+"\n    ")])}),0):e._e()]):e._e()},staticRenderFns:[]};var p=o("VU/8")({name:"BookComment",props:{comment:{pageNumber:0,author:"",text:"",replies:[{author:"",text:""}]}},data:function(){return{replyText:"dunno if ill use this var"}}},d,!1,function(e){o("1qwR")},"data-v-a1304db2",null).exports,v={name:"CreateComment",props:{roomCode:String},data:function(){return{name:"",pageNumber:0,comment:"",disableSubmit:!1}},methods:{postComment:function(){var e=this;this.name.length<3||0==this.pageNumber||(this.disableSubmit=!0,a.a.database().ref("Books/"+this.roomCode+"/Comments/"+Date.now()).set({author:this.name,pageNumber:this.pageNumber,text:this.comment}).then(function(t){if(console.log("walawala",t),t&&t.exists()){var o=t.val();console.log("woo",o),setTimeout(function(){e.disableSubmit=!1},2e3)}}).catch(function(t){console.log("nerp"),setTimeout(function(){e.disableSubmit=!1},2e3),console.error(t)}))}}},h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"flex","justify-content":"space-evenly"}},[o("form",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"},on:{submit:function(t){return t.preventDefault(),e.postComment(t)}}},[e._v("Create a comment\n    "),o("div",[o("label",{attrs:{name:"author"}},[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"author"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),o("div",[o("label",{attrs:{name:"pageNumber"}},[e._v("Page Number")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.pageNumber,expression:"pageNumber"}],attrs:{type:"number",name:"pageNumber"},domProps:{value:e.pageNumber},on:{input:function(t){t.target.composing||(e.pageNumber=t.target.value)}}})]),e._v(" "),o("div",[o("label",{attrs:{name:"comment"}},[e._v("Comment")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticStyle:{width:"100%"},attrs:{rows:"5",name:"comment"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})]),e._v(" "),o("button",{attrs:{type:"submit",disabled:e.disableSubmit}},[e._v("submit")])])])},staticRenderFns:[]};var f=o("VU/8")(v,h,!1,function(e){o("OqGZ")},"data-v-08dd0d69",null).exports,g={name:"BookRoom",props:{roomCode:String,bookComments:[{pageNumber:Number,author:String,test:String,replies:[{}]}],roomCreator:String},components:{BookComment:p,CreateComment:f},data:function(){return{pageNumber:Number=1}},computed:{revealedComments:function(){var e=this;return this.bookComments.filter(function(t){return parseInt(t.pageNumber)<=parseInt(e.pageNumber)})},hiddenCount:function(){return this.bookComments.length-this.revealedComments.length}}},b={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[e._v("\n    Room Code: "+e._s(e.roomCode)+"\n  ")]),e._v(" "),o("div",[e._v("\n    Room Creator: "+e._s(e.roomCreator)+"\n  ")]),e._v(" "),o("div",[o("div",[e._v("Change the page number to reveal more comments: ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.pageNumber,expression:"pageNumber"}],attrs:{type:"number",placeholder:"enter page number"},domProps:{value:e.pageNumber},on:{input:function(t){t.target.composing||(e.pageNumber=t.target.value)}}}),e._v(" "),o("br"),e._v(" "),o("div",[e._v(e._s(e.revealedComments.length)+" / "+e._s(e.bookComments.length)+" comments visible")]),e._v(" "),o("br")]),e._v(" "),e.revealedComments.length>0?o("div",e._l(e.revealedComments,function(e){return o("BookComment",{key:e.id,attrs:{comment:e}})}),1):e._e(),e._v(" "),o("br"),e._v(" "),o("CreateComment",{attrs:{roomCode:e.roomCode}})],1)},staticRenderFns:[]};var _={name:"CreateBook",data:function(){return{name:"",password:"",disableSubmit:!1,taken:!1,creator:""}},methods:{postBook:function(){var e=this;this.name.length<3||(this.disableSubmit=!0,a.a.database().ref("Books/"+this.name).get().then(function(t){if(t.exists())return console.log("exists already"),void(e.taken=!0);console.log("in business");var o=e.creator.length>0?e.creator:"anonymous";a.a.database().ref("Books/"+e.name).set({creator:o,password:e.password}).then(function(t){if(console.log("walawala",t),t&&t.exists()){var o=t.val();console.log("woo",o),setTimeout(function(){e.disableSubmit=!1},2e3)}}).catch(function(t){console.log("nerp"),setTimeout(function(){e.disableSubmit=!1},2e3),console.error(t)})}).catch(function(t){console.log("nerp"),setTimeout(function(){e.disableSubmit=!1},2e3),console.error(t)}))},hideTaken:function(){this.taken=!1}}},y={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"flex","justify-content":"space-evenly"}},[o("form",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"},on:{submit:function(t){return t.preventDefault(),e.postBook(t)}}},[e._v("Create a book room\n    "),o("div",[o("label",{attrs:{name:"title"}},[e._v("Book Name (required)")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"title"},domProps:{value:e.name},on:{change:e.hideTaken,input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),o("div",[o("label",{attrs:{name:"password"}},[e._v("Password")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"number",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),o("div",[o("label",{attrs:{name:"creator"}},[e._v("Creator Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.creator,expression:"creator"}],attrs:{type:"text",name:"creator"},domProps:{value:e.creator},on:{input:function(t){t.target.composing||(e.creator=t.target.value)}}})]),e._v(" "),o("button",{attrs:{type:"submit",disabled:e.disableSubmit}},[e._v("submit")])])])},staticRenderFns:[]};var C={name:"ReadTogether",components:{BookRoom:o("VU/8")(g,b,!1,function(e){o("ga2c")},"data-v-41cff836",null).exports,CreateBook:o("VU/8")(_,y,!1,function(e){o("l5Gk")},"data-v-19cad630",null).exports},data:function(){return{roomCode:"",typedCode:"",hideRoom:!0,bookComments:[{author:"",text:"",id:"",pageNumber:0,replies:[{author:"",text:"",id:""}]}],roomCreator:""}},methods:{findRoom:function(){var e=this;a.a.database().ref("Books/"+this.typedCode).get().then(function(t){if(t.exists()){e.roomCreator=t.val().creator;var o=t.val().Comments,n=[];for(var a in o){var r=o[a];n.push({id:a,author:r.author,text:r.text,pageNumber:r.pageNumber,replies:r.replies})}e.roomCode=e.typedCode,e.hideRoom=!1,e.bookComments=n}else console.log("No data available"),e.bookComments=[],e.hideRoom=!0,e.roomCode=e.typedCode}).catch(function(e){console.error(e)})}}},k={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",[e._v("log in to a book room: ")]),e._v(" "),o("form",{on:{submit:function(t){return t.preventDefault(),e.findRoom(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.typedCode,expression:"typedCode"}],attrs:{type:"text",placeholder:"enter room code"},domProps:{value:e.typedCode},on:{input:function(t){t.target.composing||(e.typedCode=t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"click"}},[e._v("enter")])]),e._v(" "),e.roomCreator.length&&!e.hideRoom?o("BookRoom",{attrs:{roomCode:e.roomCode,bookComments:e.bookComments,roomCreator:e.roomCreator}}):e._e(),e._v(" "),e.hideRoom&&e.roomCode.length>0?o("div",[e._v("\n    "+e._s(e.roomCode)+" - There is no room for this code\n  ")]):e._e(),e._v(" "),e.hideRoom?o("CreateBook"):e._e()],1)},staticRenderFns:[]};var x=o("VU/8")(C,k,!1,function(e){o("wGAG")},"data-v-b017aebe",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("p",[this._v('\n    TLDR:\n    the universe will collapse on itself at a potentially infinite speed as the energy in empty space will be finally drained. The universe is very uniform, if you could keep your patch of spacetime together longer, you could outlast the uniform. It is the reversal of the big bang, any spacetime survivors on a collision course. Here we have a couple options:\n    1. The energy of our universe is conserved in the process, and we have a new big bang and a complete cycle\n    2. Our universe is just dying, it exists inside of a black hole in a universe that is also dying, except it is earlier in the process of decay.\n      Maybe:\n      a) the black hole "around" our universe crumbles and we have made it up a level\n      b) before our universe-black hole crumbles to reveal the next level, everything in it is forced to collapse to a point with the collapse of spacetime. This adds up because a black hole appears to us to have an extreme amount of mass at a single point. That case is true for the beginning of our universe and the potential end. a black hole kind of squeezes spacetime into a tiny point, and it punches out into its own bubble. It is the same spacetime, just oozing into this bubble. That is part of why our universe is expanding at an accelerating rate, black holes grow.\n        ba) it might create a condition where all universes have 1 or 0 survivors; if they had 2 or more, they would collide during the collapse\n\n    So if you could manipulate your patch of spacetime well enough, you could outlast the universe\n  ')])])}]};var N=o("VU/8")({name:"EndOfTheUniverse",props:{}},w,!1,function(e){o("fZsl")},"data-v-6a236d26",null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"flex","justify-content":"center"}},[o("p",[e._v("\n    Introduce concept, self love in love songs between parts of oneself\n  ")]),e._v(" "),o("p",[e._v("\n    https://youtu.be/wfYbgdo8e-8\n  ")]),e._v(" "),o("p",[e._v("\n    Discuss Carly Rae and the Sound, and discovery of Hey I'm just like You\n  ")]),e._v(" "),o("p",[e._v("\n    Start going through the songs in order, hitting highlights\n  ")]),e._v(" "),o("p",[e._v("\n    full album lyrics breakdown?\n  ")])])}]};var R=o("VU/8")({name:"TeganAndSara",props:{}},S,!1,function(e){o("g94Y")},"data-v-6b1c98b9",null).exports;n.a.use(s.a);var T=new s.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:m},{path:"/thepurplecircle",name:"MyHomepage",component:c},{path:"/readtogether",name:"ReadTogether",component:x},{path:"/endoftheuniverse",name:"EndOfTheUniverse",component:N},{path:"/teganandsara",name:"TeganAndSara",component:R}]});n.a.config.productionTip=!1,n.a.config.devtools=!0,new n.a({el:"#app",router:T,components:{App:i},template:"<App/>"})},OqGZ:function(e,t){},SQrB:function(e,t,o){e.exports=o.p+"static/img/transparentw.e9de3e0.png"},a5VG:function(e,t,o){e.exports=o.p+"static/img/thepurplecircle.a43ac07.jpg"},fZsl:function(e,t){},g94Y:function(e,t){},ga2c:function(e,t){},l5Gk:function(e,t){},wGAG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b369de1fd046a093ba31.js.map