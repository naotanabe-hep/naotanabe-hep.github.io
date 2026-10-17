(() => {
 const main = document.querySelector('main');
 const pages = ['profile','research','cv'];
 let lang = new URLSearchParams(location.search).get('lang');
 if (!['en','ja'].includes(lang)) { try { lang = localStorage.getItem('language'); } catch {} }
 if (!['en','ja'].includes(lang)) lang = 'en';
 let rendering = Promise.resolve();
 function render() {
  const page = pages.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'profile';
  const chosenLang = lang;
  rendering = rendering.catch(() => {}).then(async () => {
   // Wait for MathJax's startup pass before replacing any already-typeset content.
   if (window.MathJax?.startup?.promise) await MathJax.startup.promise;
   if (window.MathJax?.typesetClear) MathJax.typesetClear([main]);
   main.innerHTML = siteContent[chosenLang][page];
   document.documentElement.lang = chosenLang;
   document.title = `Naozumi Tanabe | ${siteContent[chosenLang].nav[pages.indexOf(page)]}`;
   document.querySelector('.brand span').textContent = siteContent[chosenLang].discipline;
   document.querySelectorAll('[data-page]').forEach((a,i) => { a.textContent = siteContent[chosenLang].nav[i]; if(a.dataset.page===page) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
   document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.lang===chosenLang)));
   if(window.MathJax?.typesetPromise) await MathJax.typesetPromise([main]);
  });
 }
 document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => {
  lang=button.dataset.lang;
  try {localStorage.setItem('language',lang);} catch {}
  const url = new URL(location.href); url.searchParams.set('lang',lang); history.replaceState(null,'',url);
  render();
 }));
 window.addEventListener('hashchange',() => {render(); window.scrollTo(0,0); main.focus({preventScroll:true});});
 window.addEventListener('popstate',() => { const value = new URLSearchParams(location.search).get('lang'); if(['en','ja'].includes(value)) lang=value; render(); });
 render();
})();
