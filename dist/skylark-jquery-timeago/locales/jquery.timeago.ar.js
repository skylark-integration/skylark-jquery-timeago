/**
 * skylark-jquery-timeago - A version of jquery-timeago.js that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jquery-timeago/
 * @license MIT
 */
define(["skylark-jquery","../timeago"],function(n){function d(n,d){return d[plural=0===n?0:1===n?1:2===n?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5]}n.timeago.settings.strings={prefixAgo:"منذ",prefixFromNow:"بعد",suffixAgo:null,suffixFromNow:null,second:function(n){return d(n,["أقل من ثانية","ثانية واحدة","ثانيتين","%d ثوانٍ","%d ثانية","%d ثانية"])},seconds:function(n){return d(n,["أقل من ثانية","ثانية واحدة","ثانيتين","%d ثوانٍ","%d ثانية","%d ثانية"])},minute:function(n){return d(n,["أقل من دقيقة","دقيقة واحدة","دقيقتين","%d دقائق","%d دقيقة","دقيقة"])},minutes:function(n){return d(n,["أقل من دقيقة","دقيقة واحدة","دقيقتين","%d دقائق","%d دقيقة","دقيقة"])},hour:function(n){return d(n,["أقل من ساعة","ساعة واحدة","ساعتين","%d ساعات","%d ساعة","%d ساعة"])},hours:function(n){return d(n,["أقل من ساعة","ساعة واحدة","ساعتين","%d ساعات","%d ساعة","%d ساعة"])},day:function(n){return d(n,["أقل من يوم","يوم واحد","يومين","%d أيام","%d يومًا","%d يوم"])},days:function(n){return d(n,["أقل من يوم","يوم واحد","يومين","%d أيام","%d يومًا","%d يوم"])},month:function(n){return d(n,["أقل من شهر","شهر واحد","شهرين","%d أشهر","%d شهرًا","%d شهر"])},months:function(n){return d(n,["أقل من شهر","شهر واحد","شهرين","%d أشهر","%d شهرًا","%d شهر"])},year:function(n){return d(n,["أقل من عام","عام واحد","%d عامين","%d أعوام","%d عامًا"])},years:function(n){return d(n,["أقل من عام","عام واحد","عامين","%d أعوام","%d عامًا","%d عام"])}}});
//# sourceMappingURL=../sourcemaps/locales/jquery.timeago.ar.js.map
