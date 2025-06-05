(function () {
  'use strict';

  function masquerOffres(motsClesExclus) {
    const blocs = document.querySelectorAll("div[data-cy='serpCard']");
    blocs.forEach(bloc => {
      const texte = bloc.innerText.toLowerCase();
      const match = motsClesExclus.find(mot => texte.includes(mot.toLowerCase()));
      if (match) {
        const blocComplet = bloc.closest("div.tw-group");
        if (blocComplet && !blocComplet.classList.contains("hw-masque")) {
          blocComplet.classList.add("hw-masque");
          blocComplet.innerHTML = `
            <div style="padding: 1rem; background: #f9f9f9; border: 1px solid #ddd; font-style: italic; color: #666; border-radius: 4px;">
              🔒 Annonce masquée : entreprise "${match}" bloquée par votre filtre.
            </div>
          `;
        }
      }
    });
  }

  function loadAndRun() {
    chrome.storage.sync.get(['blacklist'], (data) => {
      const motsClesExclus = data.blacklist || [];
      masquerOffres(motsClesExclus);

      const observer = new MutationObserver(() => {
        masquerOffres(motsClesExclus);
      });
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  window.addEventListener("load", loadAndRun);
})();
