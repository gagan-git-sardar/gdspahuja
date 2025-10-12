// main.js - minimal interactions (kept intentionally light to mirror original behavior)
document.addEventListener('DOMContentLoaded', function(){
  // simple fade-in animation for sections
  const els = document.querySelectorAll('main section, .job');
  els.forEach((el, i)=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(10px)';
    setTimeout(()=>{
      el.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 160 * i);
  });
});
