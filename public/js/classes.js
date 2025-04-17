/**
Classe Joueur 
●  nom 
●  numéro (ex : 10) 
●  position : "attaquant", "défenseur" ou "gardien" 
●  attaque : entre 0 et 60 (ou entre 60 et 90 si attaquant) 
●  défense : entre 0 et 60 (ou entre 60 et 90 si défenseur) 
●  vitesse : entre 0 et 60 (ou entre 60 et 90 si attaquant) 
●  réflexe : entre 0 et 60 (ou entre 60 et 90 si gardien) 
●  pied : array vide 
●  fatigue : 0 
Méthodes 
dribble(adversaire) 
●  Si le joueur a la balle : 
○  Calcule : ([attaque * vitesse / 100] - fatigue) VS ([défense * réflexe / 100] - 
fatigue) de l’adversaire 
○  Si le calcul du joueur est supérieur, le dribble est réussi et il passe 
l'adversaire 
○  Sinon, le dribble échoue et l'adversaire récupère la balle 
○  Fatigue +5 
tir(gardien) 
●  Même logique que le dribble, mais contre un gardien 
●  Si réussi : but, +1 goal dans le palmarès de l'équipe 
●  Sinon : balle au gardien 
●  Fatigue +5
 */
export class Player {
  constructor(
    nom = String,
    nb = Number,
    attack = Number,
    defense = Number,
    speed = Number,
    reflex = Number,
    foot = [],
    fatigue = Number
  ) {}
}
