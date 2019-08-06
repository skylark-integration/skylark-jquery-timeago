/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){function r(n,r,t,u){var o=n%10;return 1===o&&(1===n||n>20)?r:o>1&&o<5&&(n>20||n<10)?t:u}n.timeago.settings.strings={prefixAgo:null,prefixFromNow:"через",suffixAgo:"тому",suffixFromNow:null,seconds:"менше хвилини",minute:"хвилина",minutes:function(n){return r(n,"%d хвилина","%d хвилини","%d хвилин")},hour:"година",hours:function(n){return r(n,"%d година","%d години","%d годин")},day:"день",days:function(n){return r(n,"%d день","%d дні","%d днів")},month:"місяць",months:function(n){return r(n,"%d місяць","%d місяці","%d місяців")},year:"рік",years:function(n){return r(n,"%d рік","%d роки","%d років")}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.uk.js.map
