// BaoLab Confetti — fires on ANY variant selection for ADB + Passenger Screen
(function(){
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  s.onload=function(){
    function boom(x,y){
      confetti({particleCount:150,spread:100,origin:{x:x,y:y},colors:['#f97316','#ffffff','#fbbf24'],ticks:80,gravity:0.8});
    }

    // Listen for variant SELECT/INPUT changes
    document.addEventListener('change',function(e){
      var tag = e.target.tagName;
      if(tag!=='SELECT'&&tag!=='INPUT') return;
      if(!e.target.closest('variant-selects, .product-form__input, .product-form')) return;
      var rect=e.target.getBoundingClientRect();
      setTimeout(function(){boom((rect.x+rect.width/2)/window.innerWidth,rect.y/window.innerHeight)},300);
    });

    // Listen for variant button/radio clicks
    document.addEventListener('click',function(e){
      var el=e.target;
      var variantEl = el.closest('.product-form__input label, .product-form__input button, fieldset label, .variant-input label');
      if(!variantEl) return;
      if(!variantEl.closest('variant-selects, .product-form__input, .product-form')) return;
      setTimeout(function(){boom(e.clientX/window.innerWidth,e.clientY/window.innerHeight)},300);
    });
  };
  document.head.appendChild(s);
})();
