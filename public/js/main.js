/*
|====================================================================|
|                                                                    |
|                            Imports                                 |
|                                                                    |
|====================================================================|
 */
import {
  Player,
  Team,
  team1,
  team2,
  player1Team1,
  player2Team1,
  player3Team1,
  player4Team1,
  player5Team1,
  player1Team2,
  player2Team2,
  player3Team2,
  player4Team2,
  player5Team2,
  dribbleResult,
} from "./classes.js";

/*
Fonction match(equipe1, equipe2) 
●  Création d'un tableau de stats : affiche les buts inscrits par équipe 
●  Coup de sifflet départ : la balle est donnée aléatoirement à un attaquant d'une des 
deux équipes 
Déroulé du match : 
●  Le joueur qui a la balle tente un dribble sur un attaquant adverse 
●  Si réussi, il tente un dribble sur un défenseur adverse 
●  Si encore réussi, il tire contre le gardien 
●  Si but : ajout au palmarès, mise à jour des stats, et la balle passe à un joueur 
aléatoire de l'équipe adverse 
●  Si échec à un dribble ou au tir : la balle passe à l'adversaire sur lequel le dribble ou 
tir a échoué 
●  Fatigue augmente de 5 à chaque action 
●  ATTENTION: Veillé a ce que la balle finisse toujours dans le pied d'un joueur... 
Durée : 
●  Pour le niveau intermédiaire et expert : chaque action d’un joueur représente 5 
unités de temps. Une fois que le compteur atteint 300, le match s’arrête (soit 1 
minute virtuelle). 
Fin de match : 
●  Console.log du score final et détermination de l'équipe gagnante 
●  En cas d'égalité : 
○  Message "Prolongation" 
○  Random entre les deux équipes : une seule reste 
○  Cette équipe gagne 1 but supplémentaire dans son palmarès (ajouté au 
premier objet) 
○  Durée : 40 secondes supplémentaires (soit 200 unités) 
 */
function match(team1, team2, attacker1, attacker2) {
  let team1Stats = team1.score[0].score;
  let team2Stats = team2.score[0].score;
  console.log(team1Stats, team2Stats);

  let whistle = Math.random(0, 1);
  whistle = Math.round(whistle);
  console.log(whistle);

  switch (whistle) {
    case 0:
      attacker1.hasBall.push("hasBall");
      attacker1.dribble(attacker2);
      if (dribbleResult === true) {
        console.log(
          `${attacker1.name} realised a successfull dribble on ${attacker2.name}`
        );
      } else {
        console.log(
          `${attacker1.name} realised an unsuccessfull dribble on ${attacker2.name} and humiliated themselves`
        );
      }
      break;
    case 1:
      attacker2.hasBall.push("hasBall");
      attacker2.dribble(attacker1);
      break;
  }
  console.log(attacker1.hasBall);
  console.log(attacker2.hasBall);
}
match(team1, team2, player1Team1, player2Team2);
