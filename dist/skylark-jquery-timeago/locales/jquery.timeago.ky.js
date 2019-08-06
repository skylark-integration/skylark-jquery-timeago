/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){function r(n,r,t,u){var o=n%10;return 1===o&&(1===n||n>20)?r:o>1&&o<5&&(n>20||n<10)?t:u}n.timeago.settings.strings={prefixAgo:null,prefixFromNow:"через",suffixAgo:"мурун",suffixFromNow:null,seconds:"1 минуттан аз",minute:"минута",minutes:function(n){return r(n,"%d минута","%d минута","%d минут")},hour:"саат",hours:function(n){return r(n,"%d саат","%d саат","%d саат")},day:"күн",days:function(n){return r(n,"%d күн","%d күн","%d күн")},month:"ай",months:function(n){return r(n,"%d ай","%d ай","%d ай")},year:"жыл",years:function(n){return r(n,"%d жыл","%d жыл","%d жыл")}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.ky.js.map
