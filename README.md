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

#### Télécharger la version stable

1. Va sur la page [Releases](https://github.com/Spaghetih/hellowork-smart-filter/releases)
2. Télécharge le fichier `.zip` de la dernière version
3. Dézippe le fichier où tu veux
4. Ouvre `chrome://extensions`
5. Active le **mode développeur** (coin supérieur droit)
6. Clique sur **"Charger l’extension non empaquetée"**
7. Sélectionne le dossier **dézippé**

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
## 🎥 Démo en action

![Demo GIF](HelloWork-Blacklist.gif)

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
