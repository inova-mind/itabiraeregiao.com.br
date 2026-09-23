(function(){"use strict";var COOKIE="theme";var MAX_AGE=60*24*3600;function readCookie(name){var pairs=(document.cookie||"").split(";");for(var i=0;i<pairs.length;i++){var p=pairs[i].trim();if(p.indexOf(name+"=")===0){return decodeURIComponent(p.substring(name.length+1));}}
return"";}
function writeCookie(value){var attrs="; Path=/; Max-Age="+MAX_AGE+"; SameSite=Lax";if(location.protocol==="https:")attrs+="; Secure";document.cookie=COOKIE+"="+encodeURIComponent(value)+attrs;}
function applyTheme(theme){var root=document.documentElement;if(theme==="cyber"){root.setAttribute("data-theme","cyber");}else{root.removeAttribute("data-theme");}}
function currentTheme(){var v=document.documentElement.getAttribute("data-theme");return v==="cyber"?"cyber":"slate";}
function toggle(){var next=currentTheme()==="cyber"?"slate":"cyber";applyTheme(next);writeCookie(next);}
function bind(){var btn=document.getElementById("theme-toggle");if(!btn)return;btn.addEventListener("click",toggle);var saved=readCookie(COOKIE);if(saved==="cyber"||saved==="slate"){applyTheme(saved);}}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",bind);}else{bind();}})();