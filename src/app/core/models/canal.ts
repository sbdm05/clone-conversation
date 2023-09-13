import { CanalI } from '../interfaces/canal-i';

export class Canal implements CanalI {
  canalName!: string;
  id!: number;
  messages!: [];
  constructor(obj?: Partial<Canal>){
    Object.assign(this, obj)
  }
}
