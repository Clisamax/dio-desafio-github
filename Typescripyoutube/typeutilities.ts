type Todo = {
  title: string;
  description: string;
  completed: boolean;
}
const todo: Readonly<Todo> = { // Readonly<Todo> permitindo só ler os dados. não é possível alterar os dados.
  title: 'Assistir aula de TypeScript',
  description: 'Aula sobre como programar em TypeScript',
  completed: false,
}
console.log(todo);
//todo.completed = true;
//uma opção para editar, seria criar uma função que retorna novo objeto.
//Partial
function updateTodo(todo: Todo, fieldsToUpdate:Partial<Todo>){ //Partial<Todo> torna os campos opcionais.
  return {...todo, ...fieldsToUpdate};
}
const todo2 = updateTodo(todo, {completed: true});
console.log(todo2);
//... preds operator está pegando as propriedades uma a uma. passando propriedade a propriedade.
//// Pick
//pegar somente as propriedades que queremos.
type todoPreview = Pick<Todo, 'title' | 'completed'>;

const Todo3: todoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}
//// Omit
//remover as propriedades que queremos.
type todoPreview2 = Omit<Todo, 'description'>;
const Todo4: todoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: false
}
