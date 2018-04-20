import { Injectable } from '@angular/core';
import {Log} from '../models/Log'
@Injectable()
export class LogService {
logs:Log[];
  constructor() { 
    this.logs = [
      {id:'1', text:"sfsfsfsf", date: new Date('4/23/2018 12:54:23')},
      {id:'2', text:"aaaafsf", date: new Date('4/4/2017 12:54:23')},
      {id:'3', text:"bbbbbfsf", date: new Date('4/4/2017 12:54:23')}
    ] 
  }

  getLogs(){
    return this.logs;
  }

}
