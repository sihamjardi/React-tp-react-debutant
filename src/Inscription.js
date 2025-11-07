import { useState, useContext } from "react";
import { UtilisateurContext } from "./UtilisateurContext";

function Inscription() {
  const { setUtilisateur } = useContext(UtilisateurContext);

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUtilisateur({ nom, email, connecte: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={motdepasse} onChange={(e) => setMotdepasse(e.target.value)} />
      <button type="submit">S’inscrire</button>
    </form>
  );
}

export default Inscription;
