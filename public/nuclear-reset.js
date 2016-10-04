document.addEventListener("DOMContentLoaded", function() {
  function unstyle() {
    console.log("unstyled");
    var hitlist = document.querySelectorAll("style,link[rel=stylesheet]");
    Array.prototype.forEach.call( hitlist, function( node ) {
        node.parentNode.removeChild( node );
    });
    
    var inlined = document.querySelectorAll("[style]");
    Array.prototype.forEach.call( inlined, function( node ) {
        node.removeAttribute("style");
    });
  }
  unstyle();
  
  function summaryUnstyle(summaries) {
    //style attribute
    summaries[0].added.forEach(function(node) {
      node.removeAttribute("style");
    })
    
    //style tags
    summaries[1].added.forEach(function(node) {
      node.parentNode.removeChild( node );
    })
  }
  
  var observer = new MutationSummary({
    callback: summaryUnstyle,
    queries: [
      { attribute: "style" },
      { element: "style,link[rel=stylesheet]"}
      ]
  });
});