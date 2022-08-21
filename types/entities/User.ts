import { ICompany } from './Company';

export interface IUser {
  id: number;
  empresa?: ICompany;
  idnVarUsuario: string;
  idnVarEmpresa: string;
  nvarNome: string;
}
