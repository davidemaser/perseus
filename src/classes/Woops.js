/**
 * Created by David Maser on 21/08/2017.
 */
import {Params} from '../config/Params';
import {Templates} from '../templates/Global';
export default class Woops{
  constructor(obj,message,stop){
    this.obj = obj;
    this.message = message || null;
    this.stop = stop || false;
    this.run();
  }
  run(){
    if(typeof this.obj === 'object'){
      let templateStr = Templates.errors.woops;
      let errorNode = $(Params.dom.root).find('#perseus_woops');
      errorNode.length > 0 ? errorNode.remove() : null;
      $(Params.dom.root).find(Params.dom.parent).prepend(templateStr);
    }else{
      console.log('Error handler was unable to process the error object')
    }
  }
}