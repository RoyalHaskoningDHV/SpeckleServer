(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39bd985f"],{"12c7":function(e,t,s){"use strict";var a=s("e543"),n=s.n(a);n.a},"828b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md8:""}},[s("v-text-field",{attrs:{solo:"","append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-flex",{attrs:{xs12:"",md1:""}},[s("v-btn",{staticClass:"transparent",attrs:{disabled:e.buttonsDisabled,flat:""},on:{click:function(t){return e.archiveSelected(!0)}}},[e._v("Archive")])],1),s("v-flex",{attrs:{xs12:"",md1:""}},[s("v-btn",{staticClass:"transparent",attrs:{disabled:e.buttonsDisabled,flat:""},on:{click:function(t){return e.archiveSelected(!1)}}},[e._v("Restore")])],1),s("v-flex",{attrs:{xs12:"",md1:""}},[s("v-btn",{staticClass:"transparent",attrs:{disabled:e.buttonsDisabled,flat:"",color:"error"},on:{click:function(t){e.showWarning=!0}}},[e._v("Delete")])],1),s("v-flex",{attrs:{xs12:""}},[s("v-data-table",{attrs:{items:e.projects,headers:e.headers,loading:e.isGettingProjectData,search:e.search,"item-key":"name","select-all":""},scopedSlots:e._u([{key:"items",fn:function(t){return[s("tr",{attrs:{active:t.selected},on:{click:function(e){t.selected=!t.selected}}},[s("td",[s("v-checkbox",{attrs:{color:"primary","input-value":t.selected,primary:"","hide-details":""}})],1),s("td",[e._v(e._s(t.item.name))]),s("td",[e._v(e._s(t.item.owner))]),s("td",[e._v(e._s(t.item.streams.length))]),s("td",[e._v(e._s(t.item.private))]),s("td",[e._v(e._s(t.item.permissions.canRead.length+1))]),s("td",[e._v(e._s(t.item.permissions.canWrite.length+1))]),s("td",[s("v-checkbox",{staticClass:"align-center justify-left",attrs:{disabled:"","hide-details":""},model:{value:t.item.deleted,callback:function(s){e.$set(t.item,"deleted",s)},expression:"props.item.deleted"}})],1),s("td",[s("v-btn",{attrs:{small:"",color:"primary",to:"/projects/"+t.item._id}},[e._v("Details")])],1)])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:e.showWarning,callback:function(t){e.showWarning=t},expression:"showWarning"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline font-weight-light"},[s("strong",[e._v("Permanently")]),e._v(" delete these projects?")]),s("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.showDeleteProgress,expression:"showDeleteProgress"}],attrs:{color:"error",indeterminate:""}})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"transparent",attrs:{flat:"",color:"error"},on:{click:function(t){return e.deleteSelected()}}},[e._v("Delete Permanently")]),s("v-btn",{on:{click:function(t){e.showWarning=!1}}},[e._v("Cancel")])],1)],1)],1)],1)},n=[],r=(s("ac6a"),s("7f7f"),s("f7fe"),s("13bb"),s("bc3a")),c=s.n(r),i=(s("c64e"),{name:"AdminProjectsView",components:{},watch:{},computed:{projects:function(){return this.$store.state.admin.projects},buttonsDisabled:function(){return!(this.selected.length>0)}},data:function(){return{isGettingProjectData:!1,selected:[],search:"",headers:[{text:"Name",value:"name"},{text:"Owner",value:"owner"},{text:"Streams",value:"streams.length"},{text:"Private",value:"private"},{text:"Read Users:",value:"permissions.canRead.length"},{text:"Write Users:",value:"permissions.canWrite.length"},{text:"Archived",value:"deleted"},{text:"",value:""}],showWarning:!1,showDeleteProgress:!1}},methods:{ownerName:function(e){c.a.get("accounts/".concat(e)).then(function(e){return console.log(e.data.resource),e.data.resource.name+" "+e.data.resource.surname}).catch(function(e){return console.error(e),"Coundn't get name"})},archiveSelected:function(e){var t=this;this.selected.forEach(function(s){t.$store.dispatch("updateProject",{_id:s._id,deleted:e})})},deleteSelected:function(){var e=this;this.selected.forEach(function(t){e.$store.dispatch("deleteProject",t)}),this.showWarning=!1}},mounted:function(){}}),l=i,o=(s("12c7"),s("2877")),d=Object(o["a"])(l,a,n,!1,null,"52048bda",null);t["default"]=d.exports},e543:function(e,t,s){}}]);
//# sourceMappingURL=chunk-39bd985f.394019e4.js.map