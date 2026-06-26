// BaoLab Confetti for Engineer tier (cursor position + delay)
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
    // Watch for variant selection changes
    document.addEventListener('change',function(e){
      var t=e.target;
      var val='';
      if(t.value) val=t.value;
      if(t.tagName==='SELECT'&&t.selectedIndex>=0){
        val=t.options[t.selectedIndex].text||t.value;
      }
      if(val.indexOf('Engineer')!==-1){
        // 1 second delay for Shopify to update price
        setTimeout(function(){triggerConfetti(t.getBoundingClientRect().x+50, t.getBoundingClientRect().y)}, 1000);
      }
    });
    // Also watch for clicks on variant labels/buttons
    document.addEventListener('click',function(e){
      var el=e.target;
      var text=el.textContent||el.innerText||'';
      if(text.indexOf('Engineer')!==-1){
        setTimeout(function(){triggerConfetti(e.clientX, e.clientY)}, 1000);
      }
    });
  };
  document.head.appendChild(s);
})();
