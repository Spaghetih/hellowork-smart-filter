# 🧩 HelloWork Smart Filter

Une extension Chrome & Firefox pour **filtrer automatiquement les offres d'emploi** contenant des entreprises indésirables (ex: écoles qui postent leurs propres formations comme "alternances").

---

## 🚀 Fonctionnalités

- ✅ Masque automatiquement les offres HelloWork contenant des noms blacklistés (ex: `IESA`, `Walter Learning`)
- 🧠 Liste personnalisable via une popup moderne
- 🧾 Interface simple, claire et responsive
- 🌐 Compatible avec Chrome, Firefox, Brave, Edge...

---

## 📦 Installation

### 🔧 Mode développeur (Chrome)
1. Télécharge ce dépôt (`Code` → `Download ZIP`) ou clone-le :
   ```bash
   git clone https://github.com/votre-utilisateur/hellowork-smart-filter.git
   ```
2. Va dans `chrome://extensions`
3. Active le **mode développeur**
4. Clique sur **"Charger l’extension non empaquetée"**
5. Sélectionne le dossier du projet dézippé

---

## 🧰 Utilisation

1. Clique sur l’icône de l’extension dans ta barre d’extensions
2. Ajoute les noms des entreprises à bloquer (un par ligne)
3. Clique sur 💾 Enregistrer
4. Recharge la page [HelloWork](https://www.hellowork.com)

Les offres contenant ces mots-clés seront remplacées par :
```
🔒 Annonce masquée : entreprise "XYZ" bloquée par votre filtre.
```

---

## ✨ Exemple

```text
IESA
Walter Learning
MaSuperEcole
```

---

## 📄 Fichiers principaux

| Fichier        | Rôle                                      |
|----------------|-------------------------------------------|
| `manifest.json`| Déclaration de l'extension                |
| `popup.html`   | Interface utilisateur                     |
| `popup.js`     | Gestion de la liste noire (chrome.storage)|
| `content.js`   | Script injecté dans HelloWork pour filtrer|

---

## 🛡️ Respect de la vie privée

Aucune donnée n'est collectée. Tout reste en local via `chrome.storage.sync`.

---

## 📤 Licence

MIT – Utilisation libre et gratuite.
