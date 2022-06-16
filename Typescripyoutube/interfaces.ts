// conjunto de dados para descrever a extrutura de um objeto.
// interface UserAccount {}
interface Game {
  id: number;
  title:string;
  description: string;
  genre:string;
  platform?:string[];
  getSimilars?:(tittle: string)=> void;//opção1:torna não obrigatório.
}

const tlou: Game = {
  id: 123,
  title:"The Last of Us",
  description: 'The best game in the world',
  genre: "Action",
  platform: ["PS4", "XBOX"],
  getSimilars(tittle: string) : void {
    console.log(`Similar games to ${tittle}: Uncharted,A Plague, Tale, Metro`);
  }
};
console.log(tlou.title);
if(tlou.getSimilars){
  tlou.getSimilars("tlou.title");
}// opção1:E verifica primeiro se existe o método.antes de executar.
interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftbehind: DLC = {
  id: 123,
  title: 'The Last of Us: Left Behind',
  description: 'You play as Ellie before the original game',
  genre: "Action",
  platform: ["PS4", "XBOX"],
  originalGame: tlou,
  newContent: ["New content", "New content 2"],
  /*getSimilars: function (tittle: string): void {
    throw new Error("Function not implemented.");
  }*/ //opção2:gera erro,propositalmente pois não existe a função. 
}
//incrementando classe
// a classe esta implementando a interface.
// e precisará ter todos os tipos de dados que a interface tem.
class Creategame implements Game {
  id: number;
  title:string;
  description: string;
  genre:string;

  constructor(t:string, d: string, g:string, id: number) {
    this.title = t;
    this.description = d;
    this.genre = g;
    this.id = id;
  }

}