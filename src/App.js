import HelloWorld from "./HelloWorld";
import Greeting from "./Greeting";
import Profil from "./Profil";




function App() {

  const utilisateur = {
    nom: "Brendan Eich",
    photo: "/user.jpg"
  }

  return (
    <div>
      < HelloWorld />
      <Greeting prenom="Oussama" />
      <Greeting prenom="Omar" />

      <Profil utilisateur={utilisateur} taille={150} />
    </div>
  )

}

export default App;

