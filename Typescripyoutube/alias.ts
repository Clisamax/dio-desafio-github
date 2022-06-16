//Type Alias

// definição
type GameT = {
  title: string;
}
type DLCT = {
  extra: string;
}    
//intersection
type GameCollectionT = Game & DLCT & {content:boolean};
// è pósivel extender diretamente, mas um objeto & {content:boolean}.
//implements
class CreateGameT implements GameCollectionT {}
// declarar função
type getSimilarsT = (title: string) => string[];

//=========DIFERENÇAS===========
//permite declarar tipos primitivos
type IDT = string | number;

//pode declarar tuplas
type GameTupleT = [number, number];
[1,2,] as GameTuple;

//Apenas uma decaração por escopo

type JQueryT = {a: string};
type JQueryT = {b: string};

//na maioria das vezes, recomendado type alias.
//React - Props
