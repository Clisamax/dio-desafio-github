// @Component
// @Selector
// @useState("dasdas")
// Class decorator
// Property decorator
// Method decorator
// Parameter decorator
// Accessor decorator

/*
// Class decorator
//factory
// target será o constuctor da classe
function logger(prefix: string) {
  return (target: any) =>{
    console.log(target);
  }
  
}
@logger('awesome')
class Foo{
}

function setAPIVersion(apiVersion: string) {
  return (constuctor: any) => {
    return class extends constuctor {
      apiVersion = apiVersion;
    }
  }
}

// decorator - anotar a versão da API.
@setAPIVersion("2.0.0")
class API {}
console.log(new API());

function minLength(_lenght: number){
  return (target: any, key: string) => {
  let val = target[key];
  const getter = () => val;
  const setter = (newVal: string) => {
    if (newVal.length < _lenght) {
      console.log('Error: Voçê não pode criar ${key} com menos de ${_lenght} caracteres');
    }else {
      val = newVal;
    } 
  }
  Object.defineProperty(target, key, {
  get: getter,
  set: setter,
  });
}
}

class Movie{
  @minLength(50)
  _title: string;
constructor(t: string){       
this._title = t;
} 
}
const movie = new Movie("The Matrix");
console.log(movie._title);

//valida o tamanho do titulo.
*/
