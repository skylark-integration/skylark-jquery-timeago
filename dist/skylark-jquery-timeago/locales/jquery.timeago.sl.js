/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){var e=function(n,e){return e[n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0]};n.timeago.settings.strings={prefixAgo:null,prefixFromNow:"čez",suffixAgo:"nazaj",suffixFromNow:null,second:"sekundo",seconds:function(n){return e(n,["%d sekund","%d sekundo","%d sekundi","%d sekunde"])},minute:"minuto",minutes:function(n){return e(n,["%d minut","%d minuto","%d minuti","%d minute"])},hour:"eno uro",hours:function(n){return e(n,["%d ur","%d uro","%d uri","%d ure"])},day:"en dan",days:function(n){return e(n,["%d dni","%d dan","%d dneva","%d dni"])},month:"en mesec",months:function(n){return e(n,["%d mesecev","%d mesec","%d meseca","%d mesece"])},year:"eno leto",years:function(n){return e(n,["%d let","%d leto","%d leti","%d leta"])},wordSeparator:" "}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.sl.js.map
