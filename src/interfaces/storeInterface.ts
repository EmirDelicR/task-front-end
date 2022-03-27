import { IContext } from './contextInterface';
import { IEncodes } from './encodesInterface';

export interface IState {
  context: IContext;
  encodes: IEncodes;
}
