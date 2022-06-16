// boolean:(tre | false);
let isOpen: boolean;
isOpen = true;
// string:('foo', "foo", `foo`);
let message: string;
message = "foo";
// number:(1, 1.1, 1e10, 1e-10);(int, float, hex, binary);
let total: number;
total = 10;
// array:([] | [1, 2, 3]); array (type[]);
let items: number[];
items = [1, 2, 3];
let items1: string[];
items1 = ["1", "A", `c`];
let totals: Array<number>; // generic array
totals = [1, 2, 3];
// tuple:([1, "foo"] | [1, "foo", true]); array with fixed number of elements
let tuple: [number, string];
tuple = [1, "foo"];
// enum:(enum Color {Red, Green, Blue});
enum Color {
  white = "#fff",
  black = "#000",
}
//any(qualquer coisa);
let coisa: any;
coisa = 1;
coisa = "foo";
coisa = true;
// void:(vazio); serve para tipar funções que não retorna nada;
function logger(): void {
  console.log("foo");
}
//null e undefined:(null | undefined);
type Bla = string | null | undefined;
//never:(nunca retorna);
function error(message: string): never {
  throw new Error("Erro");
}
//object:({} | object); tudo que não é string, number, boolean, array, tuple, enum, null ou undefined;
let cart: object;
cart = {
  key: "value",
  key1: "value1",
};
