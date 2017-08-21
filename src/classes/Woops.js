/**
 * Created by David Maser on 21/08/2017.
 */
export default class Woops{
  constructor(obj,message,stop){
    this.obj = obj;
    this.message = message || null;
    this.stop = stop || false;
    this.run();
  }
  run(){
    if(typeof this.obj === 'object'){

    }else{
      console.log('Error handler was unable to process the error object')
    }
  }
}