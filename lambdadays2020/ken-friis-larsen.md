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

  

 [![](/static/img/github.png)](http://www.github.com/kfl) [![](/static/img/twitter.png)](http://www.twitter.com/bongoband) 

### Ken Friis Larsen

Associate Professor at DIKU  

I am Associate Professor at the Department of Computer Science, University of Copenhagen. My research interests are programming language technology and theory in particular for security and privacy and for concurrent and parallel programming. Static analysis, functional programming, formal methods and automated reasoning, domain-specific languages, algorithm and systems design.

#### Efficient Translation of Certain Irregular Data-Parallel Array Comprehensions

We present an array comprehension language that features execution on single-instruction multiple-data (SIMD) architectures even in cases where a comprehension leads to certain kinds of non-regular nested parallelism. The comprehension language naturally supports features such as nesting, zipping, and filtering, and it also supports more advanced features such as sorting. We demonstrate how the language is compiled into efficient Futhark code featuring calls to the Futhark "segmented" library. Moreover, we give a number of examples showing that the array comprehension language provides the programmer with effective abstractions for expressing queries and computations to be executed on SIMD architectures, such as GPUs.

  
[Video](https://www.youtube.com/watch?v=f0HNFgjXVpA&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=45&t=0s) [←Back](/lambdadays2020)

# Contact

[Contact Us](https://www.lambdadays.org/lambdadays2020/#contact) \* [Register](https://www.lambdadays.org/lambdadays2020/#register)

 [![facebook icon](/static/upload/media/1407736708498708fb_glowna.png)](https://www.facebook.com/events/624296757687805/?context=create&source=49) [ ![twitter icon](/static/upload/media/1407736735506811tw_glowna.png) ](https://twitter.com/LambdaDays) [![lanyrd icon](/static/upload/media/1407736760562017l_glowna.png)](http://lanyrd.com/2015/lambdadays/) 

var collapseHeight = $('.to-collapse').height(); var backgroundPosition = $('.to-collapse').css('background-position').split(" "); $(window).scroll(function(){ if($(this).scrollTop() < collapseHeight){ $('.to-collapse').css({'height': (collapseHeight - $(this).scrollTop())+'px'}); $('.to-collapse').css({'background-position': backgroundPosition\[0\]+' '+(parseInt(backgroundPosition\[1\]) - $(this).scrollTop())+'px'}); }else{ $('.to-collapse').css({'height': '0px'}); } }); $('#top-nav').onePageNav({ currentClass: 'active', changeHash: true, scrollSpeed: 750, filter: ':not(.external)' }); $('.register-button').click(function() { $('.register-link').click(); }); $(".dropdown").on('shown.bs.dropdown', function (e) { //function called when dropdown-menu becomes visible var dropdownMenu = $('ul:first', this); //find dropdown-menu //if element was moved to left, set left back to 0 for next calculations $(this).find(".dropdown-menu").first().css('left', 0); var offset = dropdownMenu.offset(); var leftOffset = offset.left; var width = dropdownMenu.width(); var documentWidth = $(document).width(); var sticksOutRightSide = leftOffset + width - documentWidth; if (sticksOutRightSide > 0) { $(this).find(".dropdown-menu").first().css('left', -(sticksOutRightSide + 20)); } }); (function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-67917061-1', 'auto'); ga('send', 'pageview'); gaJsHost = "https://ssl."; document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); try { var pageTracker = \_gat.\_getTracker("UA-235575-6"); pageTracker.\_trackPageview(); } catch(err) {} piAId = '24452'; piCId = '1532'; (function() { function async\_load(){ var s = document.createElement('script'); s.type = 'text/javascript'; s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js'; var c = document.getElementsByTagName('script')\[0\]; c.parentNode.insertBefore(s, c); } if(window.attachEvent) { window.attachEvent('onload', async\_load); } else { window.addEventListener('load', async\_load, false); } })();
