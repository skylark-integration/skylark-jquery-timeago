/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){var d=function(n,d,e,u){var a;return 1===(a=n%10)&&(1===n||n>20)?d:a>1&&a<5&&(n>20||n<10)?e:u};n.timeago.settings.strings={prefixAgo:"pre",prefixFromNow:"za",suffixAgo:null,suffixFromNow:null,second:"sekund",seconds:function(n){return d(n,"%d sekund","%d sekunde","%d sekundi")},minute:"oko minut",minutes:function(n){return d(n,"%d minut","%d minuta","%d minuta")},hour:"oko jedan sat",hours:function(n){return d(n,"%d sat","%d sata","%d sati")},day:"jedan dan",days:function(n){return d(n,"%d dan","%d dana","%d dana")},month:"mesec dana",months:function(n){return d(n,"%d mesec","%d meseca","%d meseci")},year:"godinu dana",years:function(n){return d(n,"%d godinu","%d godine","%d godina")},wordSeparator:" "}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.rs.js.map
