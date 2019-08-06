/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){var r=function(n,r,t,d){var o;return 1===(o=n%10)&&(1===n||n>20)?r:o>1&&o<5&&(n>20||n<10)?t:d};n.timeago.settings.strings={prefixAgo:"пре",prefixFromNow:"за",suffixAgo:null,suffixFromNow:null,second:"секунд",seconds:function(n){return r(n,"%d секунд","%d секунде","%d секунди")},minute:"један минут",minutes:function(n){return r(n,"%d минут","%d минута","%d минута")},hour:"један сат",hours:function(n){return r(n,"%d сат","%d сата","%d сати")},day:"један дан",days:function(n){return r(n,"%d дан","%d дана","%d дана")},month:"месец дана",months:function(n){return r(n,"%d месец","%d месеца","%d месеци")},year:"годину дана",years:function(n){return r(n,"%d годину","%d године","%d година")},wordSeparator:" "}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.sr.js.map
