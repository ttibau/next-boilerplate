import { MacroProcess } from './MacroProcess';

export interface Process {
  id: number;
  name: string;
  target: string;
  macroProcess: MacroProcess;
}
