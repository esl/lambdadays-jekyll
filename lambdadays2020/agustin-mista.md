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

  

 [![](/static/img/github.png)](http://www.github.com/agustinmista) 

### Agustín Mista

PhD Student at Chalmers University of Technology  

Agustín is a PhD student in the Information Security division at Chalmers. He previously received his Licentiate degree in Computer Science from the National University of Rosario, in Argentina. His research focuses on using functional programming to develop novel automatic testing tools, especially when it comes to random testing.

#### Automated Reification of Source Annotations for Monadic EDSLs

Embedded Domain-Specific Languages (EDSLs) are an alternative to quickly implement specialized languages without the need to write compilers or interpreters from scratch. In this territory, Haskell is a prime choice as the host language. EDSLs in Haskell, however, are often incapable of reifying useful static information from the source code, namely variable binding names and source locations. Not having access to variable names directly affects EDSLs designed to generate low-level code, where the variables names in the generated code do not match those found in the source code—thus broadening the semantic gap among source and target code. Similarly, many existing EDSLs produce poor error messages due to the lack of knowledge of source locations where errors are generated.  
  
In this work, we propose a simple technique for enhancing monadic EDSLs expressed using do notation. This technique employs source-to-source plugins, a relatively new feature of GHC, to annotate every do statement of our EDSLs with relevant information extracted from the source code at compile time. We show how these annotations can be incorporated into EDSL designs either directly inside values or as monadic effects. We provide BinderAnn, a GHC source plugin implementing our ideas, and evaluate it by enhancing existing real-world EDSLs with relatively minor modification efforts to contemplate the source-level static information related to variables names and source locations.

[Slides](https://lambdadays-prod.s3.amazonaws.com/presentations/Augusting+Mista+-+Automated+Reification+of+Source+Annotations+for+Monadic+EDSLs.pptx)  
[Video](https://www.youtube.com/watch?v=poD6dRwBNQg&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=36&t=0s) [←Back](/lambdadays2020)

# Contact

[Contact Us](https://www.lambdadays.org/lambdadays2020/#contact) \* [Register](https://www.lambdadays.org/lambdadays2020/#register)

 [![facebook icon](/static/upload/media/1407736708498708fb_glowna.png)](https://www.facebook.com/events/624296757687805/?context=create&source=49) [ ![twitter icon](/static/upload/media/1407736735506811tw_glowna.png) ](https://twitter.com/LambdaDays) [![lanyrd icon](/static/upload/media/1407736760562017l_glowna.png)](http://lanyrd.com/2015/lambdadays/) 

var collapseHeight = $('.to-collapse').height(); var backgroundPosition = $('.to-collapse').css('background-position').split(" "); $(window).scroll(function(){ if($(this).scrollTop() < collapseHeight){ $('.to-collapse').css({'height': (collapseHeight - $(this).scrollTop())+'px'}); $('.to-collapse').css({'background-position': backgroundPosition\[0\]+' '+(parseInt(backgroundPosition\[1\]) - $(this).scrollTop())+'px'}); }else{ $('.to-collapse').css({'height': '0px'}); } }); $('#top-nav').onePageNav({ currentClass: 'active', changeHash: true, scrollSpeed: 750, filter: ':not(.external)' }); $('.register-button').click(function() { $('.register-link').click(); }); $(".dropdown").on('shown.bs.dropdown', function (e) { //function called when dropdown-menu becomes visible var dropdownMenu = $('ul:first', this); //find dropdown-menu //if element was moved to left, set left back to 0 for next calculations $(this).find(".dropdown-menu").first().css('left', 0); var offset = dropdownMenu.offset(); var leftOffset = offset.left; var width = dropdownMenu.width(); var documentWidth = $(document).width(); var sticksOutRightSide = leftOffset + width - documentWidth; if (sticksOutRightSide > 0) { $(this).find(".dropdown-menu").first().css('left', -(sticksOutRightSide + 20)); } }); (function(i,s,o,g,r,a,m){i\['GoogleAnalyticsObject'\]=r;i\[r\]=i\[r\]||function(){ (i\[r\].q=i\[r\].q||\[\]).push(arguments)},i\[r\].l=1\*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)\[0\];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-67917061-1', 'auto'); ga('send', 'pageview'); gaJsHost = "https://ssl."; document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); try { var pageTracker = \_gat.\_getTracker("UA-235575-6"); pageTracker.\_trackPageview(); } catch(err) {} piAId = '24452'; piCId = '1532'; (function() { function async\_load(){ var s = document.createElement('script'); s.type = 'text/javascript'; s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js'; var c = document.getElementsByTagName('script')\[0\]; c.parentNode.insertBefore(s, c); } if(window.attachEvent) { window.attachEvent('onload', async\_load); } else { window.addEventListener('load', async\_load, false); } })();
