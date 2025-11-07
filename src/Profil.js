import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const deconnexion = () => setUtilisateur({ nom: '', connecte: false });
  const reconnexion = () => setUtilisateur({ nom: 'Alice', connecte: true });

  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <p>Bienvenue, {utilisateur.nom}</p>
          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <>
          <p>Veuillez vous connecter.</p>
          <button onClick={reconnexion}>Se reconnecter</button>
        </>
      )}
    </div>
  );
}

export default Profil;
