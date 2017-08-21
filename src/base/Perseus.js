/**
 * Created by David Maser on 21/08/2017.
 */
import Woops from '../classes/Woops';
import {PerseusConfig} from '../config/Params'
import {PerseusMount} from '../base/PerseusMount';
export default class Core{
  constructor(logic,object,functions){
    this.logic = logic;
    this.object = object;
    this.functions = functions;
    this.rootObject = this;
    this.core();
  }
  checkParams(fail){
    let paramFormat = typeof PerseusConfig;
    if(typeof paramFormat === 'object'){
      let steps = PerseusConfig.steps;
      steps.map(function(a){
        console.log(a);
      });
      PerseusMount.mount(this.rootObject);
    }else{
      if(fail === true){
        PerseusMount.unmount();
      }
    }
  }
  core(){
    let appControl = this.checkParams(false);
    let o;
    let obj = this.object;
    for(o in obj) {
      if (typeof obj[o] === 'object') {
        if (Array.isArray(obj[o])) {
          obj[o].map(function (a) {

          })
        }
      }else{
        new Woops({
          title:'Core error',
          level:'Fatal',
          catch:'all',
          report:true
        },'Perseus Core has failed to run',false)
      }
    }
  }
}