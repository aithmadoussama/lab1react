# TP 1 : Création d'une application React simple (Composants et Props)


Ce projet est un TP d'introduction à React. Il permet de découvrir les bases du framework à travers des composants simples.

---

## Structure du projet

```
tp1/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── user.jpg
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── Greeting.js
│   ├── HelloWorld.js
│   ├── Profil.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
```

---

## Installation et lancement

1. Installer les dépendances :

```bash
npm install
```

2. Lancer l'application :

```bash
npm start
```

---

##  Composants du projet

### 🔹 HelloWorld

Composant simple qui affiche un message.

```javascript
function HelloWorld() {
  return <h1>Hello World</h1>;
}

export default HelloWorld;
```

---

### 🔹 Greeting

Composant utilisant les props pour afficher un nom.

```javascript
function Greeting(props) {
  return <h2>Bonjour {props.name} !</h2>;
}

export default Greeting;
```

---

### 🔹 Profil

Composant affichant un profil utilisateur avec une image.

```javascript
function Profil() {
  return (
    <div>
      <h2>Mon Profil</h2>
      <img src="/user.jpg" alt="user" width="150" />
    </div>
  );
}

export default Profil;
```

---

### 🔹 App.js

Composant principal qui regroupe tous les composants.

```javascript
import './App.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Greeting name="Oussama" />
      <Profil />
    </div>
  );
}

export default App;
```

---

### 🔹 index.js

Point d'entrée de l'application React.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

## Objectifs du TP

- Comprendre la structure d’un projet React  
- Créer et utiliser des composants  
- Utiliser les props pour passer des données  
- Organiser un projet React  

---

## Technologies utilisées

- React  
- JavaScript (ES6)  
- HTML  
- CSS  

---

## 📌 Conclusion

Ce TP constitue une première approche de React en manipulant des composants simples et en structurant une application.

---
