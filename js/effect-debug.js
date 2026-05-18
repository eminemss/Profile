// Debug helper for the hero particles effect
(function () {
  function log(msg) {
    try { console.log('[effect-debug]', msg); } catch (e) {}
  }

  window.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('particles-js');
    log('particles-js element: ' + (el ? 'FOUND' : 'MISSING'));
    log('effectJS type: ' + (typeof window.effectJS));
    log('particlesJS type: ' + (typeof window.particlesJS));

    // Try a fallback: if particlesJS exists, render using it.
    if (typeof window.particlesJS === 'function' && el) {
      // Ensure the first run uses current theme
      var isDark = !!(document.body && document.body.classList && document.body.classList.contains('dark-mode'));
      log('Theme detected (dark-mode class): ' + isDark);
      
      // Try a fallback: if particlesJS exists, render using it.
      try {
        log('Running particlesJS fallback');
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: (document.body && document.body.classList && document.body.classList.contains('dark-mode')) ? '#ffffff' : '#000000' },
            shape: { type: '' },
            opacity: { value: 0.9, random: false },
            size: { value: 1, random: true },
            line_linked: { enable: true, distance: 200, opacity: 0.9, width: 1 },
            move: { enable: true, speed: 4, direction: 'none', random: false, out_mode: 'out' }
          },
          
          retina_detect: true
        });
      } catch (e) {
        log('particlesJS fallback error: ' + e);
      }
    } else {
      log('particlesJS not available; fallback skipped');
    }
  });
})();

