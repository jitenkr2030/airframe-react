!function i(a,l,s){function c(r,e){if(!l[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(p)return p(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var o=l[r]={exports:{}};a[r][0].call(o.exports,function(e){return c(a[r][1][e]||e)},o,o.exports,i,a,l,s)}return l[r].exports}for(var p="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,r,t){Dashboard.Highcharts.createChart("pie-semi-circle",{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},credits:!1,title:{text:"Browser<br>shares<br>2017",align:"center",verticalAlign:"middle",y:40},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},credits:!1,plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","75%"],size:"110%"}},series:[{type:"pie",name:"Browser share",innerSize:"50%",data:[["Chrome",58.9],["Firefox",13.29],["Internet Explorer",13],["Edge",3.78]]}]})},{}]},{},[1]);
//# sourceMappingURL=pie-semi-circle.js.map
