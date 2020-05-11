// load cookie consent
$.getScript("/static/upload/media/cookie-consent.js");

function isEdition(path, edition) {
    if (path.startsWith("/lambdadays" + edition)) {
        return true
    }
    else {
        return false
    }
};


function loadAssets(edition) {
  jsPath = "/static/upload/media/theme-" + edition + ".js";
  cssPath = "/static/upload/media/theme-" + edition + ".css";
  $.getScript(jsPath);
  $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: cssPath
  }).appendTo("head");
};

$(document).ready(function() {
    const path = window.location.pathname;
    // load edition-specific assets
    if (isEdition(path, "2015")) {
      loadAssets("2015");
    }
    else if (isEdition(path, "2016")) {
      loadAssets("2016");
    }
    else if (isEdition(path, "2017")) {
      loadAssets("2017");
    }
    else if (isEdition(path, "2018")) {
      loadAssets("2018");
    }
    else if (isEdition(path, "2019")) {
      loadAssets("2019");
    }
    else if (isEdition(path, "2020")) {	
      loadAssets("2020");
    }	     
});
