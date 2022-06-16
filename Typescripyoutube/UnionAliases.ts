function logDateils(uid: number | string, item: string) {
  // usando o union | para definir tanto o numero como o string.
  console.log(`A product with ${uid} has a title as ${item}`);
}

logDateils(123, "sapato");
logDateils("123", "sapato");

//type Alias
//Como o próprio nome diz, o alias de tipo apenas cria um apelido para um tipo existente.
// O alias não gera um tipo, só dá um novo nome, um apelido para ele.
type Uid = number | string;
function logDateils1(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

logDateils1(123, "sapato");
logDateils1("123", "sapato");

type Platform = "Windows" | "Linux" | "MacOS";
function rederPlatform(platform: Platform) {
  return platform;
}
rederPlatform("Windows"); //Define previamente os tipos que podem ser usados no código.
