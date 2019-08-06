/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
!function(t,e){var a=e.define,r=e.require,o="function"==typeof a&&a.amd,i=!o&&"undefined"!=typeof exports;if(!o&&!a){var n={};a=e.define=function(t,e,a){"function"==typeof a?(n[t]={factory:a,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var a=e.split("/"),r=t.split("/");a.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?a.pop():a.push(r[o]));return a.join("/")}(e,t)}),resolved:!1,exports:null},r(t)):n[t]={factory:null,resolved:!0,exports:a}},r=e.require=function(t){if(!n.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var a=n[t];if(!a.resolved){var o=[];a.deps.forEach(function(t){o.push(r(t))}),a.exports=a.factory.apply(e,o)||null,a.resolved=!0}return a.exports}}if(!a)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,e){t("skylark-jquery-timeago/timeago",["skylark-jquery"],function(t){t.timeago=function(e){return e instanceof Date?o(e):o("string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var a=this.settings.strings,r=a.prefixAgo,o=a.suffixAgo;if(this.settings.allowFuture&&e<0&&(r=a.prefixFromNow,o=a.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var i=Math.abs(e)/1e3,n=i/60,s=n/60,u=s/24,l=u/365;function m(r,o){var i=t.isFunction(r)?r(o,e):r,n=a.numbers&&a.numbers[o]||o;return i.replace(/%d/i,n)}var d=i<45&&m(a.seconds,Math.round(i))||i<90&&m(a.minute,1)||n<45&&m(a.minutes,Math.round(n))||n<90&&m(a.hour,1)||s<24&&m(a.hours,Math.round(s))||s<42&&m(a.day,1)||u<30&&m(a.days,Math.round(u))||u<45&&m(a.month,1)||u<365&&m(a.months,Math.round(u/30))||l<1.5&&m(a.year,1)||m(a.years,Math.round(l)),f=a.wordSeparator||"";return void 0===a.wordSeparator&&(f=" "),t.trim([r,d,o].join(f))},parse:function(e){var a=t.trim(e);return a=(a=(a=(a=(a=a.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(a){var r=e.isTime(a)?t(a).attr("datetime"):t(a).attr("title");return e.parse(r)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var a={init:function(){a.dispose.call(this);var o=t.proxy(r,this);o();var i=e.settings;i.refreshMillis>0&&(this._timeagoInterval=setInterval(o,i.refreshMillis))},update:function(a){var o=a instanceof Date?a:e.parse(a);t(this).data("timeago",{datetime:o}),e.settings.localeTitle&&t(this).attr("title",o.toLocaleString()),r.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:e.parse(e.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),r.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function r(){var a=e.settings;if(a.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var r=function(a){if(!(a=t(a)).data("timeago")){a.data("timeago",{datetime:e.datetime(a)});var r=t.trim(a.text());e.settings.localeTitle?a.attr("title",a.data("timeago").datetime.toLocaleString()):!(r.length>0)||e.isTime(a)&&a.attr("title")||a.attr("title",r)}return a.data("timeago")}(this);return isNaN(r.datetime)||(0===a.cutoff||Math.abs(i(r.datetime))<a.cutoff?t(this).text(o(r.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function o(t){return e.inWords(i(t))}function i(t){return(new Date).getTime()-t.getTime()}t.fn.timeago=function(t,e){var r=t?a[t]:a.init;if(!r)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){r.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),t("skylark-jquery-timeago/locales/en",["skylark-jquery","../timeago"],function(t){t.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}}),t("skylark-jquery-timeago/locales/ja",["skylark-jquery","../timeago"],function(t){t.timeago.settings.strings={prefixAgo:"",prefixFromNow:"今から",suffixAgo:"前",suffixFromNow:"後",seconds:"1 分未満",minute:"約 1 分",minutes:"%d 分",hour:"約 1 時間",hours:"約 %d 時間",day:"約 1 日",days:"約 %d 日",month:"約 1 ヶ月",months:"約 %d ヶ月",year:"約 1 年",years:"約 %d 年",wordSeparator:""}}),t("skylark-jquery-timeago/locales/zh-CN",["skylark-jquery","../timeago"],function(t){t.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"之前",suffixFromNow:"之后",seconds:"不到1分钟",minute:"大约1分钟",minutes:"%d分钟",hour:"大约1小时",hours:"大约%d小时",day:"1天",days:"%d天",month:"大约1个月",months:"%d月",year:"大约1年",years:"%d年",numbers:[],wordSeparator:""}}),t("skylark-jquery-timeago/main",["./timeago","./locales/en","./locales/ja","./locales/zh-CN"],function(){}),t("skylark-jquery-timeago",["skylark-jquery-timeago/main"],function(t){return t})}(a),!o){var s=r("skylark-langx/skylark");i?module.exports=s:e.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-jquery-timeago.js.map
