/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){!function(){function u(n,u,t){return t[u>=0?0:2===t.length||n<5?1:2]}n.timeago.settings.strings={prefixAgo:"před",prefixFromNow:"za",suffixAgo:null,suffixFromNow:null,seconds:function(n,t){return u(n,t,["méně než minutou","méně než minutu"])},minute:function(n,t){return u(n,t,["minutou","minutu"])},minutes:function(n,t){return u(n,t,["%d minutami","%d minuty","%d minut"])},hour:function(n,t){return u(n,t,["hodinou","hodinu"])},hours:function(n,t){return u(n,t,["%d hodinami","%d hodiny","%d hodin"])},day:function(n,t){return u(n,t,["%d dnem","%d den"])},days:function(n,t){return u(n,t,["%d dny","%d dny","%d dní"])},month:function(n,t){return u(n,t,["%d měsícem","%d měsíc"])},months:function(n,t){return u(n,t,["%d měsíci","%d měsíce","%d měsíců"])},year:function(n,t){return u(n,t,["%d rokem","%d rok"])},years:function(n,t){return u(n,t,["%d lety","%d roky","%d let"])}}}()});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.cs.js.map
