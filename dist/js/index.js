"use strict";$(".counter").counterUp({delay:10,time:1e3}),$(window).scroll(function(){window.pageYOffset>200?$("header").addClass("blue"):$("header").removeClass("blue")}),$("#toggleMenu").on("click",function(e){e.preventDefault();var t=$("#toggleMenu").find("span"),n="icon-menu"==t.attr("class");t.removeClass(),n?(t.addClass("icon-close"),$(".mobile-menu").css({width:"100%"}),$("body").css({"overflow-y":"hidden"})):(t.addClass("icon-menu"),$(".mobile-menu").css({width:"0%"}),$("body").css({"overflow-y":"initial"}))}),$(document).ready(function(){$("#clientForm").submit(function(e){return e.preventDefault(),$("#clientForm").find('input[type="submit"]').attr("disabled",!0),$("#clientForm .loading-img").show(),$.ajax({method:"POST",url:"register.php?"+$("#clientForm").serialize()}).done(function(e){1==e?(alert("We've received your data, thank you very much."),$("#clientForm").trigger("reset")):alert("Something went wrong, please try again later.")}).fail(function(e){alert("Something went wrong, please try again later.")}).always(function(e){$("#clientForm .loading-img").hide(),$("#contactForm").find('input[type="submit"]').attr("disabled",!1)}),!1}),$("#contactForm").submit(function(e){return e.preventDefault(),$("#contactForm").find('input[type="submit"]').attr("disabled",!0),$("#contactForm .loading-img").show(),$.ajax({method:"POST",url:"register.php?"+$("#clientForm").serialize()}).done(function(e){1==e?(alert("We've received your data, thank you very much."),$("#contactForm").trigger("reset")):alert("Something went wrong, please try again later.")}).fail(function(e){alert("Something went wrong, please try again later.")}).always(function(e){$("#contactForm .loading-img").hide(),$("#contactForm").find('input[type="submit"]').attr("disabled",!1)}),!1})});