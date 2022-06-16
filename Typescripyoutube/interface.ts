//Interfaces

//definição
interface Game {
  title: string;
}
interface DLC {
  extra: string;
}
//intersection
interface GameCollection extends Game, DLC {}
//implements
class CreateGame implements GameCollectionT {}
// declarar função
interface getSimilars {
  (title: string): string[];
}
//=========DIFERENÇAS===========
// não pode declarar tuplas
interface GameTuple {
  0: number;
  1: number;
}
[1, 2,3, 4, 5, 6, 7, 8, 9] as GameTuple;

// pode ter multiplas declarações e ele une de mesmo nome
interface JQuery {
  a: string;
}
interface JQuery {
  b: string;
}
const $ = {
  a: "a",
  b: "b",
}
//quando tiver criando libs, prefira interfaces pois são mais extensíveis.
//criando objetos/classes (POO).
