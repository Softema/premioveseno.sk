(function () {

  const BASE = 'https://cdn.jsdelivr.net/gh/Softema/premioveseno.sk@main/';

  function injectAfter(selector, file, tries) {
    tries = tries || 0;
    var target = document.querySelector(selector);
    if (!target) {
      if (tries < 20) setTimeout(function () { injectAfter(selector, file, tries + 1); }, 300);
      return;
    }
    fetch(BASE + file + '?v=' + Date.now())
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        target.parentNode.insertBefore(wrapper, target.nextSibling);
      });
  }

  function injectReplace(selector, file, tries) {
    tries = tries || 0;
    var target = document.querySelector(selector);
    if (!target) {
      if (tries < 20) setTimeout(function () { injectReplace(selector, file, tries + 1); }, 300);
      return;
    }
    fetch(BASE + file + '?v=' + Date.now())
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        target.parentNode.replaceChild(wrapper, target);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {

    // 1. Banner "Oslňujúca chuť z horských lúk!"
    // injectAfter('#products-1', 'banner-hory.html');

    // 2. Posledné komentáre
    // injectAfter('#products-2', 'posledne-komentare.html');

    // 3. Posledné hodnotenia (za komentáre)
    // injectAfter('#products-2', 'posledne-hodnotenia.html');

    // 4. Welcome sekcia
    injectAfter('.homepage-latest-contribution-full-width', 'welcome-sekcia.html');

    // 5. Footer
    injectReplace('#footer', 'footer.html');

  });

})();
