/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(u){u.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"tagasi",suffixFromNow:"pärast",seconds:function(u,n){return n<0?"vähem kui minuti aja":"vähem kui minut aega"},minute:function(u,n){return n<0?"umbes minuti aja":"umbes minut aega"},minutes:function(u,n){return n<0?"%d minuti":"%d minutit"},hour:function(u,n){return n<0?"umbes tunni aja":"umbes tund aega"},hours:function(u,n){return n<0?"%d tunni":"%d tundi"},day:function(u,n){return n<0?"umbes päeva":"umbes päev"},days:"%d päeva",month:function(u,n){return n<0?"umbes kuu aja":"umbes kuu aega"},months:function(u,n){return n<0?"%d kuu":"%d kuud"},year:function(u,n){return n<0?"umbes aasta aja":"umbes aasta aega"},years:function(u,n){return n<0?"%d aasta":"%d aastat"}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.et.js.map
