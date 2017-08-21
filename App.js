/**
 * Created by David Maser on 21/08/2017.
 */
import Core from './src/base/Perseus';
import PerseusIndex from './src/base/PerseusIndex';

$.when(
  new Core(
    {
      delay:0,
      init:true,
      schema:{
        body:'body',
        tag:'pss',
        exclude:[],
        async:true,
        json:{
          root:'./project/data/',
          format:'.json',
          clean:true
        }
      }
    },
    {},
    null
  )
).then(function(){
  new PerseusIndex()
});