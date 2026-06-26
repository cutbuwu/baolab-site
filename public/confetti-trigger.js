// BaoLab Confetti for Engineer tier (bundled with canvas-confetti)
(function(){
  // Load confetti library dynamically
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  s.onload=function(){
    function triggerConfetti(){
      confetti({particleCount:200,spread:120,origin:{y:0.6},colors:['#f97316','#ffffff','#fbbf24','#000000']});
    }
    // Watch for variant selection changes
    document.addEventListener('change',function(e){
      var t=e.target;
      var val='';
      if(t.value) val=t.value;
      // Also check selected text for select elements
      if(t.tagName==='SELECT'&&t.selectedIndex>=0){
        val=t.options[t.selectedIndex].text||t.value;
      }
      if(val.indexOf('Engineer')!==-1){
        triggerConfetti();
      }
    });
    // Also watch for clicks on variant labels/buttons
    document.addEventListener('click',function(e){
      var el=e.target;
      var text=el.textContent||el.innerText||'';
      if(text.indexOf('Engineer')!==-1){
        setTimeout(triggerConfetti,100);
      }
    });
  };
  document.head.appendChild(s);
})();
