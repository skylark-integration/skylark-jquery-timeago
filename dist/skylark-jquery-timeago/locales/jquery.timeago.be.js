/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){function r(n,r,t,u){var o=(n%=100)%10;return 1===o&&(1===n||n>20)?r:o>1&&o<5&&(n>20||n<10)?t:u}n.timeago.settings.strings={prefixAgo:null,prefixFromNow:"праз",suffixAgo:"таму",suffixFromNow:null,seconds:"менш хвіліны",minute:"хвіліну",minutes:function(n){return r(n,"%d хвіліна","%d хвіліны","%d хвілін")},hour:"гадзіну",hours:function(n){return r(n,"%d гадзіна","%d гадзіны","%d гадзін")},day:"дзень",days:function(n){return r(n,"%d дзень","%d дні","%d дзён")},month:"месяц",months:function(n){return r(n,"%d месяц","%d месяцы","%d месяцаў")},year:"год",years:function(n){return r(n,"%d год","%d гады","%d гадоў")}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.be.js.map
