/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){!function(){function o(n,o,i){return i[o>=0?0:2===i.length||n<5?1:2]}n.timeago.settings.strings={prefixAgo:"pred",prefixFromNow:"o",suffixAgo:null,suffixFromNow:null,seconds:function(n,i){return o(n,i,["menej ako minútou","menej ako minútu"])},minute:function(n,i){return o(n,i,["minútou","minútu"])},minutes:function(n,i){return o(n,i,["%d minútami","%d minúty","%d minút"])},hour:function(n,i){return o(n,i,["hodinou","hodinu"])},hours:function(n,i){return o(n,i,["%d hodinami","%d hodiny","%d hodín"])},day:function(n,i){return o(n,i,["%d dňom","%d deň"])},days:function(n,i){return o(n,i,["%d dňami","%d dni","%d dní"])},month:function(n,i){return o(n,i,["%d mesiacom","%d mesiac"])},months:function(n,i){return o(n,i,["%d mesiacmi","%d mesiace","%d mesiacov"])},year:function(n,i){return o(n,i,["%d rokom","%d rok"])},years:function(n,i){return o(n,i,["%d rokmi","%d roky","%d rokov"])}}}()});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.sk.js.map
