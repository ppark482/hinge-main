<<<<<<< HEAD
!function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?a:o;i(t,e)}var n,o,a;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},a=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},a=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:a,toggleClass:i,has:n,add:o,remove:a,toggle:i};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(t){function e(){for(var e=0;e<s.length;e++)t(".dashboard").append('<li class="hvr-rotate" data-tag="'+s[e].tag+'" data-option="'+s[e].option+'">'+s[e].icon+s[e].title+"</li>");i()}function i(){var e=t(".dashboard > li");e.each(function(){var e=t(this);"intro"===e[0].dataset.tag&&e.on("click",function(){r.html('<section class="hero animated fadeIn"><img id="hero-logo" src="img/logo.png"><img id="inc" class="animated" src="img/hinge_inc.png"></section>')}),"about"===e[0].dataset.tag&&e.on("click",function(){return t("#about-message").length?void t("#about-message").remove():void r.html('<div class="animated fadeIn" id="about-message">'+e[0].dataset.option+"</div>")}),"folio"===e[0].dataset.tag&&e.on("click",function(){a()}),"contact"===e[0].dataset.tag&&e.on("click",function(){r.html('<div id="contact-us" class="animated fadeIn">'+e[0].dataset.option+"</div>")})})}function n(){var e=t(".portfolio-items");e.each(function(e){t(this).on("click",function(){var e=t(this).data("project-id"),i=c.filter(function(t){return t._id==e})[0];o(i)})})}function o(e){r.html('\n			<div id="back-button"><i class="fa fa-arrow-circle-left"></i></div>\n			<section class="single animated fadeIn">\n				<h1>'+e.title+'</h1>\n				<img src="img/'+e.image1+'">\n				<img src="img/'+e.image2+'">\n				<p>'+e.description+'</p>\n				<a href="'+e.link+'">Go to Live Project</a>\n				<a href="'+e.github+'">See the Code</a>\n			</section>\n		'),t("#back-button").on("click",function(){a()})}var a,s=[{title:"Home",tag:"intro",option:"",icon:'<i class="fa fa-home"></i>'},{title:"About",tag:"about",option:"Hinge offers web development by web developers. No sales people to deal with. No client engagement. Just clean, modern and fast development.",icon:'<i class="fa fa-cog fa-spin"></i>'},{title:"Our Work",tag:"folio",option:"",icon:'<i class="fa fa-briefcase"></i>'},{title:"Contact Us",tag:"contact",option:"hello@hingeinc.co",icon:'<i class="fa fa-share"></i>'}],c=[{_id:1,title:"Fruit Creative",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",github:"www.example.com",live:"http://www.fruitcreative.co/",thumbnail:"portfolio/folio01.png",image1:"portfolio/folio02.png",image2:"portfolio/folio02.png"},{_id:2,title:"Test Title2",description:"2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",github:"www.example2.com",live:"http://www.alexacrisa.com",thumbnail:"portfolio/folio03.png",image1:"portfolio/folio04.png",image2:"portfolio/folio02.png"}],r=t(".container");a=function(){r.empty();for(var t=[],e=0;e<c.length;e++)t.push("<img data-project-id="+c[e]._id+' class="portfolio-items animated fadeIn" src="img/'+c[e].thumbnail+'">');r.html('<section class="portfolio">'+t.join("")+"</section>"),n()},e()}($),function(t){"use strict";function e(){var e=!1;return function(t){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||t.opera),e}function i(t,e){this.el=t,this._init()}i.prototype={_init:function(){this.trigger=this.el.querySelector("a.gn-icon-menu"),this.menu=this.el.querySelector("nav.gn-menu-wrapper"),this.isMenuOpen=!1,this.eventtype=e()?"touchstart":"click",this._initEvents();var t=this;this.bodyClickFn=function(){t._closeMenu(),this.removeEventListener(t.eventtype,t.bodyClickFn)}},_initEvents:function(){var t=this;e()||(this.trigger.addEventListener("mouseover",function(e){t._openIconMenu()}),this.trigger.addEventListener("mouseout",function(e){t._closeIconMenu()}),this.menu.addEventListener("mouseover",function(e){t._openMenu(),document.addEventListener(t.eventtype,t.bodyClickFn)})),this.trigger.addEventListener(this.eventtype,function(e){e.stopPropagation(),e.preventDefault(),t.isMenuOpen?(t._closeMenu(),document.removeEventListener(t.eventtype,t.bodyClickFn)):(t._openMenu(),document.addEventListener(t.eventtype,t.bodyClickFn))}),this.menu.addEventListener(this.eventtype,function(t){t.stopPropagation()})},_openIconMenu:function(){classie.add(this.menu,"gn-open-part")},_closeIconMenu:function(){classie.remove(this.menu,"gn-open-part")},_openMenu:function(){this.isMenuOpen||(classie.add(this.trigger,"gn-selected"),this.isMenuOpen=!0,classie.add(this.menu,"gn-open-all"),this._closeIconMenu())},_closeMenu:function(){this.isMenuOpen&&(classie.remove(this.trigger,"gn-selected"),this.isMenuOpen=!1,classie.remove(this.menu,"gn-open-all"),this._closeIconMenu())}},t.gnMenu=i}(window),$("#inc").mouseover(function(){$("#inc").addClass("hinge")}),function(){function t(t){this.path=t;var e=this.path.split("."),i=e.slice(0,e.length-1).join("."),n=e[e.length-1];this.at_2x_path=i+"@2x."+n}function e(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var i=this;this.path.check_2x_variant(function(t){t&&i.swap()})}var i="undefined"==typeof exports?window:exports;i.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var i,n=this;return this.is_external()?e(!1):this.at_2x_path in t.confirmed_paths?e(!0):(i=new XMLHttpRequest,i.open("HEAD",this.at_2x_path),i.onreadystatechange=function(){return 4!=i.readyState?e(!1):i.status>=200&&i.status<=399?(t.confirmed_paths.push(n.at_2x_path),e(!0)):e(!1)},i.send(),void 0)},i.RetinaImage=e,e.prototype.swap=function(t){function e(){i.el.complete?(i.el.setAttribute("width",i.el.offsetWidth),i.el.setAttribute("height",i.el.offsetHeight),i.el.setAttribute("src",t)):setTimeout(e,5)}"undefined"==typeof t&&(t=this.path.at_2x_path);var i=this;e()},i.devicePixelRatio>1&&(window.onload=function(){var t,i,n=document.getElementsByTagName("img"),o=[];for(t=0;t<n.length;t++)i=n[t],o.push(new e(i))})}();
=======
!function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?a:o;i(t,e)}var n,o,a;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},a=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},a=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:a,toggleClass:i,has:n,add:o,remove:a,toggle:i};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(t){function e(){for(var e=0;e<s.length;e++)t(".dashboard").append('<li data-tag="'+s[e].tag+'" data-option="'+s[e].option+'">'+s[e].icon+s[e].title+"</li>");i()}function i(){var e=t(".dashboard > li");e.each(function(){var e=t(this);"intro"===e[0].dataset.tag&&e.on("click",function(){r.html('<section class="hero animated fadeIn"><img id="hero-logo" src="img/logo.png"><img id="inc" class="animated" src="img/hinge_inc.png"></section>')}),"about"===e[0].dataset.tag&&e.on("click",function(){return t("#about-message").length?void t("#about-message").remove():void r.html('<div class="animated fadeIn" id="about-message">'+e[0].dataset.option+"</div>")}),"folio"===e[0].dataset.tag&&e.on("click",function(){a()}),"contact"===e[0].dataset.tag&&e.on("click",function(){r.html('<div id="contact-us" class="animated fadeIn">'+e[0].dataset.option+"</div>")})})}function n(){var e=t(".portfolio-items");e.each(function(e){t(this).on("click",function(){var e=t(this).data("project-id"),i=c.filter(function(t){return t._id==e})[0];o(i)})})}function o(e){r.html('\n			<div id="back-button"><i class="fa fa-arrow-circle-left"></i></div>\n			<section class="single animated fadeIn">\n				<h1>'+e.title+'</h1>\n				<img src="img/'+e.feature+'">\n				<p>'+e.description+'</p>\n				<a href="'+e.link+'">Go to Live Project</a>\n				<a href="'+e.github+'">See the Code</a>\n			</section>\n		'),t("#back-button").on("click",function(){a()})}var a,s=[{title:"Home",tag:"intro",option:"",icon:'<i class="fa fa-home"></i>'},{title:"About",tag:"about",option:"Hinge offers web development by web developers. No sales people to deal with. No client engagement. Just clean, modern and fast development.",icon:'<i class="fa fa-cog fa-spin"></i>'},{title:"Our Work",tag:"folio",option:"",icon:'<i class="fa fa-briefcase"></i>'},{title:"Contact Us",tag:"contact",option:"hello@hingeinc.co",icon:'<i class="fa fa-share"></i>'}],c=[{_id:1,title:"Alexa Crisa&#39;s Portfolio",github:"www.example.com",live:"http://www.alexacrisa.com",thumbnail:"alexa-portfolio.png",feature:"alexa-portfolio.png"},{_id:2,title:"Fruit Creative",github:"www.example2.com",live:"http://www.fruitcreative.co/",thumbnail:"fruit-creative-1.png",feature:"fruit-creative-2.png"}],r=t(".container");a=function(){r.empty();for(var t=[],e=0;e<c.length;e++)t.push("<img data-project-id="+c[e]._id+' class="portfolio-items animated fadeIn" src="img/'+c[e].thumbnail+'">');r.html('<section class="portfolio">'+t.join("")+"</section>"),n()},e()}($),function(t){"use strict";function e(){var e=!1;return function(t){(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||t.opera),e}function i(t,e){this.el=t,this._init()}i.prototype={_init:function(){this.trigger=this.el.querySelector("a.gn-icon-menu"),this.menu=this.el.querySelector("nav.gn-menu-wrapper"),this.isMenuOpen=!1,this.eventtype=e()?"touchstart":"click",this._initEvents();var t=this;this.bodyClickFn=function(){t._closeMenu(),this.removeEventListener(t.eventtype,t.bodyClickFn)}},_initEvents:function(){var t=this;e()||(this.trigger.addEventListener("mouseover",function(e){t._openIconMenu()}),this.trigger.addEventListener("mouseout",function(e){t._closeIconMenu()}),this.menu.addEventListener("mouseover",function(e){t._openMenu(),document.addEventListener(t.eventtype,t.bodyClickFn)})),this.trigger.addEventListener(this.eventtype,function(e){e.stopPropagation(),e.preventDefault(),t.isMenuOpen?(t._closeMenu(),document.removeEventListener(t.eventtype,t.bodyClickFn)):(t._openMenu(),document.addEventListener(t.eventtype,t.bodyClickFn))}),this.menu.addEventListener(this.eventtype,function(t){t.stopPropagation()})},_openIconMenu:function(){classie.add(this.menu,"gn-open-part")},_closeIconMenu:function(){classie.remove(this.menu,"gn-open-part")},_openMenu:function(){this.isMenuOpen||(classie.add(this.trigger,"gn-selected"),this.isMenuOpen=!0,classie.add(this.menu,"gn-open-all"),this._closeIconMenu())},_closeMenu:function(){this.isMenuOpen&&(classie.remove(this.trigger,"gn-selected"),this.isMenuOpen=!1,classie.remove(this.menu,"gn-open-all"),this._closeIconMenu())}},t.gnMenu=i}(window),$("#inc").mouseover(function(){$("#inc").addClass("hinge")}),function(){function t(t){this.path=t;var e=this.path.split("."),i=e.slice(0,e.length-1).join("."),n=e[e.length-1];this.at_2x_path=i+"@2x."+n}function e(e){this.el=e,this.path=new t(this.el.getAttribute("src"));var i=this;this.path.check_2x_variant(function(t){t&&i.swap()})}var i="undefined"==typeof exports?window:exports;i.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!!this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain)},t.prototype.check_2x_variant=function(e){var i,n=this;return this.is_external()?e(!1):this.at_2x_path in t.confirmed_paths?e(!0):(i=new XMLHttpRequest,i.open("HEAD",this.at_2x_path),i.onreadystatechange=function(){return 4!=i.readyState?e(!1):i.status>=200&&i.status<=399?(t.confirmed_paths.push(n.at_2x_path),e(!0)):e(!1)},i.send(),void 0)},i.RetinaImage=e,e.prototype.swap=function(t){function e(){i.el.complete?(i.el.setAttribute("width",i.el.offsetWidth),i.el.setAttribute("height",i.el.offsetHeight),i.el.setAttribute("src",t)):setTimeout(e,5)}"undefined"==typeof t&&(t=this.path.at_2x_path);var i=this;e()},i.devicePixelRatio>1&&(window.onload=function(){var t,i,n=document.getElementsByTagName("img"),o=[];for(t=0;t<n.length;t++)i=n[t],o.push(new e(i))})}();
>>>>>>> ef52e4f415197afe73f24c5872dd69b572d356b0
