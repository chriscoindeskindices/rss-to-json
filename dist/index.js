module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var i=n(1),r=n(2),u=n(3);e.exports={load:function(e,t){var n=this;u.get(e,{headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.75",accept:"text/html,application/xhtml+xml"}}).then((function(e){new r.Parser({trim:!1,normalize:!0,mergeAttrs:!0}).parseString(e.data,(function(e,i){e?(console.log(e),t(e,null)):t(null,n.parser(i))}))})).catch((function(e){console.log(e),t(e,null)}))},parser:function(e){var t=e.rss.channel,n={items:[]};return i.isArray(e.rss.channel)&&(t=e.rss.channel[0]),t.title&&(n.title=t.title[0]),t.description&&(n.description=t.description[0]),t.link&&(n.url=t.link[0]),t.image&&(n.image=t.image[0].url),!n.image&&t["itunes:image"]&&(n.image=t["itunes:image"][0].href),n.image=n.image&&Array.isArray(n.image)?n.image[0]:"",t.item&&(i.isArray(t.item)||(t.item=[t.item]),t.item.forEach((function(e){var t={};t.title=i.isNullOrUndefined(e.title)?"":e.title[0],t.description=i.isNullOrUndefined(e.description)?"":e.description[0],t.url=t.link=i.isNullOrUndefined(e.link)?"":e.link[0],e.guid&&(t.guid=e.guid[0]),e.category&&(t.category=e.category[0]),e["dc:creator"]&&(t.dc_creator=e["dc:creator"][0]),e.pubDate&&(t.pubDate=e.pubDate[0]),e["atom:updated"]&&(t.atom_updated=e["atom:updated"][0]),e["content:encoded"]&&(t.content_encoded=e["content:encoded"][0]),e["itunes:subtitle"]&&(t.itunes_subtitle=e["itunes:subtitle"][0]),e["itunes:summary"]&&(t.itunes_summary=e["itunes:summary"][0]),e["itunes:author"]&&(t.itunes_author=e["itunes:author"][0]),e["itunes:explicit"]&&(t.itunes_explicit=e["itunes:explicit"][0]),e["itunes:duration"]&&(t.itunes_duration=e["itunes:duration"][0]),e["itunes:season"]&&(t.itunes_season=e["itunes:season"][0]),e["itunes:episode"]&&(t.itunes_episode=e["itunes:episode"][0]),e["itunes:episodeType"]&&(t.itunes_episodeType=e["itunes:episodeType"][0]),e.pubDate&&(t.created=Date.parse(e.pubDate[0])),e["media:content"]&&(t.media=e.media||{},t.media.content=e["media:content"]),e["media:thumbnail"]&&(t.media=e.media||{},t.media.thumbnail=e["media:thumbnail"]),e.enclosure&&(t.enclosures=[],i.isArray(e.enclosure)||(e.enclosure=[e.enclosure]),e.enclosure.forEach((function(e){var n={};for(var i in e)n[i]=e[i][0];t.enclosures.push(n)}))),n.items.push(t)}))),n},read:function(e,t){return this.load(e,t)}}},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("xml2js")},function(e,t){e.exports=require("axios")}]);