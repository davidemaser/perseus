/**
 * Created by David Maser on 21/08/2017.
 */
import Woops from '../classes/Woops';
export default class PerseusIndex{
  constructor(obj){
    this.obj = obj;
    this.run();
  }
  run(){
    if(typeof window['perseus'] === 'object'){
      window['perseus']['index'] = {};
    }
    if(typeof this.obj === 'object' && Array.isArray(this.obj)){
      this.obj.map(function(a){

      })
    }else{
      new Woops(
        {
          title:'Indexing error',
          level:'Warning',
          catch:'all',
          report:true
        },
        'Perseus Index has encountered an unknown error',
        false
      )
    }
  }
}