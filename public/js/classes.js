/*
|====================================================================|
|                                                                    |
|                            Classes                                 |
|                                                                    |
|====================================================================|
 */
/*
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
/**
 *  attack = Values between 0 - 60 (60 - 90 if attacker);
    defense = Values between 0 - 60 (60 - 90 if defender);
    speed = 0 Values between 0 - 60 (60 - 90 if attacker);
    reflex = 0 Values between 0 - 60 (60 - 90 if goalkeeper);
 */
//                      Player
export class Player {
  constructor(
    name = "String",
    nb = 0,
    attack = 0,
    defense = 0,
    speed = 0,
    reflex = 0,
    foot = [],
    fatigue = 0,
    hasBall = []
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
      var dribbleAttack = [(this.attack * this.speed) / 100] - this.fatigue;
      // VS
      var dribbleDefense =
        [(opponent.defense * opponent.reflex) / 100] - opponent.fatigue;
    }
    if (dribbleAttack > dribbleDefense) {
      console.log(`Successful dribble!`);
      dribbleResult = true;
    } else if (dribbleAttack < dribbleDefense) {
      console.log(`Unsuccesful dribble!`);
      dribbleResult = false;
      opponent.hasBall.push("hasBall");
      this.hasBall.pop();
      this.fatigue += 5;
    } else if (dribbleAttack == dribbleDefense) {
      console.log("test");
    }
  };
  shoot = (goalkeeper) => {
    if (this.hasBall) {
      let goalAttack = [(this.attack * this.speed) / 100] - this.fatigue;
      // VS
      let goalDefense = [(this.defense * this.reflex) / 100] - this.fatigue;
    }
    if (goalAttack > goalDefense) {
      Team.score[0].score += 1;
    } else if (goalAttack < goalDefense) {
      goalkeeper.hasBall = true;
      this.fatigue += 5;
    }
  };
}
/*
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
  constructor(name = "", colour = "", players = [], score = [{}]) {
    this.name = name;
    this.colour = colour;
    this.players = players;
    this.palmares = [{ playerNb: 0, goal: 0 }];
    this.score = [{ Player: Player.name, score: 0 }];
  }
}
/*
|====================================================================|
|                                                                    |
|                           Instances                                |
|                                                                    |
|====================================================================|
 */
export let dribbleResult = Boolean;
// Teams
export let team1 = new Team("CastorLovers", "brown", 5, 0);
export let team2 = new Team("AngryBobers", "red", 5, 0);
// Players
export let player1Team1 = new Player("Toupie", 42, 75, 40, 80, 15, [], 0, []); // Attack
export let player2Team1 = new Player("Saturne", 42, 75, 40, 80, 15, [], 90, []); // Goalkeeper
export let player3Team1 = new Player("Toto", 42, 75, 40, 80, 15, [], 0, []); // Defense
export let player4Team1 = new Player("Matcha", 42, 75, 40, 80, 15, [], 0, []); // Attack
export let player5Team1 = new Player("Snoop", 42, 75, 40, 80, 15, [], 0, []); // Defense

export let player1Team2 = new Player(
  "Trippi Troppi",
  42,
  75,
  40,
  42,
  15,
  [],
  0,
  []
); // Attack
export let player2Team2 = new Player(
  "Bombardiro Crocodillo",
  42,
  75,
  40,
  40,
  80,
  [],
  0,
  []
); // Defense
export let player3Team2 = new Player(
  "Tralalero Tralala",
  42,
  75,
  40,
  80,
  15,
  [],
  0,
  []
); // Attacker
export let player4Team2 = new Player(
  "Tung Tung Tung Sahur",
  42,
  75,
  40,
  80,
  15,
  [],
  0,
  []
); // Defense
export let player5Team2 = new Player(
  "Brr Brr Patapim",
  42,
  75,
  40,
  80,
  15,
  [],
  0,
  []
); // Goalkeeper
