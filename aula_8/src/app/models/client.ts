export interface Client{
  id?: number,
  nome: string,
  email: string,
  fone: string,
  editing: {id: boolean, nome:boolean, email: boolean, fone: boolean}
}
