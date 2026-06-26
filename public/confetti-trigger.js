// BaoLab Confetti for Engineer tier (only when actually selected)
(function(){
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  s.onload=function(){
    function triggerConfetti(x,y){
      confetti({
        particleCount:150,
        spread:100,
        origin:{x:x/window.innerWidth, y:y/window.innerHeight},
        colors:['#f97316','#ffffff','#fbbf24','#000000'],
        ticks:80,
        gravity:0.8
      });
    }
    // Watch radio buttons — only fire when Engineer is the SELECTED value
    document.addEventListener('change',function(e){
      var t=e.target;
      if(t.type==='radio'&&t.name&&t.name.indexOf('option')!==-1){
        // Small delay to let Shopify update, then verify it's actually selected
        setTimeout(function(){
          if(t.checked&&t.value&&t.value.indexOf('Engineer')!==-1){
            triggerConfetti(t.getBoundingClientRect().x+50, t.getBoundingClientRect().y);
          }
        },1000);
      }
      // Select dropdowns
      if(t.tagName==='SELECT'){
        setTimeout(function(){
          var selected=t.options[t.selectedIndex];
          if(selected&&selected.text&&selected.text.indexOf('Engineer')!==-1){
            triggerConfetti(t.getBoundingClientRect().x+50, t.getBoundingClientRect().y);
          }
        },1000);
      }
    });
  };
  document.head.appendChild(s);
})();
