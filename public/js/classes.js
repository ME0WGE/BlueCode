/**
|====================================================================|
|                                                                    |
|                            Classes                                 |
|                                                                    |
|====================================================================|
 */
/**
 * Classe Joueur 
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
//                      Player
export class Player {
  constructor(
    name = "String",
    nb = 0,
    attack = 0, // Values between 0 - 60 (60 - 90 if attacker)
    defense = 0, // Values between 0 - 60 (60 - 90 if defender)
    speed = 0, // Values between 0 - 60 (60 - 90 if attacker)
    reflex = 0, // Values between 0 - 60 (60 - 90 if goalkeeper)
    foot = [],
    fatigue = 0,
    hasBall = true
  ) {
    this.name = name;
    this.nb = nb;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.reflex = reflex;
    this.foot = foot;
    this.fatigue = fatigue;
    this.hasBall = hasBall;
  }
  dribble = (opponent) => {
    if (this.hasBall) {
      let dribbleAttack = [(this.attack * speed) / 100] - this.fatigue;
      // VS
      let dribbleDefense = [(this.defense * this.reflex) / 100] - this.fatigue;
    }
    if (dribbleAttack > dribbleDefense) {
      console.log(`Successful dribble!`);
    } else {
      console.log(`Unsuccesful dribble!`);
      opponent.hasBall = true;
      this.fatigue += 5;
    }
  };
  shoot = (goalkeeper) => {
    if (this.hasBall) {
      let attackGoal = [(this.attack * speed) / 100] - this.fatigue;
      // VS
      let defendGoal = [(this.defense * this.reflex) / 100] - this.fatigue;
    }
    if (attackGoal > defensdGoal) {
      Team.score += 1;
    } else {
      goalkeeper.hasBall = true;
      this.fatigue += 5;
    }
  };
}
/**
 Classe Équipe 
●  nom 
●  couleur 
●  joueurs (array vide) 
●  palmarès (array vide) → tableau d’objets : {numeroJoueur: XX, but: XX} 
●  Chaque but modifie l'objet du joueur concerné (ex : {Joueur: 9, but: 2}) 
Composition : 
●  2 attaquants 
●  2 défenseurs 
●  1 gardien
 */
//                      Team
export class Team {
  constructor(name = "", colour = "", players = [], score = 0) {
    this.name = name;
    this.colour = colour;
    this.players = players;
    this.palmares = [{ playerNb: 0, goal: 0 }];
    this.score = 0;
  }
}
