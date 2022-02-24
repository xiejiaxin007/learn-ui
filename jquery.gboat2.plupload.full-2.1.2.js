/* eslint-disable*/
 (function(b,g){var d={};function c(m,n){var l,j=[];for(var k=0;k<m.length;++k){l=d[m[k]]||e(m[k]);if(!l){throw"module definition dependecy not found: "+m[k]}j.push(l)}n.apply(null,j)}function h(k,j,i){if(typeof k!=="string"){throw"invalid module definition, module id must be defined and be a string"}if(j===g){throw"invalid module definition, dependencies must be specified"}if(i===g){throw"invalid module definition, definition function must be specified"}c(j,function(){d[k]=i.apply(null,arguments)})}function f(i){return !!d[i]}function e(l){var j=b;var i=l.split(/[.\/]/);for(var k=0;k<i.length;++k){if(!j[i[k]]){return}j=j[i[k]]}return j}function a(l){for(var k=0;k<l.length;k++){var m=b;var o=l[k];var j=o.split(/[.\/]/);for(var n=0;n<j.length-1;++n){if(m[j[n]]===g){m[j[n]]={}}m=m[j[n]]}m[j[j.length-1]]=d[o]}}h("moxie/core/utils/Basic",[],function(){var r=function(w){var v;if(w===v){return"undefined"}else{if(w===null){return"null"}else{if(w.nodeType){return"node"}}}return({}).toString.call(w).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()};var n=function(w){var v;p(arguments,function(x,y){if(y>0){p(x,function(A,z){if(A!==v){if(r(w[z])===r(A)&&!!~u(r(A),["array","object"])){n(w[z],A)}else{w[z]=A}}})}});return w};var p=function(A,B){var z,x,w,y;if(A){try{z=A.length}catch(v){z=y}if(z===y){for(x in A){if(A.hasOwnProperty(x)){if(B(A[x],x)===false){return}}}}else{for(w=0;w<z;w++){if(B(A[w],w)===false){return}}}}};var s=function(v){var w;if(!v||r(v)!=="object"){return true}for(w in v){return false}return true};var l=function(w,v){var x=0,y=w.length;if(r(v)!=="function"){v=function(){}}if(!w||!w.length){v()}function z(A){if(r(w[A])==="function"){w[A](function(B){++A<y&&!B?z(A):v(B)})}}z(x)};var i=function(w,v){var y=0,x=w.length,z=new Array(x);p(w,function(B,A){B(function(D){if(D){return v(D)}var C=[].slice.call(arguments);C.shift();z[A]=C;y++;if(y===x){z.unshift(null);v.apply(this,z)}})})};var u=function(x,y){if(y){if(Array.prototype.indexOf){return Array.prototype.indexOf.call(y,x)}for(var v=0,w=y.length;v<w;v++){if(y[v]===x){return v}}}return -1};var q=function(w,y){var x=[];if(r(w)!=="array"){w=[w]}if(r(y)!=="array"){y=[y]}for(var v in w){if(u(w[v],y)===-1){x.push(w[v])}}return x.length?x:false};var t=function(x,w){var v=[];p(x,function(y){if(u(y,w)!==-1){v.push(y)}});return v.length?v:null};var m=function(x){var w,v=[];for(w=0;w<x.length;w++){v[w]=x[w]}return v};var o=(function(){var v=0;return function(y){var w=new Date().getTime().toString(32),x;for(x=0;x<5;x++){w+=Math.floor(Math.random()*65535).toString(32)}return(y||"o_")+w+(v++).toString(32)}}());var j=function(v){if(!v){return v}return String.prototype.trim?String.prototype.trim.call(v):v.toString().replace(/^\s*/,"").replace(/\s*$/,"")};var k=function(v){if(typeof(v)!=="string"){return v}var x={t:1099511627776,g:1073741824,m:1048576,k:1024},w;v=/^([0-9]+)([mgk]?)$/.exec(v.toLowerCase().replace(/[^0-9mkg]/g,""));w=v[2];v=+v[1];if(x.hasOwnProperty(w)){v*=x[w]}return v};return{guid:o,typeOf:r,extend:n,each:p,isEmptyObj:s,inSeries:l,inParallel:i,inArray:u,arrayDiff:q,arrayIntersect:t,toArray:m,trim:j,parseSizeStr:k}});h("moxie/core/I18n",["moxie/core/utils/Basic"],function(j){var i={};return{addI18n:function(k){return j.extend(i,k)},translate:function(k){return i[k]||k},_:function(k){return this.translate(k)},sprintf:function(l){var k=[].slice.call(arguments,1);return l.replace(/%[a-z]/g,function(){var m=k.shift();return j.typeOf(m)!=="undefined"?m:""})}}});h("moxie/core/utils/Mime",["moxie/core/utils/Basic","moxie/core/I18n"],function(l,k){var i=""+"application/msword,doc dot,"+"application/pdf,pdf,"+"application/pgp-signature,pgp,"+"application/postscript,ps ai eps,"+"application/rtf,rtf,"+"application/vnd.ms-excel,xls xlb,"+"application/vnd.ms-powerpoint,ppt pps pot,"+"application/zip,zip,"+"application/x-shockwave-flash,swf swfl,"+"application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,"+"application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,"+"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,"+"application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,"+"application/vnd.openxmlformats-officedocument.presentationml.template,potx,"+"application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,"+"application/x-javascript,js,"+"application/json,json,"+"audio/mpeg,mp3 mpga mpega mp2,"+"audio/x-wav,wav,"+"audio/x-m4a,m4a,"+"audio/ogg,oga ogg,"+"audio/aiff,aiff aif,"+"audio/flac,flac,"+"audio/aac,aac,"+"audio/ac3,ac3,"+"audio/x-ms-wma,wma,"+"image/bmp,bmp,"+"image/gif,gif,"+"image/jpeg,jpg jpeg jpe,"+"image/photoshop,psd,"+"image/png,png,"+"image/svg+xml,svg svgz,"+"image/tiff,tiff tif,"+"text/plain,asc txt text diff log,"+"text/html,htm html xhtml,"+"text/css,css,"+"text/csv,csv,"+"text/rtf,rtf,"+"video/mpeg,mpeg mpg mpe m2v,"+"video/quicktime,qt mov,"+"video/mp4,mp4,"+"video/x-m4v,m4v,"+"video/x-flv,flv,"+"video/x-ms-wmv,wmv,"+"video/avi,avi,"+"video/webm,webm,"+"video/3gpp,3gpp 3gp,"+"video/3gpp2,3g2,"+"video/vnd.rn-realvideo,rv,"+"video/ogg,ogv,"+"video/x-matroska,mkv,"+"application/vnd.oasis.opendocument.formula-template,otf,"+"application/octet-stream,exe";
 var j={mimes:{},extensions:{},addMimeType:function(m){var n=m.split(/,/),o,q,p;for(o=0;o<n.length;o+=2){p=n[o+1].split(/ /);for(q=0;q<p.length;q++){this.mimes[p[q]]=n[o]}this.extensions[n[o]]=p}},extList2mimes:function(s,t){var n=this,r,o,q,p,m=[];for(o=0;o<s.length;o++){r=s[o].extensions.split(/\s*,\s*/);for(q=0;q<r.length;q++){if(r[q]==="*"){return[]}p=n.mimes[r[q]];if(!p){if(t&&/^\w+$/.test(r[q])){m.push("."+r[q])}else{return[]}}else{if(l.inArray(p,m)===-1){m.push(p)}}}}return m},mimes2exts:function(m){var n=this,o=[];l.each(m,function(q){if(q==="*"){o=[];return false}var p=q.match(/^(\w+)\/(\*|\w+)$/);if(p){if(p[2]==="*"){l.each(n.extensions,function(r,s){if((new RegExp("^"+p[1]+"/")).test(s)){[].push.apply(o,n.extensions[s])}})}else{if(n.extensions[q]){[].push.apply(o,n.extensions[q])}}}});return o},mimes2extList:function(m){var o=[],n=[];if(l.typeOf(m)==="string"){m=l.trim(m).split(/\s*,\s*/)}n=this.mimes2exts(m);o.push({title:k.translate("Files"),extensions:n.length?n.join(","):"*"});o.mimes=m;return o},getFileExtension:function(n){var m=n&&n.match(/\.([^.]+)$/);if(m){return m[1].toLowerCase()}return""},getFileMime:function(m){return this.mimes[this.getFileExtension(m)]||""}};j.addMimeType(i);return j});h("moxie/core/utils/Env",["moxie/core/utils/Basic"],function(m){var k=(function(r){var H="",G="?",B="function",t="undefined",p="object",q="major",C="model",s="name",y="type",w="vendor",E="version",n="architecture",u="console",A="mobile",F="tablet";var o={has:function(J,I){return I.toLowerCase().indexOf(J.toLowerCase())!==-1},lowerize:function(I){return I.toLowerCase()}};var D={rgx:function(){for(var S,M=0,L,K,J,I,N,O,P=arguments;M<P.length;M+=2){var R=P[M],Q=P[M+1];if(typeof(S)===t){S={};for(J in Q){I=Q[J];if(typeof(I)===p){S[I[0]]=r}else{S[I]=r}}}for(L=K=0;L<R.length;L++){N=R[L].exec(this.getUA());if(!!N){for(J=0;J<Q.length;J++){O=N[++K];I=Q[J];if(typeof(I)===p&&I.length>0){if(I.length==2){if(typeof(I[1])==B){S[I[0]]=I[1].call(this,O)}else{S[I[0]]=I[1]}}else{if(I.length==3){if(typeof(I[1])===B&&!(I[1].exec&&I[1].test)){S[I[0]]=O?I[1].call(this,O,I[2]):r}else{S[I[0]]=O?O.replace(I[1],I[2]):r}}else{if(I.length==4){S[I[0]]=O?I[3].call(this,O.replace(I[1],I[2])):r}}}}else{S[I]=O?O:r}}break}}if(!!N){break}}return S},str:function(L,K){for(var J in K){if(typeof(K[J])===p&&K[J].length>0){for(var I=0;I<K[J].length;I++){if(o.has(K[J][I],L)){return(J===G)?r:J}}}else{if(o.has(K[J],L)){return(J===G)?r:J}}}return L}};var z={browser:{oldsafari:{major:{"1":["/8","/1","/3"],"2":"/4","?":"/"},version:{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{"HTC":"APA","Sprint":"Sprint"}}},os:{windows:{version:{"ME":"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0","2000":"NT 5.0","XP":["NT 5.1","NT 5.2"],"Vista":"NT 6.0","7":"NT 6.1","8":"NT 6.2","8.1":"NT 6.3","RT":"ARM"}}}};var x={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[s,E,q],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[s,"Opera"],E,q],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[s,E,q],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[s,"IE"],E,q],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[s,"Yandex"],E,q],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[s,/_/g," "],E,q],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],[s,E,q],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[s,"Dolphin"],E,q],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[s,"Chrome"],E,q],[/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i],[[s,"Android Browser"],E,q],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[E,q,[s,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[E,q,s],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[s,[q,D.str,z.browser.oldsafari.major],[E,D.str,z.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[s,E,q],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[s,"Netscape"],E,q],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[s,E,q]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[s,E],[/rv\:([\w\.]+).*(gecko)/i],[E,s]],os:[[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[s,[E,D.str,z.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[s,"Windows"],[E,D.str,z.os.windows.version]],[/\((bb)(10);/i],[[s,"BlackBerry"],E],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)\/([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],[s,E],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[s,"Symbian"],E],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[s,"Firefox OS"],E],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[s,E],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[s,"Chromium OS"],E],[/(sunos)\s?([\w\.]+\d)*/i],[[s,"Solaris"],E],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[s,E],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[s,"iOS"],[E,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],[s,[E,/_/g,"."]],[/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,/(unix)\s?([\w\.]+)*/i],[s,E]]};
 var v=function(I){var J=I||((window&&window.navigator&&window.navigator.userAgent)?window.navigator.userAgent:H);this.getBrowser=function(){return D.rgx.apply(this,x.browser)};this.getEngine=function(){return D.rgx.apply(this,x.engine)};this.getOS=function(){return D.rgx.apply(this,x.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS()}};this.getUA=function(){return J};this.setUA=function(K){J=K;return this};this.setUA(J)};return new v().getResult()})();function j(v,t,o){var s=0,u=0,n=0,p={"dev":-6,"alpha":-5,"a":-5,"beta":-4,"b":-4,"RC":-3,"rc":-3,"#":-2,"p":1,"pl":1},q=function(w){w=(""+w).replace(/[_\-+]/g,".");w=w.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,".");return(!w.length?[-8]:w.split("."))},r=function(w){return !w?0:(isNaN(w)?p[w]||-7:parseInt(w,10))};v=q(v);t=q(t);u=Math.max(v.length,t.length);for(s=0;s<u;s++){if(v[s]==t[s]){continue}v[s]=r(v[s]);t[s]=r(t[s]);if(v[s]<t[s]){n=-1;break}else{if(v[s]>t[s]){n=1;break}}}if(!o){return n}switch(o){case">":case"gt":return(n>0);case">=":case"ge":return(n>=0);case"<=":case"le":return(n<=0);case"==":case"=":case"eq":return(n===0);case"<>":case"!=":case"ne":return(n!==0);case"":case"<":case"lt":return(n<0);default:return null}}var l=(function(){var n={define_property:(function(){return false}()),create_canvas:(function(){var o=document.createElement("canvas");return !!(o.getContext&&o.getContext("2d"))}()),return_response_type:function(o){try{if(m.inArray(o,["","text","document"])!==-1){return true}else{if(window.XMLHttpRequest){var q=new XMLHttpRequest();q.open("get","/");if("responseType" in q){q.responseType=o;if(q.responseType!==o){return false}return true}}}}catch(p){}return false},use_data_uri:(function(){var o=new Image();o.onload=function(){n.use_data_uri=(o.width===1&&o.height===1)};setTimeout(function(){o.src="data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},1);return false}()),use_data_uri_over32kb:function(){return n.use_data_uri&&(i.browser!=="IE"||i.version>=9)},use_data_uri_of:function(o){return(n.use_data_uri&&o<33000||n.use_data_uri_over32kb())},use_fileinput:function(){var o=document.createElement("input");o.setAttribute("type","file");return !o.disabled}};return function(p){var o=[].slice.call(arguments);o.shift();return m.typeOf(n[p])==="function"?n[p].apply(this,o):!!n[p]}}());var i={can:l,browser:k.browser.name,version:parseFloat(k.browser.major),os:k.os.name,osVersion:k.os.version,verComp:j,swf_url:"../flash/Moxie.swf",xap_url:"../silverlight/Moxie.xap",global_event_dispatcher:"moxie.core.EventTarget.instance.dispatchEvent"};i.OS=i.os;return i});h("moxie/core/utils/Dom",["moxie/core/utils/Env"],function(j){var k=function(q){if(typeof q!=="string"){return q}return document.getElementById(q)};var l=function(s,r){if(!s.className){return false}var q=new RegExp("(^|\\s+)"+r+"(\\s+|$)");return q.test(s.className)};var m=function(r,q){if(!l(r,q)){r.className=!r.className?q:r.className.replace(/\s+$/,"")+" "+q}};var p=function(s,r){if(s.className){var q=new RegExp("(^|\\s+)"+r+"(\\s+|$)");s.className=s.className.replace(q,function(u,t,v){return t===" "&&v===" "?" ":""})}};var i=function(s,q){if(s.currentStyle){return s.currentStyle[q]}else{if(window.getComputedStyle){var r=window.getComputedStyle(s,null);return(r?r[q]:g)}}};var o=function(r,v){var w=0,u=0,A,z=document,s,t;r=r;v=v||z.body;function q(E){var C,D,B=0,F=0;if(E){D=E.getBoundingClientRect();C=z.compatMode==="CSS1Compat"?z.documentElement:z.body;B=D.left+C.scrollLeft;F=D.top+C.scrollTop}return{x:B,y:F}}if(r&&r.getBoundingClientRect&&j.browser==="IE"&&(!z.documentMode||z.documentMode<8)){s=q(r);t=q(v);return{x:s.x-t.x,y:s.y-t.y}}A=r;while(A&&A!=v&&A.nodeType){w+=A.offsetLeft||0;u+=A.offsetTop||0;A=A.offsetParent}A=r.parentNode;while(A&&A!=v&&A.nodeType){w-=A.scrollLeft||0;u-=A.scrollTop||0;A=A.parentNode}return{x:w,y:u}};var n=function(q){return{w:q.offsetWidth||q.clientWidth,h:q.offsetHeight||q.clientHeight}};return{get:k,hasClass:l,addClass:m,removeClass:p,getStyle:i,getPos:o,getSize:n}});h("moxie/core/Exceptions",["moxie/core/utils/Basic"],function(j){function i(m,l){var k;for(k in m){if(m[k]===l){return k}}return null}return{RuntimeError:(function(){var k={NOT_INIT_ERR:1,NOT_SUPPORTED_ERR:9,JS_ERR:4};function l(m){this.code=m;this.name=i(k,m);this.message=this.name+": RuntimeError "+this.code}j.extend(l,k);l.prototype=Error.prototype;return l}()),OperationNotAllowedException:(function(){function k(l){this.code=l;this.name="OperationNotAllowedException"}j.extend(k,{NOT_ALLOWED_ERR:1});k.prototype=Error.prototype;return k}()),ImageError:(function(){var k={WRONG_FORMAT:1,MAX_RESOLUTION_ERR:2};function l(m){this.code=m;this.name=i(k,m);this.message=this.name+": ImageError "+this.code}j.extend(l,k);l.prototype=Error.prototype;return l}()),FileException:(function(){var k={NOT_FOUND_ERR:1,SECURITY_ERR:2,ABORT_ERR:3,NOT_READABLE_ERR:4,ENCODING_ERR:5,NO_MODIFICATION_ALLOWED_ERR:6,INVALID_STATE_ERR:7,SYNTAX_ERR:8};
 function l(m){this.code=m;this.name=i(k,m);this.message=this.name+": FileException "+this.code}j.extend(l,k);l.prototype=Error.prototype;return l}()),DOMException:(function(){var k={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function l(m){this.code=m;this.name=i(k,m);this.message=this.name+": DOMException "+this.code}j.extend(l,k);l.prototype=Error.prototype;return l}()),EventException:(function(){function k(l){this.code=l;this.name="EventException"}j.extend(k,{UNSPECIFIED_EVENT_TYPE_ERR:0});k.prototype=Error.prototype;return k}())}});h("moxie/core/EventTarget",["moxie/core/Exceptions","moxie/core/utils/Basic"],function(i,j){function k(){var l={};j.extend(this,{uid:null,init:function(){if(!this.uid){this.uid=j.guid("uid_")}},addEventListener:function(q,p,n,o){var m=this,r;q=j.trim(q);if(/\s/.test(q)){j.each(q.split(/\s+/),function(s){m.addEventListener(s,p,n,o)});return}q=q.toLowerCase();n=parseInt(n,10)||0;r=l[this.uid]&&l[this.uid][q]||[];r.push({fn:p,priority:n,scope:o||this});if(!l[this.uid]){l[this.uid]={}}l[this.uid][q]=r},hasEventListener:function(m){return m?!!(l[this.uid]&&l[this.uid][m]):!!l[this.uid]},removeEventListener:function(o,n){o=o.toLowerCase();var p=l[this.uid]&&l[this.uid][o],m;if(p){if(n){for(m=p.length-1;m>=0;m--){if(p[m].fn===n){p.splice(m,1);break}}}else{p=[]}if(!p.length){delete l[this.uid][o];if(j.isEmptyObj(l[this.uid])){delete l[this.uid]}}}},removeAllEventListeners:function(){if(l[this.uid]){delete l[this.uid]}},dispatchEvent:function(r){var o,p,q,s,t={},u=true,m;if(j.typeOf(r)!=="string"){s=r;if(j.typeOf(s.type)==="string"){r=s.type;if(s.total!==m&&s.loaded!==m){t.total=s.total;t.loaded=s.loaded}t.async=s.async||false}else{throw new i.EventException(i.EventException.UNSPECIFIED_EVENT_TYPE_ERR)}}if(r.indexOf("::")!==-1){(function(v){o=v[0];r=v[1]}(r.split("::")))}else{o=this.uid}r=r.toLowerCase();p=l[o]&&l[o][r];if(p){p.sort(function(w,v){return v.priority-w.priority});q=[].slice.call(arguments);q.shift();t.type=r;q.unshift(t);var n=[];j.each(p,function(v){q[0].target=v.scope;if(t.async){n.push(function(w){setTimeout(function(){w(v.fn.apply(v.scope,q)===false)},1)})}else{n.push(function(w){w(v.fn.apply(v.scope,q)===false)})}});if(n.length){j.inSeries(n,function(v){u=!v})}}return u},bind:function(){this.addEventListener.apply(this,arguments)},unbind:function(){this.removeEventListener.apply(this,arguments)},unbindAll:function(){this.removeAllEventListeners.apply(this,arguments)},trigger:function(){return this.dispatchEvent.apply(this,arguments)},convertEventPropsToHandlers:function(m){var o;if(j.typeOf(m)!=="array"){m=[m]}for(var n=0;n<m.length;n++){o="on"+m[n];if(j.typeOf(this[o])==="function"){this.addEventListener(m[n],this[o])}else{if(j.typeOf(this[o])==="undefined"){this[o]=null}}}}})}k.instance=new k();return k});h("moxie/core/utils/Encode",[],function(){var k=function(m){return unescape(encodeURIComponent(m))};var l=function(m){return decodeURIComponent(escape(m))};var j=function(t,y){if(typeof(window.atob)==="function"){return y?l(window.atob(t)):window.atob(t)}var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o,n,m,x,w,v,u,z,s=0,A=0,q="",r=[];if(!t){return t}t+="";do{x=p.indexOf(t.charAt(s++));w=p.indexOf(t.charAt(s++));v=p.indexOf(t.charAt(s++));u=p.indexOf(t.charAt(s++));z=x<<18|w<<12|v<<6|u;o=z>>16&255;n=z>>8&255;m=z&255;if(v==64){r[A++]=String.fromCharCode(o)}else{if(u==64){r[A++]=String.fromCharCode(o,n)}else{r[A++]=String.fromCharCode(o,n,m)}}}while(s<t.length);q=r.join("");return y?l(q):q};var i=function(v,A){if(A){k(v)}if(typeof(window.btoa)==="function"){return window.btoa(v)}var q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var p,o,n,z,y,x,w,B,u=0,C=0,t="",s=[];if(!v){return v}do{p=v.charCodeAt(u++);o=v.charCodeAt(u++);n=v.charCodeAt(u++);B=p<<16|o<<8|n;z=B>>18&63;y=B>>12&63;x=B>>6&63;w=B&63;s[C++]=q.charAt(z)+q.charAt(y)+q.charAt(x)+q.charAt(w)}while(u<v.length);t=s.join("");var m=v.length%3;return(m?t.slice(0,m-3):t)+"===".slice(m||3)};return{utf8_encode:k,utf8_decode:l,atob:j,btoa:i}});h("moxie/runtime/Runtime",["moxie/core/utils/Basic","moxie/core/utils/Dom","moxie/core/EventTarget"],function(m,l,n){var i={},j={};function k(w,t,r,q,p){var v=this,o,u=m.guid(t+"_"),s=p||"browser";w=w||{};j[u]=this;r=m.extend({access_binary:false,access_image_binary:false,display_media:false,do_cors:false,drag_and_drop:false,filter_by_extension:true,resize_image:false,report_upload_progress:false,return_response_headers:false,return_response_type:false,return_status_code:true,send_custom_headers:false,select_file:false,select_folder:false,select_multiple:true,send_binary_string:false,send_browser_cookies:true,send_multipart:true,slice_blob:false,stream_upload:false,summon_file_dialog:false,upload_filesize:true,use_http_method:true},r);
 if(w.preferred_caps){s=k.getMode(q,w.preferred_caps,s)}o=(function(){var x={};return{exec:function(A,y,B,z){if(o[y]){if(!x[A]){x[A]={context:this,instance:new o[y]()}}if(x[A].instance[B]){return x[A].instance[B].apply(this,z)}}},removeInstance:function(y){delete x[y]},removeAllInstances:function(){var y=this;m.each(x,function(A,z){if(m.typeOf(A.instance.destroy)==="function"){A.instance.destroy.call(A.context)}y.removeInstance(z)})}}}());m.extend(this,{initialized:false,uid:u,type:t,mode:k.getMode(q,(w.required_caps),s),shimid:u+"_container",clients:0,options:w,can:function(z,A){var x=arguments[2]||r;if(m.typeOf(z)==="string"&&m.typeOf(A)==="undefined"){z=k.parseCaps(z)}if(m.typeOf(z)==="object"){for(var y in z){if(!this.can(y,z[y],x)){return false}}return true}if(m.typeOf(x[z])==="function"){return x[z].call(this,A)}else{return(A===x[z])}},getShimContainer:function(){var x,y=l.get(this.shimid);if(!y){x=this.options.container?l.get(this.options.container):document.body;y=document.createElement("div");y.id=this.shimid;y.className="moxie-shim moxie-shim-"+this.type;m.extend(y.style,{position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"});x.appendChild(y);x=null}return y},getShim:function(){return o},shimExec:function(y,z){var x=[].slice.call(arguments,2);return v.getShim().exec.call(this,this.uid,y,z,x)},exec:function(y,z){var x=[].slice.call(arguments,2);if(v[y]&&v[y][z]){return v[y][z].apply(this,x)}return v.shimExec.apply(this,arguments)},destroy:function(){if(!v){return}var x=l.get(this.shimid);if(x){x.parentNode.removeChild(x)}if(o){o.removeAllInstances()}this.unbindAll();delete j[this.uid];this.uid=null;u=v=o=x=null}});if(this.mode&&w.required_caps&&!this.can(w.required_caps)){this.mode=false}}k.order="html5,flash,silverlight,html4";k.getRuntime=function(o){return j[o]?j[o]:false};k.addConstructor=function(p,o){o.prototype=n.instance;i[p]=o};k.getConstructor=function(o){return i[o]||null};k.getInfo=function(o){var p=k.getRuntime(o);if(p){return{uid:p.uid,type:p.type,mode:p.mode,can:function(){return p.can.apply(p,arguments)}}}return null};k.parseCaps=function(o){var p={};if(m.typeOf(o)!=="string"){return o||{}}m.each(o.split(","),function(q){p[q]=true});return p};k.can=function(p,r){var q,o=k.getConstructor(p),s;if(o){q=new o({required_caps:r});s=q.mode;q.destroy();return !!s}return false};k.thatCan=function(q,r){var p=(r||k.order).split(/\s*,\s*/);for(var o in p){if(k.can(p[o],q)){return p[o]}}return null};k.getMode=function(o,r,p){var q=null;if(m.typeOf(p)==="undefined"){p="browser"}if(r&&!m.isEmptyObj(o)){m.each(r,function(u,s){if(o.hasOwnProperty(s)){var t=o[s](u);if(typeof(t)==="string"){t=[t]}if(!q){q=t}else{if(!(q=m.arrayIntersect(q,t))){return(q=false)}}}});if(q){return m.inArray(p,q)!==-1?p:q[0]}else{if(q===false){return false}}}return p};k.capTrue=function(){return true};k.capFalse=function(){return false};k.capTest=function(o){return function(){return !!o}};return k});h("moxie/runtime/RuntimeClient",["moxie/core/Exceptions","moxie/core/utils/Basic","moxie/runtime/Runtime"],function(i,l,k){return function j(){var m;l.extend(this,{connectRuntime:function(q){var o=this,p;function n(r){var t,s;if(!r.length){o.trigger("RuntimeError",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR));m=null;return}t=r.shift();s=k.getConstructor(t);if(!s){n(r);return}m=new s(q);m.bind("Init",function(){m.initialized=true;setTimeout(function(){m.clients++;o.trigger("RuntimeInit",m)},1)});m.bind("Error",function(){m.destroy();n(r)});if(!m.mode){m.trigger("Error");return}m.init()}if(l.typeOf(q)==="string"){p=q}else{if(l.typeOf(q.ruid)==="string"){p=q.ruid}}if(p){m=k.getRuntime(p);if(m){m.clients++;return m}else{throw new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR)}}n((q.runtime_order||k.order).split(/\s*,\s*/))},getRuntime:function(){if(m&&m.uid){return m}m=null;return null},disconnectRuntime:function(){if(m&&--m.clients<=0){m.destroy();m=null}}})}});h("moxie/file/Blob",["moxie/core/utils/Basic","moxie/core/utils/Encode","moxie/runtime/RuntimeClient"],function(l,j,k){var i={};function m(p,o){function n(u,q,s){var r,t=i[this.uid];if(l.typeOf(t)!=="string"||!t.length){return null}r=new m(null,{type:s,size:q-u});r.detach(t.substr(u,r.size));return r}k.call(this);if(p){this.connectRuntime(p)}if(!o){o={}}else{if(l.typeOf(o)==="string"){o={data:o}}}l.extend(this,{uid:o.uid||l.guid("uid_"),ruid:p,size:o.size||0,type:o.type||"",slice:function(s,q,r){if(this.isDetached()){return n.apply(this,arguments)}return this.getRuntime().exec.call(this,"Blob","slice",this.getSource(),s,q,r)},getSource:function(){if(!i[this.uid]){return null}return i[this.uid]},detach:function(r){if(this.ruid){this.getRuntime().exec.call(this,"Blob","destroy");this.disconnectRuntime();this.ruid=null}r=r||"";var q=r.match(/^data:([^;]*);base64,/);if(q){this.type=q[1];r=j.atob(r.substring(r.indexOf("base64,")+7))}this.size=r.length;i[this.uid]=r},isDetached:function(){return !this.ruid&&l.typeOf(i[this.uid])==="string"},destroy:function(){this.detach();
 delete i[this.uid]}});if(o.data){this.detach(o.data)}else{i[this.uid]=o}}return m});h("moxie/file/File",["moxie/core/utils/Basic","moxie/core/utils/Mime","moxie/file/Blob"],function(k,j,l){function i(n,o){var m,p;if(!o){o={}}if(o.type&&o.type!==""){p=o.type}else{p=j.getFileMime(o.name)}if(o.name){m=o.name.replace(/\\/g,"/");m=m.substr(m.lastIndexOf("/")+1)}else{var q=p.split("/")[0];m=k.guid((q!==""?q:"file")+"_");if(j.extensions[p]){m+="."+j.extensions[p][0]}}l.apply(this,arguments);k.extend(this,{type:p||"",name:m||k.guid("file_"),lastModifiedDate:o.lastModified||(new Date()).toLocaleString()})}i.prototype=l.prototype;return i});h("moxie/file/FileInput",["moxie/core/utils/Basic","moxie/core/utils/Mime","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/core/EventTarget","moxie/core/I18n","moxie/file/File","moxie/runtime/Runtime","moxie/runtime/RuntimeClient"],function(j,m,l,q,s,k,o,i,p){var r=["ready","change","cancel","mouseenter","mouseleave","mousedown","mouseup"];function n(w){var u=this,t,v,x;if(j.inArray(j.typeOf(w),["string","node"])!==-1){w={browse_button:w}}v=l.get(w.browse_button);if(!v){throw new q.DOMException(q.DOMException.NOT_FOUND_ERR)}x={accept:[{title:k.translate("All Files"),extensions:"*"}],name:"file",multiple:false,required_caps:false,container:v.parentNode||document.body};w=j.extend({},x,w);if(typeof(w.required_caps)==="string"){w.required_caps=i.parseCaps(w.required_caps)}if(typeof(w.accept)==="string"){w.accept=m.mimes2extList(w.accept)}t=l.get(w.container);if(!t){t=document.body}if(l.getStyle(t,"position")==="static"){t.style.position="relative"}t=v=null;p.call(u);j.extend(u,{uid:j.guid("uid_"),ruid:null,shimid:null,files:null,init:function(){u.convertEventPropsToHandlers(r);u.bind("RuntimeInit",function(z,y){u.ruid=y.uid;u.shimid=y.shimid;u.bind("Ready",function(){u.trigger("Refresh")},999);u.bind("Change",function(){var A=y.exec.call(u,"FileInput","getFiles");u.files=[];j.each(A,function(B){if(B.size===0){return true}u.files.push(new o(u.ruid,B))})},999);u.bind("Refresh",function(){var D,C,B,A;B=l.get(w.browse_button);A=l.get(y.shimid);if(B){D=l.getPos(B,l.get(w.container));C=l.getSize(B);if(A){j.extend(A.style,{top:D.y+"px",left:D.x+"px",width:C.w+"px",height:C.h+"px"})}}A=B=null});y.exec.call(u,"FileInput","init",w)});u.connectRuntime(j.extend({},w,{required_caps:{select_file:true}}))},disable:function(z){var y=this.getRuntime();if(y){y.exec.call(this,"FileInput","disable",j.typeOf(z)==="undefined"?true:z)}},refresh:function(){u.trigger("Refresh")},destroy:function(){var y=this.getRuntime();if(y){y.exec.call(this,"FileInput","destroy");this.disconnectRuntime()}if(j.typeOf(this.files)==="array"){j.each(this.files,function(z){z.destroy()})}this.files=null}})}n.prototype=s.instance;return n});h("moxie/file/FileDrop",["moxie/core/I18n","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/core/utils/Basic","moxie/file/File","moxie/runtime/RuntimeClient","moxie/core/EventTarget","moxie/core/utils/Mime"],function(k,l,p,i,n,o,r,m){var q=["ready","dragenter","dragleave","drop","error"];function j(t){var s=this,u;if(typeof(t)==="string"){t={drop_zone:t}}u={accept:[{title:k.translate("All Files"),extensions:"*"}],required_caps:{drag_and_drop:true}};t=typeof(t)==="object"?i.extend({},u,t):u;t.container=l.get(t.drop_zone)||document.body;if(l.getStyle(t.container,"position")==="static"){t.container.style.position="relative"}if(typeof(t.accept)==="string"){t.accept=m.mimes2extList(t.accept)}o.call(s);i.extend(s,{uid:i.guid("uid_"),ruid:null,files:null,init:function(){s.convertEventPropsToHandlers(q);s.bind("RuntimeInit",function(w,v){s.ruid=v.uid;s.bind("Drop",function(){var x=v.exec.call(s,"FileDrop","getFiles");s.files=[];i.each(x,function(y){s.files.push(new n(s.ruid,y))})},999);v.exec.call(s,"FileDrop","init",t);s.dispatchEvent("ready")});s.connectRuntime(t)},destroy:function(){var v=this.getRuntime();if(v){v.exec.call(this,"FileDrop","destroy");this.disconnectRuntime()}this.files=null}})}j.prototype=r.instance;return j});h("moxie/runtime/RuntimeTarget",["moxie/core/utils/Basic","moxie/runtime/RuntimeClient","moxie/core/EventTarget"],function(k,j,l){function i(){this.uid=k.guid("uid_");j.call(this);this.destroy=function(){this.disconnectRuntime();this.unbindAll()}}i.prototype=l.instance;return i});h("moxie/file/FileReader",["moxie/core/utils/Basic","moxie/core/utils/Encode","moxie/core/Exceptions","moxie/core/EventTarget","moxie/file/Blob","moxie/file/File","moxie/runtime/RuntimeTarget"],function(i,m,o,q,l,n,k){var p=["loadstart","progress","load","abort","error","loadend"];function j(){var r=this,t;i.extend(this,{uid:i.guid("uid_"),readyState:j.EMPTY,result:null,error:null,readAsBinaryString:function(u){s.call(this,"readAsBinaryString",u)},readAsDataURL:function(u){s.call(this,"readAsDataURL",u)},readAsText:function(u){s.call(this,"readAsText",u)},abort:function(){this.result=null;if(i.inArray(this.readyState,[j.EMPTY,j.DONE])!==-1){return}else{if(this.readyState===j.LOADING){this.readyState=j.DONE
 }}if(t){t.getRuntime().exec.call(this,"FileReader","abort")}this.trigger("abort");this.trigger("loadend")},destroy:function(){this.abort();if(t){t.getRuntime().exec.call(this,"FileReader","destroy");t.disconnectRuntime()}r=t=null}});function s(z,v){t=new k();function x(A){r.readyState=j.DONE;r.error=A;r.trigger("error");w()}function w(){t.destroy();t=null;r.trigger("loadend")}function u(A){t.bind("Error",function(C,B){x(B)});t.bind("Progress",function(B){r.result=A.exec.call(t,"FileReader","getResult");r.trigger(B)});t.bind("Load",function(B){r.readyState=j.DONE;r.result=A.exec.call(t,"FileReader","getResult");r.trigger(B);w()});A.exec.call(t,"FileReader","read",z,v)}this.convertEventPropsToHandlers(p);if(this.readyState===j.LOADING){return x(new o.DOMException(o.DOMException.INVALID_STATE_ERR))}this.readyState=j.LOADING;this.trigger("loadstart");if(v instanceof l){if(v.isDetached()){var y=v.getSource();switch(z){case"readAsText":case"readAsBinaryString":this.result=y;break;case"readAsDataURL":this.result="data:"+v.type+";base64,"+m.btoa(y);break}this.readyState=j.DONE;this.trigger("load");w()}else{u(t.connectRuntime(v.ruid))}}else{x(new o.DOMException(o.DOMException.NOT_FOUND_ERR))}}}j.EMPTY=0;j.LOADING=1;j.DONE=2;j.prototype=q.instance;return j});h("moxie/core/utils/Url",[],function(){var i=function(l,t){var s=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],p=s.length,q={http:80,https:443},n={},r=/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,o=r.exec(l||"");while(p--){if(o[p]){n[s[p]]=o[p]}}if(!n.scheme){if(!t||typeof(t)==="string"){t=i(t||document.location.href)}n.scheme=t.scheme;n.host=t.host;n.port=t.port;var u="";if(/^[^\/]/.test(n.path)){u=t.path;if(!/(\/|\/[^\.]+)$/.test(u)){u=u.replace(/\/[^\/]+$/,"/")}else{u+="/"}}n.path=u+(n.path||"")}if(!n.port){n.port=q[n.scheme]||80}n.port=parseInt(n.port,10);if(!n.path){n.path="/"}delete n.source;return n};var k=function(m){var n={http:80,https:443},l=i(m);return l.scheme+"://"+l.host+(l.port!==n[l.scheme]?":"+l.port:"")+l.path+(l.query?l.query:"")};var j=function(m){function l(n){return[n.scheme,n.host,n.port].join("/")}if(typeof m==="string"){m=i(m)}return l(i())===l(m)};return{parseUrl:i,resolveUrl:k,hasSameOrigin:j}});h("moxie/file/FileReaderSync",["moxie/core/utils/Basic","moxie/runtime/RuntimeClient","moxie/core/utils/Encode"],function(k,j,i){return function(){j.call(this);k.extend(this,{uid:k.guid("uid_"),readAsBinaryString:function(m){return l.call(this,"readAsBinaryString",m)},readAsDataURL:function(m){return l.call(this,"readAsDataURL",m)},readAsText:function(m){return l.call(this,"readAsText",m)}});function l(s,o){if(o.isDetached()){var r=o.getSource();switch(s){case"readAsBinaryString":return r;case"readAsDataURL":return"data:"+o.type+";base64,"+i.btoa(r);case"readAsText":var n="";for(var p=0,q=r.length;p<q;p++){n+=String.fromCharCode(r[p])}return n}}else{var m=this.connectRuntime(o.ruid).exec.call(this,"FileReaderSync","read",s,o);this.disconnectRuntime();return m}}}});h("moxie/xhr/FormData",["moxie/core/Exceptions","moxie/core/utils/Basic","moxie/file/Blob"],function(i,j,l){function k(){var m,n=[];j.extend(this,{append:function(p,q){var o=this,r=j.typeOf(q);if(q instanceof l){m={name:p,value:q}}else{if("array"===r){p+="[]";j.each(q,function(s){o.append(p,s)})}else{if("object"===r){j.each(q,function(t,s){o.append(p+"["+s+"]",t)})}else{if("null"===r||"undefined"===r||"number"===r&&isNaN(q)){o.append(p,"false")}else{n.push({name:p,value:q.toString()})}}}}},hasBlob:function(){return !!this.getBlob()},getBlob:function(){return m&&m.value||null},getBlobName:function(){return m&&m.name||null},each:function(o){j.each(n,function(p){o(p.value,p.name)});if(m){o(m.value,m.name)}},destroy:function(){m=null;n=[]}})}return k});h("moxie/xhr/XMLHttpRequest",["moxie/core/utils/Basic","moxie/core/Exceptions","moxie/core/EventTarget","moxie/core/utils/Encode","moxie/core/utils/Url","moxie/runtime/Runtime","moxie/runtime/RuntimeTarget","moxie/file/Blob","moxie/file/FileReaderSync","moxie/xhr/FormData","moxie/core/utils/Env","moxie/core/utils/Mime"],function(q,r,p,y,u,o,s,n,w,z,i,t){var j={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Reserved",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",510:"Not Extended"};
 function m(){this.uid=q.guid("uid_")}m.prototype=p.instance;var l=["loadstart","progress","abort","error","load","timeout","loadend"];var k=1,A=2;function v(){var R=this,E={timeout:0,readyState:v.UNSENT,withCredentials:false,status:0,statusText:"",responseType:"",responseXML:null,responseText:null,response:null},X=true,J,P,Q={},S,G,I=null,K=null,aa=false,B=false,x=false,L=false,D=false,H=false,N,W,V=null,Y=null,T={},O,U="",C;q.extend(this,E,{uid:q.guid("uid_"),upload:new m(),open:function(ag,ae,af,ac,ad){var ab;if(!ag||!ae){throw new r.DOMException(r.DOMException.SYNTAX_ERR)}if(/[\u0100-\uffff]/.test(ag)||y.utf8_encode(ag)!==ag){throw new r.DOMException(r.DOMException.SYNTAX_ERR)}if(!!~q.inArray(ag.toUpperCase(),["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT","TRACE","TRACK"])){P=ag.toUpperCase()}if(!!~q.inArray(P,["CONNECT","TRACE","TRACK"])){throw new r.DOMException(r.DOMException.SECURITY_ERR)}ae=y.utf8_encode(ae);ab=u.parseUrl(ae);H=u.hasSameOrigin(ab);J=u.resolveUrl(ae);if((ac||ad)&&!H){throw new r.DOMException(r.DOMException.INVALID_ACCESS_ERR)}S=ac||ab.user;G=ad||ab.pass;X=af||true;if(X===false&&(Z("timeout")||Z("withCredentials")||Z("responseType")!=="")){throw new r.DOMException(r.DOMException.INVALID_ACCESS_ERR)}aa=!X;B=false;Q={};M.call(this);Z("readyState",v.OPENED);this.convertEventPropsToHandlers(["readystatechange"]);this.dispatchEvent("readystatechange")},setRequestHeader:function(ad,ac){var ab=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];if(Z("readyState")!==v.OPENED||B){throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)}if(/[\u0100-\uffff]/.test(ad)||y.utf8_encode(ad)!==ad){throw new r.DOMException(r.DOMException.SYNTAX_ERR)}ad=q.trim(ad).toLowerCase();if(!!~q.inArray(ad,ab)||/^(proxy\-|sec\-)/.test(ad)){return false}if(!Q[ad]){Q[ad]=ac}else{Q[ad]+=", "+ac}return true},getAllResponseHeaders:function(){return U||""},getResponseHeader:function(ab){ab=ab.toLowerCase();if(D||!!~q.inArray(ab,["set-cookie","set-cookie2"])){return null}if(U&&U!==""){if(!C){C={};q.each(U.split(/\r\n/),function(ac){var ad=ac.split(/:\s+/);if(ad.length===2){ad[0]=q.trim(ad[0]);C[ad[0].toLowerCase()]={header:ad[0],value:q.trim(ad[1])}}})}if(C.hasOwnProperty(ab)){return C[ab].header+": "+C[ab].value}}return null},overrideMimeType:function(ac){var ab,ad;if(!!~q.inArray(Z("readyState"),[v.LOADING,v.DONE])){throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)}ac=q.trim(ac.toLowerCase());if(/;/.test(ac)&&(ab=ac.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))){ac=ab[1];if(ab[2]){ad=ab[2]}}if(!t.mimes[ac]){throw new r.DOMException(r.DOMException.SYNTAX_ERR)}V=ac;Y=ad},send:function(ad,ac){if(q.typeOf(ac)==="string"){T={ruid:ac}}else{if(!ac){T={}}else{T=ac}}this.convertEventPropsToHandlers(l);this.upload.convertEventPropsToHandlers(l);if(this.readyState!==v.OPENED||B){throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)}if(ad instanceof n){T.ruid=ad.ruid;K=ad.type||"application/octet-stream"}else{if(ad instanceof z){if(ad.hasBlob()){var ab=ad.getBlob();T.ruid=ab.ruid;K=ab.type||"application/octet-stream"}}else{if(typeof ad==="string"){I="UTF-8";K="text/plain;charset=UTF-8";ad=y.utf8_encode(ad)}}}if(!this.withCredentials){this.withCredentials=(T.required_caps&&T.required_caps.send_browser_cookies)&&!H}x=(!aa&&this.upload.hasEventListener());D=false;L=!ad;if(!aa){B=true}F.call(this,ad)},abort:function(){D=true;aa=false;if(!~q.inArray(Z("readyState"),[v.UNSENT,v.OPENED,v.DONE])){Z("readyState",v.DONE);B=false;if(O){O.getRuntime().exec.call(O,"XMLHttpRequest","abort",L)}else{throw new r.DOMException(r.DOMException.INVALID_STATE_ERR)}L=true}else{Z("readyState",v.UNSENT)}},destroy:function(){if(O){if(q.typeOf(O.destroy)==="function"){O.destroy()}O=null}this.unbindAll();if(this.upload){this.upload.unbindAll();this.upload=null}}});function Z(ac,ab){if(!E.hasOwnProperty(ac)){return}if(arguments.length===1){return i.can("define_property")?E[ac]:R[ac]}else{if(i.can("define_property")){E[ac]=ab}else{R[ac]=ab}}}function F(ae){var ac=this;N=new Date().getTime();O=new s();function ad(){if(O){O.destroy();O=null}ac.dispatchEvent("loadend");ac=null}function ab(af){O.bind("LoadStart",function(ag){Z("readyState",v.LOADING);ac.dispatchEvent("readystatechange");ac.dispatchEvent(ag);if(x){ac.upload.dispatchEvent(ag)}});O.bind("Progress",function(ag){if(Z("readyState")!==v.LOADING){Z("readyState",v.LOADING);ac.dispatchEvent("readystatechange")}ac.dispatchEvent(ag)});O.bind("UploadProgress",function(ag){if(x){ac.upload.dispatchEvent({type:"progress",lengthComputable:false,total:ag.total,loaded:ag.loaded})}});O.bind("Load",function(ag){Z("readyState",v.DONE);Z("status",Number(af.exec.call(O,"XMLHttpRequest","getStatus")||0));Z("statusText",j[Z("status")]||"");Z("response",af.exec.call(O,"XMLHttpRequest","getResponse",Z("responseType")));
 if(!!~q.inArray(Z("responseType"),["text",""])){Z("responseText",Z("response"))}else{if(Z("responseType")==="document"){Z("responseXML",Z("response"))}}U=af.exec.call(O,"XMLHttpRequest","getAllResponseHeaders");ac.dispatchEvent("readystatechange");if(Z("status")>0){if(x){ac.upload.dispatchEvent(ag)}ac.dispatchEvent(ag)}else{D=true;ac.dispatchEvent("error")}ad()});O.bind("Abort",function(ag){ac.dispatchEvent(ag);ad()});O.bind("Error",function(ag){D=true;Z("readyState",v.DONE);ac.dispatchEvent("readystatechange");L=true;ac.dispatchEvent(ag);ad()});af.exec.call(O,"XMLHttpRequest","send",{url:J,method:P,async:X,user:S,password:G,headers:Q,mimeType:K,encoding:I,responseType:ac.responseType,withCredentials:ac.withCredentials,options:T},ae)}if(typeof(T.required_caps)==="string"){T.required_caps=o.parseCaps(T.required_caps)}T.required_caps=q.extend({},T.required_caps,{return_response_type:ac.responseType});if(ae instanceof z){T.required_caps.send_multipart=true}if(!H){T.required_caps.do_cors=true}if(T.ruid){ab(O.connectRuntime(T))}else{O.bind("RuntimeInit",function(ag,af){ab(af)});O.bind("RuntimeError",function(ag,af){ac.dispatchEvent("RuntimeError",af)});O.connectRuntime(T)}}function M(){Z("responseText","");Z("responseXML",null);Z("response",null);Z("status",0);Z("statusText","");N=W=null}}v.UNSENT=0;v.OPENED=1;v.HEADERS_RECEIVED=2;v.LOADING=3;v.DONE=4;v.prototype=p.instance;return v});h("moxie/runtime/Transporter",["moxie/core/utils/Basic","moxie/core/utils/Encode","moxie/runtime/RuntimeClient","moxie/core/EventTarget"],function(l,i,j,m){function k(){var r,p,n,s,v,u;j.call(this);l.extend(this,{uid:l.guid("uid_"),state:k.IDLE,result:null,transport:function(A,z,y){var x=this;y=l.extend({chunk_size:204798},y);if((r=y.chunk_size%3)){y.chunk_size+=3-r}u=y.chunk_size;t.call(this);n=A;s=A.length;if(l.typeOf(y)==="string"||y.ruid){q.call(x,z,this.connectRuntime(y))}else{var w=function(C,B){x.unbind("RuntimeInit",w);q.call(x,z,B)};this.bind("RuntimeInit",w);this.connectRuntime(y)}},abort:function(){var w=this;w.state=k.IDLE;if(p){p.exec.call(w,"Transporter","clear");w.trigger("TransportingAborted")}t.call(w)},destroy:function(){this.unbindAll();p=null;this.disconnectRuntime();t.call(this)}});function t(){s=v=0;n=this.result=null}function q(x,y){var w=this;p=y;w.bind("TransportingProgress",function(z){v=z.loaded;if(v<s&&l.inArray(w.state,[k.IDLE,k.DONE])===-1){o.call(w)}},999);w.bind("TransportingComplete",function(){v=s;w.state=k.DONE;n=null;w.result=p.exec.call(w,"Transporter","getAsBlob",x||"")},999);w.state=k.BUSY;w.trigger("TransportingStarted");o.call(w)}function o(){var w=this,x,y=s-v;if(u>y){u=y}x=i.btoa(n.substr(v,u));p.exec.call(w,"Transporter","receive",x,s)}}k.IDLE=0;k.BUSY=1;k.DONE=2;k.prototype=m.instance;return k});h("moxie/image/Image",["moxie/core/utils/Basic","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/file/FileReaderSync","moxie/xhr/XMLHttpRequest","moxie/runtime/Runtime","moxie/runtime/RuntimeClient","moxie/runtime/Transporter","moxie/core/utils/Env","moxie/core/EventTarget","moxie/file/Blob","moxie/file/File","moxie/core/utils/Encode"],function(k,n,t,r,u,j,s,m,q,w,l,p,o){var v=["progress","load","error","resize","embedded"];function i(){s.call(this);k.extend(this,{uid:k.guid("uid_"),ruid:null,name:"",size:0,width:0,height:0,type:"",meta:{},clone:function(){this.load.apply(this,arguments)},load:function(){this.bind("Load Resize",function(){y.call(this)},999);this.convertEventPropsToHandlers(v);z.apply(this,arguments)},downsize:function(D){var E={width:this.width,height:this.height,crop:false,preserveHeaders:true};if(typeof(D)==="object"){D=k.extend(E,D)}else{D=k.extend(E,{width:arguments[0],height:arguments[1],crop:arguments[2],preserveHeaders:arguments[3]})}try{if(!this.size){throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)}if(this.width>i.MAX_RESIZE_WIDTH||this.height>i.MAX_RESIZE_HEIGHT){throw new t.ImageError(t.ImageError.MAX_RESOLUTION_ERR)}this.getRuntime().exec.call(this,"Image","downsize",D.width,D.height,D.crop,D.preserveHeaders)}catch(C){this.trigger("error",C.code)}},crop:function(E,C,D){this.downsize(E,C,true,D)},getAsCanvas:function(){if(!q.can("create_canvas")){throw new t.RuntimeError(t.RuntimeError.NOT_SUPPORTED_ERR)}var C=this.connectRuntime(this.ruid);return C.exec.call(this,"Image","getAsCanvas")},getAsBlob:function(C,D){if(!this.size){throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)}if(!C){C="image/jpeg"}if(C==="image/jpeg"&&!D){D=90}return this.getRuntime().exec.call(this,"Image","getAsBlob",C,D)},getAsDataURL:function(C,D){if(!this.size){throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)}return this.getRuntime().exec.call(this,"Image","getAsDataURL",C,D)},getAsBinaryString:function(C,E){var D=this.getAsDataURL(C,E);return o.atob(D.substring(D.indexOf("base64,")+7))},embed:function(F){var N=this,K,J,L,H,O=arguments[1]||{},E=this.width,M=this.height,G;function D(){if(q.can("create_canvas")){var P=K.getAsCanvas();if(P){F.appendChild(P);P=null;K.destroy();
 N.trigger("embedded");return}}var R=K.getAsDataURL(J,L);if(!R){throw new t.ImageError(t.ImageError.WRONG_FORMAT)}if(q.can("use_data_uri_of",R.length)){F.innerHTML='<img src="'+R+'" width="'+K.width+'" height="'+K.height+'" />';K.destroy();N.trigger("embedded")}else{var Q=new m();Q.bind("TransportingComplete",function(){G=N.connectRuntime(this.result.ruid);N.bind("Embedded",function(){k.extend(G.getShimContainer().style,{top:"0px",left:"0px",width:K.width+"px",height:K.height+"px"});G=null},999);G.exec.call(N,"ImageView","display",this.result.uid,E,M);K.destroy()});Q.transport(o.atob(R.substring(R.indexOf("base64,")+7)),J,k.extend({},O,{required_caps:{display_media:true},runtime_order:"flash,silverlight",container:F}))}}try{if(!(F=n.get(F))){throw new t.DOMException(t.DOMException.INVALID_NODE_TYPE_ERR)}if(!this.size){throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)}if(this.width>i.MAX_RESIZE_WIDTH||this.height>i.MAX_RESIZE_HEIGHT){throw new t.ImageError(t.ImageError.MAX_RESOLUTION_ERR)}J=O.type||this.type||"image/jpeg";L=O.quality||90;H=k.typeOf(O.crop)!=="undefined"?O.crop:false;if(O.width){E=O.width;M=O.height||E}else{var C=n.getSize(F);if(C.w&&C.h){E=C.w;M=C.h}}K=new i();K.bind("Resize",function(){D.call(N)});K.bind("Load",function(){K.downsize(E,M,H,false)});K.clone(this,false);return K}catch(I){this.trigger("error",I.code)}},destroy:function(){if(this.ruid){this.getRuntime().exec.call(this,"Image","destroy");this.disconnectRuntime()}this.unbindAll()}});function y(C){if(!C){C=this.getRuntime().exec.call(this,"Image","getInfo")}this.size=C.size;this.width=C.width;this.height=C.height;this.type=C.type;this.meta=C.meta;if(this.name===""){this.name=C.name}}function z(E){var D=k.typeOf(E);try{if(E instanceof i){if(!E.size){throw new t.DOMException(t.DOMException.INVALID_STATE_ERR)}x.apply(this,arguments)}else{if(E instanceof l){if(!~k.inArray(E.type,["image/jpeg","image/png"])){throw new t.ImageError(t.ImageError.WRONG_FORMAT)}A.apply(this,arguments)}else{if(k.inArray(D,["blob","file"])!==-1){z.call(this,new p(null,E),arguments[1])}else{if(D==="string"){if(/^data:[^;]*;base64,/.test(E)){z.call(this,new l(null,{data:E}),arguments[1])}else{B.apply(this,arguments)}}else{if(D==="node"&&E.nodeName.toLowerCase()==="img"){z.call(this,E.src,arguments[1])}else{throw new t.DOMException(t.DOMException.TYPE_MISMATCH_ERR)}}}}}}catch(C){this.trigger("error",C.code)}}function x(C,D){var E=this.connectRuntime(C.ruid);this.ruid=E.uid;E.exec.call(this,"Image","loadFromImage",C,(k.typeOf(D)==="undefined"?true:D))}function A(E,F){var D=this;D.name=E.name||"";function C(G){D.ruid=G.uid;G.exec.call(D,"Image","loadFromBlob",E)}if(E.isDetached()){this.bind("RuntimeInit",function(H,G){C(G)});if(F&&typeof(F.required_caps)==="string"){F.required_caps=j.parseCaps(F.required_caps)}this.connectRuntime(k.extend({required_caps:{access_image_binary:true,resize_image:true}},F))}else{C(this.connectRuntime(E.ruid))}}function B(E,D){var C=this,F;F=new u();F.open("get",E);F.responseType="blob";F.onprogress=function(G){C.trigger(G)};F.onload=function(){A.call(C,F.response,true)};F.onerror=function(G){C.trigger(G)};F.onloadend=function(){F.destroy()};F.bind("RuntimeError",function(H,G){C.trigger("RuntimeError",G)});F.send(null,D)}}i.MAX_RESIZE_WIDTH=6500;i.MAX_RESIZE_HEIGHT=6500;i.prototype=w.instance;return i});h("moxie/runtime/html5/Runtime",["moxie/core/utils/Basic","moxie/core/Exceptions","moxie/runtime/Runtime","moxie/core/utils/Env"],function(n,i,k,j){var m="html5",l={};function o(q){var p=this,t=k.capTest,s=k.capTrue;var r=n.extend({access_binary:t(window.FileReader||window.File&&window.File.getAsDataURL),access_image_binary:function(){return p.can("access_binary")&&!!l.Image},display_media:t(j.can("create_canvas")||j.can("use_data_uri_over32kb")),do_cors:t(window.XMLHttpRequest&&"withCredentials" in new XMLHttpRequest()),drag_and_drop:t(function(){var u=document.createElement("div");return(("draggable" in u)||("ondragstart" in u&&"ondrop" in u))&&(j.browser!=="IE"||j.version>9)}()),filter_by_extension:t(function(){return(j.browser==="Chrome"&&j.version>=28)||(j.browser==="IE"&&j.version>=10)}()),return_response_headers:s,return_response_type:function(u){if(u==="json"&&!!window.JSON){return true}return j.can("return_response_type",u)},return_status_code:s,report_upload_progress:t(window.XMLHttpRequest&&new XMLHttpRequest().upload),resize_image:function(){return p.can("access_binary")&&j.can("create_canvas")},select_file:function(){return j.can("use_fileinput")&&window.File},select_folder:function(){return p.can("select_file")&&j.browser==="Chrome"&&j.version>=21},select_multiple:function(){return p.can("select_file")&&!(j.browser==="Safari"&&j.os==="Windows")&&!(j.os==="iOS"&&j.verComp(j.osVersion,"7.0.4","<"))},send_binary_string:t(window.XMLHttpRequest&&(new XMLHttpRequest().sendAsBinary||(window.Uint8Array&&window.ArrayBuffer))),send_custom_headers:t(window.XMLHttpRequest),send_multipart:function(){return !!(window.XMLHttpRequest&&new XMLHttpRequest().upload&&window.FormData)||p.can("send_binary_string")
 },slice_blob:t(window.File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice)),stream_upload:function(){return p.can("slice_blob")&&p.can("send_multipart")},summon_file_dialog:t(function(){return(j.browser==="Firefox"&&j.version>=4)||(j.browser==="Opera"&&j.version>=12)||(j.browser==="IE"&&j.version>=10)||!!~n.inArray(j.browser,["Chrome","Safari"])}()),upload_filesize:s},arguments[2]);k.call(this,q,(arguments[1]||m),r);n.extend(this,{init:function(){this.trigger("Init")},destroy:(function(u){return function(){u.call(p);u=p=null}}(this.destroy))});n.extend(this.getShim(),l)}k.addConstructor(m,o);return l});h("moxie/runtime/html5/file/Blob",["moxie/runtime/html5/Runtime","moxie/file/Blob"],function(j,k){function i(){function l(n,q,m){var o;if(window.File.prototype.slice){try{n.slice();return n.slice(q,m)}catch(p){return n.slice(q,m-q)}}else{if((o=window.File.prototype.webkitSlice||window.File.prototype.mozSlice)){return o.call(n,q,m)}else{return null}}}this.slice=function(){return new k(this.getRuntime().uid,l.apply(this,arguments))}}return(j.Blob=i)});h("moxie/core/utils/Events",["moxie/core/utils/Basic"],function(o){var p={},l="moxie_"+o.guid();function k(){this.returnValue=false}function j(){this.cancelBubble=true}var m=function(u,q,v,s){var t,r;q=q.toLowerCase();if(u.addEventListener){t=v;u.addEventListener(q,t,false)}else{if(u.attachEvent){t=function(){var w=window.event;if(!w.target){w.target=w.srcElement}w.preventDefault=k;w.stopPropagation=j;v(w)};u.attachEvent("on"+q,t)}}if(!u[l]){u[l]=o.guid()}if(!p.hasOwnProperty(u[l])){p[u[l]]={}}r=p[u[l]];if(!r.hasOwnProperty(q)){r[q]=[]}r[q].push({func:t,orig:v,key:s})};var n=function(v,q,w){var t,s;q=q.toLowerCase();if(v[l]&&p[v[l]]&&p[v[l]][q]){t=p[v[l]][q]}else{return}for(var r=t.length-1;r>=0;r--){if(t[r].orig===w||t[r].key===w){if(v.removeEventListener){v.removeEventListener(q,t[r].func,false)}else{if(v.detachEvent){v.detachEvent("on"+q,t[r].func)}}t[r].orig=null;t[r].func=null;t.splice(r,1);if(w!==s){break}}}if(!t.length){delete p[v[l]][q]}if(o.isEmptyObj(p[v[l]])){delete p[v[l]];try{delete v[l]}catch(u){v[l]=s}}};var i=function(r,q){if(!r||!r[l]){return}o.each(p[r[l]],function(t,s){n(r,s,q)})};return{addEvent:m,removeEvent:n,removeAllEvents:i}});h("moxie/runtime/html5/file/FileInput",["moxie/runtime/html5/Runtime","moxie/core/utils/Basic","moxie/core/utils/Dom","moxie/core/utils/Events","moxie/core/utils/Mime","moxie/core/utils/Env"],function(m,o,l,j,k,i){function n(){var q=[],p;o.extend(this,{init:function(A){var r=this,y=r.getRuntime(),x,t,u,z,w,v;p=A;q=[];u=p.accept.mimes||k.extList2mimes(p.accept,true);t=y.getShimContainer();t.innerHTML='<input id="'+y.uid+'" type="file" style="font-size:999px;opacity:0;"'+(p.multiple&&y.can("select_multiple")?"multiple":"")+(p.directory&&y.can("select_folder")?"webkitdirectory directory":"")+(u?' accept="'+u.join(",")+'"':"")+" />";x=l.get(y.uid);o.extend(x.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"});z=l.get(p.browse_button);if(y.can("summon_file_dialog")){if(l.getStyle(z,"position")==="static"){z.style.position="relative"}w=parseInt(l.getStyle(z,"z-index"),10)||1;z.style.zIndex=w;t.style.zIndex=w-1;j.addEvent(z,"click",function(C){var B=l.get(y.uid);if(B&&!B.disabled){B.click()}C.preventDefault()},r.uid)}v=y.can("summon_file_dialog")?z:t;j.addEvent(v,"mouseover",function(){r.trigger("mouseenter")},r.uid);j.addEvent(v,"mouseout",function(){r.trigger("mouseleave")},r.uid);j.addEvent(v,"mousedown",function(){r.trigger("mousedown")},r.uid);j.addEvent(l.get(p.container),"mouseup",function(){r.trigger("mouseup")},r.uid);x.onchange=function s(){q=[];if(p.directory){o.each(this.files,function(C){if(C.name!=="."){q.push(C)}})}else{q=[].slice.call(this.files)}if(i.browser!=="IE"&&i.browser!=="IEMobile"){this.value=""}else{var B=this.cloneNode(true);this.parentNode.replaceChild(B,this);B.onchange=s}r.trigger("change")};r.trigger({type:"ready",async:true});t=null},getFiles:function(){return q},disable:function(t){var s=this.getRuntime(),r;if((r=l.get(s.uid))){r.disabled=!!t}},destroy:function(){var s=this.getRuntime(),t=s.getShim(),r=s.getShimContainer();j.removeAllEvents(r,this.uid);j.removeAllEvents(p&&l.get(p.container),this.uid);j.removeAllEvents(p&&l.get(p.browse_button),this.uid);if(r){r.innerHTML=""}t.removeInstance(this.uid);q=p=r=t=null}})}return(m.FileInput=n)});h("moxie/runtime/html5/file/FileDrop",["moxie/runtime/html5/Runtime","moxie/core/utils/Basic","moxie/core/utils/Dom","moxie/core/utils/Events","moxie/core/utils/Mime"],function(l,m,k,i,j){function n(){var p=[],s=[],w;m.extend(this,{init:function(z){var y=this,A;w=z;s=r(w.accept);A=w.container;i.addEvent(A,"dragover",function(B){if(!q(B)){return}B.preventDefault();B.dataTransfer.dropEffect="copy"},y.uid);i.addEvent(A,"drop",function(B){if(!q(B)){return}B.preventDefault();p=[];if(B.dataTransfer.items&&B.dataTransfer.items[0].webkitGetAsEntry){v(B.dataTransfer.items,function(){y.trigger("drop")
 })}else{m.each(B.dataTransfer.files,function(C){if(u(C)){p.push(C)}});y.trigger("drop")}},y.uid);i.addEvent(A,"dragenter",function(B){y.trigger("dragenter")},y.uid);i.addEvent(A,"dragleave",function(B){y.trigger("dragleave")},y.uid)},getFiles:function(){return p},destroy:function(){i.removeAllEvents(w&&k.get(w.container),this.uid);p=s=w=null}});function q(z){if(!z.dataTransfer||!z.dataTransfer.types){return false}var y=m.toArray(z.dataTransfer.types||[]);return m.inArray("Files",y)!==-1||m.inArray("public.file-url",y)!==-1||m.inArray("application/x-moz-file",y)!==-1}function r(A){var z=[];for(var y=0;y<A.length;y++){[].push.apply(z,A[y].extensions.split(/\s*,\s*/))}return m.inArray("*",z)===-1?z:[]}function u(y){if(!s.length){return true}var z=j.getFileExtension(y.name);return !z||m.inArray(z,s)!==-1}function v(A,z){var y=[];m.each(A,function(D){var C=D.webkitGetAsEntry();if(C){if(C.isFile){var B=D.getAsFile();if(u(B)){p.push(B)}}else{y.push(C)}}});if(y.length){t(y,z)}else{z()}}function t(A,z){var y=[];m.each(A,function(B){y.push(function(C){o(B,C)})});m.inSeries(y,function(){z()})}function o(z,y){if(z.isFile){z.file(function(A){if(u(A)){p.push(A)}y()},function(){y()})}else{if(z.isDirectory){x(z,y)}else{y()}}}function x(C,z){var y=[],B=C.createReader();function A(D){B.readEntries(function(E){if(E.length){[].push.apply(y,E);A(D)}else{D()}},D)}A(function(){t(y,z)})}}return(l.FileDrop=n)});h("moxie/runtime/html5/file/FileReader",["moxie/runtime/html5/Runtime","moxie/core/utils/Encode","moxie/core/utils/Basic"],function(j,i,l){function k(){var n,o=false;l.extend(this,{read:function(r,p){var q=this;n=new window.FileReader();n.addEventListener("progress",function(s){q.trigger(s)});n.addEventListener("load",function(s){q.trigger(s)});n.addEventListener("error",function(s){q.trigger(s,n.error)});n.addEventListener("loadend",function(){n=null});if(l.typeOf(n[r])==="function"){o=false;n[r](p.getSource())}else{if(r==="readAsBinaryString"){o=true;n.readAsDataURL(p.getSource())}}},getResult:function(){return n&&n.result?(o?m(n.result):n.result):null},abort:function(){if(n){n.abort()}},destroy:function(){n=null}});function m(p){return i.atob(p.substring(p.indexOf("base64,")+7))}}return(j.FileReader=k)});h("moxie/runtime/html5/xhr/XMLHttpRequest",["moxie/runtime/html5/Runtime","moxie/core/utils/Basic","moxie/core/utils/Mime","moxie/core/utils/Url","moxie/file/File","moxie/file/Blob","moxie/xhr/FormData","moxie/core/Exceptions","moxie/core/utils/Env"],function(o,j,l,i,n,k,r,p,m){function q(){var u=this,y,w;j.extend(this,{send:function(G,D){var F=this,C=(m.browser==="Mozilla"&&m.version>=4&&m.version<7),z=m.browser==="Android Browser",E=false;w=G.url.replace(/^.+?\/([\w\-\.]+)$/,"$1").toLowerCase();y=x();y.open(G.method,G.url,G.async,G.user,G.password);if(D instanceof k){if(D.isDetached()){E=true}D=D.getSource()}else{if(D instanceof r){if(D.hasBlob()){if(D.getBlob().isDetached()){D=v.call(F,D);E=true}else{if((C||z)&&j.typeOf(D.getBlob().getSource())==="blob"&&window.FileReader){s.call(F,G,D);return}}}if(D instanceof r){var B=new window.FormData();D.each(function(I,H){if(I instanceof k){B.append(H,I.getSource())}else{B.append(H,I)}});D=B}}}if(y.upload){if(G.withCredentials){y.withCredentials=true}y.addEventListener("load",function(H){F.trigger(H)});y.addEventListener("error",function(H){F.trigger(H)});y.addEventListener("progress",function(H){F.trigger(H)});y.upload.addEventListener("progress",function(H){F.trigger({type:"UploadProgress",loaded:H.loaded,total:H.total})})}else{y.onreadystatechange=function A(){switch(y.readyState){case 1:break;case 2:break;case 3:var J,H;try{if(i.hasSameOrigin(G.url)){J=y.getResponseHeader("Content-Length")||0}if(y.responseText){H=y.responseText.length}}catch(I){J=H=0}F.trigger({type:"progress",lengthComputable:!!J,total:parseInt(J,10),loaded:H});break;case 4:y.onreadystatechange=function(){};if(y.status===0){F.trigger("error")}else{F.trigger("load")}break}}}if(!j.isEmptyObj(G.headers)){j.each(G.headers,function(H,I){y.setRequestHeader(I,H)})}if(""!==G.responseType&&"responseType" in y){if("json"===G.responseType&&!m.can("return_response_type","json")){y.responseType="text"}else{y.responseType=G.responseType}}if(!E){y.send(D)}else{if(y.sendAsBinary){y.sendAsBinary(D)}else{(function(){var H=new Uint8Array(D.length);for(var I=0;I<D.length;I++){H[I]=(D.charCodeAt(I)&255)}y.send(H.buffer)}())}}F.trigger("loadstart")},getStatus:function(){try{if(y){return y.status}}catch(z){}return 0},getResponse:function(B){var A=this.getRuntime();try{switch(B){case"blob":var D=new n(A.uid,y.response);var E=y.getResponseHeader("Content-Disposition");if(E){var z=E.match(/filename=([\'\"'])([^\1]+)\1/);if(z){w=z[2]}}D.name=w;if(!D.type){D.type=l.getFileMime(w)}return D;case"json":if(!m.can("return_response_type","json")){return y.status===200&&!!window.JSON?JSON.parse(y.responseText):null}return y.response;case"document":return t(y);default:return y.responseText!==""?y.responseText:null}}catch(C){return null}},getAllResponseHeaders:function(){try{return y.getAllResponseHeaders()
 }catch(z){}return""},abort:function(){if(y){y.abort()}},destroy:function(){u=w=null}});function s(D,B){var C=this,A,z;A=B.getBlob().getSource();z=new window.FileReader();z.onload=function(){B.append(B.getBlobName(),new k(null,{type:A.type,data:z.result}));u.send.call(C,D,B)};z.readAsBinaryString(A)}function x(){if(window.XMLHttpRequest&&!(m.browser==="IE"&&m.version<7)){return new window.XMLHttpRequest()}else{return(function(){var z=["Msxml2.XMLHTTP.6.0","Microsoft.XMLHTTP"];for(var B=0;B<z.length;B++){try{return new ActiveXObject(z[B])}catch(A){}}})()}}function t(A){var B=A.responseXML;var z=A.responseText;if(m.browser==="IE"&&z&&B&&!B.documentElement&&/[^\/]+\/[^\+]+\+xml/.test(A.getResponseHeader("Content-Type"))){B=new window.ActiveXObject("Microsoft.XMLDOM");B.async=false;B.validateOnParse=false;B.loadXML(z)}if(B){if((m.browser==="IE"&&B.parseError!==0)||!B.documentElement||B.documentElement.tagName==="parsererror"){return null}}return B}function v(B){var E="----moxieboundary"+new Date().getTime(),C="--",D="\r\n",z="",A=this.getRuntime();if(!A.can("send_binary_string")){throw new p.RuntimeError(p.RuntimeError.NOT_SUPPORTED_ERR)}y.setRequestHeader("Content-Type","multipart/form-data; boundary="+E);B.each(function(G,F){if(G instanceof k){z+=C+E+D+'Content-Disposition: form-data; name="'+F+'"; filename="'+unescape(encodeURIComponent(G.name||"blob"))+'"'+D+"Content-Type: "+(G.type||"application/octet-stream")+D+D+G.getSource()+D}else{z+=C+E+D+'Content-Disposition: form-data; name="'+F+'"'+D+D+unescape(encodeURIComponent(G))+D}});z+=C+E+C+D;return z}}return(o.XMLHttpRequest=q)});h("moxie/runtime/html5/utils/BinaryReader",[],function(){return function(){var l=false,j;function m(o,q){var n=l?0:-8*(q-1),r=0,p;for(p=0;p<q;p++){r|=(j.charCodeAt(o+p)<<Math.abs(n+p*8))}return r}function i(p,n,o){o=arguments.length===3?o:j.length-n-1;j=j.substr(0,n)+p+j.substr(o+n)}function k(o,p,r){var s="",n=l?0:-8*(r-1),q;for(q=0;q<r;q++){s+=String.fromCharCode((p>>Math.abs(n+q*8))&255)}i(s,o,r)}return{II:function(n){if(n===g){return l}else{l=n}},init:function(n){l=false;j=n},SEGMENT:function(n,p,o){switch(arguments.length){case 1:return j.substr(n,j.length-n-1);case 2:return j.substr(n,p);case 3:i(o,n,p);break;default:return j}},BYTE:function(n){return m(n,1)},SHORT:function(n){return m(n,2)},LONG:function(n,o){if(o===g){return m(n,4)}else{k(n,o,4)}},SLONG:function(n){var o=m(n,4);return(o>2147483647?o-4294967296:o)},STRING:function(n,o){var p="";for(o+=n;n<o;n++){p+=String.fromCharCode(m(n,1))}return p}}}});h("moxie/runtime/html5/image/JPEGHeaders",["moxie/runtime/html5/utils/BinaryReader"],function(j){return function i(o){var p=[],n,k,l,m=0;n=new j();n.init(o);if(n.SHORT(0)!==65496){return}k=2;while(k<=o.length){l=n.SHORT(k);if(l>=65488&&l<=65495){k+=2;continue}if(l===65498||l===65497){break}m=n.SHORT(k+2)+2;if(l>=65505&&l<=65519){p.push({hex:l,name:"APP"+(l&15),start:k,length:m,segment:n.SEGMENT(k,m)})}k+=m}n.init(null);return{headers:p,restore:function(s){var q,r;n.init(s);k=n.SHORT(2)==65504?4+n.SHORT(4):2;for(r=0,q=p.length;r<q;r++){n.SEGMENT(k,0,p[r].segment);k+=p[r].length}s=n.SEGMENT();n.init(null);return s},strip:function(s){var t,q,r;q=new i(s);t=q.headers;q.purge();n.init(s);r=t.length;while(r--){n.SEGMENT(t[r].start,t[r].length,"")}s=n.SEGMENT();n.init(null);return s},get:function(r){var t=[];for(var s=0,q=p.length;s<q;s++){if(p[s].name===r.toUpperCase()){t.push(p[s].segment)}}return t},set:function(r,u){var v=[],s,t,q;if(typeof(u)==="string"){v.push(u)}else{v=u}for(s=t=0,q=p.length;s<q;s++){if(p[s].name===r.toUpperCase()){p[s].segment=v[t];p[s].length=v[t].length;t++}if(t>=v.length){break}}},purge:function(){p=[];n.init(null);n=null}}}});h("moxie/runtime/html5/image/ExifParser",["moxie/core/utils/Basic","moxie/runtime/html5/utils/BinaryReader"],function(k,j){return function i(){var p,m,l,n={},s;p=new j();m={tiff:{274:"Orientation",270:"ImageDescription",271:"Make",272:"Model",305:"Software",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};s={"ColorSpace":{1:"sRGB",0:"Uncalibrated"},"MeteringMode":{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},"LightSource":{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},"Flash":{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},"ExposureMode":{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},"WhiteBalance":{0:"Auto white balance",1:"Manual white balance"},"SceneCaptureType":{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},"Contrast":{0:"Normal",1:"Soft",2:"Hard"},"Saturation":{0:"Normal",1:"Low saturation",2:"High saturation"},"Sharpness":{0:"Normal",1:"Soft",2:"Hard"},"GPSLatitudeRef":{N:"North latitude",S:"South latitude"},"GPSLongitudeRef":{E:"East longitude",W:"West longitude"}};
 function o(t,B){var v=p.SHORT(t),y,E,F,A,z,u,w,C,D=[],x={};for(y=0;y<v;y++){w=u=t+12*y+2;F=B[p.SHORT(w)];if(F===g){continue}A=p.SHORT(w+=2);z=p.LONG(w+=2);w+=4;D=[];switch(A){case 1:case 7:if(z>4){w=p.LONG(w)+n.tiffHeader}for(E=0;E<z;E++){D[E]=p.BYTE(w+E)}break;case 2:if(z>4){w=p.LONG(w)+n.tiffHeader}x[F]=p.STRING(w,z-1);continue;case 3:if(z>2){w=p.LONG(w)+n.tiffHeader}for(E=0;E<z;E++){D[E]=p.SHORT(w+E*2)}break;case 4:if(z>1){w=p.LONG(w)+n.tiffHeader}for(E=0;E<z;E++){D[E]=p.LONG(w+E*4)}break;case 5:w=p.LONG(w)+n.tiffHeader;for(E=0;E<z;E++){D[E]=p.LONG(w+E*4)/p.LONG(w+E*4+4)}break;case 9:w=p.LONG(w)+n.tiffHeader;for(E=0;E<z;E++){D[E]=p.SLONG(w+E*4)}break;case 10:w=p.LONG(w)+n.tiffHeader;for(E=0;E<z;E++){D[E]=p.SLONG(w+E*4)/p.SLONG(w+E*4+4)}break;default:continue}C=(z==1?D[0]:D);if(s.hasOwnProperty(F)&&typeof C!="object"){x[F]=s[F][C]}else{x[F]=C}}return x}function r(){var t=n.tiffHeader;p.II(p.SHORT(t)==18761);if(p.SHORT(t+=2)!==42){return false}n.IFD0=n.tiffHeader+p.LONG(t+=2);l=o(n.IFD0,m.tiff);if("ExifIFDPointer" in l){n.exifIFD=n.tiffHeader+l.ExifIFDPointer;delete l.ExifIFDPointer}if("GPSInfoIFDPointer" in l){n.gpsIFD=n.tiffHeader+l.GPSInfoIFDPointer;delete l.GPSInfoIFDPointer}return true}function q(A,C,z){var x,v,u,t=0;if(typeof(C)==="string"){var B=m[A.toLowerCase()];for(var w in B){if(B[w]===C){C=w;break}}}x=n[A.toLowerCase()+"IFD"];v=p.SHORT(x);for(var y=0;y<v;y++){u=x+12*y+2;if(p.SHORT(u)==C){t=u+8;break}}if(!t){return false}p.LONG(t,z);return true}return{init:function(t){n={tiffHeader:10};if(t===g||!t.length){return false}p.init(t);if(p.SHORT(0)===65505&&p.STRING(4,5).toUpperCase()==="EXIF\0"){return r()}return false},TIFF:function(){return l},EXIF:function(){var u;u=o(n.exifIFD,m.exif);if(u.ExifVersion&&k.typeOf(u.ExifVersion)==="array"){for(var v=0,t="";v<u.ExifVersion.length;v++){t+=String.fromCharCode(u.ExifVersion[v])}u.ExifVersion=t}return u},GPS:function(){var t;t=o(n.gpsIFD,m.gps);if(t.GPSVersionID&&k.typeOf(t.GPSVersionID)==="array"){t.GPSVersionID=t.GPSVersionID.join(".")}return t},setExif:function(t,u){if(t!=="PixelXDimension"&&t!=="PixelYDimension"){return false}return q("exif",t,u)},getBinary:function(){return p.SEGMENT()},purge:function(){p.init(null);p=l=null;n={}}}}});h("moxie/runtime/html5/image/JPEG",["moxie/core/utils/Basic","moxie/core/Exceptions","moxie/runtime/html5/image/JPEGHeaders","moxie/runtime/html5/utils/BinaryReader","moxie/runtime/html5/image/ExifParser"],function(n,i,k,m,j){function l(w){var p,r,t,s,v,o;function u(){var x=0,y,z;while(x<=p.length){y=r.SHORT(x+=2);if(y>=65472&&y<=65475){x+=5;return{height:r.SHORT(x),width:r.SHORT(x+=2)}}z=r.SHORT(x+=2);x+=z-2}return null}p=w;r=new m();r.init(p);if(r.SHORT(0)!==65496){throw new i.ImageError(i.ImageError.WRONG_FORMAT)}t=new k(w);s=new j();o=!!s.init(t.get("app1")[0]);v=u.call(this);n.extend(this,{type:"image/jpeg",size:p.length,width:v&&v.width||0,height:v&&v.height||0,setExif:function(x,y){if(!o){return false}if(n.typeOf(x)==="object"){n.each(x,function(A,z){s.setExif(z,A)})}else{s.setExif(x,y)}t.set("app1",s.getBinary())},writeHeaders:function(){if(!arguments.length){return(p=t.restore(p))}return t.restore(arguments[0])},stripHeaders:function(x){return t.strip(x)},purge:function(){q.call(this)}});if(o){this.meta={tiff:s.TIFF(),exif:s.EXIF(),gps:s.GPS()}}function q(){if(!s||!t||!r){return}s.purge();t.purge();r.init(null);p=v=t=s=r=null}}return l});h("moxie/runtime/html5/image/PNG",["moxie/core/Exceptions","moxie/core/utils/Basic","moxie/runtime/html5/utils/BinaryReader"],function(i,l,k){function j(u){var n,p,r,q,t;n=u;p=new k();p.init(n);(function(){var v=0,x=0,w=[35152,20039,3338,6666];for(x=0;x<w.length;x++,v+=2){if(w[x]!=p.SHORT(v)){throw new i.ImageError(i.ImageError.WRONG_FORMAT)}}}());function s(){var w,v;w=m.call(this,8);if(w.type=="IHDR"){v=w.start;return{width:p.LONG(v),height:p.LONG(v+=4)}}return null}function o(){if(!p){return}p.init(null);n=t=r=q=p=null}t=s.call(this);l.extend(this,{type:"image/png",size:n.length,width:t.width,height:t.height,purge:function(){o.call(this)}});o.call(this);function m(v){var y,x,z,w;y=p.LONG(v);x=p.STRING(v+=4,4);z=v+=4;w=p.LONG(v+y);return{length:y,type:x,start:z,CRC:w}}}return j});h("moxie/runtime/html5/image/ImageInfo",["moxie/core/utils/Basic","moxie/core/Exceptions","moxie/runtime/html5/image/JPEG","moxie/runtime/html5/image/PNG"],function(l,i,k,j){return function(n){var o=[k,j],m;m=(function(){for(var q=0;q<o.length;q++){try{return new o[q](n)}catch(p){}}throw new i.ImageError(i.ImageError.WRONG_FORMAT)}());l.extend(this,{type:"",size:0,width:0,height:0,setExif:function(){},writeHeaders:function(p){return p},stripHeaders:function(p){return p},purge:function(){}});l.extend(this,m);this.purge=function(){m.purge();m=null}}});h("moxie/runtime/html5/image/MegaPixel",[],function(){function i(I,m,n){var p=I.naturalWidth,v=I.naturalHeight;var C=n.width,z=n.height;var r=n.x||0,q=n.y||0;var D=m.getContext("2d");if(j(I)){p/=2;v/=2}var G=1024;var l=document.createElement("canvas");l.width=l.height=G;
 var o=l.getContext("2d");var E=k(I,p,v);var w=0;while(w<v){var H=w+G>v?v-w:G;var A=0;while(A<p){var B=A+G>p?p-A:G;o.clearRect(0,0,G,G);o.drawImage(I,-A,-w);var t=(A*C/p+r)<<0;var u=Math.ceil(B*C/p);var s=(w*z/v/E+q)<<0;var F=Math.ceil(H*z/v/E);D.drawImage(l,0,0,B,H,t,s,u,F);A+=G}w+=G}l=o=null}function j(n){var m=n.naturalWidth,p=n.naturalHeight;if(m*p>1024*1024){var o=document.createElement("canvas");o.width=o.height=1;var l=o.getContext("2d");l.drawImage(n,-m+1,0);return l.getImageData(0,0,1,1).data[3]===0}else{return false}}function k(p,m,u){var l=document.createElement("canvas");l.width=1;l.height=u;var v=l.getContext("2d");v.drawImage(p,0,0);var o=v.getImageData(0,0,1,u).data;var s=0;var q=u;var t=u;while(t>s){var n=o[(t-1)*4+3];if(n===0){q=t}else{s=t}t=(q+s)>>1}l=null;var r=(t/u);return(r===0)?1:r}return{isSubsampled:j,renderTo:i}});h("moxie/runtime/html5/image/Image",["moxie/runtime/html5/Runtime","moxie/core/utils/Basic","moxie/core/Exceptions","moxie/core/utils/Encode","moxie/file/File","moxie/runtime/html5/image/ImageInfo","moxie/runtime/html5/image/MegaPixel","moxie/core/utils/Mime","moxie/core/utils/Env"],function(o,i,p,k,m,r,q,j,l){function n(){var C=this,B,G,A,w,E,I=false,t=true;i.extend(this,{loadFromBlob:function(L){var K=this,M=K.getRuntime(),J=arguments.length>1?arguments[1]:true;if(!M.can("access_binary")){throw new p.RuntimeError(p.RuntimeError.NOT_SUPPORTED_ERR)}E=L;if(L.isDetached()){w=L.getSource();z.call(this,w);return}else{F.call(this,L.getSource(),function(N){if(J){w=H(N)}z.call(K,N)})}},loadFromImage:function(J,K){this.meta=J.meta;E=new m(null,{name:J.name,size:J.size,type:J.type});z.call(this,K?(w=J.getAsBinaryString()):J.getAsDataURL())},getInfo:function(){var J=this.getRuntime(),K;if(!G&&w&&J.can("access_image_binary")){G=new r(w)}K={width:x().width||0,height:x().height||0,type:E.type||j.getFileMime(E.name),size:w&&w.length||E.size||0,name:E.name||"",meta:G&&G.meta||this.meta||{}};return K},downsize:function(){s.apply(this,arguments)},getAsCanvas:function(){if(A){A.id=this.uid+"_canvas"}return A},getAsBlob:function(J,K){if(J!==this.type){s.call(this,this.width,this.height,false)}return new m(null,{name:E.name||"",type:J,data:C.getAsBinaryString.call(this,J,K)})},getAsDataURL:function(K){var L=arguments[1]||90;if(!I){return B.src}if("image/jpeg"!==K){return A.toDataURL("image/png")}else{try{return A.toDataURL("image/jpeg",L/100)}catch(J){return A.toDataURL("image/jpeg")}}},getAsBinaryString:function(K,M){if(!I){if(!w){w=H(C.getAsDataURL(K,M))}return w}if("image/jpeg"!==K){w=H(C.getAsDataURL(K,M))}else{var L;if(!M){M=90}try{L=A.toDataURL("image/jpeg",M/100)}catch(J){L=A.toDataURL("image/jpeg")}w=H(L);if(G){w=G.stripHeaders(w);if(t){if(G.meta&&G.meta.exif){G.setExif({PixelXDimension:this.width,PixelYDimension:this.height})}w=G.writeHeaders(w)}G.purge();G=null}}I=false;return w},destroy:function(){C=null;u.call(this);this.getRuntime().getShim().removeInstance(this.uid)}});function x(){if(!A&&!B){throw new p.ImageError(p.DOMException.INVALID_STATE_ERR)}return A||B}function H(J){return k.atob(J.substring(J.indexOf("base64,")+7))}function D(K,J){return"data:"+(J||"")+";base64,"+k.btoa(K)}function z(K){var J=this;B=new Image();B.onerror=function(){u.call(this);J.trigger("error",p.ImageError.WRONG_FORMAT)};B.onload=function(){J.trigger("load")};B.src=/^data:[^;]*;base64,/.test(K)?K:D(K,E.type)}function F(L,M){var K=this,J;if(window.FileReader){J=new FileReader();J.onload=function(){M(this.result)};J.onerror=function(){K.trigger("error",p.ImageError.WRONG_FORMAT)};J.readAsDataURL(L)}else{return M(L.getAsDataURL())}}function s(K,V,Q,S){var W=this,N,M,T=0,R=0,P,U,L,J;t=S;J=(this.meta&&this.meta.tiff&&this.meta.tiff.Orientation)||1;if(i.inArray(J,[5,6,7,8])!==-1){var O=K;K=V;V=O}P=x();if(!Q){N=Math.min(K/P.width,V/P.height)}else{K=Math.min(K,P.width);V=Math.min(V,P.height);N=Math.max(K/P.width,V/P.height)}if(N>1&&!Q&&S){this.trigger("Resize");return}if(!A){A=document.createElement("canvas")}U=Math.round(P.width*N);L=Math.round(P.height*N);if(Q){A.width=K;A.height=V;if(U>K){T=Math.round((U-K)/2)}if(L>V){R=Math.round((L-V)/2)}}else{A.width=U;A.height=L}if(!t){y(A.width,A.height,J)}v.call(this,P,A,-T,-R,U,L);this.width=A.width;this.height=A.height;I=true;W.trigger("Resize")}function v(M,N,J,P,L,O){if(l.OS==="iOS"){q.renderTo(M,N,{width:L,height:O,x:J,y:P})}else{var K=N.getContext("2d");K.drawImage(M,J,P,L,O)}}function y(M,J,L){switch(L){case 5:case 6:case 7:case 8:A.width=J;A.height=M;break;default:A.width=M;A.height=J}var K=A.getContext("2d");switch(L){case 2:K.translate(M,0);K.scale(-1,1);break;case 3:K.translate(M,J);K.rotate(Math.PI);break;case 4:K.translate(0,J);K.scale(1,-1);break;case 5:K.rotate(0.5*Math.PI);K.scale(1,-1);break;case 6:K.rotate(0.5*Math.PI);K.translate(0,-J);break;case 7:K.rotate(0.5*Math.PI);K.translate(M,-J);K.scale(-1,1);break;case 8:K.rotate(-0.5*Math.PI);K.translate(-M,0);break}}function u(){if(G){G.purge();G=null}w=B=A=E=null;I=false}}return(o.Image=n)});h("moxie/runtime/flash/Runtime",["moxie/core/utils/Basic","moxie/core/utils/Env","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/runtime/Runtime"],function(j,m,k,p,i){var n="flash",o={};
 function l(){var r;try{r=navigator.plugins["Shockwave Flash"];r=r.description}catch(t){try{r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(s){r="0.0"}}r=r.match(/\d+/g);return parseFloat(r[0]+"."+r[1])}function q(s){var r=this,t;s=j.extend({swf_url:m.swf_url},s);i.call(this,s,n,{access_binary:function(u){return u&&r.mode==="browser"},access_image_binary:function(u){return u&&r.mode==="browser"},display_media:i.capTrue,do_cors:i.capTrue,drag_and_drop:false,report_upload_progress:function(){return r.mode==="client"},resize_image:i.capTrue,return_response_headers:false,return_response_type:function(u){if(u==="json"&&!!window.JSON){return true}return !j.arrayDiff(u,["","text","document"])||r.mode==="browser"},return_status_code:function(u){return r.mode==="browser"||!j.arrayDiff(u,[200,404])},select_file:i.capTrue,select_multiple:i.capTrue,send_binary_string:function(u){return u&&r.mode==="browser"},send_browser_cookies:function(u){return u&&r.mode==="browser"},send_custom_headers:function(u){return u&&r.mode==="browser"},send_multipart:i.capTrue,slice_blob:function(u){return u&&r.mode==="client"},stream_upload:function(u){return u&&r.mode==="browser"},summon_file_dialog:false,upload_filesize:function(u){return j.parseSizeStr(u)<=2097152||r.mode==="client"},use_http_method:function(u){return !j.arrayDiff(u,["GET","POST"])}},{access_binary:function(u){return u?"browser":"client"},access_image_binary:function(u){return u?"browser":"client"},report_upload_progress:function(u){return u?"browser":"client"},return_response_type:function(u){return j.arrayDiff(u,["","text","json","document"])?"browser":["client","browser"]},return_status_code:function(u){return j.arrayDiff(u,[200,404])?"browser":["client","browser"]},send_binary_string:function(u){return u?"browser":"client"},send_browser_cookies:function(u){return u?"browser":"client"},send_custom_headers:function(u){return u?"browser":"client"},stream_upload:function(u){return u?"client":"browser"},upload_filesize:function(u){return j.parseSizeStr(u)>=2097152?"client":"browser"}},"client");if(l()<10){this.mode=false}j.extend(this,{getShim:function(){return k.get(this.uid)},shimExec:function(v,w){var u=[].slice.call(arguments,2);return r.getShim().exec(this.uid,v,w,u)},init:function(){var v,w,u;u=this.getShimContainer();j.extend(u.style,{position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"});v='<object id="'+this.uid+'" type="application/x-shockwave-flash" data="'+s.swf_url+'" ';if(m.browser==="IE"){v+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '}v+='width="100%" height="100%" style="outline:0">'+'<param name="movie" value="'+s.swf_url+'" />'+'<param name="flashvars" value="uid='+escape(this.uid)+"&target="+m.global_event_dispatcher+'" />'+'<param name="wmode" value="transparent" />'+'<param name="allowscriptaccess" value="always" />'+"</object>";if(m.browser==="IE"){w=document.createElement("div");u.appendChild(w);w.outerHTML=v;w=u=null}else{u.innerHTML=v}t=setTimeout(function(){if(r&&!r.initialized){/*r.trigger("Error",new p.RuntimeError(p.RuntimeError.NOT_INIT_ERR))*/}},5000)},destroy:(function(u){return function(){u.call(r);clearTimeout(t);s=t=u=r=null}}(this.destroy))},o)}i.addConstructor(n,q);return o});h("moxie/runtime/flash/file/Blob",["moxie/runtime/flash/Runtime","moxie/file/Blob"],function(j,k){var i={slice:function(n,p,l,o){var m=this.getRuntime();if(p<0){p=Math.max(n.size+p,0)}else{if(p>0){p=Math.min(p,n.size)}}if(l<0){l=Math.max(n.size+l,0)}else{if(l>0){l=Math.min(l,n.size)}}n=m.shimExec.call(this,"Blob","slice",p,l,o||"");if(n){n=new k(m.uid,n)}return n}};return(j.Blob=i)});h("moxie/runtime/flash/file/FileInput",["moxie/runtime/flash/Runtime"],function(i){var j={init:function(k){this.getRuntime().shimExec.call(this,"FileInput","init",{name:k.name,accept:k.accept,multiple:k.multiple});this.trigger("ready")}};return(i.FileInput=j)});h("moxie/runtime/flash/file/FileReader",["moxie/runtime/flash/Runtime","moxie/core/utils/Encode"],function(l,i){var j="";function k(n,o){switch(o){case"readAsText":return i.atob(n,"utf8");case"readAsBinaryString":return i.atob(n);case"readAsDataURL":return n}return null}var m={read:function(q,o){var p=this,n=p.getRuntime();if(q==="readAsDataURL"){j="data:"+(o.type||"")+";base64,"}p.bind("Progress",function(s,r){if(r){j+=k(r,q)}});return n.shimExec.call(this,"FileReader","readAsBase64",o.uid)},getResult:function(){return j},destroy:function(){j=null}};return(l.FileReader=m)});h("moxie/runtime/flash/file/FileReaderSync",["moxie/runtime/flash/Runtime","moxie/core/utils/Encode"],function(k,i){function j(m,n){switch(n){case"readAsText":return i.atob(m,"utf8");case"readAsBinaryString":return i.atob(m);case"readAsDataURL":return m}return null}var l={read:function(p,o){var m,n=this.getRuntime();m=n.shimExec.call(this,"FileReaderSync","readAsBase64",o.uid);if(!m){return null}if(p==="readAsDataURL"){m="data:"+(o.type||"")+";base64,"+m}return j(m,p,o.type)}};return(k.FileReaderSync=l)
 });h("moxie/runtime/flash/xhr/XMLHttpRequest",["moxie/runtime/flash/Runtime","moxie/core/utils/Basic","moxie/file/Blob","moxie/file/File","moxie/file/FileReaderSync","moxie/xhr/FormData","moxie/runtime/Transporter"],function(j,m,p,i,o,n,l){var k={send:function(x,s){var u=this,y=u.getRuntime();function r(){x.transport=y.mode;y.shimExec.call(u,"XMLHttpRequest","send",x,s)}function t(A,z){y.shimExec.call(u,"XMLHttpRequest","appendBlob",A,z.uid);s=null;r()}function v(A,z){var B=new l();B.bind("TransportingComplete",function(){z(this.result)});B.transport(A.getSource(),A.type,{ruid:y.uid})}if(!m.isEmptyObj(x.headers)){m.each(x.headers,function(z,A){y.shimExec.call(u,"XMLHttpRequest","setRequestHeader",A,z.toString())})}if(s instanceof n){var w;s.each(function(A,z){if(A instanceof p){w=z}else{y.shimExec.call(u,"XMLHttpRequest","append",z,A)}});if(!s.hasBlob()){s=null;r()}else{var q=s.getBlob();if(q.isDetached()){v(q,function(z){q.destroy();t(w,z)})}else{t(w,q)}}}else{if(s instanceof p){if(s.isDetached()){v(s,function(z){s.destroy();s=z.uid;r()})}else{s=s.uid;r()}}else{r()}}},getResponse:function(t){var q,s,r=this.getRuntime();s=r.shimExec.call(this,"XMLHttpRequest","getResponseAsBlob");if(s){s=new i(r.uid,s);if("blob"===t){return s}try{q=new o();if(!!~m.inArray(t,["","text"])){return q.readAsText(s)}else{if("json"===t&&!!window.JSON){return JSON.parse(q.readAsText(s))}}}finally{s.destroy()}}return null},abort:function(r){var q=this.getRuntime();q.shimExec.call(this,"XMLHttpRequest","abort");this.dispatchEvent("readystatechange");this.dispatchEvent("abort")}};return(j.XMLHttpRequest=k)});h("moxie/runtime/flash/runtime/Transporter",["moxie/runtime/flash/Runtime","moxie/file/Blob"],function(i,k){var j={getAsBlob:function(n){var m=this.getRuntime(),l=m.shimExec.call(this,"Transporter","getAsBlob",n);if(l){return new k(m.uid,l)}return null}};return(i.Transporter=j)});h("moxie/runtime/flash/image/Image",["moxie/runtime/flash/Runtime","moxie/core/utils/Basic","moxie/runtime/Transporter","moxie/file/Blob","moxie/file/FileReaderSync"],function(j,l,k,n,m){var i={loadFromBlob:function(r){var q=this,p=q.getRuntime();function o(t){p.shimExec.call(q,"Image","loadFromBlob",t.uid);q=p=null}if(r.isDetached()){var s=new k();s.bind("TransportingComplete",function(){o(s.result.getSource())});s.transport(r.getSource(),r.type,{ruid:p.uid})}else{o(r.getSource())}},loadFromImage:function(p){var o=this.getRuntime();return o.shimExec.call(this,"Image","loadFromImage",p.uid)},getAsBlob:function(q,r){var p=this.getRuntime(),o=p.shimExec.call(this,"Image","getAsBlob",q,r);if(o){return new n(p.uid,o)}return null},getAsDataURL:function(){var q=this.getRuntime(),p=q.Image.getAsBlob.apply(this,arguments),o;if(!p){return null}o=new m();return o.readAsDataURL(p)}};return(j.Image=i)});h("moxie/runtime/silverlight/Runtime",["moxie/core/utils/Basic","moxie/core/utils/Env","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/runtime/Runtime"],function(j,m,l,p,i){var n="silverlight",o={};function q(z){var C=false,v=null,r,s,t,B,u,x=0;try{try{v=new ActiveXObject("AgControl.AgControl");if(v.IsVersionSupported(z)){C=true}v=null}catch(y){var w=navigator.plugins["Silverlight Plug-In"];if(w){r=w.description;if(r==="1.0.30226.2"){r="2.0.30226.2"}s=r.split(".");while(s.length>3){s.pop()}while(s.length<4){s.push(0)}t=z.split(".");while(t.length>4){t.pop()}do{B=parseInt(t[x],10);u=parseInt(s[x],10);x++}while(x<t.length&&B===u);if(B<=u&&!isNaN(B)){C=true}}}}catch(A){C=false}return C}function k(s){var r=this,t;s=j.extend({xap_url:m.xap_url},s);i.call(this,s,n,{access_binary:i.capTrue,access_image_binary:i.capTrue,display_media:i.capTrue,do_cors:i.capTrue,drag_and_drop:false,report_upload_progress:i.capTrue,resize_image:i.capTrue,return_response_headers:function(u){return u&&r.mode==="client"},return_response_type:function(u){if(u!=="json"){return true}else{return !!window.JSON}},return_status_code:function(u){return r.mode==="client"||!j.arrayDiff(u,[200,404])},select_file:i.capTrue,select_multiple:i.capTrue,send_binary_string:i.capTrue,send_browser_cookies:function(u){return u&&r.mode==="browser"},send_custom_headers:function(u){return u&&r.mode==="client"},send_multipart:i.capTrue,slice_blob:i.capTrue,stream_upload:true,summon_file_dialog:false,upload_filesize:i.capTrue,use_http_method:function(u){return r.mode==="client"||!j.arrayDiff(u,["GET","POST"])}},{return_response_headers:function(u){return u?"client":"browser"},return_status_code:function(u){return j.arrayDiff(u,[200,404])?"client":["client","browser"]},send_browser_cookies:function(u){return u?"browser":"client"},send_custom_headers:function(u){return u?"client":"browser"},use_http_method:function(u){return j.arrayDiff(u,["GET","POST"])?"client":["client","browser"]}});if(!q("2.0.31005.0")||m.browser==="Opera"){this.mode=false}j.extend(this,{getShim:function(){return l.get(this.uid).content.Moxie},shimExec:function(v,w){var u=[].slice.call(arguments,2);return r.getShim().exec(this.uid,v,w,u)},init:function(){var u;
 u=this.getShimContainer();u.innerHTML='<object id="'+this.uid+'" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">'+'<param name="source" value="'+s.xap_url+'"/>'+'<param name="background" value="Transparent"/>'+'<param name="windowless" value="true"/>'+'<param name="enablehtmlaccess" value="true"/>'+'<param name="initParams" value="uid='+this.uid+",target="+m.global_event_dispatcher+'"/>'+"</object>";t=setTimeout(function(){if(r&&!r.initialized){r.trigger("Error",new p.RuntimeError(p.RuntimeError.NOT_INIT_ERR))}},m.OS!=="Windows"?10000:5000)},destroy:(function(u){return function(){u.call(r);clearTimeout(t);s=t=u=r=null}}(this.destroy))},o)}i.addConstructor(n,k);return o});h("moxie/runtime/silverlight/file/Blob",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Basic","moxie/runtime/flash/file/Blob"],function(i,j,k){return(i.Blob=j.extend({},k))});h("moxie/runtime/silverlight/file/FileInput",["moxie/runtime/silverlight/Runtime"],function(i){var j={init:function(l){function k(n){var o="";for(var m=0;m<n.length;m++){o+=(o!==""?"|":"")+n[m].title+" | *."+n[m].extensions.replace(/,/g,";*.")}return o}this.getRuntime().shimExec.call(this,"FileInput","init",k(l.accept),l.name,l.multiple);this.trigger("ready")}};return(i.FileInput=j)});h("moxie/runtime/silverlight/file/FileDrop",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Dom","moxie/core/utils/Events"],function(k,j,i){var l={init:function(){var n=this,m=n.getRuntime(),o;o=m.getShimContainer();i.addEvent(o,"dragover",function(p){p.preventDefault();p.stopPropagation();p.dataTransfer.dropEffect="copy"},n.uid);i.addEvent(o,"dragenter",function(q){q.preventDefault();var p=j.get(m.uid).dragEnter(q);if(p){q.stopPropagation()}},n.uid);i.addEvent(o,"drop",function(q){q.preventDefault();var p=j.get(m.uid).dragDrop(q);if(p){q.stopPropagation()}},n.uid);return m.shimExec.call(this,"FileDrop","init")}};return(k.FileDrop=l)});h("moxie/runtime/silverlight/file/FileReader",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Basic","moxie/runtime/flash/file/FileReader"],function(i,k,j){return(i.FileReader=k.extend({},j))});h("moxie/runtime/silverlight/file/FileReaderSync",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Basic","moxie/runtime/flash/file/FileReaderSync"],function(i,j,k){return(i.FileReaderSync=j.extend({},k))});h("moxie/runtime/silverlight/xhr/XMLHttpRequest",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Basic","moxie/runtime/flash/xhr/XMLHttpRequest"],function(i,k,j){return(i.XMLHttpRequest=k.extend({},j))});h("moxie/runtime/silverlight/runtime/Transporter",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Basic","moxie/runtime/flash/runtime/Transporter"],function(i,k,j){return(i.Transporter=k.extend({},j))});h("moxie/runtime/silverlight/image/Image",["moxie/runtime/silverlight/Runtime","moxie/core/utils/Basic","moxie/runtime/flash/image/Image"],function(j,k,i){return(j.Image=k.extend({},i,{getInfo:function(){var m=this.getRuntime(),n=["tiff","exif","gps"],o={meta:{}},l=m.shimExec.call(this,"Image","getInfo");if(l.meta){k.each(n,function(q){var u=l.meta[q],p,r,s,t;if(u&&u.keys){o.meta[q]={};for(r=0,s=u.keys.length;r<s;r++){p=u.keys[r];t=u[p];if(t){if(/^(\d|[1-9]\d+)$/.test(t)){t=parseInt(t,10)}else{if(/^\d*\.\d+$/.test(t)){t=parseFloat(t)}}o.meta[q][p]=t}}}})}o.width=parseInt(l.width,10);o.height=parseInt(l.height,10);o.size=parseInt(l.size,10);o.type=l.type;o.name=l.name;return o}}))});h("moxie/runtime/html4/Runtime",["moxie/core/utils/Basic","moxie/core/Exceptions","moxie/runtime/Runtime","moxie/core/utils/Env"],function(o,i,l,k){var n="html4",m={};function j(q){var p=this,s=l.capTest,r=l.capTrue;l.call(this,q,n,{access_binary:s(window.FileReader||window.File&&File.getAsDataURL),access_image_binary:false,display_media:s(m.Image&&(k.can("create_canvas")||k.can("use_data_uri_over32kb"))),do_cors:false,drag_and_drop:false,filter_by_extension:s(function(){return(k.browser==="Chrome"&&k.version>=28)||(k.browser==="IE"&&k.version>=10)}()),resize_image:function(){return m.Image&&p.can("access_binary")&&k.can("create_canvas")},report_upload_progress:false,return_response_headers:false,return_response_type:function(t){if(t==="json"&&!!window.JSON){return true}return !!~o.inArray(t,["text","document",""])},return_status_code:function(t){return !o.arrayDiff(t,[200,404])},select_file:function(){return k.can("use_fileinput")},select_multiple:false,send_binary_string:false,send_custom_headers:false,send_multipart:true,slice_blob:false,stream_upload:function(){return p.can("select_file")},summon_file_dialog:s(function(){return(k.browser==="Firefox"&&k.version>=4)||(k.browser==="Opera"&&k.version>=12)||!!~o.inArray(k.browser,["Chrome","Safari"])}()),upload_filesize:r,use_http_method:function(t){return !o.arrayDiff(t,["GET","POST"])}});o.extend(this,{init:function(){this.trigger("Init")},destroy:(function(t){return function(){t.call(p);t=p=null}}(this.destroy))});o.extend(this.getShim(),m)
 }l.addConstructor(n,j);return m});h("moxie/runtime/html4/file/FileInput",["moxie/runtime/html4/Runtime","moxie/core/utils/Basic","moxie/core/utils/Dom","moxie/core/utils/Events","moxie/core/utils/Mime","moxie/core/utils/Env"],function(m,o,l,j,k,i){function n(){var s,q=[],t=[],p;function r(){var w=this,z=w.getRuntime(),y,x,u,B,v,A;A=o.guid("uid_");y=z.getShimContainer();if(s){u=l.get(s+"_form");if(u){o.extend(u.style,{top:"100%"})}}B=document.createElement("form");B.setAttribute("id",A+"_form");B.setAttribute("method","post");B.setAttribute("enctype","multipart/form-data");B.setAttribute("encoding","multipart/form-data");o.extend(B.style,{overflow:"hidden",position:"absolute",top:0,left:0,width:"100%",height:"100%"});v=document.createElement("input");v.setAttribute("id",A);v.setAttribute("type","file");v.setAttribute("name",p.name||"Filedata");v.setAttribute("accept",t.join(","));o.extend(v.style,{fontSize:"999px",opacity:0});B.appendChild(v);y.appendChild(B);o.extend(v.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"});if(i.browser==="IE"&&i.version<10){o.extend(v.style,{filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"})}v.onchange=function(){var D;if(!this.value){return}if(this.files){D=this.files[0]}else{D={name:this.value}}q=[D];this.onchange=function(){};r.call(w);w.bind("change",function C(){var E=l.get(A),G=l.get(A+"_form"),F;w.unbind("change",C);if(w.files.length&&E&&G){F=w.files[0];E.setAttribute("id",F.uid);G.setAttribute("id",F.uid+"_form");G.setAttribute("target",F.uid+"_iframe")}E=G=null},998);v=B=null;w.trigger("change")};if(z.can("summon_file_dialog")){x=l.get(p.browse_button);j.removeEvent(x,"click",w.uid);j.addEvent(x,"click",function(C){if(v&&!v.disabled){v.click()}C.preventDefault()},w.uid)}s=A;y=u=x=null}o.extend(this,{init:function(x){var u=this,w=u.getRuntime(),v;p=x;t=x.accept.mimes||k.extList2mimes(x.accept,true);v=w.getShimContainer();(function(){var y,A,z;y=l.get(x.browse_button);if(w.can("summon_file_dialog")){if(l.getStyle(y,"position")==="static"){y.style.position="relative"}A=parseInt(l.getStyle(y,"z-index"),10)||1;y.style.zIndex=A;v.style.zIndex=A-1}z=w.can("summon_file_dialog")?y:v;j.addEvent(z,"mouseover",function(){u.trigger("mouseenter")},u.uid);j.addEvent(z,"mouseout",function(){u.trigger("mouseleave")},u.uid);j.addEvent(z,"mousedown",function(){u.trigger("mousedown")},u.uid);j.addEvent(l.get(x.container),"mouseup",function(){u.trigger("mouseup")},u.uid);y=null}());r.call(this);v=null;u.trigger({type:"ready",async:true})},getFiles:function(){return q},disable:function(v){var u;if((u=l.get(s))){u.disabled=!!v}},destroy:function(){var v=this.getRuntime(),w=v.getShim(),u=v.getShimContainer();j.removeAllEvents(u,this.uid);j.removeAllEvents(p&&l.get(p.container),this.uid);j.removeAllEvents(p&&l.get(p.browse_button),this.uid);if(u){u.innerHTML=""}w.removeInstance(this.uid);s=q=t=p=u=w=null}})}return(m.FileInput=n)});h("moxie/runtime/html4/file/FileReader",["moxie/runtime/html4/Runtime","moxie/runtime/html5/file/FileReader"],function(i,j){return(i.FileReader=j)});h("moxie/runtime/html4/xhr/XMLHttpRequest",["moxie/runtime/html4/Runtime","moxie/core/utils/Basic","moxie/core/utils/Dom","moxie/core/utils/Url","moxie/core/Exceptions","moxie/core/utils/Events","moxie/file/Blob","moxie/xhr/FormData"],function(m,j,l,i,n,p,k,q){function o(){var t,r,u;function s(v){var A=this,y,z,w,x,B=false;if(!u){return}y=u.id.replace(/_iframe$/,"");z=l.get(y+"_form");if(z){w=z.getElementsByTagName("input");x=w.length;while(x--){switch(w[x].getAttribute("type")){case"hidden":w[x].parentNode.removeChild(w[x]);break;case"file":B=true;break}}w=[];if(!B){z.parentNode.removeChild(z)}z=null}setTimeout(function(){p.removeEvent(u,"load",A.uid);if(u.parentNode){u.parentNode.removeChild(u)}var C=A.getRuntime().getShimContainer();if(!C.children.length){C.parentNode.removeChild(C)}C=u=null;v()},1)}j.extend(this,{send:function(D,x){var z=this,C=z.getRuntime(),y,w,B,v;t=r=null;function A(){var E=C.getShimContainer()||document.body,F=document.createElement("div");F.innerHTML='<iframe id="'+y+'_iframe" name="'+y+'_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';u=F.firstChild;E.appendChild(u);p.addEvent(u,"load",function(){var H;try{H=u.contentWindow.document||u.contentDocument||window.frames[u.id].document;if(/^4(0[0-9]|1[0-7]|2[2346])\s/.test(H.title)){t=H.title.replace(/^(\d+).*$/,"$1")}else{t=200;r=j.trim(H.body.innerHTML);z.trigger({type:"progress",loaded:r.length,total:r.length});if(v){z.trigger({type:"uploadprogress",loaded:v.size||1025,total:v.size||1025})}}}catch(G){if(i.hasSameOrigin(D.url)){t=404}else{s.call(z,function(){z.trigger("error")});return}}s.call(z,function(){z.trigger("load")})},z.uid)}if(x instanceof q&&x.hasBlob()){v=x.getBlob();y=v.uid;B=l.get(y);w=l.get(y+"_form");if(!w){throw new n.DOMException(n.DOMException.NOT_FOUND_ERR)}}else{y=j.guid("uid_");w=document.createElement("form");w.setAttribute("id",y+"_form");w.setAttribute("method",D.method);
 w.setAttribute("enctype","multipart/form-data");w.setAttribute("encoding","multipart/form-data");w.setAttribute("target",y+"_iframe");C.getShimContainer().appendChild(w)}if(x instanceof q){x.each(function(G,E){if(G instanceof k){if(B){B.setAttribute("name",E)}}else{var F=document.createElement("input");j.extend(F,{type:"hidden",name:E,value:G});if(B){w.insertBefore(F,B)}else{w.appendChild(F)}}})}w.setAttribute("action",D.url);A();w.submit();z.trigger("loadstart")},getStatus:function(){return t},getResponse:function(v){if("json"===v){if(j.typeOf(r)==="string"&&!!window.JSON){try{return JSON.parse(r.replace(/^\s*<pre[^>]*>/,"").replace(/<\/pre>\s*$/,""))}catch(w){return null}}}else{if("document"===v){}}return r},abort:function(){var v=this;if(u&&u.contentWindow){if(u.contentWindow.stop){u.contentWindow.stop()}else{if(u.contentWindow.document.execCommand){u.contentWindow.document.execCommand("Stop")}else{u.src="about:blank"}}}s.call(this,function(){v.dispatchEvent("abort")})}})}return(m.XMLHttpRequest=o)});h("moxie/runtime/html4/image/Image",["moxie/runtime/html4/Runtime","moxie/runtime/html5/image/Image"],function(j,i){return(j.Image=i)});a(["moxie/core/utils/Basic","moxie/core/I18n","moxie/core/utils/Mime","moxie/core/utils/Env","moxie/core/utils/Dom","moxie/core/Exceptions","moxie/core/EventTarget","moxie/core/utils/Encode","moxie/runtime/Runtime","moxie/runtime/RuntimeClient","moxie/file/Blob","moxie/file/File","moxie/file/FileInput","moxie/file/FileDrop","moxie/runtime/RuntimeTarget","moxie/file/FileReader","moxie/core/utils/Url","moxie/file/FileReaderSync","moxie/xhr/FormData","moxie/xhr/XMLHttpRequest","moxie/runtime/Transporter","moxie/image/Image","moxie/core/utils/Events"])})(this);(function(a){var d={},c=a.moxie.core.utils.Basic.inArray;(function b(f){var e,g;for(e in f){g=typeof(f[e]);if(g==="object"&&!~c(e,["Exceptions","Env","Mime"])){b(f[e])}else{if(g==="function"){d[e]=f[e]}}}})(a.moxie);d.Env=a.moxie.core.utils.Env;d.Mime=a.moxie.core.utils.Mime;d.Exceptions=a.moxie.core.Exceptions;a.mOxie=d;if(!a.o){a.o=d}return d})(this);
 /*global mOxie:true */
 ;(function(window, o, undef) {
 var delay = window.setTimeout, 
 	 fileFilters = {};
 // convert plupload features to caps acceptable by mOxie
 function normalizeCaps(settings) {
	 var features = settings.required_features, caps = {};
	 function resolve(feature, value, strict) {
		 // Feature notation is deprecated, use caps (this thing here is required for backward compatibility)
		 var map = {
			 chunks: 'slice_blob',
			 jpgresize: 'send_binary_string',
			 pngresize: 'send_binary_string',
			 progress: 'report_upload_progress',
			 multi_selection: 'select_multiple',
			 dragdrop: 'drag_and_drop',
			 drop_element: 'drag_and_drop',
			 headers: 'send_custom_headers',
			 urlstream_upload: 'send_binary_string',
			 canSendBinary: 'send_binary',
			 triggerDialog: 'summon_file_dialog'
		 };
 
		 if (map[feature]) {
			 caps[map[feature]] = value;
		 } else if (!strict) {
			 caps[feature] = value;
		 }
	 }
	 if (typeof(features) === 'string') {
		 plupload.each(features.split(/\s*,\s*/), function(feature) {
			 resolve(feature, true);
		 });
	 } else if (typeof(features) === 'object') {
		 plupload.each(features, function(value, feature) {
			 resolve(feature, value);
		 });
	 } else if (features === true) {
		 // check settings for required features
		 if (settings.chunk_size > 0) {
			 caps.slice_blob = true;
		 }
 
		 if (settings.resize.enabled || !settings.multipart) {
			 caps.send_binary_string = true;
		 }
 
		 plupload.each(settings, function(value, feature) {
			 resolve(feature, !!value, true); // strict check
		 });
	 }
	 return caps;
 }
 /**
  * @module plupload
  * @static
  */
 var plupload = {
	 /**
	  * Plupload version will be replaced on build.
	  *
	  * @property VERSION
	  * @for Plupload
	  * @static
	  * @final
	  */
	 VERSION : '2.1.2',
 
	 /**
	  * Inital state of the queue and also the state ones it's finished all it's uploads.
	  *
	  * @property STOPPED
	  * @static
	  * @final
	  */
	 STOPPED : 1,
 
	 /**
	  * Upload process is running
	  *
	  * @property STARTED
	  * @static
	  * @final
	  */
	 STARTED : 2,
 
	 /**
	  * File is queued for upload
	  *
	  * @property QUEUED
	  * @static
	  * @final
	  */
	 QUEUED : 1,
 
	 /**
	  * File is being uploaded
	  *
	  * @property UPLOADING
	  * @static
	  * @final
	  */
	 UPLOADING : 2,
 
	 /**
	  * File has failed to be uploaded
	  *
	  * @property FAILED
	  * @static
	  * @final
	  */
	 FAILED : 4,
 
	 /**
	  * File has been uploaded successfully
	  *
	  * @property DONE
	  * @static
	  * @final
	  */
	 DONE : 5,
 
	 // Error constants used by the Error event
 
	 /**
	  * Generic error for example if an exception is thrown inside Silverlight.
	  *
	  * @property GENERIC_ERROR
	  * @static
	  * @final
	  */
	 GENERIC_ERROR : -100,
 
	 /**
	  * HTTP transport error. For example if the server produces a HTTP status other than 200.
	  *
	  * @property HTTP_ERROR
	  * @static
	  * @final
	  */
	 HTTP_ERROR : -200,
 
	 /**
	  * Generic I/O error. For example if it wasn't possible to open the file stream on local machine.
	  *
	  * @property IO_ERROR
	  * @static
	  * @final
	  */
	 IO_ERROR : -300,
 
	 /**
	  * @property SECURITY_ERROR
	  * @static
	  * @final
	  */
	 SECURITY_ERROR : -400,
 
	 /**
	  * Initialization error. Will be triggered if no runtime was initialized.
	  *
	  * @property INIT_ERROR
	  * @static
	  * @final
	  */
	 INIT_ERROR : -500,
 
	 /**
	  * File size error. If the user selects a file that is too large it will be blocked and an error of this type will be triggered.
	  *
	  * @property FILE_SIZE_ERROR
	  * @static
	  * @final
	  */
	 FILE_SIZE_ERROR : -600,
 
	 /**
	  * File extension error. If the user selects a file that isn't valid according to the filters setting.
	  *
	  * @property FILE_EXTENSION_ERROR
	  * @static
	  * @final
	  */
	 FILE_EXTENSION_ERROR : -601,
 
	 /**
	  * Duplicate file error. If prevent_duplicates is set to true and user selects the same file again.
	  *
	  * @property FILE_DUPLICATE_ERROR
	  * @static
	  * @final
	  */
	 FILE_DUPLICATE_ERROR : -602,

	 /**
	  * Runtime will try to detect if image is proper one. Otherwise will throw this error.
	  *
	  * @property IMAGE_FORMAT_ERROR
	  * @static
	  * @final
	  */
	 IMAGE_FORMAT_ERROR : -700,
 
	 /**
	  * While working on files runtime may run out of memory and will throw this error.
	  *
	  * @since 2.1.2
	  * @property MEMORY_ERROR
	  * @static
	  * @final
	  */
	 MEMORY_ERROR : -701,
 
	 /**
	  * Each runtime has an upper limit on a dimension of the image it can handle. If bigger, will throw this error.
	  *
	  * @property IMAGE_DIMENSIONS_ERROR
	  * @static
	  * @final
	  */
	 IMAGE_DIMENSIONS_ERROR : -702,
 
	 /**
	  * Mime type lookup table.
	  *
	  * @property mimeTypes
	  * @type Object
	  * @final
	  */
	 mimeTypes : o.mimes,
 
	 /**
	  * In some cases sniffing is the only way around :(
	  */
	 ua: o.ua,
 
	 /**
	  * Gets the true type of the built-in object (better version of typeof).
	  * @credits Angus Croll (http://javascriptweblog.wordpress.com/)
	  *
	  * @method typeOf
	  * @static
	  * @param {Object} o Object to check.
	  * @return {String} Object [[Class]]
	  */
	 typeOf: o.typeOf,
 
	 /**
	  * Extends the specified object with another object.
	  *
	  * @method extend
	  * @static
	  * @param {Object} target Object to extend.
	  * @param {Object..} obj Multiple objects to extend with.
	  * @return {Object} Same as target, the extended object.
	  */
	 extend : o.extend,
 
	 /**
	  * Generates an unique ID. This is 99.99% unique since it takes the current time and 5 random numbers.
	  * The only way a user would be able to get the same ID is if the two persons at the same exact milisecond manages
	  * to get 5 the same random numbers between 0-65535 it also uses a counter so each call will be guaranteed to be page unique.
	  * It's more probable for the earth to be hit with an ansteriod. You can also if you want to be 100% sure set the plupload.guidPrefix property
	  * to an user unique key.
	  *
	  * @method guid
	  * @static
	  * @return {String} Virtually unique id.
	  */
	 guid : o.guid,
 
	 /**
	  * Get array of DOM Elements by their ids.
	  *
	  * @method get
	  * @for Utils
	  * @param {String} id Identifier of the DOM Element
	  * @return {Array}
	 */
	 get : function get(ids) {
		 var els = [], el;
 
		 if (o.typeOf(ids) !== 'array') {
			 ids = [ids];
		 }
 
		 var i = ids.length;
		 while (i--) {
			 el = o.get(ids[i]);
			 if (el) {
				 els.push(el);
			 }
		 }
 
		 return els.length ? els : null;
	 },
 
	 /**
	  * Executes the callback function for each item in array/object. If you return false in the
	  * callback it will break the loop.
	  *
	  * @method each
	  * @static
	  * @param {Object} obj Object to iterate.
	  * @param {function} callback Callback function to execute for each item.
	  */
	 each : o.each,
 
	 /**
	  * Returns the absolute x, y position of an Element. The position will be returned in a object with x, y fields.
	  *
	  * @method getPos
	  * @static
	  * @param {Element} node HTML element or element id to get x, y position from.
	  * @param {Element} root Optional root element to stop calculations at.
	  * @return {object} Absolute position of the specified element object with x, y fields.
	  */
	 getPos : o.getPos,
 
	 /**
	  * Returns the size of the specified node in pixels.
	  *
	  * @method getSize
	  * @static
	  * @param {Node} node Node to get the size of.
	  * @return {Object} Object with a w and h property.
	  */
	 getSize : o.getSize,
 
	 /**
	  * Encodes the specified string.
	  *
	  * @method xmlEncode
	  * @static
	  * @param {String} s String to encode.
	  * @return {String} Encoded string.
	  */
	 xmlEncode : function(str) {
		 var xmlEncodeChars = {'<' : 'lt', '>' : 'gt', '&' : 'amp', '"' : 'quot', '\'' : '#39'}, xmlEncodeRegExp = /[<>&\"\']/g;
 
		 return str ? ('' + str).replace(xmlEncodeRegExp, function(chr) {
			 return xmlEncodeChars[chr] ? '&' + xmlEncodeChars[chr] + ';' : chr;
		 }) : str;
	 },
 
	 /**
	  * Forces anything into an array.
	  *
	  * @method toArray
	  * @static
	  * @param {Object} obj Object with length field.
	  * @return {Array} Array object containing all items.
	  */
	 toArray : o.toArray,
 
	 /**
	  * Find an element in array and return it's index if present, otherwise return -1.
	  *
	  * @method inArray
	  * @static
	  * @param {mixed} needle Element to find
	  * @param {Array} array
	  * @return {Int} Index of the element, or -1 if not found
	  */
	 inArray : o.inArray,
 
	 /**
	  * Extends the language pack object with new items.
	  *
	  * @method addI18n
	  * @static
	  * @param {Object} pack Language pack items to add.
	  * @return {Object} Extended language pack object.
	  */
	 addI18n : o.addI18n,
 
	 /**
	  * Translates the specified string by checking for the english string in the language pack lookup.
	  *
	  * @method translate
	  * @static
	  * @param {String} str String to look for.
	  * @return {String} Translated string or the input string if it wasn't found.
	  */
	 translate : o.translate,
 
	 /**
	  * Checks if object is empty.
	  *
	  * @method isEmptyObj
	  * @static
	  * @param {Object} obj Object to check.
	  * @return {Boolean}
	  */
	 isEmptyObj : o.isEmptyObj,
 
	 /**
	  * Checks if specified DOM element has specified class.
	  *
	  * @method hasClass
	  * @static
	  * @param {Object} obj DOM element like object to add handler to.
	  * @param {String} name Class name
	  */
	 hasClass : o.hasClass,
 
	 /**
	  * Adds specified className to specified DOM element.
	  *
	  * @method addClass
	  * @static
	  * @param {Object} obj DOM element like object to add handler to.
	  * @param {String} name Class name
	  */
	 addClass : o.addClass,
 
	 /**
	  * Removes specified className from specified DOM element.
	  *
	  * @method removeClass
	  * @static
	  * @param {Object} obj DOM element like object to add handler to.
	  * @param {String} name Class name
	  */
	 removeClass : o.removeClass,
 
	 /**
	  * Returns a given computed style of a DOM element.
	  *
	  * @method getStyle
	  * @static
	  * @param {Object} obj DOM element like object.
	  * @param {String} name Style you want to get from the DOM element
	  */
	 getStyle : o.getStyle,
 
	 /**
	  * Adds an event handler to the specified object and store reference to the handler
	  * in objects internal Plupload registry (@see removeEvent).
	  *
	  * @method addEvent
	  * @static
	  * @param {Object} obj DOM element like object to add handler to.
	  * @param {String} name Name to add event listener to.
	  * @param {Function} callback Function to call when event occurs.
	  * @param {String} (optional) key that might be used to add specifity to the event record.
	  */
	 addEvent : o.addEvent,
 
	 /**
	  * Remove event handler from the specified object. If third argument (callback)
	  * is not specified remove all events with the specified name.
	  *
	  * @method removeEvent
	  * @static
	  * @param {Object} obj DOM element to remove event listener(s) from.
	  * @param {String} name Name of event listener to remove.
	  * @param {Function|String} (optional) might be a callback or unique key to match.
	  */
	 removeEvent: o.removeEvent,
 
	 /**
	  * Remove all kind of events from the specified object
	  *
	  * @method removeAllEvents
	  * @static
	  * @param {Object} obj DOM element to remove event listeners from.
	  * @param {String} (optional) unique key to match, when removing events.
	  */
	 removeAllEvents: o.removeAllEvents,
 
	 /**
	  * Cleans the specified name from national characters (diacritics). The result will be a name with only a-z, 0-9 and _.
	  *
	  * @method cleanName
	  * @static
	  * @param {String} s String to clean up.
	  * @return {String} Cleaned string.
	  */
	 cleanName : function(name) {
		 var i, lookup;
 
		 // Replace diacritics
		 lookup = [
			 /[\300-\306]/g, 'A', /[\340-\346]/g, 'a',
			 /\307/g, 'C', /\347/g, 'c',
			 /[\310-\313]/g, 'E', /[\350-\353]/g, 'e',
			 /[\314-\317]/g, 'I', /[\354-\357]/g, 'i',
			 /\321/g, 'N', /\361/g, 'n',
			 /[\322-\330]/g, 'O', /[\362-\370]/g, 'o',
			 /[\331-\334]/g, 'U', /[\371-\374]/g, 'u'
		 ];
 
		 for (i = 0; i < lookup.length; i += 2) {
			 name = name.replace(lookup[i], lookup[i + 1]);
		 }
 
		 // Replace whitespace
		 name = name.replace(/\s+/g, '_');
 
		 // Remove anything else
		 name = name.replace(/[^a-z0-9_\-\.]+/gi, '');
 
		 return name;
	 },
 
	 /**
	  * Builds a full url out of a base URL and an object with items to append as query string items.
	  *
	  * @method buildUrl
	  * @static
	  * @param {String} url Base URL to append query string items to.
	  * @param {Object} items Name/value object to serialize as a querystring.
	  * @return {String} String with url + serialized query string items.
	  */
	 buildUrl : function(url, items) {
		 var query = '';
 
		 plupload.each(items, function(value, name) {
			 query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
		 });
 
		 if (query) {
			 url += (url.indexOf('?') > 0 ? '&' : '?') + query;
		 }
 
		 return url;
	 },
 
	 /**
	  * Formats the specified number as a size string for example 1024 becomes 1 KB.
	  *
	  * @method formatSize
	  * @static
	  * @param {Number} size Size to format as string.
	  * @return {String} Formatted size string.
	  */
	 formatSize : function(size) {
 
		 if (size === undef || /\D/.test(size)) {
			 return plupload.translate('N/A');
		 }
 
		 function round(num, precision) {
			 return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
		 }
 
		 var boundary = Math.pow(1024, 4);
 
		 // TB
		 if (size > boundary) {
			 return round(size / boundary, 1) + " " + plupload.translate('tb');
		 }
 
		 // GB
		 if (size > (boundary/=1024)) {
			 return round(size / boundary, 1) + " " + plupload.translate('gb');
		 }
 
		 // MB
		 if (size > (boundary/=1024)) {
			 return round(size / boundary, 1) + " " + plupload.translate('mb');
		 }
 
		 // KB
		 if (size > 1024) {
			 return Math.round(size / 1024) + " " + plupload.translate('kb');
		 }
 
		 return size + " " + plupload.translate('b');
	 },
 
 
	 /**
	  * Parses the specified size string into a byte value. For example 10kb becomes 10240.
	  *
	  * @method parseSize
	  * @static
	  * @param {String|Number} size String to parse or number to just pass through.
	  * @return {Number} Size in bytes.
	  */
	 parseSize : o.parseSizeStr,
 
 
	 /**
	  * A way to predict what runtime will be choosen in the current environment with the
	  * specified settings.
	  *
	  * @method predictRuntime
	  * @static
	  * @param {Object|String} config Plupload settings to check
	  * @param {String} [runtimes] Comma-separated list of runtimes to check against
	  * @return {String} Type of compatible runtime
	  */
	 predictRuntime : function(config, runtimes) {
		 var up, runtime;
 
		 up = new plupload.Uploader(config);
		 runtime = o.Runtime.thatCan(up.getOption().required_features, runtimes || config.runtimes);
		 up.destroy();
		 return runtime;
	 },
 
	 /**
	  * Registers a filter that will be executed for each file added to the queue.
	  * If callback returns false, file will not be added.
	  *
	  * Callback receives two arguments: a value for the filter as it was specified in settings.filters
	  * and a file to be filtered. Callback is executed in the context of uploader instance.
	  *
	  * @method addFileFilter
	  * @static
	  * @param {String} name Name of the filter by which it can be referenced in settings.filters
	  * @param {String} cb Callback - the actual routine that every added file must pass
	  */
	 addFileFilter: function(name, cb) {
		 fileFilters[name] = cb;
	 }
 };
 plupload.addFileFilter('mime_types', function(filters, file, cb) {
	 if (filters.length && !filters.regexp.test(file.name)) {
		 this.trigger('Error', {
			 code : plupload.FILE_EXTENSION_ERROR,
			 message : plupload.translate('File extension error.'),
			 file : file
		 });
		 cb(false);
	 } else {
		 cb(true);
	 }
 });
 plupload.addFileFilter('max_file_size', function(maxSize, file, cb) {
	 var undef;
 
	 maxSize = plupload.parseSize(maxSize);
 
	 // Invalid file size
	 if (file.size !== undef && maxSize && file.size > maxSize) {
		 this.trigger('Error', {
			 code : plupload.FILE_SIZE_ERROR,
			 message : plupload.translate('File size error.'),
			 file : file
		 });
		 cb(false);
	 } else {
		 cb(true);
	 }
 });
 plupload.addFileFilter('prevent_duplicates', function(value, file, cb) {
	 if (value) {
		 var ii = this.files.length;
		 while (ii--) {
			 // Compare by name and size (size might be 0 or undefined, but still equivalent for both)
			 if (file.name === this.files[ii].name && file.size === this.files[ii].size) {
				 this.trigger('Error', {
					 code : plupload.FILE_DUPLICATE_ERROR,
					 message : plupload.translate('Duplicate file error.'),
					 file : file
				 });
				 cb(false);
				 return;
			 }
		 }
	 }
	 cb(true);
 });
 /**
 @class Uploader
 @constructor
 
 @param {Object} settings For detailed information about each option check documentation.
	 @param {String|DOMElement} settings.browse_button id of the DOM element or DOM element itself to use as file dialog trigger.
	 @param {String} settings.url URL of the server-side upload handler.
	 @param {Number|String} [settings.chunk_size=0] Chunk size in bytes to slice the file into. Shorcuts with b, kb, mb, gb, tb suffixes also supported. `e.g. 204800 or "204800b" or "200kb"`. By default - disabled.
	 @param {Boolean} [settings.send_chunk_number=true] Whether to send chunks and chunk numbers, or total and offset bytes.
	 @param {String} [settings.container] id of the DOM element to use as a container for uploader structures. Defaults to document.body.
	 @param {String|DOMElement} [settings.drop_element] id of the DOM element or DOM element itself to use as a drop zone for Drag-n-Drop.
	 @param {String} [settings.file_data_name="file"] Name for the file field in Multipart formated message.
	 @param {Object} [settings.filters={}] Set of file type filters.
		 @param {Array} [settings.filters.mime_types=[]] List of file types to accept, each one defined by title and list of extensions. `e.g. {title : "Image files", extensions : "jpg,jpeg,gif,png"}`. Dispatches `plupload.FILE_EXTENSION_ERROR`
		 @param {String|Number} [settings.filters.max_file_size=0] Maximum file size that the user can pick, in bytes. Optionally supports b, kb, mb, gb, tb suffixes. `e.g. "10mb" or "1gb"`. By default - not set. Dispatches `plupload.FILE_SIZE_ERROR`.
		 @param {Boolean} [settings.filters.prevent_duplicates=false] Do not let duplicates into the queue. Dispatches `plupload.FILE_DUPLICATE_ERROR`.
	 @param {String} [settings.flash_swf_url] URL of the Flash swf.
	 @param {Object} [settings.headers] Custom headers to send with the upload. Hash of name/value pairs.
	 @param {Number} [settings.max_retries=0] How many times to retry the chunk or file, before triggering Error event.
	 @param {Boolean} [settings.multipart=true] Whether to send file and additional parameters as Multipart formated message.
	 @param {Object} [settings.multipart_params] Hash of key/value pairs to send with every file upload.
	 @param {Boolean} [settings.multi_selection=true] Enable ability to select multiple files at once in file dialog.
	 @param {String|Object} [settings.required_features] Either comma-separated list or hash of required features that chosen runtime should absolutely possess.
	 @param {Object} [settings.resize] Enable resizng of images on client-side. Applies to `image/jpeg` and `image/png` only. `e.g. {width : 200, height : 200, quality : 90, crop: true}`
		 @param {Number} [settings.resize.width] If image is bigger, it will be resized.
		 @param {Number} [settings.resize.height] If image is bigger, it will be resized.
		 @param {Number} [settings.resize.quality=90] Compression quality for jpegs (1-100).
		 @param {Boolean} [settings.resize.crop=false] Whether to crop images to exact dimensions. By default they will be resized proportionally.
	 @param {String} [settings.runtimes="html5,flash,silverlight,html4"] Comma separated list of runtimes, that Plupload will try in turn, moving to the next if previous fails.
	 @param {String} [settings.silverlight_xap_url] URL of the Silverlight xap.
	 @param {Boolean} [settings.unique_names=false] If true will generate unique filenames for uploaded files.
	 @param {Boolean} [settings.send_file_name=true] Whether to send file name as additional argument - 'name' (required for chunked uploads and some other cases where file name cannot be sent via normal ways).
 */
 plupload.Uploader = function(options) {
	 /**
	  * Fires when the current RunTime has been initialized.
	  *
	  * @event Init
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
 
	 /**
	  * Fires after the init event incase you need to perform actions there.
	  *
	  * @event PostInit
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
 
	 /**
	  * Fires when the option is changed in via uploader.setOption().
	  *
	  * @event OptionChanged
	  * @since 2.1
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {String} name Name of the option that was changed
	  * @param {Mixed} value New value for the specified option
	  * @param {Mixed} oldValue Previous value of the option
	  */
 
	 /**
	  * Fires when the silverlight/flash or other shim needs to move.
	  *
	  * @event Refresh
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
 
	 /**
	  * Fires when the overall state is being changed for the upload queue.
	  *
	  * @event StateChanged
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
 
	 /**
	  * Fires when browse_button is clicked and browse dialog shows.
	  *
	  * @event Browse
	  * @since 2.1.2
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
 
	 /**
	  * Fires for every filtered file before it is added to the queue.
	  *
	  * @event FileFiltered
	  * @since 2.1
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {plupload.File} file Another file that has to be added to the queue.
	  */
 
	 /**
	  * Fires when the file queue is changed. In other words when files are added/removed to the files array of the uploader instance.
	  *
	  * @event QueueChanged
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
 
	 /**
	  * Fires after files were filtered and added to the queue.
	  *
	  * @event FilesAdded
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {Array} files Array of file objects that were added to queue by the user.
	  */
 
	 /**
	  * Fires when file is removed from the queue.
	  *
	  * @event FilesRemoved
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {Array} files Array of files that got removed.
	  */
 
	 /**
	  * Fires when just before a file is uploaded. This event enables you to override settings
	  * on the uploader instance before the file is uploaded.
	  *
	  * @event BeforeUpload
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {plupload.File} file File to be uploaded.
	  */
 
	 /**
	  * Fires when a file is to be uploaded by the runtime.
	  *
	  * @event UploadFile
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {plupload.File} file File to be uploaded.
	  */
 
	 /**
	  * Fires while a file is being uploaded. Use this event to update the current file upload progress.
	  *
	  * @event UploadProgress
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {plupload.File} file File that is currently being uploaded.
	  */
 
	 /**
	  * Fires when file chunk is uploaded.
	  *
	  * @event ChunkUploaded
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {plupload.File} file File that the chunk was uploaded for.
	  * @param {Object} response Object with response properties.
	  */
 
	 /**
	  * Fires when a file is successfully uploaded.
	  *
	  * @event FileUploaded
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {plupload.File} file File that was uploaded.
	  * @param {Object} response Object with response properties.
	  */
 
	 /**
	  * Fires when all files in a queue are uploaded.
	  *
	  * @event UploadComplete
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {Array} files Array of file objects that was added to queue/selected by the user.
	  */
 
	 /**
	  * Fires when a error occurs.
	  *
	  * @event Error
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  * @param {Object} error Contains code, message and sometimes file and other details.
	  */
 
	 /**
	  * Fires when destroy method is called.
	  *
	  * @event Destroy
	  * @param {plupload.Uploader} uploader Uploader instance sending the event.
	  */
	 var uid = plupload.guid()
	 , settings
	 , files = []
	 , preferred_caps = {}
	 , fileInputs = []
	 , fileDrops = []
	 , startTime
	 , total
	 , disabled = false
	 , xhr
	 ;
 
 
	 // Private methods
	 function uploadNext() {
		 var file, count = 0, i;
 
		 if (this.state == plupload.STARTED) {
			 // Find first QUEUED file
			 for (i = 0; i < files.length; i++) {
				 if (!file && files[i].status == plupload.QUEUED) {
					 file = files[i];
					 if (this.trigger("BeforeUpload", file)) {
						 file.status = plupload.UPLOADING;
						 this.trigger("UploadFile", file);
					 }
				 } else {
					 count++;
				 }
			 }
 
			 // All files are DONE or FAILED
			 if (count == files.length) {
				 if (this.state !== plupload.STOPPED) {
					 this.state = plupload.STOPPED;
					 this.trigger("StateChanged");
				 }
				 this.trigger("UploadComplete", files);
			 }
		 }
	 }
 
 
	 function calcFile(file) {
		 file.percent = file.size > 0 ? Math.ceil(file.loaded / file.size * 100) : 100;
		 calc();
	 }
 
 
	 function calc() {
		 var i, file;
 
		 // Reset stats
		 total.reset();
 
		 // Check status, size, loaded etc on all files
		 for (i = 0; i < files.length; i++) {
			 file = files[i];
 
			 if (file.size !== undef) {
				 // We calculate totals based on original file size
				 total.size += file.origSize;
 
				 // Since we cannot predict file size after resize, we do opposite and
				 // interpolate loaded amount to match magnitude of total
				 total.loaded += file.loaded * file.origSize / file.size;
			 } else {
				 total.size = undef;
			 }
 
			 if (file.status == plupload.DONE) {
				 total.uploaded++;
			 } else if (file.status == plupload.FAILED) {
				 total.failed++;
			 } else {
				 total.queued++;
			 }
		 }
 
		 // If we couldn't calculate a total file size then use the number of files to calc percent
		 if (total.size === undef) {
			 total.percent = files.length > 0 ? Math.ceil(total.uploaded / files.length * 100) : 0;
		 } else {
			 total.bytesPerSec = Math.ceil(total.loaded / ((+new Date() - startTime || 1) / 1000.0));
			 total.percent = total.size > 0 ? Math.ceil(total.loaded / total.size * 100) : 0;
		 }
	 }
 
 
	 function getRUID() {
		 var ctrl = fileInputs[0] || fileDrops[0];
		 if (ctrl) {
			 return ctrl.getRuntime().uid;
		 }
		 return false;
	 }
 
 
	 function runtimeCan(file, cap) {
		 if (file.ruid) {
			 var info = o.Runtime.getInfo(file.ruid);
			 if (info) {
				 return info.can(cap);
			 }
		 }
		 return false;
	 }
 
 
	 function bindEventListeners() {
		 this.bind('FilesAdded FilesRemoved', function(up) {
			 up.trigger('QueueChanged');
			 up.refresh();
		 });
 
		 this.bind('CancelUpload', onCancelUpload);
 
		 this.bind('BeforeUpload', onBeforeUpload);
 
		 this.bind('UploadFile', onUploadFile);
 
		 this.bind('UploadProgress', onUploadProgress);
 
		 this.bind('StateChanged', onStateChanged);
 
		 this.bind('QueueChanged', calc);
 
		 this.bind('Error', onError);
 
		 this.bind('FileUploaded', onFileUploaded);
 
		 this.bind('Destroy', onDestroy);
	 }
 
 
	 function initControls(settings, cb) {
		 var self = this, inited = 0, queue = [];
 
		 // common settings
		 var options = {
			 runtime_order: settings.runtimes,
			 required_caps: settings.required_features,
			 preferred_caps: preferred_caps,
			 swf_url: settings.flash_swf_url,
			 xap_url: settings.silverlight_xap_url
		 };
 
		 // add runtime specific options if any
		 plupload.each(settings.runtimes.split(/\s*,\s*/), function(runtime) {
			 if (settings[runtime]) {
				 options[runtime] = settings[runtime];
			 }
		 });
 
		 // initialize file pickers - there can be many
		 if (settings.browse_button) {
			 plupload.each(settings.browse_button, function(el) {
				 queue.push(function(cb) {
					 var fileInput = new o.FileInput(plupload.extend({}, options, {
						 accept: settings.filters.mime_types,
						 name: settings.file_data_name,
						 multiple: settings.multi_selection,
						 container: settings.container,
						 browse_button: el
					 }));
 
					 fileInput.onready = function() {
						 var info = o.Runtime.getInfo(this.ruid);
 
						 // for backward compatibility
						 o.extend(self.features, {
							 chunks: info.can('slice_blob'),
							 multipart: info.can('send_multipart'),
							 multi_selection: info.can('select_multiple')
						 });
 
						 inited++;
						 fileInputs.push(this);
						 cb();
					 };
 
					 fileInput.onchange = function() {
						 self.addFile(this.files);
					 };
 
					 fileInput.bind('mouseenter mouseleave mousedown mouseup', function(e) {
						 if (!disabled) {
							 if (settings.browse_button_hover) {
								 if ('mouseenter' === e.type) {
									 o.addClass(el, settings.browse_button_hover);
								 } else if ('mouseleave' === e.type) {
									 o.removeClass(el, settings.browse_button_hover);
								 }
							 }
 
							 if (settings.browse_button_active) {
								 if ('mousedown' === e.type) {
									 o.addClass(el, settings.browse_button_active);
								 } else if ('mouseup' === e.type) {
									 o.removeClass(el, settings.browse_button_active);
								 }
							 }
						 }
					 });
 
					 fileInput.bind('mousedown', function() {
						 if (!disabled) {
							self.trigger('Browse');
						 }
						 
					 });
 
					 fileInput.bind('error runtimeerror', function() {
						 fileInput = null;
						 cb();
					 });
 
					 fileInput.init();
				 });
			 });
		 }
 
		 // initialize drop zones
		 if (settings.drop_element) {
			 plupload.each(settings.drop_element, function(el) {
				 queue.push(function(cb) {
					 var fileDrop = new o.FileDrop(plupload.extend({}, options, {
						 drop_zone: el
					 }));
 
					 fileDrop.onready = function() {
						 var info = o.Runtime.getInfo(this.ruid);
 
						 self.features.dragdrop = info.can('drag_and_drop'); // for backward compatibility
 
						 inited++;
						 fileDrops.push(this);
						 cb();
					 };
 
					 fileDrop.ondrop = function() {
						 self.addFile(this.files);
					 };
 
					 fileDrop.bind('error runtimeerror', function() {
						 fileDrop = null;
						 cb();
					 });
 
					 fileDrop.init();
				 });
			 });
		 }
 
 
		 o.inSeries(queue, function() {
			 if (typeof(cb) === 'function') {
				 cb(inited);
			 }
		 });
	 }
 
 
	 function resizeImage(blob, params, cb) {
		 var img = new o.Image();
 
		 try {
			 img.onload = function() {
				 // no manipulation required if...
				 if (params.width > this.width &&
					 params.height > this.height &&
					 params.quality === undef &&
					 params.preserve_headers &&
					 !params.crop
				 ) {
					 this.destroy();
					 return cb(blob);
				 }
				 // otherwise downsize
				 img.downsize(params.width, params.height, params.crop, params.preserve_headers);
			 };
 
			 img.onresize = function() {
				 cb(this.getAsBlob(blob.type, params.quality));
				 this.destroy();
			 };
 
			 img.onerror = function() {
				 cb(blob);
			 };
 
			 img.load(blob);
		 } catch(ex) {
			 cb(blob);
		 }
	 }
 
 
	 function setOption(option, value, init) {
		 var self = this, reinitRequired = false;
 
		 function _setOption(option, value, init) {
			 var oldValue = settings[option];
 
			 switch (option) {
				 case 'max_file_size':
					 if (option === 'max_file_size') {
						 settings.max_file_size = settings.filters.max_file_size = value;
					 }
					 break;
 
				 case 'chunk_size':
					 if (value = plupload.parseSize(value)) {
						 settings[option] = value;
						 settings.send_file_name = true;
					 }
					 break;
 
				 case 'multipart':
					 settings[option] = value;
					 if (!value) {
						 settings.send_file_name = true;
					 }
					 break;
 
				 case 'unique_names':
					 settings[option] = value;
					 if (value) {
						 settings.send_file_name = true;
					 }
					 break;
 
				 case 'filters':
					 // for sake of backward compatibility
					 if (plupload.typeOf(value) === 'array') {
						 value = {
							 mime_types: value
						 };
					 }
 
					 if (init) {
						 plupload.extend(settings.filters, value);
					 } else {
						 settings.filters = value;
					 }
 
					 // if file format filters are being updated, regenerate the matching expressions
					 if (value.mime_types) {
						 settings.filters.mime_types.regexp = (function(filters) {
							 var extensionsRegExp = [];
 
							 plupload.each(filters, function(filter) {
								 plupload.each(filter.extensions.split(/,/), function(ext) {
									 if (/^\s*\*\s*$/.test(ext)) {
										 extensionsRegExp.push('\\.*');
									 } else {
										 extensionsRegExp.push('\\.' + ext.replace(new RegExp('[' + ('/^$.*+?|()[]{}\\'.replace(/./g, '\\$&')) + ']', 'g'), '\\$&'));
									 }
								 });
							 });
 
							 return new RegExp('(' + extensionsRegExp.join('|') + ')$', 'i');
						 }(settings.filters.mime_types));
					 }
					 break;
 
				 case 'resize':
					 if (init) {
						 plupload.extend(settings.resize, value, {
							 enabled: true
						 });
					 } else {
						 settings.resize = value;
					 }
					 break;
 
				 case 'prevent_duplicates':
					 settings.prevent_duplicates = settings.filters.prevent_duplicates = !!value;
					 break;
 
				 case 'browse_button':
				 case 'drop_element':
						 value = plupload.get(value);
 
				 case 'container':
				 case 'runtimes':
				 case 'multi_selection':
				 case 'flash_swf_url':
				 case 'silverlight_xap_url':
					 settings[option] = value;
					 if (!init) {
						 reinitRequired = true;
					 }
					 break;
 
				 default:
					 settings[option] = value;
			 }
 
			 if (!init) {
				 self.trigger('OptionChanged', option, value, oldValue);
			 }
		 }
 
		 if (typeof(option) === 'object') {
			 plupload.each(option, function(value, option) {
				 _setOption(option, value, init);
			 });
		 } else {
			 _setOption(option, value, init);
		 }
 
		 if (init) {
			 // Normalize the list of required capabilities
			 settings.required_features = normalizeCaps(plupload.extend({}, settings));
 
			 // Come up with the list of capabilities that can affect default mode in a multi-mode runtimes
			 preferred_caps = normalizeCaps(plupload.extend({}, settings, {
				 required_features: true
			 }));
		 } else if (reinitRequired) {
			 self.trigger('Destroy');
 
			 initControls.call(self, settings, function(inited) {
				 if (inited) {
					 self.runtime = o.Runtime.getInfo(getRUID()).type;
					 self.trigger('Init', { runtime: self.runtime });
					 self.trigger('PostInit');
				 } else {
					 self.trigger('Error', {
						 code : plupload.INIT_ERROR,
						 message : plupload.translate('Init error.')
					 });
				 }
			 });
		 }
	 }
 
 
	 // Internal event handlers
	 function onBeforeUpload(up, file) {
		 // Generate unique target filenames
		 if (up.settings.unique_names) {
			 var matches = file.name.match(/\.([^.]+)$/), ext = "part";
			 if (matches) {
				 ext = matches[1];
			 }
			 file.target_name = file.id + '.' + ext;
		 }
	 }
 
 
	 function onUploadFile(up, file) {
		 var attachConfig = options.attachConfig; // 附件配置对象
		 var url = up.settings.url
		 , chunkSize = up.settings.chunk_size
		 , retries = up.settings.max_retries
		 , features = up.features
		 , offset = 0
		 , blob;
		 if (file.name && chunkSize) {
			 $.ajax({
				  type: "POST",
				  async : false ,
				  url: url,
				  data: {
					  fileName:file.name, 
					  askBreakpoint:true,
					  resumableUpload:true,
					  fileSize:file.size,
					  lastModifiedDate:file.lastModifiedDate,
					  configId:attachConfig.configId,
				  },
				  success: function(data){
					  var re = /^[0-9]+.?[0-9]*$/;
					  if (re.test(Number(data))) {
						  offset = Number(data);
					  }
				   }
			  });
		 }
 
		 // make sure we start at a predictable offset
		 if (file.loaded) {
			 offset = file.loaded = chunkSize ? chunkSize * Math.floor(file.loaded / chunkSize) : 0;
		 }
 
		 function handleError() {
			 if (retries-- > 0) {
				 delay(uploadNextChunk, 1000);
			 } else {
				 file.loaded = offset; // reset all progress
 
				 up.trigger('Error', {
					 code : plupload.HTTP_ERROR,
					 message : plupload.translate('HTTP Error.'),
					 file : file,
					 response : xhr.responseText,
					 status : xhr.status,
					 responseHeaders: xhr.getAllResponseHeaders()
				 });
			 }
		 }
 
		 function uploadNextChunk() {
			 var chunkBlob, formData, args = {}, curChunkSize;
 
			 // make sure that file wasn't cancelled and upload is not stopped in general
			 if (file.status !== plupload.UPLOADING || up.state === plupload.STOPPED) {
				 return;
			 }
 
			 // send additional 'name' parameter only if required
			 if (up.settings.send_file_name) {
				 args.name = file.target_name || file.name;
			 }
 
			 if (chunkSize && features.chunks && blob.size > chunkSize) { // blob will be of type string if it was loaded in memory
				 curChunkSize = Math.min(chunkSize, blob.size - offset);
				 chunkBlob = blob.slice(offset, offset + curChunkSize);
			 } else {
				 curChunkSize = blob.size;
				 chunkBlob = blob;
			 }
 
			 // If chunking is enabled add corresponding args, no matter if file is bigger than chunk or smaller
			 if (chunkSize && features.chunks) {
				 // Setup query string arguments
				 if (up.settings.send_chunk_number) {
					 args.chunk = Math.ceil(offset / chunkSize);
					 args.chunks = Math.ceil(blob.size / chunkSize);
				 } else { // keep support for experimental chunk format, just in case
					 args.offset = offset;
					 args.total = blob.size;
				 }
			 }
 
			 xhr = new o.XMLHttpRequest();
 
			 // Do we have upload progress support
			 if (xhr.upload) {
				 xhr.upload.onprogress = function(e) {
					 file.loaded = Math.min(file.size, offset + e.loaded);
					 up.trigger('UploadProgress', file);
				 };
			 }
 
			 xhr.onload = function() {
				 // check if upload made itself through
				 if (xhr.status >= 400) {
					 handleError();
					 return;
				 }
 
				 retries = up.settings.max_retries; // reset the counter
 
				 // Handle chunk response
				 if (curChunkSize < blob.size) {
					 chunkBlob.destroy();
 
					 offset += curChunkSize;
					 file.loaded = Math.min(offset, blob.size);
 
					 up.trigger('ChunkUploaded', file, {
						 offset : file.loaded,
						 total : blob.size,
						 response : xhr.responseText,
						 status : xhr.status,
						 responseHeaders: xhr.getAllResponseHeaders()
					 });
 
					 // stock Android browser doesn't fire upload progress events, but in chunking mode we can fake them
					 if (o.Env.browser === 'Android Browser') {
						 // doesn't harm in general, but is not required anywhere else
						 up.trigger('UploadProgress', file);
					 }
				 } else {
					 file.loaded = file.size;
				 }
 
				 chunkBlob = formData = null; // Free memory
 
				 // Check if file is uploaded
				 if (!offset || offset >= blob.size) {
					 // If file was modified, destory the copy
					 if (file.size != file.origSize) {
						 blob.destroy();
						 blob = null;
					 }
 
					 up.trigger('UploadProgress', file);
 
					 file.status = plupload.DONE;
 
					 up.trigger('FileUploaded', file, {
						 response : xhr.responseText,
						 status : xhr.status,
						 responseHeaders: xhr.getAllResponseHeaders()
					 });
				 } else {
					 // Still chunks left
					 delay(uploadNextChunk, 1); // run detached, otherwise event handlers interfere
				 }
			 };
 
			 xhr.onerror = function() {
				 handleError();
			 };
 
			 xhr.onloadend = function() {
				 this.destroy();
				 xhr = null;
			 };
 
			 // Build multipart request
			 if (up.settings.multipart && features.multipart) {
				 console.log('url')
				 console.log(url)
				 xhr.open("post", url, true);
 
				 // Set custom headers
				 plupload.each(up.settings.headers, function(value, name) {
					 xhr.setRequestHeader(name, value);
				 });
 
				 formData = new o.FormData();
 
				 // Add multipart params
				 plupload.each(plupload.extend(args, up.settings.multipart_params), function(value, name) {
					 formData.append(name, value);
				 });
 
				 if (chunkSize) {
					 formData.append("fileSize", file.size);
					 formData.append("lastModifiedDate", file.lastModifiedDate);
					 formData.append("resumableUpload", true);
					 formData.append("fileName", file.name);
				 }
 
				 // Add file and send it
				 formData.append(up.settings.file_data_name, chunkBlob);
				 console.log('formData')
				 console.log(formData)
				 xhr.send(formData, {
					 runtime_order: up.settings.runtimes,
					 required_caps: up.settings.required_features,
					 preferred_caps: preferred_caps,
					 swf_url: up.settings.flash_swf_url,
					 xap_url: up.settings.silverlight_xap_url
				 });
			 } else {
				 // if no multipart, send as binary stream
				 url = plupload.buildUrl(up.settings.url, plupload.extend(args, up.settings.multipart_params));
 
				 xhr.open("post", url, true);
 
				 xhr.setRequestHeader('Content-Type', 'application/octet-stream'); // Binary stream header
 
				 // Set custom headers
				 plupload.each(up.settings.headers, function(value, name) {
					 xhr.setRequestHeader(name, value);
				 });
 
				 xhr.send(chunkBlob, {
					 runtime_order: up.settings.runtimes,
					 required_caps: up.settings.required_features,
					 preferred_caps: preferred_caps,
					 swf_url: up.settings.flash_swf_url,
					 xap_url: up.settings.silverlight_xap_url
				 });
			 }
		 }
 
		 blob = file.getSource();
 
		 // Start uploading chunks
		 if (up.settings.resize.enabled && runtimeCan(blob, 'send_binary_string') && !!~o.inArray(blob.type, ['image/jpeg', 'image/png'])) {
			 // Resize if required
			 resizeImage.call(this, blob, up.settings.resize, function(resizedBlob) {
				 blob = resizedBlob;
				 file.size = resizedBlob.size;
				 uploadNextChunk();
			 });
		 } else {
			 uploadNextChunk();
		 }
	 }
 
 
	 function onUploadProgress(up, file) {
		 calcFile(file);
	 }
 
 
	 function onStateChanged(up) {
		 if (up.state == plupload.STARTED) {
			 // Get start time to calculate bps
			 startTime = (+new Date());
		 } else if (up.state == plupload.STOPPED) {
			 // Reset currently uploading files
			 for (var i = up.files.length - 1; i >= 0; i--) {
				 if (up.files[i].status == plupload.UPLOADING) {
					 up.files[i].status = plupload.QUEUED;
					 calc();
				 }
			 }
		 }
	 }
 
 
	 function onCancelUpload() {
		 if (xhr) {
			 xhr.abort();
		 }
	 }
 
 
	 function onFileUploaded(up) {
		 calc();
 
		 // Upload next file but detach it from the error event
		 // since other custom listeners might want to stop the queue
		 delay(function() {
			 uploadNext.call(up);
		 }, 1);
	 }
 
 
	 function onError(up, err) {
		 if (err.code === plupload.INIT_ERROR) {
			 up.destroy();
		 }
		 // Set failed status if an error occured on a file
		 else if (err.file) {
			 err.file.status = plupload.FAILED;
			 calcFile(err.file);
 
			 // Upload next file but detach it from the error event
			 // since other custom listeners might want to stop the queue
			 if (up.state == plupload.STARTED) { // upload in progress
				 up.trigger('CancelUpload');
				 delay(function() {
					 uploadNext.call(up);
				 }, 1);
			 }
		 }
	 }
 
 
	 function onDestroy(up) {
		 up.stop();
 
		 // Purge the queue
		 plupload.each(files, function(file) {
			 file.destroy();
		 });
		 files = [];
 
		 if (fileInputs.length) {
			 plupload.each(fileInputs, function(fileInput) {
				 fileInput.destroy();
			 });
			 fileInputs = [];
		 }
 
		 if (fileDrops.length) {
			 plupload.each(fileDrops, function(fileDrop) {
				 fileDrop.destroy();
			 });
			 fileDrops = [];
		 }
 
		 preferred_caps = {};
		 disabled = false;
		 startTime = xhr = null;
		 total.reset();
	 }
 
 
	 // Default settings
	 settings = {
		 runtimes: o.Runtime.order,
		 max_retries: 0,
		 chunk_size: 0,
		 multipart: true,
		 multi_selection: true,
		 file_data_name: 'file',
		 flash_swf_url: 'js/Moxie.swf',
		 silverlight_xap_url: 'js/Moxie.xap',
		 filters: {
			 mime_types: [],
			 prevent_duplicates: false,
			 max_file_size: 0
		 },
		 resize: {
			 enabled: false,
			 preserve_headers: true,
			 crop: false
		 },
		 send_file_name: true,
		 send_chunk_number: true
	 };
 
 
	 setOption.call(this, options, null, true);
 
	 // Inital total state
	 total = new plupload.QueueProgress();
 
	 // Add public methods
	 plupload.extend(this, {
 
		 /**
		  * Unique id for the Uploader instance.
		  *
		  * @property id
		  * @type String
		  */
		 id : uid,
		 uid : uid, // mOxie uses this to differentiate between event targets
 
		 /**
		  * Current state of the total uploading progress. This one can either be plupload.STARTED or plupload.STOPPED.
		  * These states are controlled by the stop/start methods. The default value is STOPPED.
		  *
		  * @property state
		  * @type Number
		  */
		 state : plupload.STOPPED,
 
		 /**
		  * Map of features that are available for the uploader runtime. Features will be filled
		  * before the init event is called, these features can then be used to alter the UI for the end user.
		  * Some of the current features that might be in this map is: dragdrop, chunks, jpgresize, pngresize.
		  *
		  * @property features
		  * @type Object
		  */
		 features : {},
 
		 /**
		  * Current runtime name.
		  *
		  * @property runtime
		  * @type String
		  */
		 runtime : null,
 
		 /**
		  * Current upload queue, an array of File instances.
		  *
		  * @property files
		  * @type Array
		  * @see plupload.File
		  */
		 files : files,
 
		 /**
		  * Object with name/value settings.
		  *
		  * @property settings
		  * @type Object
		  */
		 settings : settings,
 
		 /**
		  * Total progess information. How many files has been uploaded, total percent etc.
		  *
		  * @property total
		  * @type plupload.QueueProgress
		  */
		 total : total,
 
 
		 /**
		  * Initializes the Uploader instance and adds internal event listeners.
		  *
		  * @method init
		  */
		 init : function() {
			 var self = this;
 
			 if (typeof(settings.preinit) == "function") {
				 settings.preinit(self);
			 } else {
				 plupload.each(settings.preinit, function(func, name) {
					 self.bind(name, func);
				 });
			 }
 
			 bindEventListeners.call(this);
 
			 // Check for required options
			 if (!settings.browse_button || !settings.url) {
				 this.trigger('Error', {
					 code : plupload.INIT_ERROR,
					 message : plupload.translate('Init error.')
				 });
				 return;
			 }
 
			 initControls.call(this, settings, function(inited) {
				 if (typeof(settings.init) == "function") {
					 settings.init(self);
				 } else {
					 plupload.each(settings.init, function(func, name) {
						 self.bind(name, func);
					 });
				 }
 
				 if (inited) {
					 self.runtime = o.Runtime.getInfo(getRUID()).type;
					 self.trigger('Init', { runtime: self.runtime });
					 self.trigger('PostInit');
				 } else {
					 self.trigger('Error', {
						 code : plupload.INIT_ERROR,
						 message : plupload.translate('Init error.')
					 });
				 }
			 });
		 },
 
		 /**
		  * Set the value for the specified option(s).
		  *
		  * @method setOption
		  * @since 2.1
		  * @param {String|Object} option Name of the option to change or the set of key/value pairs
		  * @param {Mixed} [value] Value for the option (is ignored, if first argument is object)
		  */
		 setOption: function(option, value) {
			 setOption.call(this, option, value, !this.runtime); // until runtime not set we do not need to reinitialize
		 },
 
		 /**
		  * Get the value for the specified option or the whole configuration, if not specified.
		  *
		  * @method getOption
		  * @since 2.1
		  * @param {String} [option] Name of the option to get
		  * @return {Mixed} Value for the option or the whole set
		  */
		 getOption: function(option) {
			 if (!option) {
				 return settings;
			 }
			 return settings[option];
		 },
 
		 /**
		  * Refreshes the upload instance by dispatching out a refresh event to all runtimes.
		  * This would for example reposition flash/silverlight shims on the page.
		  *
		  * @method refresh
		  */
		 refresh : function() {
			 if (fileInputs.length) {
				 plupload.each(fileInputs, function(fileInput) {
					 fileInput.trigger('Refresh');
				 });
			 }
			 this.trigger('Refresh');
		 },
 
		 /**
		  * Starts uploading the queued files.
		  *
		  * @method start
		  */
		 start : function() {
			 if (this.state != plupload.STARTED) {
				 this.state = plupload.STARTED;
				 this.trigger('StateChanged');
 
				 uploadNext.call(this);
			 }
		 },
 
		 /**
		  * Stops the upload of the queued files.
		  *
		  * @method stop
		  */
		 stop : function() {
			 if (this.state != plupload.STOPPED) {
				 this.state = plupload.STOPPED;
				 this.trigger('StateChanged');
				 this.trigger('CancelUpload');
			 }
		 },
 
 
		 /**
		  * Disables/enables browse button on request.
		  *
		  * @method disableBrowse
		  * @param {Boolean} disable Whether to disable or enable (default: true)
		  */
		 disableBrowse : function() {
			 disabled = arguments[0] !== undef ? arguments[0] : true;
 
			 if (fileInputs.length) {
				 plupload.each(fileInputs, function(fileInput) {
					 fileInput.disable(disabled);
				 });
			 }
 
			 this.trigger('DisableBrowse', disabled);
		 },
 
		 /**
		  * Returns the specified file object by id.
		  *
		  * @method getFile
		  * @param {String} id File id to look for.
		  * @return {plupload.File} File object or undefined if it wasn't found;
		  */
		 getFile : function(id) {
			 var i;
			 for (i = files.length - 1; i >= 0; i--) {
				 if (files[i].id === id) {
					 return files[i];
				 }
			 }
		 },
 
		 /**
		  * Adds file to the queue programmatically. Can be native file, instance of Plupload.File,
		  * instance of mOxie.File, input[type="file"] element, or array of these. Fires FilesAdded,
		  * if any files were added to the queue. Otherwise nothing happens.
		  *
		  * @method addFile
		  * @since 2.0
		  * @param {plupload.File|mOxie.File|File|Node|Array} file File or files to add to the queue.
		  * @param {String} [fileName] If specified, will be used as a name for the file
		  */
		 addFile : function(file, fileName) {
			 var self = this
			 , queue = []
			 , filesAdded = []
			 , ruid
			 ;
			 $(".ui-state-error").remove();
			 function filterFile(file, cb) {
				 var queue = [];
				 o.each(self.settings.filters, function(rule, name) {
					 if (fileFilters[name]) {
						 queue.push(function(cb) {
							 fileFilters[name].call(self, rule, file, function(res) {
								 cb(!res);
							 });
						 });
					 }
				 });
				 o.inSeries(queue, cb);
			 }
 
			 /**
			  * @method resolveFile
			  * @private
			  * @param {o.File|o.Blob|plupload.File|File|Blob|input[type="file"]} file
			  */
			 function resolveFile(file) {
				 //如果上传的文件是个空文件，则终止运行，给出提示
				 if(file.length==0){
					 self.trigger("Error",{
						 code:1,
						 message:"上传的附件为空",
						 file : file
					 });
					 return;
				 }
				 var type = o.typeOf(file);
 
				 // o.File
				 if (file instanceof o.File) {
					 if (!file.ruid && !file.isDetached()) {
						 if (!ruid) { // weird case
							 return false;
						 }
						 file.ruid = ruid;
						 file.connectRuntime(ruid);
					 }
					 resolveFile(new plupload.File(file));
				 }
				 // o.Blob
				 else if (file instanceof o.Blob) {
					 resolveFile(file.getSource());
					 file.destroy();
				 }
				 // plupload.File - final step for other branches
				 else if (file instanceof plupload.File) {
					 if (fileName) {
						 file.name = fileName;
					 }
 
					 queue.push(function(cb) {
						 // run through the internal and user-defined filters, if any
						 filterFile(file, function(err) {
							 if (!err) {
								 // make files available for the filters by updating the main queue directly
								 files.push(file);
								 // collect the files that will be passed to FilesAdded event
								 filesAdded.push(file);
 
								 self.trigger("FileFiltered", file);
							 }
							 delay(cb, 1); // do not build up recursions or eventually we might hit the limits
						 });
					 });
				 }
				 // native File or blob
				 else if (o.inArray(type, ['file', 'blob']) !== -1) {
					 resolveFile(new o.File(null, file));
				 }
				 // input[type="file"]
				 else if (type === 'node' && o.typeOf(file.files) === 'filelist') {
					 // if we are dealing with input[type="file"]
					 o.each(file.files, resolveFile);
				 }
				 // mixed array of any supported types (see above)
				 else if (type === 'array') {
					 fileName = null; // should never happen, but unset anyway to avoid funny situations
					 o.each(file, resolveFile);
				 }
			 }
 
			 ruid = getRUID();
 
			 resolveFile(file);
 
			 if (queue.length) {
				 o.inSeries(queue, function() {
					 // if any files left after filtration, trigger FilesAdded
					 if (filesAdded.length) {
						 self.trigger("FilesAdded", filesAdded);
					 }
				 });
			 }
		 },
 
		 /**
		  * Removes a specific file.
		  *
		  * @method removeFile
		  * @param {plupload.File|String} file File to remove from queue.
		  */
		 removeFile : function(file) {
			 var id = typeof(file) === 'string' ? file : file.id;
 
			 for (var i = files.length - 1; i >= 0; i--) {
				 if (files[i].id === id) {
					 return this.splice(i, 1)[0];
				 }
			 }
		 },
 
		 /**
		  * Removes part of the queue and returns the files removed. This will also trigger the FilesRemoved and QueueChanged events.
		  *
		  * @method splice
		  * @param {Number} start (Optional) Start index to remove from.
		  * @param {Number} length (Optional) Lengh of items to remove.
		  * @return {Array} Array of files that was removed.
		  */
		 splice : function(start, length) {
			 // Splice and trigger events
			 var removed = files.splice(start === undef ? 0 : start, length === undef ? files.length : length);
 
			 // if upload is in progress we need to stop it and restart after files are removed
			 var restartRequired = false;
			 if (this.state == plupload.STARTED) { // upload in progress
				 plupload.each(removed, function(file) {
					 if (file.status === plupload.UPLOADING) {
						 restartRequired = true; // do not restart, unless file that is being removed is uploading
						 return false;
					 }
				 });
 
				 if (restartRequired) {
					 this.stop();
				 }
			 }
 
			 this.trigger("FilesRemoved", removed);
 
			 // Dispose any resources allocated by those files
			 plupload.each(removed, function(file) {
				 file.destroy();
			 });
 
			 if (restartRequired) {
				 this.start();
			 }
 
			 return removed;
		 },
 
		 /**
		  * Dispatches the specified event name and it's arguments to all listeners.
		  *
		  *
		  * @method trigger
		  * @param {String} name Event name to fire.
		  * @param {Object..} Multiple arguments to pass along to the listener functions.
		  */
 
		 /**
		  * Check whether uploader has any listeners to the specified event.
		  *
		  * @method hasEventListener
		  * @param {String} name Event name to check for.
		  */
 
 
		 /**
		  * Adds an event listener by name.
		  *
		  * @method bind
		  * @param {String} name Event name to listen for.
		  * @param {function} func Function to call ones the event gets fired.
		  * @param {Object} scope Optional scope to execute the specified function in.
		  */
		 bind : function(name, func, scope) {
			 var self = this;
			 // adapt moxie EventTarget style to Plupload-like
			 plupload.Uploader.prototype.bind.call(this, name, function() {
				 var args = [].slice.call(arguments);
				 args.splice(0, 1, self); // replace event object with uploader instance
				 return func.apply(this, args);
			 }, 0, scope);
		 },
 
		 /**
		  * Removes the specified event listener.
		  *
		  * @method unbind
		  * @param {String} name Name of event to remove.
		  * @param {function} func Function to remove from listener.
		  */
 
		 /**
		  * Removes all event listeners.
		  *
		  * @method unbindAll
		  */
 
 
		 /**
		  * Destroys Plupload instance and cleans after itself.
		  *
		  * @method destroy
		  */
		 destroy : function() {
			 this.trigger('Destroy');
			 settings = total = null; // purge these exclusively
			 this.unbindAll();
		 }
	 });
 };
 plupload.Uploader.prototype = o.EventTarget.instance;
 /**
  * @class File
  * @constructor
  * @param {Object} file Object containing file properties
  * @param {String} file.name Name of the file.
  * @param {Number} file.size File size.
  */
 plupload.File = (function() {
	 var filepool = {};
 
	 function PluploadFile(file) {
 
		 plupload.extend(this, {
 
			 /**
			  * File id this is a globally unique id for the specific file.
			  *
			  * @property id
			  * @type String
			  */
			 id: plupload.guid(),
 
			 /**
			  * File name for example "myfile.gif".
			  *
			  * @property name
			  * @type String
			  */
			 name: file.name || file.fileName,
 
			 /**
			  * File type, `e.g image/jpeg`
			  *
			  * @property type
			  * @type String
			  */
			 type: file.type || '',
 
			 /**
			  * File size in bytes (may change after client-side manupilation).
			  *
			  * @property size
			  * @type Number
			  */
			 size: file.size || file.fileSize,
 
			 /**
			  * Original file size in bytes.
			  *
			  * @property origSize
			  * @type Number
			  */
			 origSize: file.size || file.fileSize,
 
			 /**
			  * Number of bytes uploaded of the files total size.
			  *
			  * @property loaded
			  * @type Number
			  */
			 loaded: 0,
 
			 /**
			  * Number of percentage uploaded of the file.
			  *
			  * @property percent
			  * @type Number
			  */
			 percent: 0,
 
			 /**
			  * Status constant matching the plupload states QUEUED, UPLOADING, FAILED, DONE.
			  *
			  * @property status
			  * @type Number
			  * @see plupload
			  */
			 status: plupload.QUEUED,
 
			 /**
			  * Date of last modification.
			  *
			  * @property lastModifiedDate
			  * @type {String}
			  */
			 lastModifiedDate: file.lastModifiedDate || (new Date()).getTime(), // Thu Aug 23 2012 19:40:00 GMT+0400 (GET)
 
			 /**
			  * Returns native window.File object, when it's available.
			  *
			  * @method getNative
			  * @return {window.File} or null, if plupload.File is of different origin
			  */
			 getNative: function() {
				 var file = this.getSource().getSource();
				 return o.inArray(o.typeOf(file), ['blob', 'file']) !== -1 ? file : null;
			 },
 
			 /**
			  * Returns mOxie.File - unified wrapper object that can be used across runtimes.
			  *
			  * @method getSource
			  * @return {mOxie.File} or null
			  */
			 getSource: function() {
				 if (!filepool[this.id]) {
					 return null;
				 }
				 return filepool[this.id];
			 },
 
			 /**
			  * Destroys plupload.File object.
			  *
			  * @method destroy
			  */
			 destroy: function() {
				 var src = this.getSource();
				 if (src) {
					 src.destroy();
					 delete filepool[this.id];
				 }
			 }
		 });
 
		 filepool[this.id] = file;
	 }
 
	 return PluploadFile;
 }());
 /**
  * Constructs a queue progress.
  *
  * @class QueueProgress
  * @constructor
  */
  plupload.QueueProgress = function() {
	 var self = this; // Setup alias for self to reduce code size when it's compressed
 
	 /**
	  * Total queue file size.
	  *
	  * @property size
	  * @type Number
	  */
	 self.size = 0;
 
	 /**
	  * Total bytes uploaded.
	  *
	  * @property loaded
	  * @type Number
	  */
	 self.loaded = 0;
 
	 /**
	  * Number of files uploaded.
	  *
	  * @property uploaded
	  * @type Number
	  */
	 self.uploaded = 0;
 
	 /**
	  * Number of files failed to upload.
	  *
	  * @property failed
	  * @type Number
	  */
	 self.failed = 0;
 
	 /**
	  * Number of files yet to be uploaded.
	  *
	  * @property queued
	  * @type Number
	  */
	 self.queued = 0;
 
	 /**
	  * Total percent of the uploaded bytes.
	  *
	  * @property percent
	  * @type Number
	  */
	 self.percent = 0;
 
	 /**
	  * Bytes uploaded per second.
	  *
	  * @property bytesPerSec
	  * @type Number
	  */
	 self.bytesPerSec = 0;
 
	 /**
	  * Resets the progress to it's initial values.
	  *
	  * @method reset
	  */
	 self.reset = function() {
		 self.size = self.loaded = self.uploaded = self.failed = self.queued = self.percent = self.bytesPerSec = 0;
	 };
 };
 window.plupload = plupload;
 }(window, mOxie));
 // Chinese (China) (zh_CN)
 plupload.addI18n({"Stop Upload":"停止上传","Upload URL might be wrong or doesn't exist.":"上传的URL可能是错误的或不存在。",tb:"tb",Size:"大小",Close:"关闭","Init error.":"初始化错误。","Add files to the upload queue and click the start button.":"将文件添加到上传队列，然后点击”开始上传“按钮。",Filename:"文件名","Image format either wrong or not supported.":"图片格式错误或者不支持。",Status:"状态","HTTP Error.":"HTTP 错误。","Start Upload":"开始上传",mb:"mb",kb:"kb","Duplicate file error.":"重复文件错误。","File size error.":"文件大小错误。","N/A":"N/A",gb:"gb","Error: Invalid file extension:":"错误：无效的文件扩展名:","Select files":"附件","%s already present in the queue.":"%s 已经在当前队列里。","File: %s":"文件: %s",b:"b","Uploaded %d/%d files":"已上传 %d/%d 个文件","Upload element accepts only %d file(s) at a time. Extra files were stripped.":"最多允许上传 %d 个文件，多余的文件将会被删除。","%d files queued":"%d 个文件加入到队列","File: %s, size: %d, max file size: %d":"文件: %s, 大小: %d, 最大文件大小: %d","Drag files here.":"把文件拖到这里。","Runtime ran out of available memory.":"运行时已消耗所有可用内存。","File count error.":"文件数量错误。","File extension error.":"文件扩展名错误。","Error: File too large:":"错误: 文件太大:","Add Files":"添加文件",List:"列表",Thumbnails:"缩略图","Upload Date":"上传日期",Actions:"操作","Select Photo":"选择照片","Remove Photo":"删除照片","Allow extensions":"允许上传的文件类型："});
 // gboat2 plupload plugin
 ;(function(window, document, plupload, o, $) {
 var uploaders = {};
 
	 function _(str) {
		 return plupload.translate(str) || str;
	 }
	 $.widget("ui.plupload", {
 
		 widgetEventPrefix: '',
 
		 contents_bak: '',
 
		 options: {
			 browse_button_hover: 'ui-state-hover',
			 browse_button_active: 'ui-state-active',
 
			 filters: {},
 
			 // widget specific
			 buttons: {
				 browse: true,
				 start: false,
				 stop: false
			 },
 
			 multiple_queues: true, // re-use widget by default
			 dragdrop : true,
			 autostart: true,
			 sortable: false,
			 rename: false,
			 files : null,
			 thumb : "false",
			 thumbType:"origin",
			 belongId : null, // 附件所归属的数据记录的主键（ID）值
			 attachConfig : {}, // 附件配置对象
			 uploadeds : null, // 已经上传完成的附件（初始化控件时就显示在已上传列表中）
			 url : baseAxios + '/attach/upload', // 上传附件的 URL
			 //deleteUrl : baseAxios + '/attach/deleteFile', // 删除附件的 URL
			 //downloadUrl : baseAxios + '/attach/download', // 下载附件的 URL
			 readonly : false // 是否为只读
		 },
 
		 FILE_COUNT_ERROR: -9001, // 文件数超过限制
 
		 _create: function() {
			 var id = this.element.attr('id');
			 if (!id) {
				 id = plupload.guid();
				 this.element.attr('id', id);
			 }
			 this.id = id;
 
			 if(this.options.attachConfig.configId == "0") { // “系统自动生成” 的附件
				 this.options.readonly = true;
			 }
 
			 // backup the elements initial state
			 this.contents_bak = this.element.html();
			// renderUI(this.element, this.options.attachConfig);
			 // container, just in case
			 this.container = $('.plupload_container', this.element).attr('id', id + '_container');
 
			 this.content = $('.plupload_content_container', this.element);
 
			 // list of files, may become sortable
			 this.filelist = $('.plupload_filelist_content', this.container)
				 .attr({
					 id: id + '_filelist',
					 unselectable: 'on'
				 });
 
			 // buttons
			 this.browse_button = $('.plupload_add', this.container).attr('id', id + '_browse');
			 this.start_button = $('.plupload_start', this.container).attr('id', id + '_start');
			 this.stop_button = $('.plupload_stop', this.container).attr('id', id + '_stop');
 
			 if ($.ui.button) {
				 this.browse_button.button({
					 disabled: true
				 });
				 if($.fn.tooltip) {
					 this.browse_button.tooltip({});
				 }
 
				 this.start_button.button({
					 disabled: true
				 });
 
				 this.stop_button.button({
				 });
			 }
 
			 // counter
			 this.counter = $('.plupload_count', this.element)
				 .attr({
					 id: id + '_count',
					 name: id + '_count'
				 });
 
			 // initialize uploader instance
			 this._initUploader();
		 },
 
		 _initUploader: function() {
			 var self = this
			 , id = this.id
			 , uploader
			 , options = {
				 container: id + '_buttons',
				 browse_button: self.browse_button.attr("id")
			 };
 
			 $('.plupload_buttons', this.element).attr('id', id + '_buttons');
 
			 if (self.options.dragdrop) { // 拖拽上传
				 //this.filelist.parent().attr('id', this.id + '_dropbox');
				 $('.plupload_filelist_footer', this.container).attr('id', this.id + '_dropbox');
				 options.drop_element = this.id + '_dropbox';
			 }
 
			 this.filelist.on('click', function(e) {
				 if ($(e.target).hasClass('mydeletefile')) { // 点击“删除”链接时，从队列中移除文件
					 self.removeFile($(e.target).closest('.plupload_file').attr('id'));
					 e.preventDefault();
				 }
			 });
 
			 var attachConfig = self.options.attachConfig;
			 if(attachConfig.fileFilters) { // 添加文件过滤器
				 self.options.filters = [ {
					 title : attachConfig.attachType,
					 extensions : attachConfig.fileFilters
				 }];
			 }
			 // 最多上传的文件数量
			 if(!self.options.max_file_count && attachConfig.maxFileCount && attachConfig.maxFileCount > 0) {
				 self.options.max_file_count = attachConfig.maxFileCount;
			 }
 
			 var match = window.navigator.userAgent.match(/msie\s+(\d+)/i);
			 if(match) { // IE 浏览器
				 self.resovleIEProblemFileName = "__G2__."; // 为了解决该组件在 IE 中无法使用的问题而临时添加的一个文件的文件名
				 if(attachConfig.fileFilters) {
 
					 // 如果设置了允许上传文件后缀名，则加上第一个后缀名，/* 否则在往组件中添加临时文件的时候会提示错误信息*/
					 self.resovleIEProblemFileName += attachConfig.fileFilters.split(",")[0];
				 }
			 }
 
			 // 如果用户没有指定 runtimes， 而且浏览器为 IE， 则将 runtimes 设置为 html4， 不然该组件得等好久才能在页面上显示出来
			 if (!self.options.runtimes && self.resovleIEProblemFileName) {
				 self.options.runtimes = "html5";
			 }
 
			 uploader = this.uploader = uploaders[id] = new plupload.Uploader($.extend(self.options, options));
 
			 // for backward compatibility
			 if (self.options.max_file_count) {
				 plupload.extend(uploader.getOption('filters'), {
					 max_file_count: self.options.max_file_count
				 });
			 }
 
			 plupload.addFileFilter('max_file_count', function(maxCount, file, cb) {
				 //if (maxCount <= this.files.length - (this.total.uploaded + this.total.failed)) {
				 if (this.files.length >= maxCount) {
					 this.trigger('Error', {
						 code : self.FILE_COUNT_ERROR,
						 message : _("File count error."),
						 file : file
					 });
					 cb(false);
				 } else {
					 cb(true);
				 }
			 });
 
			 uploader.bind('Error', function(up, err) {
				 var message, details = "";
 
				 message = '<strong>' + err.message + '</strong>';
 
				 switch (err.code) {
					 case plupload.FILE_EXTENSION_ERROR:
						 details = o.sprintf(_("File: %s"), err.file.name);
						 break;
 
					 case plupload.FILE_SIZE_ERROR:
						 details = o.sprintf(_("File: %s, size: %d, max file size: %d"), err.file.name,  plupload.formatSize(err.file.size), plupload.formatSize(plupload.parseSize(up.getOption('filters').max_file_size)));
						 break;
 
					 case plupload.FILE_DUPLICATE_ERROR:
						 details = o.sprintf(_("%s already present in the queue."), err.file.name);
						 break;
 
					 case self.FILE_COUNT_ERROR:
						 details = o.sprintf(_("Upload element accepts only %d file(s) at a time. Extra files were stripped."), up.getOption('filters').max_file_count || 0);
						 break;
 
					 case plupload.IMAGE_FORMAT_ERROR :
						 details = _("Image format either wrong or not supported.");
						 break;
 
					 case plupload.IMAGE_MEMORY_ERROR :
						 details = _("Runtime ran out of available memory.");
						 break;
 
					 /* // This needs a review
					 case plupload.IMAGE_DIMENSIONS_ERROR :
						 details = o.sprintf(_('Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.'), up.runtime, up.features.maxWidth, up.features.maxHeight);
						 break;  */
 
					 case plupload.HTTP_ERROR:
						 details = _("Upload URL might be wrong or doesn't exist.");
						 break;
				 }
 
				 message += " <i>" + details + "</i>";
 
				 self._trigger('error', null, { up: up, error: err } );
 
				 // do not show UI if no runtime can be initialized
				 if (err.code === plupload.INIT_ERROR) {
					 setTimeout(function() {
						 self.destroy();
					 }, 1);
				 } else {
					 self.notify('error', message);
				 }
			 });
 
 
			 uploader.bind('PostInit', function(up) {
 
				 if (!self.options.unique_names && self.options.rename) {
					 self._enableRenaming();
				 }
 
				 // 初始化已上传文件列表
				 var uploadeds = self.options.uploadeds;
 
				 if(uploadeds && uploadeds.length > 0) {
 
					 for (var i = 0; i < uploadeds.length; i++) {
 
						 var attach = uploadeds[i];
						 var file;
						 if(attach.originalName){
							  file = new plupload.File({
								  name : attach.originalName,
								  size : attach.fileSize
							  });
						 }else{
							  file = new plupload.File({
								  name : attach.attachName,
								  size : attach.fileSize
							  });
						 }
 
						 if(i==0) {
							 file.index_=0;
						 } else if(i==uploadeds.length-1) {
							 file.index_=1;
						 } else {
							 file.index_=2;
						 }
						 file.attach = attach;
						 file.loaded = attach.fileSize;
						 file.percent= 100;
						 file.status = plupload.DONE;
						 file.lastModifiedDate = Date.parse(attach.uploadDate);
						 file.uploadDate = attach.uploadDate;
						 file._addedByInit = true; // 标识该文件是在初始化附件上传控件时添加的（不触发 onComplete 事件）
 
						 self.getUploader().addFile(file);
						 self._handleFileStatus(file);
					 }
				 } else {
					 if (self.options.readonly) { // 只读
						 self.filelist.append('<li style="list-style-type:none;" class="plupload_file"><div class="no_attachments">未上传</div></li>');
					 } else if (self.resovleIEProblemFileName) { // 解决 IE 中默认情况下组件不能用的问题
						 // 不知道是什么原因， 在 IE 下，如果不先执行一次添加文件的操作，点击“添加文件”按钮没反应（事件不生效），所以此处先添加一个空文件
						 self.getUploader().addFile(new plupload.File({
							 name : self.resovleIEProblemFileName
						 }));
					 }
				 }
 
				 var filelistFooter = $('.plupload_filelist_footer', self.container);
				 if(self.options.readonly) { // 只读
					 filelistFooter.html('<div class="plupload_clearer">&nbsp;</div>');
				 } else {
					 filelistFooter.css("display", "block");
 
					 // all buttons are optional, so they can be disabled and hidden
					 if (!self.options.buttons.browse) {
						 self.disable();
						 self.browse_button.hide();
					 } else {
						 self.enable();
					 }
 
					 if (!self.options.buttons.start) {
						 self.start_button.button('disable').hide();
					 }
 
					 if (!self.options.buttons.stop) {
						 self.stop_button.button('disable').hide();
					 }
 
					 self.start_button.click(function(e) {
						 //if (!$(this).button('option', 'disabled')) {
							 self.start(); // 开始上传
						 //}
						 e.preventDefault();
					 });
 
					 self.stop_button.click(function(e) {
						 self.stop(); // 结束上传
						 e.preventDefault();
					 });
 
					 if (self.options.dragdrop && up.features.dragdrop) { // 可拖拽上传
						 // self.filelist.parent().addClass('plupload_dropbox');
						 filelistFooter.addClass('plupload_dropbox').attr("title", _("Drag files here."));
					 }
				 }
				 self._trigger('ready', null, { up: up });
 
			 });
 
			 // uploader internal events must run first
			 uploader.init();
 
			 uploader.bind('FileFiltered', function(up, file) {
				 // 如果文件名不是解决 IE 中无法使用问题的临时文件，则将文件信息添加到页面中的待上传列表中
				 // （为了解决 IE 中该组件不生效的问题，在完成初始化后会先执行一次添加文件的操作）
				 if(file.name != self.resovleIEProblemFileName) {
					 self._addFiles(file);
					 self._resovleIEStyle();
				 }
			 });
 
			 uploader.bind('FilesAdded', function(up, files) {
				 if (files.length == 1 && files[0].name === self.resovleIEProblemFileName) {
					 // 如果文件名为解决 IE 中无法使用问题的临时文件，则移除该文件后直接返回
					 // （为了解决 IE 中该组件不生效的问题，在完成初始化后会先执行一次添加文件的操作）
					 try{
						 self.uploader.removeFile(files[0]);
					 }catch(e){
						 // ignore: 在 IE 中可能会报 destory method not available 的异常
					 }
					 return;
				 }
 
				 var attachConfig = self.options.attachConfig; // 附件配置对象
				 for (var i = 0; i < files.length; i++) {
					 files[i].attachName = attachConfig.attachType; // 附件类型
					 console.log(" [FilesAdded] "+attachConfig.configId);
					 files[i].configId = attachConfig.configId; // 附件配置ID
					 console.log(" [FilesAdded] "+files[i].configId);
					 files[i].configTypeCode = attachConfig.configTypeCode; // 配置编码
				 }
 
				 self._trigger('selected', null, { up: up, files: files } );
 
				 // re-enable sortable
				 if (self.options.sortable && $.ui.sortable) { // 允许通过拖拽排序
					 self._enableSortingList();
				 }
 
				 maxCount = up.getOption('filters').max_file_count || 0;
				 if(maxCount > 0 && up.files.length >= maxCount) { // 文件数量达到最大值时，禁用“添加文件”按钮
					 self.disable(false);
				 }
 
				 self._trigger('updatelist', null, { filelist: self.filelist });
 
				 if (self.options.autostart) { // 自动上传
					 // set a little delay to make sure that QueueChanged triggered by the core has time to complete
					 setTimeout(function() {
						 self.start();
					 }, 10);
				 }
			 });
 
			 uploader.bind('FilesRemoved', function(up, files) {
				 if (files.length == 1 && files[0].name === self.resovleIEProblemFileName) {
					 // 如果文件名为解决 IE 中无法使用问题的临时文件，则什么也不做，直接返回
					 // （为了解决 IE 中该组件不生效的问题，在完成初始化后会先添加一个文件，再移除）
					 return;
				 }
 
				 // destroy sortable if enabled
				 if ($.ui.sortable && self.options.sortable) {
					 $('tbody', self.filelist).sortable('destroy');
				 }
 
				 $.each(files, function(i, file) {
					 var $this = $(this);
					 if(file.attach && file.attach.attachId) { // 如果已经上传至服务器，则将服务器的后台数据一并删除
						 //虚删除的话，不会这里发送删除请求
						 if(!self.options.virtualDel || self.options.virtualDel == "false") {
							 $.ajax(self.options.deleteUrl, {
								 type : "POST",
								 dataType : "json",
								 async: false,  //wj添加，删除附件ajax请求为同步请求，当附件删除后才回调removed方法
								 data : {
									 attachId : file.attach.attachId,
									 configId: file.attach.configId
								 },
								 /*
								 error : function(xhr, textStatus, errorThrown) {
									 up.trigger("Error", up, {
										 code : plupload.HTTP_ERROR,
										 file : file,
										 message : textStatus || errorThrown || '删除附件时，服务器内部发生错误！'
									 });
								 },
								  */
								 success : function(data, textStatus, xhr) {
									 if(data.success) {
										 var formFieldName = self.element.attr('formFieldName');
										 if(formFieldName && !file.attach.belongId) {
											 $(":hidden[value='" + file.attach.attachId + "']").each(function(){
												 if($(this).attr('name') == formFieldName){
													 $(this).remove();
												 }
											 });
											 //$(":hidden[name='" + formFieldName + "'][value='" + file.attach.attachId + "']").remove();
										 }
										 $('#' + file.id).toggle("highlight", function() {
											 $this.remove();
											 self.browse_button.removeClass("btn-disabled");
											 self._resovleIEStyle();
										 });
 
										 // 删除成功后，重新校验该字段
										 self.validate()
									 }/* else {
										 up.trigger("Error", up, {
											 code : plupload.HTTP_ERROR,
											 file : file,
											 message : data.message || '删除附件失败！'
										 });
									 }*/
								 }
							 });
						 } else {
							 var formFieldName = self.element.attr('formFieldName');
							 if(formFieldName) {
								 $(":hidden[value='" + file.attach.attachId + "']").each(function(){
									 if($(this).attr('name') == formFieldName){
										 $(this).remove();
									 }
								 });
								 //$(":hidden[name='" + formFieldName + "'][value='" + file.attach.attachId + "']").remove();
							 }
							 $('#' + file.id).toggle("highlight", function() {
								 $this.remove();
								 self.browse_button.removeClass("btn-disabled");
								 self._resovleIEStyle();
							 });
 
							 // 删除成功后，重新校验该字段
							 self.validate()
 
							 // 将附件的 ID 添加到隐藏表单域中
							 var virtualDelIds = self.options.virtualDelIds;
							 if(virtualDelIds) {
								 self.element.append('<input type="hidden" name="' + virtualDelIds + '" value="' + file.attach.attachId + '" />');
							 } else {
								 console.log("can not found virtualDelIds.");
							 }
						 }
					 } else {
						 $('#' + file.id).toggle("highlight", function() {
							 $this.remove();
							 self.browse_button.removeClass("btn-disabled");
							 self._resovleIEStyle();
						 });
					 }
				 });
 
				 if (up.files.length) { // re-initialize sortable
					 if (self.options.sortable && $.ui.sortable) {
						 self._enableSortingList();
					 }
				 }
 
				 self._trigger('updatelist', null, { filelist: self.filelist });
				 self._trigger('removed', null, { up: up, files: files } );
			 });
 
			 uploader.bind('QueueChanged StateChanged', function() {
				 if(!self.options.readonly) { // 非只读时，更新控件底部按钮状态
					 self._handleState();
				 }
			 });
 
			 uploader.bind('UploadFile', function(up, file) {
				 self._handleFileStatus(file);
			 });
 
			 uploader.bind('BeforeUpload', function(up, file) {
				 // 上传文件之前设置需要一并提交的参数
				 if (file.configId == undefined) {
					 let errorMessage = "您的操作过于频繁，请等待该文件上传结束后再进行操作。";
					 self.notify('error', errorMessage);
					 return;
				 }
				 up.settings.multipart_params = {
					 attachName : file.attachName, // 附件名称
					 configId : file.configId // 附件配置对象的 ID
				 };
				 console.log(" [BeforeUpload] "+file.configId);
				 if(self.options.belongId) { // 主表记录的 ID
					 up.settings.multipart_params.belongId = self.options.belongId;
				 }
			 });
 
			 uploader.bind('FileUploaded', function(up, file, result) {
				 // IE 返回的结果格式为 <PRE>{"attachId":"2c91e626479ec4bc01479f14a7a20003",... ...}</PRE>
				 var match = result.response.match(/^<PRE>([\s\S]+)<\/PRE>$/i);
				 if(match) { // 去掉返回结果外层的 <PRE></PRE> 标签
					 result.response = match[1];
				 }
				 var res = $.parseJSON(result.response);
				 var errorMessage = undefined; // 错误消息
				 if (result.status == 200 && (res.success || res.attachId)) { // 上传成功
					 file.status = plupload.DONE;
					 var attach = res.success ? res.data : res;
					 if(attach.belongId == "false"){
						 attach.belongId = null;
					 }
					 file.attach = attach;
					 var extraColumns = file.extraColumns;
					 if(typeof(extraColumns)==="function") {
						 $("#extra_"+file.id).html(extraColumns(file));
					 }
					 file.uploadDate = attach.uploadDate;
					 if(!file.size || file.size == "N/A") { // IE 下无法通过控件读取文件大小，使用后台返回的文件大小
						 file.size = attach.fileSize;
						 $('#' + file.id + ' .plupload_file_size').html("(" + plupload.formatSize(file.size) + ")");
					 }
 
					 // 将附件的 ID 添加到隐藏表单域中
					 var formFieldName = self.element.attr('formFieldName');
					 //if(formFieldName && !attach.belongId) {
					 self.element.append('<input type="hidden" name="' + formFieldName + '" value="' + attach.attachId + '" />');
					 //}
 
					 // 上传成功后，重新校验该字段
					 self.validate();
				 } else { // 上传失败
					 file.status = plupload.FAILED;
					 errorMessage = res.message; // 上传失败时的错误消息
					 /*
					 up.trigger("Error", up, {
						 code : plupload.HTTP_ERROR,
						 file : file,
						 message : res.message || '上传文件失败！'
					 });
					 */
				 }
 
				 // 隐藏进度条（不管是上传成功还是上传失败，都需要隐藏）
				 $('#' + file.id + ' .plupload_file_status').hide();
 
				 self._handleFileStatus(file, errorMessage);
				 self._trigger('uploaded', null, {
					 up: up,
					 file: file,
					 result: result
				 } );
			 });
 
			 uploader.bind('UploadProgress', function(up, file) {
				 self._handleFileStatus(file);
				 self._trigger('progress', null, { up: up, file: file } );
			 });
 
			 uploader.bind('UploadComplete', function(up, files) {
				 var trigerEvent = false; // 是否需要触发 complete 事件
				 $.each(files, function (index, file) {
					 if (!file._addedByInit) {
						 trigerEvent = true; // 如果有任意一个附件不是通过初始化该控件时添加的（后面手动上传的），则需要触发 complete 事件
						 return false;
					 }
				 });
				 if (trigerEvent) {
					 self._addFormFields();
					 self._trigger('complete', null, { up: up, files: files } );
				 }
			 });
		 },
 
		 _setOption: function(key, value) {
			 var self = this;
 
			 if (key == 'buttons' && typeof(value) == 'object') {
				 value = $.extend(self.options.buttons, value);
 
				 if (!value.browse) {
					 self.browse_button.button('disable').hide();
					 self.uploader.disableBrowse(true);
				 } else {
					 self.browse_button.button('enable').show();
					 self.uploader.disableBrowse(false);
				 }
 
				 if (!value.start) {
					 self.start_button.button('disable').hide();
				 } else {
					 self.start_button.button('enable').show();
				 }
 
				 if (!value.stop) {
					 self.stop_button.button('disable').hide();
				 } else {
					 self.start_button.button('enable').show();
				 }
			 }
 
			 self.uploader.settings[key] = value;
		 },
 
 
		 /**
		 Start upload. Triggers `start` event.
 
		 @method start
		 */
		 start: function() {
			 this.uploader.start();
			 this._trigger('start', null, { up: this.uploader });
		 },
 
 
		 /**
		 Stop upload. Triggers `stop` event.
 
		 @method stop
		 */
		 stop: function() {
			 this.uploader.stop();
			 this._trigger('stop', null, { up: this.uploader });
		 },
 
 
		 /**
		 Enable browse button.
 
		 @method enable
		 */
		 enable: function() {
			 this.options.readonly = false;
			 this.uploader.disableBrowse(false);
			 this.browse_button.button('enable').removeClass("btn-disabled");
			 this.element.find("div.plupload_file_action").show();
			 this._resovleIEStyle();
		 },
 
 
		 /**
		 Disable browse button.
		 @param readonly 是否同时设置为只读，如果值为 true， 除了会禁用“添加文件”按钮外，还会移除已上传文件后面的“删除”链接
		 @method disable
		 */
		 disable: function(readonly) {
			 if(readonly !== false) {
				 this.options.readonly = true;
				 this.element.find("div.plupload_file_action").hide();
			 }
 
			 this.uploader.disableBrowse(true);
			 this.browse_button.button('disable').addClass("btn-disabled");
			 this._resovleIEStyle();
		 },
 
 
		 /**
		 Retrieve file by it's unique id.
 
		 @method getFile
		 @param {String} id Unique id of the file
		 @return {plupload.File}
		 */
		 getFile: function(id) {
			 var file;
 
			 if (typeof id === 'number') {
				 file = this.uploader.files[id];
			 } else {
				 file = this.uploader.getFile(id);
			 }
			 return file;
		 },
 
		 /**
		 Return array of files currently in the queue.
 
		 @method getFiles
		 @return {Array} Array of files in the queue represented by plupload.File objects
		 */
		 getFiles: function() {
			 return this.uploader.files;
		 },
 
 
		 /**
		 Remove the file from the queue.
 
		 @method removeFile
		 @param {plupload.File|String} file File to remove, might be specified directly or by it's unique id
		 */
		 removeFile: function(file) {
			 if (plupload.typeOf(file) === 'string') {
				 file = this.getFile(file);
			 }
 
			 if(file.attach) {
				 var me = this;
				 if(window.bootbox) {
					 var dialog = bootbox.confirm("确定要删除附件 <span style='font-weight:bolder;color:#f00;white-space:normal;word-break:break-all;'>[" + file.name + "]</span> 吗？", function(result) {
						 if(result) {
							 dialog.hide();
							 try{
								 me.uploader.removeFile(file);
							 }catch(e){}
						 }
				   });
				 } else if(window.confirm("确定要删除附件 <span style='font-weight:bolder;color:#f00;white-space:normal;word-break:break-all;'>[" + file.name + "]</span> 吗？")){
					 me.uploader.removeFile(file);
				 }
			 } else {
				 this.uploader.removeFile(file);
			 }
		 },
 
 
		 /**
		 Clear the file queue.
 
		 @method clearQueue
		 */
		 clearQueue: function() {
			 this.uploader.splice();
		 },
 
 
		 /**
		 Retrieve internal plupload.Uploader object (usually not required).
 
		 @method getUploader
		 @return {plupload.Uploader}
		 */
		 getUploader: function() {
			 return this.uploader;
		 },
 
 
		 /**
		 Trigger refresh procedure, specifically browse_button re-measure and re-position operations.
		 Might get handy, when UI Widget is placed within the popup, that is constantly hidden and shown
		 again - without calling this method after each show operation, dialog trigger might get displaced
		 and disfunctional.
 
		 @method refresh
		 */
		 refresh: function() {
			 this.uploader.refresh();
		 },
 
 
		 /**
		 Display a message in notification area.
 
		 @method notify
		 @param {Enum} type Type of the message, either `error` or `info`
		 @param {String} message The text message to display.
		 */
		 notify: function(type, message) {
			 $(".ui-state-error").remove();
			 var popup = $(
				 '<div class="plupload_message">' +
					 '<span class="plupload_message_close ui-icon" title="'+_('Close')+'">×</span>' +
					 '<p>' + message + '</p>' +
				 '</div>'
			 );
			 popup.addClass('ui-state-' + (type === 'error' ? 'error' : 'highlight'))
				 .find('.plupload_message_close')
					 .click(function() {
						 popup.remove();
					 })
					 .end();
 
			 //$('.plupload_header', this.container).append(popup);
			 $('.plupload_content', this.container).prepend(popup);
		 },
 
		 /**
		  * 设置是否为必传
		  * @param {Boolean} value 值为 true 时，表示该附件为必传，反之则为非必传
		  */
		 required: function(value) {
			 var text = "", val = "false";
			 if (value === true || value === "true" || value === 1 || value === "checked") {
				 text = "*";
				 val = "true";
			 } else {
				  text = "";
			 }
			 this.element.find("span.required").text(text);
			 this.options.attachConfig.required = val;
			 this.option("attachConfig", this.options.attachConfig);
 
			 // 设置完成后调用校验插件的方法对该字段进行校验
			 this.validate();
		 },
 
		 /**
		  * 对该附件进行有效性校验
		  * @retrun 有效返回 true，反之则返回 false
		  */
		 validate: function () {
			 // 附件上传组件所在 form 的表单校验对象
			 var bv = this.element.closest("form").data("bootstrapValidator"),
				 validateResult = this.element.data("bv.result.attach");
			 if(bv && validateResult && validateResult != bv.STATUS_NOT_VALIDATED) {
				 bv.revalidateField(this.element);
			 }
		 },
 
		 /**
		  * Destroy the widget, the uploader, free associated resources and bring back original html.
		  * @method destroy
		 */
		 destroy: function() {
			 // destroy uploader instance
			 this.uploader.destroy();
 
			 // unbind all button events
			 $('.btn', this.element).unbind();
 
			 // destroy buttons
			 if ($.ui.button) {
				 $('.plupload_add, .plupload_start, .plupload_stop', this.container).button('destroy');
			 }
 
			 // destroy sortable behavior
			 if ($.ui.sortable && this.options.sortable) {
				 $('tbody', this.filelist).sortable('destroy');
			 }
 
			 // restore the elements initial state
			 this.element.empty().html(this.contents_bak);
			 this.contents_bak = '';
 
			 $.Widget.prototype.destroy.apply(this);
		 },
 
 
		 _handleState: function() {
			 var up = this.uploader,
				 filesPending = up.files.length - (up.total.uploaded + up.total.failed),
				 maxCount = up.getOption('filters').max_file_count || 0;
 
			 if (plupload.STARTED === up.state) {
				 this.stop_button.removeClass('plupload_hidden'); // 显示“停止上传”的按钮
				 this.start_button.button('disable'); // 禁用“开始”上传的按钮
 
				 if (!this.options.multiple_queues) { // 不允许多个进程同时上传时，禁用“添加文件”按钮
					 this.browse_button.button('disable');
					 up.disableBrowse();
				 }
			 } else if (plupload.STOPPED === up.state) {
				 this.stop_button.addClass('plupload_hidden'); // 禁用“停止上传”按钮
 
				 if (filesPending) {
					 this.start_button.button('enable');
				 } else {
					 //this.start_button.button('disable');
					 this.start_button.addClass('plupload_hidden');
				 }
 
				 // if max_file_count defined, only that many files can be queued at once
				 //if (this.options.multiple_queues && maxCount && maxCount > filesPending) {
				 if (this.options.multiple_queues && maxCount && maxCount > up.files.length) {
					 this.browse_button.button('enable');
					 up.disableBrowse(false);
				 }
			 }
 
			 /*
			 if (up.total.queued === 0) {
				 $('.ui-button-text', this.browse_button).html(_('Add Files'));
			 } else {
				 $('.ui-button-text', this.browse_button).html(o.sprintf(_('%d files queued'), up.total.queued));
			 }
			 */
			 up.refresh();
		 },
 
 
		 _handleFileStatus: function(file, errorMessage) {
			 var $file = $('#' + file.id), actionClass, downloadUrl;
			 // since this method might be called asynchronously, file row might not yet be rendered
			 if (!$file.length) {
				 return;
			 }
 
			 switch (file.status) {
				 case plupload.DONE: // 上传成功
					 actionClass = 'plupload_done';
					 downloadUrl = this._getDownloadUrl(file);
					 $file
						 .find('.plupload_file_upload_date').html(file.uploadDate).end()
						 .find(".plupload_file_download").attr("href", (downloadUrl || "javascript:void(0);"))
					 $file.find(".uploadThumbImg").attr("src", (downloadUrl || "javascript:void(0);")).mouseover(function(){
						   $(this).css("cursor","pointer");
					 });
					 break;
 
				 case plupload.FAILED: // 上传失败
					 actionClass = 'ui-state-error plupload_failed';
					 break;
 
				 case plupload.QUEUED: // 待上传
					 actionClass = 'plupload_delete';
					 break;
 
				 case plupload.UPLOADING: // 正在上传
					 actionClass = 'ui-state-highlight plupload_uploading';
 
					 // scroll uploading file into the view if its bottom boundary is out of it
					 var scroller = $('.plupload_scroll', this.container),
						 scrollTop = scroller.scrollTop(),
						 scrollerHeight = scroller.height(),
						 rowOffset = $file.position().top + $file.height();
 
					 if (scrollerHeight < rowOffset) {
						 scroller.scrollTop(scrollTop + rowOffset - scrollerHeight);
					 }
 
					 // Set file specific progress
					 var fileStatus = $file.find('.plupload_file_status');
					 fileStatus.find(".plupload_file_percent").html(file.percent + '%');
					 if ($.ui.progressbar) { // 更新进度条
						 fileStatus.find(".plupload_file_progress").progressbar('value', file.percent);
					 }
					 break;
			 }
			 actionClass += ' plupload_file';
			 if(actionClass=="ui-state-error plupload_failed plupload_file") {
				 this.notify('error',errorMessage);
				 this.removeFile(file);
			 } else {
				 $file.attr('class', actionClass).attr("title", errorMessage || "");
			 }
 
		 },
 
		 _getDownloadUrl : function(file) {
			 var ext = o.Mime.getFileExtension(file.name) || 'none';
			 if(file.attach) {
				 var downloadUrl = file.attach.downloadUrl;
				 if((/^https?:\/\/.*$/i).test(downloadUrl)) { // 外链地址（http://xxx 或 https://xxx）
					 return downloadUrl;
				 }
 
				 /*var autoOpen = file.autoOpen;
				 if(autoOpen == "true") {
					 if((/^jpg|jpeg|gif|png|bmp$/i).test(ext)) { // 图片文件直接打开
						 return downloadUrl;
					 }
				 }*/
 
				 if(this.options.downloadUrl) { // 其他文件通过下载链接进行下载（方便进行附件的权限控制）
					 var url = this.options.downloadUrl;
					 return url + (url.indexOf('?') > 0 ? '&' : '?') + 'attachId=' + file.attach.attachId;
				 }
			 }
			 return '';
		 },
		 _getThumbUrl : function(file,thumbType) {
			 var ext = o.Mime.getFileExtension(file.name) || 'none';
			 if(file.attach) {
				 var downloadUrl = file.attach.downloadUrl;
				 if((/^https?:\/\/.*$/i).test(downloadUrl)) { // 外链地址（http://xxx 或 https://xxx）
					 return downloadUrl;
				 }
				 if((/^jpg|jpeg|gif|png|bmp$/i).test(ext)) { // 图片文件直接打开
					 if(this.options.thumbType === "nginx"){
						 var index = downloadUrl.lastIndexOf("/");
						 return downloadUrl.substring(0,index)+"/thumb_ng"+downloadUrl.substring(index,downloadUrl.length);
					 }else if(this.options.thumbType === "file"){
						 var index = downloadUrl.lastIndexOf(".");
						 return downloadUrl.substring(0,index)+"_thumb_ng"+downloadUrl.substring(index,downloadUrl.length);
					 }else{
						  return downloadUrl;
					 }
 
 
				 }
			 }
			 return '';
		 },
		 _isFileImg:function(file){
			  if(file.attach) {
				  var downloadUrl = file.attach.downloadUrl;
				  if((/^jpg|jpeg|gif|png|bmp$/i).test(o.Mime.getFileExtension(downloadUrl))) { // 图片文件直接打开
					  return true;
				  }
			  }
			  return false;
		 },
 
		 _addFiles: function(files) {
			 var self = this, file_html='', html = '';
			 var str=files.name;
			 var thumbType = this.options.thumbType;
			 var autostart = this.options.autostart;
			 if(!autostart){
				 this.start_button.removeClass('plupload_hidden'); // 隐藏“开始上传”的按钮
			 }
			 //var xx=str.replace(/(.{30})/g,'$1<br>');
			 file_html += '<tr id="%id%" style="height:40px" class="plupload_file plupload_file_loading plupload_delete">' +
				 '<td style="width:60%"><div class="plupload_file_name" title="%name%">' +
					 '<span class="plupload_file_name_wrapper"><a %downloadUrl% target="_blank" class="plupload_file_download">'+
				   str	+
					'</a></span>' +
				 '</div> </td>'  +
				 '<td style="width:20%"><div class="plupload_file_size">%size%</div></td>' +
				 '<td><div class="plupload_file_status">' +
					 '<div class="plupload_file_progress"></div>' +
					 '<div class="plupload_file_percent"></div>' +
				 '</div></td>' +
				 '<td style="width:20%"><div class="plupload_file_action">';
 
			 // 新增isDeleted判断，进行控制文件是否删除.非只读且isDeleted为1时，显示删除文件按钮
			 var btn_delFileFlag = false;
			 if (!this.options.readonly) {
				 btn_delFileFlag = true;
				 if(typeof(files.attach) != "undefined" && "0" == files.attach.isDeleted){
					 btn_delFileFlag = false;
				 }
			 }
			 if(btn_delFileFlag){
				 console.log('<i class="mydeletefile el-icon-delete"/>');
				 file_html += '<i class="mydeletefile el-icon-delete"/>';
			 }
 
			 file_html += '<span id="extra_%id%" style="padding-left:30px;">%file_handle%</span>';
			 var autoOpen = this.options.autoOpen;
			 var extraColumns;
			 if(this.options.extraColumns){
				 extraColumns = this.options.extraColumns;
			 }
			 file_html += '</div><div class="plupload_file_fields"> </div></td><td>';
			 //新增列：上传时间，上传人/上传平台,用于附件组中。通过mark_attach_group标签进行判断是否为附件组
			 if(typeof($("#mark_attach_group").val()) != "undefined" && typeof(files.attach) != "undefined"){
				 file_html += '<span style="text-align: center;width: 100px;display: block;">'+files.attach.uploadDate+'</span></td><td>';
				 file_html += '<span style="text-align: center;width: 110px;display: block;">'+files.attach.uploaderName+'</span></td><td>';
			 }
 
			 var extion=str.substr(str.lastIndexOf(".")+1);
			 var arr=new Array("jpg","jpeg","png","bmp","JPG","PNG");
			 var tagFlag=false;
			 for(var i=0;i<arr.length;i++) {
				 if(extion==arr[i]) {
					 tagFlag=true;
					 break;
				 }
			 }
 
			 if(this.options.thumb === "true" || this.options.thumb === true){
				 if(tagFlag) {
					 file_html +=  '<img width=80 height=80 class="uploadThumbImg" onclick="_plUploadShowImg(this)" src="%imgUrl%" />';
				 }
			 }
			 file_html +='</td></tr>';
			 if (plupload.typeOf(files) !== 'array') {
				 files = [files];
			 }
			 var fileStatus = [];
			 $.each(files, function(i, file) {
				 fileStatus.push({
 
					 selector: "#" + file.id + " .plupload_file_status",
					 percent : file.percent,
				 });
				 if(!self._isFileImg(file)){
					 file_html = file_html.replace('<td><img width=80 height=80 src="%imgUrl%" /></td>','');
				 }
				 html += file_html.replace(/%(\w+)%/g, function($0, $1) {
					 switch ($1) {
						 case 'size':
							 var filesize = plupload.formatSize(file.size);
							 return (filesize == "N/A" ? "" : "(" + filesize + ")");
						 case 'downloadUrl':
							 file.autoOpen = autoOpen;
							 var downloadUrl = self._getDownloadUrl(file);
							 return 'href="' + (downloadUrl ? downloadUrl : 'javascript:void(0);') + '"';
						 case 'imgUrl':
							 var downloadUrl = self._getThumbUrl(file,thumbType);
							 return downloadUrl;
						 case 'file_handle':
							 file.extraColumns = extraColumns;
							 if(extraColumns && file.attach && typeof(extraColumns)==="function"){
								 try{
									 return extraColumns(file);
								 }catch(e){
									 console.log(e);
								 }
							 }else{
								 return '';
							 }
						 default:
							 return file[$1] || '';
					 }
				 });
			 });
			 self.filelist.append(html);
			 $('.plupload_file_fields', this.filelist).html('');
			 $.each(fileStatus, function(i, item) {
				 var p = $(item.selector);
				 if (item.percent < 100) { // 未上传完成，展现进度条
					 p.find(".plupload_file_percent").html(item.percent + '%');
					 if ($.ui.progressbar) {
						 p.find(".plupload_file_progress").progressbar({
							 value : item.percent
						 });
					 } else {
						 p.find(".plupload_file_progress").hide();
					 }
				 } else { // 已上传完成，隐藏上传进度
					 p.hide();
				 }
			 });
		 },
 
		 _addFormFields: function() {
			 var self = this;
 
			 // re-add from fresh
			 $('.plupload_file_fields', this.filelist).html('');
 
			 plupload.each(this.uploader.files, function(file, count) {
				 var fields = ''
				 , id = self.id + '_' + count
				 ;
 
				 if (file.target_name) {
					 fields += '<input type="hidden" name="' + id + '_tmpname" value="'+plupload.xmlEncode(file.target_name)+'" />';
				 }
				 fields += '<input type="hidden" name="' + id + '_name" value="'+plupload.xmlEncode(file.name)+'" />';
				 fields += '<input type="hidden" name="' + id + '_status" value="' + (file.status === plupload.DONE ? 'done' : 'failed') + '" />';
 
				 $('#' + file.id).find('.plupload_file_fields').html(fields);
			 });
 
			 this.counter.val(this.uploader.files.length);
		 },
 
		 _enableRenaming: function() {
			 var self = this;
 
			 this.filelist.dblclick(function(e) {
				 var nameSpan = $(e.target), nameInput, file, parts, name, ext = "";
 
				 if (!nameSpan.hasClass('plupload_file_name_wrapper')) {
					 return;
				 }
 
				 // Get file name and split out name and extension
				 file = self.uploader.getFile(nameSpan.closest('.plupload_file')[0].id);
				 name = file.name;
				 parts = /^(.+)(\.[^.]+)$/.exec(name);
				 if (parts) {
					 name = parts[1];
					 ext = parts[2];
				 }
 
				 // Display input element
				 nameInput = $('<input class="plupload_file_rename" type="text" />').width(nameSpan.width()).insertAfter(nameSpan.hide());
				 nameInput.val(name).blur(function() {
					 nameSpan.show().parent().scrollLeft(0).end().next().remove();
				 }).keydown(function(e) {
					 var nameInput = $(this);
 
					 if ($.inArray(e.keyCode, [13, 27]) !== -1) {
						 e.preventDefault();
 
						 // Rename file and glue extension back on
						 if (e.keyCode === 13) {
							 file.name = nameInput.val() + ext;
							 nameSpan.html(file.name);
						 }
						 nameInput.blur();
					 }
				 })[0].focus();
			 });
		 },
 
		 _enableSortingList: function() {
			 var self = this;
 
			 if ($('.plupload_file', this.filelist).length < 2) {
				 return;
			 }
 
			 // destroy sortable if enabled
			 $('tbody', this.filelist).sortable('destroy');
 
			 // enable
			 this.filelist.sortable({
				 items: '.plupload_delete',
				 cancel: 'object, .plupload_clearer',
				 stop: function() {
					 var files = [];
 
					 $.each($(this).sortable('toArray'), function(i, id) {
						 files[files.length] = self.uploader.getFile(id);
					 });
 
					 files.unshift(files.length);
					 files.unshift(0);
 
					 // re-populate files array
					 Array.prototype.splice.apply(self.uploader.files, files);
				 }
			 });
		 },
 
		 /**
		  * 解决 IE 中的样式问题
		  */
		 _resovleIEStyle: function() {
			 if(!this.resovleIEProblemFileName) { // 如果不是低版本的IE，则直接返回
				 return;
			 }
 
			 // 低版本的 IE 中鼠标移到“添加文件”按钮上时没有变成手形的问题
			 var isDisabled = this.browse_button.button("option", "disabled");
			 this.browse_button.parent().find(":file").css("cursor", isDisabled ? "default" : "pointer");
		 }
	 });
 } (window, document, plupload, mOxie, jQuery));
 /**
  * 修改上传附件中图片的显示
  * 相关方法：_plUploadShowImg，_plUploadBootbox,_plUploadChangeImg
  */
 //该模块中附件的所有图片路径
 var imgs;
 //当前图片的位置
 var currentImgNum;
 //图片数量
 var count;
 /**
  * 初始化图片路径的数组及当前图片位置，并显示图片
  * @param obj
  */
 function _plUploadShowImg(obj){
	 var index = 0;
	 imgs = new Array();
	 //获取当前附件中的中图片
	 $(obj).parents("table").each(function(){
		 if(typeof $(this).attr("id") != "undefined"){
			 // 防止删除后的图片存在[删除后的图片是隐藏的],并去除非图片
			 $(this).find(".plupload_done").each(function(){
				 if($(this).css("display") != "none"){
					 var url = $(this).find(".uploadThumbImg").attr('src');
					 if(typeof url != "undefined"){
						 imgs[index++] = url;
					 }
				 }
			  });
		 }
	 });
	 //判断是第几张图片
	 count = imgs.length;
	 for(var i = 0;i < count;i++){
		 if(obj.src.indexOf(imgs[i]) != -1){
			 currentImgNum = i;
		 }
	 }
	 _plUploadBootbox();
 }
 /**
  * 调用bootbox显示图片
  * class="bootbox-close-button"，bootbox采用bootbox-close-button控制页面的关闭
  */
 function _plUploadBootbox(){
	 if (window.bootbox) {
		 bootbox.dialog({
			 title : "查看图片",
			 className : "upload-img-show-modal",
			 message : '<div style="text-align:center"><img class="bootbox-close-button" style="max-width:800px;max-height:450px" src="'
					 + imgs[currentImgNum] + '" onclick="_plUploadChangeImg()" onmouseover="this.style.cursor=\'pointer\'"/></div>'
					 +'<div style="text-align:right;margin-top:5px;margin-bottom:-5px;"><button type="button" id="cboxPrevious" class="bootbox-close-button" onclick="_plUploadChangeImg(\'previous\')"><i class="icon-arrow-left"></i></button>'
					 +'<button type="button" id="cboxNext" class="bootbox-close-button" onclick="_plUploadChangeImg(\'next\')"><i class="icon-arrow-right"></i></button>'
					 +'<span class="cboxNum" style="font-size:14px">&nbsp;'+(currentImgNum+1)+'</span><span> of '+count+'</span></div>'
		 });
	  } else {
		  alert("请先加载bootbox组件");
	  }
 }
 /**
  * 更换图片,本质上为计算当前图片位置
  * @param direction
  */
 function _plUploadChangeImg(direction){
	  if(direction == "previous"){
		  currentImgNum--;
	  }else{
		  currentImgNum++;
	  }
	  if(currentImgNum <　0){
		  currentImgNum=imgs.length-1;
	  }
	  if(currentImgNum >= imgs.length){
		  currentImgNum=0;
	  }
	  _plUploadBootbox();
 }
 