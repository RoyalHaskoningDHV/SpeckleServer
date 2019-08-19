(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5babe420"],{"05ce":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[t.onlineEditable?t._e():r("v-flex",{attrs:{xs12:""}},[r("v-alert",{attrs:{type:"warning",value:!t.onlineEditable}},[t._v("\n      This stream is not marked as online editable.\n    ")])],1),r("v-flex",{attrs:{xs12:""}},[t.isGettingStreamData?r("v-progress-linear",{attrs:{indeterminate:!0}}):t._e()],1),r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"elevation-0 pt-4"},[r("v-toolbar",{staticClass:"elevation-0 transparent",attrs:{dense:""}},[r("v-icon",{attrs:{small:"",left:""}},[t._v("business")]),t._v(" \n        "),r("span",{staticClass:"title font-weight-light"},[t._v("Data")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{depressed:"",small:"",flat:"",disabled:!t.onlineEditable},nativeOn:{click:function(e){t.showImportCSVDialog=!0}}},[r("v-icon",[t._v("cloud_upload")]),t._v("\n              Import CSV\n          ")],1),r("v-btn",{attrs:{color:"primary",small:"",depressed:"",disabled:!t.changed||!t.onlineEditable},nativeOn:{click:function(e){return t.preSaveData()}}},[t._v("\n            save\n          ")])],1)],1),r("v-card-text",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},t._l(t.mergedLayers,function(e){return r("stream-layer",{key:e.guid,attrs:{layer:e},on:{update:t.updateLayer,remove:t.removeLayer}})}),1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{attrs:{block:"",disabled:!t.onlineEditable},nativeOn:{click:function(e){return t.addLayer(e)}}},[r("v-icon",[t._v("add")]),t._v("\n              add a layer\n            ")],1)],1),r("v-flex",{attrs:{xs12:""}})],1)],1)],1)],1),r("v-dialog",{attrs:{width:"500"},model:{value:t.showSaveDialog,callback:function(e){t.showSaveDialog=e},expression:"showSaveDialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n        Commit message\n      ")]),r("v-card-text",[r("p",[t._v("Write a short description of the reasons behind the changes you just made.")]),r("v-text-field",{attrs:{box:""},model:{value:t.commitMessage,callback:function(e){t.commitMessage=e},expression:"commitMessage"}})],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{flat:""},on:{click:function(e){t.showSaveDialog=!1}}},[t._v("\n          cancel\n        ")]),r("v-btn",{attrs:{color:"primary",loading:t.isLoading,disabled:t.isLoading},on:{click:function(e){return t.saveData()}}},[t._v("\n          Save\n        ")])],1)],1)],1),r("v-dialog",{attrs:{width:"500"},model:{value:t.showImportCSVDialog,callback:function(e){t.showImportCSVDialog=e},expression:"showImportCSVDialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("\n        CSV Import\n      ")]),r("v-card-text",[r("p",[t._v("Paste your csv below.")]),r("p",{staticClass:"md-caption"},[t._v('We assume the first row will contain the column names. Each column will become a separate "output port" or layer.')]),r("v-textarea",{staticStyle:{height:"150px",width:"100%"},attrs:{box:""},model:{value:t.csvInput,callback:function(e){t.csvInput=e},expression:"csvInput"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{flat:""},on:{click:function(e){return t.closeCsvDialog()}}},[t._v("Cancel")]),r("v-btn",{attrs:{color:"primary",loading:t.isLoading,disabled:t.isLoading},on:{click:function(e){return t.importCSV()}}},[t._v("Import CSV")])],1)],1)],1)],1)},n=[],a=(r("7514"),r("6b54"),r("7f7f"),r("ac6a"),r("f7fe")),s=r.n(a),o=(r("13bb"),r("bc3a")),u=r.n(o),c=(r("c64e"),r("369b")),l=r.n(c),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticClass:"pa-2 my-5",attrs:{row:"",wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"",md3:"","mb-3":""}},[r("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){return t.removeLayer()}}},[r("v-icon",[t._v("delete_forever")])],1),r("span",{staticClass:"subheading font-weight-lightxxx"},[r("editable-span",{attrs:{text:t.layer.name,"data-key":t.layer.guid},on:{update:t.updateName}})],1)],1),r("v-flex",{attrs:{xs12:"",md9:"","pl-2":""}},[r("v-text-field",{attrs:{box:"",label:'Layer "'+t.layer.name+'" data',hint:"values will be separated by commas and parsed into their natural types (strings, numbers, booleans)"},model:{value:t.rawData,callback:function(e){t.rawData=e},expression:"rawData"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-divider")],1)],1)},d=[],f=r("59ad"),p=r.n(f),m=(r("28a5"),{name:"StreamLayer",props:{layer:Object},watch:{speckledData:function(){if(this.firstCall)return this.firstCall=!1;this.emitUpdate()},layer:function(t){this.rawData=this.layer.objects.join(", ")}},computed:{speckledData:function(){if(!this.parsedData)return[];var t=this.parsedData.map(function(t){return"the meaning of life"===t?{type:"Number",value:42}:"0"===t?{type:"Number",value:0}:"boolean"===typeof t?{type:"Boolean",value:t}:"string"===typeof t?{type:"String",value:t}:"number"===typeof t?{type:"Number",value:t}:void 0});return t},parsedData:function(){if(!this.rawData)return null;var t=[];return t=this.splitArray?this.rawData.split(",").map(function(t){return t.trim()}).map(function(t){var e=null;return e=p()(t),e||(e="true"===t||"false"!==t&&t),e}):[this.rawData],t}},data:function(){return{rawData:"",expanded:!1,splitArray:!0,firstCall:!0}},methods:{removeLayer:function(){this.$emit("remove",this.layer)},updateName:function(t){this.layer.name=t.text.trim(),this.emitUpdate()},__emitUpdate:function(){this.$emit("update",{layer:this.layer,objects:this.speckledData})},emitUpdate:s()(function(){this.$emit("update",{layer:this.layer,objects:this.speckledData})},1e3)},created:function(){this.rawData=this.layer.objects.join(", ")}}),g=m,v=(r("accc"),r("2877")),_=Object(v["a"])(g,h,d,!1,null,"4372df5b",null);_.options.__file="StreamLayer.vue";var y=_.exports,b={name:"StreamEditView",components:{StreamLayer:y},watch:{stream:function(t,e){this.fetchData(t.streamId)}},computed:{mergedLayers:function(){var t=this;if(!this.deStream)return[];var e=[];return this.deStream.layers.forEach(function(r){e.push({name:r.name,isArray:!0,startIndex:r.startIndex,objectCount:r.objectCount,guid:r.guid,topology:r.topology,objects:t.deStream.objects.slice(r.startIndex,r.startIndex+r.objectCount).map(function(t){return t.value.toString()})})}),e},deStream:function(){var t=this;return this.$store.state.deStreams.find(function(e){return e.streamId===t.$route.params.streamId})},stream:function(){var t=this;return this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId})},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id},onlineEditable:function(){return!!this.stream.onlineEditable&&this.stream.onlineEditable}},data:function(){return{changed:!1,showSaveDialog:!1,commitMessage:"no message",showImportCSVDialog:!1,csvInput:"",isLoading:!1,isGettingStreamData:!1}},methods:{updateLayer:function(t){var e=t.layer,r=t.objects;this.$store.commit("UPDATE_DE_STREAM_LAYER",{streamId:this.stream.streamId,layer:e,objects:r}),this.changed=!0},addLayer:function(){this.$store.commit("ADD_DE_STREAM_LAYER",{streamId:this.stream.streamId}),this.changed=!0},removeLayer:function(t){this.$store.commit("REMOVE_DE_STREAM_LAYER",{streamId:this.stream.streamId,layer:t}),this.changed=!0},preSaveData:function(){this.showSaveDialog=!0},saveData:function(){var t=this;this.isLoading=!0,this.$store.dispatch("updateStreamObjectsAndLayers",{streamId:this.stream.streamId,commitMessage:this.commitMessage}).then(function(e){t.showSaveDialog=!1,t.commitMessage="no message",t.changed=!1,t.isLoading=!1,console.log(e)}).catch(function(e){t.isLoading=!1,console.error(e)})},fetchData:function(t){var e=this;this.onlineEditable&&(console.log("fetching data for ".concat(t)),this.isGettingStreamData=!0,u.a.get("streams/".concat(t,"?fields=layers")).then(function(r){return e.layers=r.data.resource.layers,console.log(e.layers),u.a.get("streams/".concat(t,"/objects?fields=type,value"))}).then(function(r){e.objects=r.data.resources,e.$store.commit("ADD_DE_STREAM",{streamId:t,layers:e.layers,objects:e.objects}),e.isGettingStreamData=!1,console.log(r)}).catch(function(t){e.isGettingStreamData=!1,console.error(t)}))},importCSV:function(){this.isLoading=!0;var t=l.a.parse(this.csvInput,{dynamicTyping:!1}),e=t.data[0].map(function(e,r){return t.data.map(function(t){return t[r]})});this.$store.commit("APPEND_DE_STREAM_LAYERS_FROM_CSV",{streamId:this.stream.streamId,transposed:e}),this.showImportCSVDialog=!1,this.csvInput="",this.changed=!0,this.isLoading=!1},closeCsvDialog:function(){this.showImportCSVDialog=!1,this.csvInput=""}},mounted:function(){var t=this;console.log("hello data");this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});this.fetchData(this.$route.params.streamId)}},k=b,w=(r("6175"),Object(v["a"])(k,i,n,!1,null,"32c201e0",null));w.options.__file="StreamData.vue";e["default"]=w.exports},"0965":function(t,e,r){r("384f"),t.exports=r("a7d3").parseFloat},"11ff":function(t,e,r){var i=r("da3c").parseFloat,n=r("633a").trim;t.exports=1/i(r("702a")+"-0")!==-1/0?function(t){var e=n(String(t),3),r=i(e);return 0===r&&"-"==e.charAt(0)?-0:r}:i},"369b":function(t,e,r){var i,n,a;
/* @license
Papa Parse
v4.6.2
https://github.com/mholt/PapaParse
License: MIT
*/Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),function(r,s){n=[],i=s,a="function"===typeof i?i.apply(e,n):i,void 0===a||(t.exports=a)}(0,function(){"use strict";var t,e,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},i=!r.document&&!!r.postMessage,n=i&&/(\?|&)papaworker(=|&|$)/.test(r.location.search),a=!1,s={},o=0,u={parse:function(e,i){var n=(i=i||{}).dynamicTyping||!1;if(S(n)&&(i.dynamicTypingFunction=n,n={}),i.dynamicTyping=n,i.transform=!!S(i.transform)&&i.transform,i.worker&&u.WORKERS_SUPPORTED){var c=function(){if(!u.WORKERS_SUPPORTED)return!1;if(!a&&null===u.SCRIPT_PATH)throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");var e=u.SCRIPT_PATH||t;e+=(-1!==e.indexOf("?")?"&":"?")+"papaworker";var i=new r.Worker(e);return i.onmessage=_,i.id=o++,s[i.id]=i}();return c.userStep=i.step,c.userChunk=i.chunk,c.userComplete=i.complete,c.userError=i.error,i.step=S(i.step),i.chunk=S(i.chunk),i.complete=S(i.complete),i.error=S(i.error),delete i.worker,void c.postMessage({input:e,config:i,workerId:c.id})}var l=null;return u.NODE_STREAM_INPUT,"string"==typeof e?l=i.download?new h(i):new f(i):!0===e.readable&&S(e.read)&&S(e.on)?l=new p(i):(r.File&&e instanceof File||e instanceof Object)&&(l=new d(i)),l.stream(e)},unparse:function(t,e){var r=!1,i=!0,n=",",a="\r\n",s='"',o=!1;!function(){"object"==typeof e&&("string"!=typeof e.delimiter||u.BAD_DELIMITERS.filter(function(t){return-1!==e.delimiter.indexOf(t)}).length||(n=e.delimiter),("boolean"==typeof e.quotes||Array.isArray(e.quotes))&&(r=e.quotes),"boolean"!=typeof e.skipEmptyLines&&"string"!=typeof e.skipEmptyLines||(o=e.skipEmptyLines),"string"==typeof e.newline&&(a=e.newline),"string"==typeof e.quoteChar&&(s=e.quoteChar),"boolean"==typeof e.header&&(i=e.header))}();var c=new RegExp(s,"g");if("string"==typeof t&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return h(null,t,o);if("object"==typeof t[0])return h(l(t[0]),t,o)}else if("object"==typeof t)return"string"==typeof t.data&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:l(t.data[0])),Array.isArray(t.data[0])||"object"==typeof t.data[0]||(t.data=[t.data])),h(t.fields||[],t.data||[],o);throw"exception: Unable to serialize unrecognized input";function l(t){if("object"!=typeof t)return[];var e=[];for(var r in t)e.push(r);return e}function h(t,e,r){var s="";"string"==typeof t&&(t=JSON.parse(t)),"string"==typeof e&&(e=JSON.parse(e));var o=Array.isArray(t)&&0<t.length,u=!Array.isArray(e[0]);if(o&&i){for(var c=0;c<t.length;c++)0<c&&(s+=n),s+=d(t[c],c);0<e.length&&(s+=a)}for(var l=0;l<e.length;l++){var h=o?t.length:e[l].length,f=!1,p=o?0===Object.keys(e[l]).length:0===e[l].length;if(r&&!o&&(f="greedy"===r?""===e[l].join("").trim():1===e[l].length&&0===e[l][0].length),"greedy"===r&&o){for(var m=[],g=0;g<h;g++){var v=u?t[g]:g;m.push(e[l][v])}f=""===m.join("").trim()}if(!f){for(var _=0;_<h;_++){0<_&&!p&&(s+=n);var y=o&&u?t[_]:_;s+=d(e[l][y],_)}l<e.length-1&&(!r||0<h&&!p)&&(s+=a)}}return s}function d(t,e){if(null==t)return"";if(t.constructor===Date)return JSON.stringify(t).slice(1,25);t=t.toString().replace(c,s+s);var i="boolean"==typeof r&&r||Array.isArray(r)&&r[e]||function(t,e){for(var r=0;r<e.length;r++)if(-1<t.indexOf(e[r]))return!0;return!1}(t,u.BAD_DELIMITERS)||-1<t.indexOf(n)||" "===t.charAt(0)||" "===t.charAt(t.length-1);return i?s+t+s:t}}};if(u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\ufeff",u.BAD_DELIMITERS=["\r","\n",'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!r.Worker,u.SCRIPT_PATH=null,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=m,u.NetworkStreamer=h,u.FileStreamer=d,u.StringStreamer=f,u.ReadableStreamStreamer=p,r.jQuery){var c=r.jQuery;c.fn.parse=function(t){var e=t.config||{},i=[];return this.each(function(t){if("INPUT"!==c(this).prop("tagName").toUpperCase()||"file"!==c(this).attr("type").toLowerCase()||!r.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:c.extend({},e)})}),n(),this;function n(){if(0!==i.length){var e,r,n,s,o=i[0];if(S(t.before)){var l=t.before(o.file,o.inputElem);if("object"==typeof l){if("abort"===l.action)return e="AbortError",r=o.file,n=o.inputElem,s=l.reason,void(S(t.error)&&t.error({name:e},r,n,s));if("skip"===l.action)return void a();"object"==typeof l.config&&(o.instanceConfig=c.extend(o.instanceConfig,l.config))}else if("skip"===l)return void a()}var h=o.instanceConfig.complete;o.instanceConfig.complete=function(t){S(h)&&h(t,o.file,o.inputElem),a()},u.parse(o.file,o.instanceConfig)}else S(t.complete)&&t.complete()}function a(){i.splice(0,1),n()}}}function l(t){this._handle=null,this._finished=!1,this._completed=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var e=k(t);e.chunkSize=parseInt(e.chunkSize),t.step||t.chunk||(e.chunkSize=null),this._handle=new m(e),(this._handle.streamer=this)._config=e}.call(this,t),this.parseChunk=function(t,e){if(this.isFirstChunk&&S(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1;var a=this._partialLine+t;this._partialLine="";var s=this._handle.parse(a,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var o=s.meta.cursor;this._finished||(this._partialLine=a.substring(o-this._baseIndex),this._baseIndex=o),s&&s.data&&(this._rowCount+=s.data.length);var c=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)r.postMessage({results:s,workerId:u.WORKER_ID,finished:c});else if(S(this._config.chunk)&&!e){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return;s=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!c||!S(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),c||s&&s.meta.paused||this._nextChunk(),s}},this._sendError=function(t){S(this._config.error)?this._config.error(t):n&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:t,finished:!1})}}function h(t){var e;(t=t||{}).chunkSize||(t.chunkSize=u.RemoteChunkSize),l.call(this,t),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(t){this._input=t,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),i||(e.onload=w(this._chunkLoaded,this),e.onerror=w(this._chunkError,this)),e.open("GET",this._input,!i),this._config.downloadRequestHeaders){var t=this._config.downloadRequestHeaders;for(var r in t)e.setRequestHeader(r,t[r])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+n),e.setRequestHeader("If-None-Match","webkit-no-cache")}try{e.send()}catch(t){this._chunkError(t.message)}i&&0===e.status?this._chunkError():this._start+=this._config.chunkSize}},this._chunkLoaded=function(){4===e.readyState&&(e.status<200||400<=e.status?this._chunkError():(this._finished=!this._config.chunkSize||this._start>function(t){var e=t.getResponseHeader("Content-Range");return null===e?-1:parseInt(e.substr(e.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(t){var r=e.statusText||t;this._sendError(new Error(r))}}function d(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=u.LocalChunkSize),l.call(this,t);var i="undefined"!=typeof FileReader;this.stream=function(t){this._input=t,r=t.slice||t.webkitSlice||t.mozSlice,i?((e=new FileReader).onload=w(this._chunkLoaded,this),e.onerror=w(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var t=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);t=r.call(t,this._start,n)}var a=e.readAsText(t,this._config.encoding);i||this._chunkLoaded({target:{result:a}})},this._chunkLoaded=function(t){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(t.target.result)},this._chunkError=function(){this._sendError(e.error)}}function f(t){var e;l.call(this,t=t||{}),this.stream=function(t){return e=t,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var t=this._config.chunkSize,r=t?e.substr(0,t):e;return e=t?e.substr(t):"",this._finished=!e,this.parseChunk(r)}}}function p(t){l.call(this,t=t||{});var e=[],r=!0,i=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(t){this._input=t,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===e.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=w(function(t){try{e.push("string"==typeof t?t:t.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(t){this._streamError(t)}},this),this._streamError=w(function(t){this._streamCleanUp(),this._sendError(t)},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function m(t){var e,r,i,n=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,a=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,s=this,o=0,c=0,l=!1,h=!1,d=[],f={data:[],errors:[],meta:{}};if(S(t.step)){var p=t.step;t.step=function(e){if(f=e,y())_();else{if(_(),0===f.data.length)return;o+=e.data.length,t.preview&&o>t.preview?r.abort():p(f,s)}}}function m(e){return"greedy"===t.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function _(){if(f&&i&&(w("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),i=!1),t.skipEmptyLines)for(var e=0;e<f.data.length;e++)m(f.data[e])&&f.data.splice(e--,1);return y()&&function(){if(f){for(var e=0;y()&&e<f.data.length;e++)for(var r=0;r<f.data[e].length;r++){var i=f.data[e][r];t.trimHeaders&&(i=i.trim()),d.push(i)}f.data.splice(0,1)}}(),function(){if(!f||!t.header&&!t.dynamicTyping&&!t.transform)return f;for(var e=0;e<f.data.length;e++){var r,i=t.header?{}:[];for(r=0;r<f.data[e].length;r++){var n=r,a=f.data[e][r];t.header&&(n=r>=d.length?"__parsed_extra":d[r]),t.transform&&(a=t.transform(a,n)),a=b(n,a),"__parsed_extra"===n?(i[n]=i[n]||[],i[n].push(a)):i[n]=a}f.data[e]=i,t.header&&(r>d.length?w("FieldMismatch","TooManyFields","Too many fields: expected "+d.length+" fields but parsed "+r,c+e):r<d.length&&w("FieldMismatch","TooFewFields","Too few fields: expected "+d.length+" fields but parsed "+r,c+e))}return t.header&&f.meta&&(f.meta.fields=d),c+=f.data.length,f}()}function y(){return t.header&&0===d.length}function b(e,r){return i=e,t.dynamicTypingFunction&&void 0===t.dynamicTyping[i]&&(t.dynamicTyping[i]=t.dynamicTypingFunction(i)),!0===(t.dynamicTyping[i]||t.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(n.test(r)?parseFloat(r):a.test(r)?new Date(r):""===r?null:r):r;var i}function w(t,e,r,i){f.errors.push({type:t,code:e,message:r,row:i})}this.parse=function(n,a,s){var o=t.quoteChar||'"';if(t.newline||(t.newline=function(t,e){t=t.substr(0,1048576);var r=new RegExp(g(e)+"([^]*?)"+g(e),"gm"),i=(t=t.replace(r,"")).split("\r"),n=t.split("\n"),a=1<n.length&&n[0].length<i[0].length;if(1===i.length||a)return"\n";for(var s=0,o=0;o<i.length;o++)"\n"===i[o][0]&&s++;return s>=i.length/2?"\r\n":"\r"}(n,o)),i=!1,t.delimiter)S(t.delimiter)&&(t.delimiter=t.delimiter(n),f.meta.delimiter=t.delimiter);else{var c=function(e,r,i,n){for(var a,s,o,c=[",","\t","|",";",u.RECORD_SEP,u.UNIT_SEP],l=0;l<c.length;l++){var h=c[l],d=0,f=0,p=0;o=void 0;for(var g=new v({comments:n,delimiter:h,newline:r,preview:10}).parse(e),_=0;_<g.data.length;_++)if(i&&m(g.data[_]))p++;else{var y=g.data[_].length;f+=y,void 0!==o?1<y&&(d+=Math.abs(y-o),o=y):o=y}0<g.data.length&&(f/=g.data.length-p),(void 0===s||d<s)&&1.99<f&&(s=d,a=h)}return{successful:!!(t.delimiter=a),bestDelimiter:a}}(n,t.newline,t.skipEmptyLines,t.comments);c.successful?t.delimiter=c.bestDelimiter:(i=!0,t.delimiter=u.DefaultDelimiter),f.meta.delimiter=t.delimiter}var h=k(t);return t.preview&&t.header&&h.preview++,e=n,r=new v(h),f=r.parse(e,a,s),_(),l?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),e=e.substr(r.getCharIndex())},this.resume=function(){l=!1,s.streamer.parseChunk(e,!0)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),f.meta.aborted=!0,S(t.complete)&&t.complete(f),e=""}}function g(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(t){var e,r=(t=t||{}).delimiter,i=t.newline,n=t.comments,a=t.step,s=t.preview,o=t.fastMode,c=e=void 0===t.quoteChar?'"':t.quoteChar;if(void 0!==t.escapeChar&&(c=t.escapeChar),("string"!=typeof r||-1<u.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw"Comment character same as delimiter";!0===n?n="#":("string"!=typeof n||-1<u.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var l=0,h=!1;this.parse=function(t,u,d){if("string"!=typeof t)throw"Input must be a string";var f=t.length,p=r.length,m=i.length,g=n.length,v=S(a),_=[],y=[],b=[],k=l=0;if(!t)return M();if(o||!1!==o&&-1===t.indexOf(e)){for(var w=t.split(i),E=0;E<w.length;E++){if(b=w[E],l+=b.length,E!==w.length-1)l+=i.length;else if(d)return M();if(!n||b.substr(0,g)!==n){if(v){if(_=[],A(b.split(r)),F(),h)return M()}else A(b.split(r));if(s&&s<=E)return _=_.slice(0,s),M(!0)}}return M()}for(var C,x=t.indexOf(r,l),D=t.indexOf(i,l),I=new RegExp(c.replace(/[-[\]\/{}()*+?.\\^$|]/g,"\\$&")+e,"g");;)if(t[l]!==e)if(n&&0===b.length&&t.substr(l,g)===n){if(-1===D)return M();l=D+m,D=t.indexOf(i,l),x=t.indexOf(r,l)}else if(-1!==x&&(x<D||-1===D))b.push(t.substring(l,x)),l=x+p,x=t.indexOf(r,l);else{if(-1===D)break;if(b.push(t.substring(l,D)),j(D+m),v&&(F(),h))return M();if(s&&_.length>=s)return M(!0)}else for(C=l,l++;;){if(-1===(C=t.indexOf(e,C+1)))return d||y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:_.length,index:l}),T();if(C===f-1)return T(t.substring(l,C).replace(I,e));if(e!==c||t[C+1]!==c){if(e===c||0===C||t[C-1]!==c){var R=L(-1===D?x:Math.min(x,D));if(t[C+1+R]===r){b.push(t.substring(l,C).replace(I,e)),l=C+1+R+p,x=t.indexOf(r,l),D=t.indexOf(i,l);break}var O=L(D);if(t.substr(C+1+O,m)===i){if(b.push(t.substring(l,C).replace(I,e)),j(C+1+O+m),x=t.indexOf(r,l),v&&(F(),h))return M();if(s&&_.length>=s)return M(!0);break}y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:_.length,index:l}),C++}}else C++}return T();function A(t){_.push(t),k=l}function L(e){var r=0;if(-1!==e){var i=t.substring(C+1,e);i&&""===i.trim()&&(r=i.length)}return r}function T(e){return d||(void 0===e&&(e=t.substr(l)),b.push(e),l=f,A(b),v&&F()),M()}function j(e){l=e,A(b),b=[],D=t.indexOf(i,l)}function M(t){return{data:_,errors:y,meta:{delimiter:r,linebreak:i,aborted:h,truncated:!!t,cursor:k+(u||0)}}}function F(){a(M()),_=[],y=[]}},this.abort=function(){h=!0},this.getCharIndex=function(){return l}}function _(t){var e=t.data,r=s[e.workerId],i=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var n={abort:function(){i=!0,y(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(S(r.userStep)){for(var a=0;a<e.results.data.length&&(r.userStep({data:[e.results.data[a]],errors:e.results.errors,meta:e.results.meta},n),!i);a++);delete e.results}else S(r.userChunk)&&(r.userChunk(e.results,n,e.file),delete e.results)}e.finished&&!i&&y(e.workerId,e.results)}function y(t,e){var r=s[t];S(r.userComplete)&&r.userComplete(e),r.terminate(),delete s[t]}function b(){throw"Not implemented."}function k(t){if("object"!=typeof t||null===t)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=k(t[r]);return e}function w(t,e){return function(){t.apply(e,arguments)}}function S(t){return"function"==typeof t}return n?r.onmessage=function(t){var e=t.data;if(void 0===u.WORKER_ID&&e&&(u.WORKER_ID=e.workerId),"string"==typeof e.input)r.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0});else if(r.File&&e.input instanceof File||e.input instanceof Object){var i=u.parse(e.input,e.config);i&&r.postMessage({workerId:u.WORKER_ID,results:i,finished:!0})}}:u.WORKERS_SUPPORTED&&(e=document.getElementsByTagName("script"),t=e.length?e[e.length-1].src:"",document.body?document.addEventListener("DOMContentLoaded",function(){a=!0},!0):a=!0),(h.prototype=Object.create(l.prototype)).constructor=h,(d.prototype=Object.create(l.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(p.prototype=Object.create(l.prototype)).constructor=p,u})},"384f":function(t,e,r){var i=r("d13f"),n=r("11ff");i(i.G+i.F*(parseFloat!=n),{parseFloat:n})},"59ad":function(t,e,r){t.exports=r("0965")},6175:function(t,e,r){"use strict";var i=r("a1e8"),n=r.n(i);n.a},"633a":function(t,e,r){var i=r("d13f"),n=r("e5fa"),a=r("d782"),s=r("702a"),o="["+s+"]",u="​",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),h=function(t,e,r){var n={},o=a(function(){return!!s[t]()||u[t]()!=u}),c=n[t]=o?e(d):s[t];r&&(n[r]=c),i(i.P+i.F*o,"String",n)},d=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=h},"702a":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},a1e8:function(t,e,r){},accc:function(t,e,r){"use strict";var i=r("b2e4"),n=r.n(i);n.a},b2e4:function(t,e,r){}}]);
//# sourceMappingURL=chunk-5babe420.9d854356.js.map