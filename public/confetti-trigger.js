// BaoLab Confetti for Engineer tier
(function() {
  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#f97316', '#ffffff', '#fbbf24', '#000000']
      });
    }
  }

  function checkEngineer() {
    document.querySelectorAll('input[type="radio"][name="option1"], input[type="radio"]').forEach(function(radio) {
      radio.addEventListener('change', function() {
        if (this.value && this.value.includes('Engineer')) {
          triggerConfetti();
        }
      });
    });

    // Also check for select dropdowns
    document.querySelectorAll('select[name="option1"]').forEach(function(select) {
      select.addEventListener('change', function() {
        if (this.value && this.value.includes('Engineer')) {
          triggerConfetti();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkEngineer);
  } else {
    checkEngineer();
  }
})();
