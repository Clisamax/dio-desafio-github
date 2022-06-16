function useState<S extends number | string = string>(){// <S> atribuindo como tipo generico.Que pode ser number ou string.
  let state:S; // usando extends para definir os tipos possiveis. // = string tornando string o tipo padrão.
  function getState(){
    return state;
  }
  function setState(newState: S){
    return state = newState;
  }
  return {getState, setState};
}

const newState = useState<string | number>();//setando o tipo generico como string.
newState.setState(1234);
console.log(newState.getState());

// S => State
// T => Type
// K => Key
// V => Value
// E => Element