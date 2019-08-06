/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){var e=function(n,e,d,u){var t;return 1===(t=n%10)&&(1===n||n>20)?e:t>1&&t<5&&(n>20||n<10)?d:u};n.timeago.settings.strings={prefixAgo:"prije",prefixFromNow:"za",suffixAgo:null,suffixFromNow:null,second:"sekundu",seconds:function(n){return e(n,"%d sekundu","%d sekunde","%d sekundi")},minute:"oko minutu",minutes:function(n){return e(n,"%d minutu","%d minute","%d minuta")},hour:"oko jedan sat",hours:function(n){return e(n,"%d sat","%d sata","%d sati")},day:"jedan dan",days:function(n){return e(n,"%d dan","%d dana","%d dana")},month:"mjesec dana",months:function(n){return e(n,"%d mjesec","%d mjeseca","%d mjeseci")},year:"prije godinu dana",years:function(n){return e(n,"%d godinu","%d godine","%d godina")},wordSeparator:" "}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.hr.js.map
