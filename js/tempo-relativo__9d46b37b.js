(function(){"use strict";function relativo(date){var agora=Date.now();var diffMs=agora-date.getTime();var diffSeg=Math.floor(diffMs/1000);if(diffSeg<60){return"agora";}
var diffMin=Math.floor(diffSeg/60);if(diffMin<60){return"há "+diffMin+" min";}
var diffH=Math.floor(diffMin/60);if(diffH<24){return"há "+diffH+"h";}
var diffD=Math.floor(diffH/24);if(diffD===1){return"ontem";}
if(diffD<30){return"há "+diffD+" dias";}
var diffMes=Math.floor(diffD/30);if(diffMes<12){return"há "+diffMes+" meses";}
var diffAno=Math.floor(diffMes/12);return"há "+diffAno+" ano"+(diffAno>1?"s":"");}
function aplicar(){var nodes=document.querySelectorAll("time.card-tempo[data-publicada]");nodes.forEach(function(el){var iso=el.getAttribute("data-publicada");if(!iso){return;}
var d=new Date(iso);if(Number.isNaN(d.getTime())){return;}
el.setAttribute("datetime",iso);el.setAttribute("title",d.toLocaleString("pt-BR"));el.textContent=relativo(d);});}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",aplicar);}else{aplicar();}})();