// This file is part of meshoptimizer library and is distributed under the terms of MIT License.
// Copyright (C) 2016-2019, by Arseny Kapoulkine (arseny.kapoulkine@gmail.com)
var MeshoptDecoder = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(MeshoptDecoder) {
  MeshoptDecoder = MeshoptDecoder || {};

var b;b||(b=typeof MeshoptDecoder !== 'undefined' ? MeshoptDecoder : {});var h={},k;for(k in b)b.hasOwnProperty(k)&&(h[k]=b[k]);b.arguments=[];b.thisProgram="./this.program";b.quit=function(a,c){throw c;};b.preRun=[];b.postRun=[];var l=!1,m=!1,n=!1,p=!1;l="object"===typeof window;m="function"===typeof importScripts;n="object"===typeof process&&"function"===typeof require&&!l&&!m;p=!l&&!n&&!m;var q="";
if(n){q=__dirname+"/";var r,t;b.read=function(a,c){var d=u(a);d||(r||(r=require("fs")),t||(t=require("path")),a=t.normalize(a),d=r.readFileSync(a));return c?d:d.toString()};b.readBinary=function(a){a=b.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(b.thisProgram=process.argv[1].replace(/\\/g,"/"));b.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",w);b.quit=function(a){process.exit(a)};
b.inspect=function(){return"[Emscripten Module object]"}}else if(p)"undefined"!=typeof read&&(b.read=function(a){var c=u(a);return c?x(c):read(a)}),b.readBinary=function(a){var c;if(c=u(a))return c;if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));c=read(a,"binary");assert("object"===typeof c);return c},"undefined"!=typeof scriptArgs?b.arguments=scriptArgs:"undefined"!=typeof arguments&&(b.arguments=arguments),"function"===typeof quit&&(b.quit=function(a){quit(a)});else if(l||
m)m?q=self.location.href:document.currentScript&&(q=document.currentScript.src),_scriptDir&&(q=_scriptDir),0!==q.indexOf("blob:")?q=q.substr(0,q.lastIndexOf("/")+1):q="",b.read=function(a){try{var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText}catch(d){if(a=u(a))return x(a);throw d;}},m&&(b.readBinary=function(a){try{var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}catch(d){if(a=u(a))return a;throw d;
}}),b.readAsync=function(a,c,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){if(200==e.status||0==e.status&&e.response)c(e.response);else{var f=u(a);f?c(f.buffer):d()}};e.onerror=d;e.send(null)},b.setWindowTitle=function(a){document.title=a};
var y=b.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),z=b.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||y);for(k in h)h.hasOwnProperty(k)&&(b[k]=h[k]);h=void 0;var A={"f64-rem":function(a,c){return a%c},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,C=!1;function assert(a,c){a||w("Assertion failed: "+c)}
"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function D(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,E,F,G;function H(){b.HEAP8=new Int8Array(buffer);b.HEAP16=new Int16Array(buffer);b.HEAP32=F=new Int32Array(buffer);b.HEAPU8=E=new Uint8Array(buffer);b.HEAPU16=new Uint16Array(buffer);b.HEAPU32=G=new Uint32Array(buffer);b.HEAPF32=new Float32Array(buffer);b.HEAPF64=new Float64Array(buffer)}var I=b.TOTAL_MEMORY||65536;
65536>I&&z("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+I+"! (TOTAL_STACK=65536)");b.buffer?buffer=b.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(B=new WebAssembly.Memory({initial:I/65536}),buffer=B.buffer):buffer=new ArrayBuffer(I),b.buffer=buffer);H();F[548]=67984;function J(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.m;"number"===typeof d?void 0===c.l?b.dynCall_v(d):b.dynCall_vi(d,c.l):d(void 0===c.l?null:c.l)}}}
var K=[],L=[],M=[],N=[],O=!1;function aa(){var a=b.preRun.shift();K.unshift(a)}var P=0,Q=null,R=null;b.preloadedImages={};b.preloadedAudios={};var S="data:application/octet-stream;base64,";function T(a){return String.prototype.startsWith?a.startsWith(S):0===a.indexOf(S)}var U="data:application/octet-stream;base64,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";if(!T(U)){var W=U;U=b.locateFile?b.locateFile(W,q):q+W}
function X(){try{if(b.wasmBinary)return new Uint8Array(b.wasmBinary);var a=u(U);if(a)return a;if(b.readBinary)return b.readBinary(U);throw"both async and sync fetching of the wasm failed";}catch(c){w(c)}}function ba(){return b.wasmBinary||!l&&!m||"function"!==typeof fetch?new Promise(function(a){a(X())}):fetch(U,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+U+"'";return a.arrayBuffer()}).catch(function(){return X()})}
function ca(a){function c(a){b.asm=a.exports;P--;b.monitorRunDependencies&&b.monitorRunDependencies(P);0==P&&(null!==Q&&(clearInterval(Q),Q=null),R&&(a=R,R=null,a()))}function d(a){c(a.instance)}function e(a){ba().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);w(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:A};P++;b.monitorRunDependencies&&b.monitorRunDependencies(P);if(b.instantiateWasm)try{return b.instantiateWasm(f,
c)}catch(g){return z("Module.instantiateWasm callback failed with error: "+g),!1}b.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||T(U)||"function"!==typeof fetch?e(d):WebAssembly.instantiateStreaming(fetch(U,{credentials:"same-origin"}),f).then(d,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");e(d)});return{}}
b.asm=function(a,c){c.memory=B;c.table=new WebAssembly.Table({initial:0,maximum:0,element:"anyfunc"});c.__memory_base=1024;c.__table_base=0;return ca(c)};var da=!1;function x(a){for(var c=[],d=0;d<a.length;d++){var e=a[d];255<e&&(da&&assert(!1,"Character code "+e+" ("+String.fromCharCode(e)+")  at offset "+d+" not in 0x00-0xFF."),e&=255);c.push(String.fromCharCode(e))}return c.join("")}
var fa="function"===typeof atob?atob:function(a){var c="",d=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));e=e<<2|f>>4;
f=(f&15)<<4|g>>2;var ea=(g&3)<<6|V;c+=String.fromCharCode(e);64!==g&&(c+=String.fromCharCode(f));64!==V&&(c+=String.fromCharCode(ea))}while(d<a.length);return c};
function u(a){if(T(a)){a=a.slice(S.length);if("boolean"===typeof n&&n){try{var c=Buffer.from(a,"base64")}catch(g){c=new Buffer(a,"base64")}var d=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}else try{var e=fa(a),f=new Uint8Array(e.length);for(c=0;c<e.length;++c)f[c]=e.charCodeAt(c);d=f}catch(g){throw Error("Converting base64 string to bytes failed.");}return d}}
var Y=b.asm({},{b:function(a){b.___errno_location&&(F[b.___errno_location()>>2]=a);return a},f:function(){return I},e:function(a,c,d){E.set(E.subarray(c,c+d),a)},d:function(a){if(2147418112<a)return!1;for(var c=Math.max(I,16777216);c<a;)536870912>=c?c=D(2*c):c=Math.min(D((3*c+2147483648)/4),2147418112);var d=D(c);var e=b.buffer.byteLength;try{var f=-1!==B.grow((d-e)/65536)?b.buffer=B.buffer:null}catch(g){f=null}if(!f||f.byteLength!=c)return!1;b.buffer=buffer=f;H();I=c;G[548]=a;return!0},c:function(a){w("Cannot enlarge memory arrays to size "+
a+" bytes. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+I+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},a:2192},buffer);b.asm=Y;b.___errno_location=function(){return b.asm.g.apply(null,arguments)};b._meshopt_decodeIndexBuffer=function(){return b.asm.h.apply(null,arguments)};
b._meshopt_decodeVertexBuffer=function(){return b.asm.i.apply(null,arguments)};b._sbrk=function(){return b.asm.j.apply(null,arguments)};b.asm=Y;b.then=function(a){if(b.calledRun)a(b);else{var c=b.onRuntimeInitialized;b.onRuntimeInitialized=function(){c&&c();a(b)}}return b};function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;R=function ha(){b.calledRun||Z();b.calledRun||(R=ha)};
function Z(){function a(){if(!b.calledRun&&(b.calledRun=!0,!C)){O||(O=!0,J(L));J(M);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();N.unshift(a)}J(N)}}if(!(0<P)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)aa();J(K);0<P||b.calledRun||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},1)):
a())}}b.run=Z;function w(a){if(b.onAbort)b.onAbort(a);void 0!==a?(y(a),z(a),a=JSON.stringify(a)):a="";C=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}b.abort=w;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();b.noExitRuntime=!0;Z();
b.decodeVertexBuffer=function(a,c,d,e){var f=b._sbrk(c*d),g=b._sbrk(e.length);b.HEAPU8.set(e,g);e=b._meshopt_decodeVertexBuffer(f,c,d,g,e.length);a.set(b.HEAPU8.subarray(f,f+c*d),0);b._sbrk(f-b._sbrk(0));if(0!=e)throw Error("Malformed vertex buffer data");};
b.decodeIndexBuffer=function(a,c,d,e){var f=b._sbrk(c*d),g=b._sbrk(e.length);b.HEAPU8.set(e,g);e=b._meshopt_decodeIndexBuffer(f,c,d,g,e.length);a.set(b.HEAPU8.subarray(f,f+c*d),0);b._sbrk(f-b._sbrk(0));if(0!=e)throw Error("Malformed index buffer data");};


  return MeshoptDecoder;
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = MeshoptDecoder;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return MeshoptDecoder; });
    else if (typeof exports === 'object')
      exports["MeshoptDecoder"] = MeshoptDecoder;
    