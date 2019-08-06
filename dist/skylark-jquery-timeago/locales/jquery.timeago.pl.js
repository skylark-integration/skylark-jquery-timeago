/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){function i(n,i,t){var e=n%10;return e>1&&e<5&&(n>20||n<10)?i:t}n.timeago.settings.strings={prefixAgo:null,prefixFromNow:"za",suffixAgo:"temu",suffixFromNow:null,seconds:"mniej niż minutę",minute:"minutę",minutes:function(n){return i(n,"%d minuty","%d minut")},hour:"godzinę",hours:function(n){return i(n,"%d godziny","%d godzin")},day:"dzień",days:"%d dni",month:"miesiąc",months:function(n){return i(n,"%d miesiące","%d miesięcy")},year:"rok",years:function(n){return i(n,"%d lata","%d lat")}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.pl.js.map
