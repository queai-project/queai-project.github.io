  // Scroll reveal
  const obs = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.08, rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  document.querySelectorAll('.mcard, .ccard, .pcard').forEach((el,i) => { el.style.transitionDelay = `${i*0.055}s`; });

  // Copy install command
  function copyInstall() {
    navigator.clipboard.writeText('curl -fsSL https://queai.dev/install.sh | bash').then(() => {
      const btn = document.getElementById('copyBtn');
      btn.textContent = '✓ Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy';
        btn.classList.remove('copied');
      }, 2200);
    });
  }

  // Module filter
  function filterMods(btn, type) {
    document.querySelectorAll('.dbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.mcard').forEach(card => {
      card.style.display = (type === 'all' || card.dataset.d.includes(type)) ? '' : 'none';
    });
  }

  // Active nav highlight
  const secs = document.querySelectorAll('section[id]');
  const nlinks = document.querySelectorAll('.nav-links a');
  new IntersectionObserver(es => {
    es.forEach(e => {
      if(e.isIntersecting) {
        nlinks.forEach(a => a.style.color = '');
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if(a) a.style.color = '#fff';
      }
    });
  }, {threshold:0.45}).observe(secs[0]);
  secs.forEach(s => new IntersectionObserver(es => {
    es.forEach(e => {
      if(e.isIntersecting){
        nlinks.forEach(a=>a.style.color='');
        const a=document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if(a)a.style.color='#fff';
      }
    });
  },{threshold:0.45}).observe(s));
// Copy-to-clipboard para los comandos del Get Started.
window.copyCmd = function(btn) {
  const cmd = btn.parentElement?.dataset?.cmd;
  if (!cmd) return;
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = cmd; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch(_) {}
    document.body.removeChild(ta);
  };
  const finish = () => {
    const orig = btn.textContent;
    btn.textContent = 'COPIED';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1400);
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(cmd).then(finish, () => { fallback(); finish(); });
  } else { fallback(); finish(); }
};
