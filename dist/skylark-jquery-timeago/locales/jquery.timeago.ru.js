/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){function r(n,r,t,u){var o=(n%=100)%10;return 1===o&&(1===n||n>20)?r:o>1&&o<5&&(n>20||n<10)?t:u}n.timeago.settings.strings={prefixAgo:null,prefixFromNow:"через",suffixAgo:"назад",suffixFromNow:null,seconds:"меньше минуты",minute:"минуту",minutes:function(n){return r(n,"%d минуту","%d минуты","%d минут")},hour:"час",hours:function(n){return r(n,"%d час","%d часа","%d часов")},day:"день",days:function(n){return r(n,"%d день","%d дня","%d дней")},month:"месяц",months:function(n){return r(n,"%d месяц","%d месяца","%d месяцев")},year:"год",years:function(n){return r(n,"%d год","%d года","%d лет")}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.ru.js.map
