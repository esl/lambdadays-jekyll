<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N83QNL3" height="0" width="0" style="display:none;visibility:hidden"></iframe>

*   [Speakers](/lambdadays2015/#speakers)
*   [Programme](/lambdadays2015/#programme)
*   [Venue](/lambdadays2015/#venue)
*   [Hotels](/lambdadays2015/#hotels)
*   [Sponsors](/lambdadays2015/#sponsors)
*   [Contact](/lambdadays2015/#contact)
*   [Code of Conduct](/lambdadays2015/about#code-of-conduct)

  

 [![](/static/img/twitter.png)](http://www.twitter.com/theburningmonk ) 

### Yan Cui

Functional programmer in gaming  

Yan is a co-author of “F# Deep Dives” by Manning and a regular speaker on topics such as Aspect-Oriented Programming, F# and NoSQL. He also keeps an active blog at http://theburningmonk.com

#### My adventure with Elm

Reactive Extensions (Rx) has brought reactive programming to the mainstream in recent years with successful adoption in languages such as C#, Java and JavaScript. But have you ever wondered what Rx will look like as a language?  
  
  
Elm is a new programming language based on the idea of Functional Reactive Programming (FRP). Elm lets you create highly interactive web applications without all the messy callbacks tangling around shared states.  
  
In this talk Yan Cui will give a gentle introduction to Elm and share his experience learning Elm and recreating Missile Command in Elm with less than 250 LOC. You will leave this session with a handle on the Functional Reactive Programming paradigm and a basic understanding of the Elm language.

[Slides]( http://www.slideshare.net/theburningmonk/my-adventure-with-elm)  
[Video](https://vimeo.com/123408933) [←Back](/lambdadays2015)

# Contact

[Contact Us](https://www.lambdadays.org/lambdadays2020/#contact) \* [Register](https://www.lambdadays.org/lambdadays2020/#register)

 [![facebook icon](/static/upload/media/1407736708498708fb_glowna.png)](https://www.facebook.com/events/624296757687805/?context=create&source=49) [ ![twitter icon](/static/upload/media/1407736735506811tw_glowna.png) ](https://twitter.com/LambdaDays) [![lanyrd icon](/static/upload/media/1407736760562017l_glowna.png)](http://lanyrd.com/2015/lambdadays/) 

var collapseHeight = $('.to-collapse').height(); var backgroundPosition = $('.to-collapse').css('background-position').split(" "); $(window).scroll(function(){ if($(this).scrollTop() < collapseHeight){ $('.to-collapse').css({'height': (collapseHeight - $(this).scrollTop())+'px'}); $('.to-collapse').css({'background-position': backgroundPosition\[0\]+' '+(parseInt(backgroundPosition\[1\]) - $(this).scrollTop())+'px'}); }else{ $('.to-collapse').css({'height': '0px'}); } }); $('#top-nav').onePageNav({ currentClass: 'active', changeHash: true, scrollSpeed: 750, filter: ':not(.external)' }); $('.register-button').click(function() { $('.register-link').click(); }); $(".dropdown").on('shown.bs.dropdown', function (e) { //function called when dropdown-menu becomes visible var dropdownMenu = $('ul:first', this); //find dropdown-menu //if element was moved to left, set left back to 0 for next calculations $(this).find(".dropdown-menu").first().css('left', 0); var offset = dropdownMenu.offset(); var leftOffset = offset.left; var width = dropdownMenu.width(); var documentWidth = $(document).width(); var sticksOutRightSide = leftOffset + width - documentWidth; if (sticksOutRightSide > 0) { $(this).find(".dropdown-menu").first().css('left', -(sticksOutRightSide + 20)); } }); (function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-67917061-1', 'auto'); ga('send', 'pageview'); gaJsHost = "https://ssl."; document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); try { var pageTracker = \_gat.\_getTracker("UA-235575-6"); pageTracker.\_trackPageview(); } catch(err) {} piAId = '24452'; piCId = '1532'; (function() { function async\_load(){ var s = document.createElement('script'); s.type = 'text/javascript'; s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js'; var c = document.getElementsByTagName('script')\[0\]; c.parentNode.insertBefore(s, c); } if(window.attachEvent) { window.attachEvent('onload', async\_load); } else { window.addEventListener('load', async\_load, false); } })();
