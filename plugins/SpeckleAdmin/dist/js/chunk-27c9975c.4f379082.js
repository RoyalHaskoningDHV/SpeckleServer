(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c9975c"],{"0db5":function(e,t,s){"use strict";var r=s("2d12"),a=s.n(r);a.a},"2d12":function(e,t,s){},6166:function(e,t,s){},"69e0":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("stream-detail-user-perms",{attrs:{stream:e.stream}})},a=[],n=(s("7514"),s("f7fe"),s("13bb"),s("fa20")),i={name:"StreamEditView",components:{StreamDetailUserPerms:n["a"]},computed:{stream:function(){var e=this;return this.$store.state.streams.find(function(t){return t.streamId===e.$route.params.streamId})},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id}},data:function(){return{}},methods:{}},c=i,o=(s("b686"),s("2877")),u=Object(o["a"])(c,r,a,!1,null,"1bd4bc5a",null);u.options.__file="StreamSharing.vue";t["default"]=u.exports},"6e9c":function(e,t,s){},"6ec6":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{"align-center":"",row:"",wrap:""}},[s("v-flex",{staticClass:"pb-0",attrs:{xs12:""}},[s("v-text-field",{attrs:{box:"",label:"search for users",clearable:"",flat:"",loading:e.searchInProgress,"prepend-inner-icon":"search"},on:{input:e.startSearchUsers},model:{value:e.userSearch,callback:function(t){e.userSearch=t},expression:"userSearch"}})],1),null!==e.userSearch&&e.foundUsers.length>0?s("v-flex",{staticClass:"mb-5",staticStyle:{"margin-top":"-30px"},attrs:{xs12:""}},[s("v-card",{staticClass:"elevation-10"},[e.userSearch?s("v-card-title",{staticClass:"subheading"},[e._v("Search results ("+e._s(e.foundUsers.length)+" users)")]):e._e(),s("v-divider"),e.foundUsers.length>0?s("v-card-text",{staticStyle:{"max-height":"410px","overflow-y":"auto","overflow-x":"hidden"}},[s("v-list",{attrs:{"two-line":"","xxxv-if":"filters.length > 0"}},e._l(e.foundUsers,function(t){return s("v-list-tile",{key:t._id},[s("v-list-tile-content",[s("v-list-tile-title",[e._v("\n                "+e._s(t.name)+" "+e._s(t.surname)+"\n              ")]),s("v-list-tile-sub-title",{staticClass:"caption"},[s("span",{staticClass:"caption"},[e._v(e._s(t.company))])])],1),s("v-list-tile-action",[s("v-btn",{attrs:{fab:"",small:"",depressed:""},nativeOn:{click:function(s){return e.selectUser(t._id)}}},[s("v-icon",[e._v("add")])],1)],1)],1)}),1)],1):e._e()],1)],1):e._e()],1)},a=[],n=(s("20d6"),s("f7fe")),i=s.n(n),c=s("bc3a"),o=s.n(c),u={name:"UserSearch",props:{msg:String},data:function(){return{userSearch:"",foundUsers:[],searchInProgress:!1}},watch:{userSearch:function(e,t){""===e&&(this.foundUsers=[],this.searchInProgress=!1)}},methods:{selectUser:function(e){this.$emit("selected-user",e);var t=this.foundUsers.findIndex(function(t){return t._id===e});this.foundUsers.splice(t,1)},startSearchUsers:function(){this.searchInProgress=!0,this.searchUsers(this.userSearch)},searchUsers:i()(function(e){var t=this;if(""===e||null===e)return this.foundUsers=[],void(this.searchInProgress=!1);e.length<3||o.a.post("/accounts/search",{searchString:e}).then(function(e){console.log(e),t.foundUsers=e.data.resources,e.data.resources.length>0&&t.$store.commit("ADD_USERS",e.data.resources),t.searchInProgress=!1}).catch(function(e){t.foundUsers=[],t.searchInProgress=!1})},1500)}},l=u,d=(s("d57a"),s("2877")),h=Object(d["a"])(l,r,a,!1,null,"174f9bea",null);h.options.__file="UserSearch.vue";t["a"]=h.exports},b686:function(e,t,s){"use strict";var r=s("6e9c"),a=s.n(r);a.a},d460:function(e,t,s){},d57a:function(e,t,s){"use strict";var r=s("6166"),a=s.n(r);a.a},f39d:function(e,t,s){"use strict";var r=s("d460"),a=s.n(r);a.a},fa20:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"elevation-0"},[s("v-toolbar",{staticClass:"elevation-0 transparent"},[s("v-icon",{attrs:{small:"",left:""}},[e._v("share")]),e._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[e._v("Link Sharing")]),e._v("  \n  ")],1),s("v-divider"),s("v-card-text",{staticClass:"mx-2"},[s("v-btn",{attrs:{depressed:"",color:"primary",disabled:!e.canEdit},nativeOn:{click:function(t){return e.changeLinkSharing(t)}}},[e._v(e._s(e.stream.private?"OFF":"ON"))]),e._v("\n    "+e._s(e.stream.private?"Private resource. Only people with read or write persmissions can access it.":"Public resource. Anyone with the id can access it.")+"\n    "),e.isOwner?s("span",{},[e._v("\n      You are the "),s("strong",[e._v("owner")]),e._v(" of this stream.\n    ")]):s("span",{},[e._v("\n      This stream was shared with you by "),s("strong",[e._v(e._s(e.streamOwner)+".")])])],1),s("v-toolbar",{staticClass:"elevation-0 transparent title font-weight-light"},[s("v-icon",{attrs:{small:"",left:""}},[e._v("supervisor_account")]),e._v(" \n    "),s("span",{staticClass:"title font-weight-light"},[e._v("User Permissions")]),e._v("  \n  ")],1),e.streamProjects.length>0?s("v-card-text",{staticClass:"mx-2"},[s("span",[e._v("Some users might be disabled as their permissions are set through the following projects: "),e._l(e.streamProjects,function(t,r){return s("router-link",{key:t._id,attrs:{to:"/projects/"+t._id}},[e._v(e._s(t.name)),r<e.streamProjects.length-1?s("span",[e._v(", ")]):e._e()])})],2)]):e._e(),e.canEdit?e._e():s("v-card-text",{staticClass:"mx-2"},[e._v("\n    You cannot edit the permissions of this stream.\n  ")]),s("v-divider"),e.canEdit?s("v-card-text",{},[s("user-search",{on:{"selected-user":e.addUserToWrite}}),s("permission-table",{attrs:{resource:e.stream,"disabled-users":e.usersFromProjects,"global-disabled":!e.canEdit},on:{"update-table":e.updatePerms}})],1):e._e()],1)},a=[],n=s("b6d0"),i=s.n(n),c=s("75fc"),o=(s("7514"),s("7f7f"),s("f7fe"),s("c36e")),u=s.n(o),l=(s("bc3a"),s("6ec6")),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.allUsersPop.length>0?s("v-container",{staticClass:"pa-0 ma-0",attrs:{"grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},e._l(e.allUsersPop,function(t){return t?s("v-flex",{key:t._id,attrs:{xs12:"",sm6:"",lg4:""}},[s("v-card",{staticClass:"pa-3 elevation-1",attrs:{tile:""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-space-between":""}},[s("v-flex",{attrs:{xs8:""}},[s("v-avatar",{attrs:{size:"21",dark:"",color:e.getHexFromString(t.name)}},[e._v("\n              "+e._s(t.name.substring(0,1).toUpperCase())+"\n            ")]),e._v(" \n            "),s("span",[e._v(e._s(t.name)+" "+e._s(t.surname))]),e._v(" \n            "),s("span",{staticClass:"caption"},[e._v(e._s(t.company))])],1),s("v-flex",{staticClass:"text-xs-right",attrs:{xs4:""}},[s("v-btn",{attrs:{depressed:"",color:e.hasWritePermission(t._id)?"primary":"",disabled:t.surname.includes("(that is you!)")||e.globalDisabled||e.isDisabled(t._id)},nativeOn:{click:function(s){return e.changePermission(t._id)}}},[e._v(e._s(e.hasWritePermission(t._id)?"write":"read"))]),s("v-btn",{attrs:{depressed:"",disabled:t.surname.includes("(that is you!)")||e.globalDisabled||e.isDisabled(t._id)},nativeOn:{click:function(s){return e.removeUser(t._id)}}},[s("v-icon",[e._v("close")])],1)],1)],1)],1)],1):e._e()}),1)],1):e._e()},h=[],f=(s("55dd"),s("13bb")),m=s.n(f),v={name:"PermissionTable",props:{resource:Object,globalDisabled:{type:Boolean,default:!1},disabledUsers:{type:Array,default:function(){return[]}}},computed:{canRead:function(){return[].concat(Object(c["a"])(this.resource.canRead),[this.resource.owner])},canWrite:function(){return[].concat(Object(c["a"])(this.resource.canWrite),[,this.resource.owner])},allUsers:function(){return m()(this.canRead,this.canWrite,[this.resource.owner])},allUsersPop:function(){var e=this;return 0===this.allUsers.length?[]:this.allUsers.map(function(t){if(t){var s=e.$store.state.users.find(function(e){return e._id===t});return s||e.$store.dispatch("getUser",{_id:t}),s&&(s.isOwner=s._id===e.resource.owner),s}}).sort(function(e,t){return e.name>t.name?1:-1})}},data:function(){return{}},methods:{isDisabled:function(e){return this.disabledUsers.indexOf(e)>-1},hasWritePermission:function(e){return this.canWrite.indexOf(e)>-1},changePermission:function(e){var t=[],s=[],r=this.canWrite.indexOf(e);r>-1?(t=this.canWrite.filter(function(t){return t!==e}),s=u()([].concat(Object(c["a"])(this.canRead),[e]))):(s=this.canRead.filter(function(t){return t!==e}),t=u()([].concat(Object(c["a"])(this.canWrite),[e]))),this.$emit("update-table",{canRead:s,canWrite:t})},removeUser:function(e){var t=this.canWrite.filter(function(t){return t!==e}),s=this.canRead.filter(function(t){return t!==e});this.$emit("remove-user",{userId:e}),this.$emit("update-table",{canRead:s,canWrite:t})}},mounted:function(){}},p=v,_=(s("f39d"),s("2877")),b=Object(_["a"])(p,d,h,!1,null,"7b4727af",null);b.options.__file="PermissionTable.vue";var g=b.exports,w={name:"StreamDetailUserPerms",components:{UserSearch:l["a"],PermissionTable:g},props:{stream:Object},computed:{streamOwner:function(){var e=this;if(this.isOwner)return"".concat(this.$store.state.user.name," ").concat(this.$store.state.user.surname);var t=this.$store.state.users.find(function(t){return t._id===e.stream.owner});return t?"".concat(t.name," ").concat(t.surname," ").concat(t.company?"("+t.company+")":""):"(loading)"},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},usersFromProjects:function(){var e,t,s=this,r=this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(s.stream.streamId)}),a=(e=Array.prototype).concat.apply(e,Object(c["a"])(r.map(function(e){return e.permissions.canRead}))),n=(t=Array.prototype).concat.apply(t,Object(c["a"])(r.map(function(e){return e.permissions.canWrite})));return Object(c["a"])(new i.a([].concat(Object(c["a"])(n),Object(c["a"])(a))))},streamProjects:function(){var e=this;return this.$store.state.projects.filter(function(t){return-1!==t.streams.indexOf(e.stream.streamId)})}},data:function(){return{userSearch:"",foundUsers:[],searchInProgress:!1}},methods:{changeLinkSharing:function(){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,private:!this.stream.private})},addUserToWrite:function(e){var t=u()([].concat(Object(c["a"])(this.stream.canWrite),[e]));this.$store.dispatch("updateStream",{streamId:this.stream.streamId,canWrite:t})},updatePerms:function(e){var t=e.canRead,s=e.canWrite;this.$store.dispatch("updateStream",{streamId:this.stream.streamId,canRead:t,canWrite:s})}}},x=w,U=(s("0db5"),Object(_["a"])(x,r,a,!1,null,"93f72e02",null));U.options.__file="StreamDetailUserPerms.vue";t["a"]=U.exports}}]);
//# sourceMappingURL=chunk-27c9975c.4f379082.js.map