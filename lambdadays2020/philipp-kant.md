(function(w,d,s,l,i){w\[l\]=w\[l\]||\[\];w\[l\].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)\[0\], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-N83QNL3');     Lambda Days 2020         

<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N83QNL3" height="0" width="0" style="display:none;visibility:hidden"></iframe>

*   [Speakers](/lambdadays2020/#speakers)
*   [Programme](/lambdadays2020/#programme)
*   [Workshops](/lambdadays2020/#workshops)
*   [Sponsors](/lambdadays2020/#sponsors)
*   [Venue](/lambdadays2020/#venue)
*   [Contact](/lambdadays2020/#contact)
*   [Other events](#)
    *   [Lambda Days 2019](https://www.lambdadays.org/lambdadays2019)
    *   [Lambda Days 2018](https://www.lambdadays.org/lambdadays2018)
    *   [Lambda Days 2017](https://www.lambdadays.org/lambdadays2017)
    *   [Lambda Days 2016](https://www.lambdadays.org/lambdadays2016/)
    *   [Lambda Days 2015](/static/lambda2015.htm)
    *   [Lambda Days 2014](/static/lambda2014.htm)
    *   [Code Sync](https://codesync.global/)

  

### Philipp Kant

physicist and functional programmer  

Philipp started his career in theoretical particle physics, doing research on Higgs Bosons, supersymmetry, and top quarks. As a postdoc, he stumbled upon Haskell, and liked it well enough to eventually switch to software development. He now works at IOHK, where he sits at the interface between research and development. His team is collaborating with scientists to turn their research into specifications, prototypes, and working code.

#### Fusing Flexibility with Formality: Practical Experience with Agile Formal Methods in Large-Scale Functional Programming

Agile software development and Formal Methods are traditionally seen as being  in conflict. From an Agile perspective, there is pressure to deliver quickly, building vertical prototypes and doing many iterations / sprints, refining the requirements; from a Formal Methods perspective, there is pressure to deliver correctly and any change in requirements often necessitates changes in the formal specification and might even impact all arguments of correctness.  
These two goals are often discordant. In this paper, we argue that given the right attitudes on both sides, it is possible to fuse good practices from formal methods and agile software engineering to deliver software that is simultaneously reliable, effective, testable, and that can also be delivered rapidly.  
This suggests a new lightweight software engineering methodology, that is inspired by and exploits appropriate formal methods, while also providing the benefits of agile software development. Our methodology is informed and motivated by practical experience. We have devised and adapted it in the light of experience in delivering a large-scale software system that needs to meet complex real-world requirements: the Cardano crypto-currency.  
Crypto-Currencies is a rather new application area for which no clear engineering habit exists, so it is a fitting domain for agile methods. At the same time, there is a lot of real monetary value at stake, making it a good fit for using formal methods to ensure high quality and correctness. The paper reports on the issues that have been faced and overcome, and provides a number of real-world lessons that can be used in similar situations.

[Slides](https://lambdadays-prod.s3.amazonaws.com/presentations/Philipp+Kant+-+Fusing+Flexibility+with+Formality.key)  
[Video](https://www.youtube.com/watch?v=UQGVa8Hcg0Y&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=34&t=0s) [←Back](/lambdadays2020)

# Contact

[Contact Us](https://www.lambdadays.org/lambdadays2020/#contact) \* [Register](https://www.lambdadays.org/lambdadays2020/#register)

 [![facebook icon](/static/upload/media/1407736708498708fb_glowna.png)](https://www.facebook.com/events/624296757687805/?context=create&source=49) [ ![twitter icon](/static/upload/media/1407736735506811tw_glowna.png) ](https://twitter.com/LambdaDays) [![lanyrd icon](/static/upload/media/1407736760562017l_glowna.png)](http://lanyrd.com/2015/lambdadays/) 

var collapseHeight = $('.to-collapse').height(); var backgroundPosition = $('.to-collapse').css('background-position').split(" "); $(window).scroll(function(){ if($(this).scrollTop() < collapseHeight){ $('.to-collapse').css({'height': (collapseHeight - $(this).scrollTop())+'px'}); $('.to-collapse').css({'background-position': backgroundPosition\[0\]+' '+(parseInt(backgroundPosition\[1\]) - $(this).scrollTop())+'px'}); }else{ $('.to-collapse').css({'height': '0px'}); } }); $('#top-nav').onePageNav({ currentClass: 'active', changeHash: true, scrollSpeed: 750, filter: ':not(.external)' }); $('.register-button').click(function() { $('.register-link').click(); }); $(".dropdown").on('shown.bs.dropdown', function (e) { //function called when dropdown-menu becomes visible var dropdownMenu = $('ul:first', this); //find dropdown-menu //if element was moved to left, set left back to 0 for next calculations $(this).find(".dropdown-menu").first().css('left', 0); var offset = dropdownMenu.offset(); var leftOffset = offset.left; var width = dropdownMenu.width(); var documentWidth = $(document).width(); var sticksOutRightSide = leftOffset + width - documentWidth; if (sticksOutRightSide > 0) { $(this).find(".dropdown-menu").first().css('left', -(sticksOutRightSide + 20)); } }); (function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-67917061-1', 'auto'); ga('send', 'pageview'); gaJsHost = "https://ssl."; document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); try { var pageTracker = \_gat.\_getTracker("UA-235575-6"); pageTracker.\_trackPageview(); } catch(err) {} piAId = '24452'; piCId = '1532'; (function() { function async\_load(){ var s = document.createElement('script'); s.type = 'text/javascript'; s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js'; var c = document.getElementsByTagName('script')\[0\]; c.parentNode.insertBefore(s, c); } if(window.attachEvent) { window.attachEvent('onload', async\_load); } else { window.addEventListener('load', async\_load, false); } })();
