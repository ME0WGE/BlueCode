/**
|====================================================================|
|                                                                    |
|                            Imports                                 |
|                                                                    |
|====================================================================|
 */
import { Player, Team } from "./classes.js";

/**
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
function Match(team1, team2) {
  let team1Stats = [];
  let team2Stats = [];
}
