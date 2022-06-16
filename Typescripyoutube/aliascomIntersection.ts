//accontInfo
//charInfo

type AccontInfo = {
  id : number;
  name : string;
  email? : string;// email opcional(?)
}

const accontInfo : AccontInfo = {
  id : 1,
  name : 'John',
}
type charInfo = {
  nickname : string;
  level : number;
}

const charInfo: charInfo = {
  nickname : 'john',
  level : 100,
}
type PlayerInfo = AccontInfo & charInfo; //intersecção de tipos(junção de tipos).

const playerInfo : PlayerInfo = {
  id : 1,
  name : 'John',
  nickname : 'john',
  level : 100,
}