// BaoLab Confetti for Engineer tier v5
(function(){
  var fired=false;
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  s.onload=function(){
    function boom(x,y){
      confetti({particleCount:150,spread:100,origin:{x:x,y:y},colors:['#f97316','#ffffff','#fbbf24'],ticks:80,gravity:0.8});
    }
    document.addEventListener('change',function(e){
      var val=e.target.value||'';
      if(e.target.tagName==='SELECT'&&e.target.selectedIndex>=0){
        val=e.target.options[e.target.selectedIndex].text||val;
      }
      if(val.indexOf('Engineer')!==-1){
        fired=true;
        var rect=e.target.getBoundingClientRect();
        setTimeout(function(){boom((rect.x+rect.width/2)/window.innerWidth,rect.y/window.innerHeight)},800);
      } else {fired=false;}
    });
    document.addEventListener('click',function(e){
      var el=e.target;
      var label=el.closest('label');
      if(!label) return;
      var text=label.textContent||'';
      if(text.indexOf('Engineer')===-1) return;
      var radio=document.getElementById(label.getAttribute('for'));
      if(!radio) return;
      if(radio.value.indexOf('Engineer')!==-1&&!fired){
        fired=true;
        setTimeout(function(){boom(e.clientX/window.innerWidth,e.clientY/window.innerHeight)},800);
      }
    });
  };
  document.head.appendChild(s);
})();
