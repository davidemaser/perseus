/**
 * Created by David Maser on 21/08/2017.
 */
export const PerseusMount = {
  mount(obj){
    window['perseus'] = {};
    window['perseus']['mounted'] = true;
    window['perseus']['core'] = obj;
  },
  unmount(){

  }
};