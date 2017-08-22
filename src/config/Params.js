/**
 * Created by David Maser on 21/08/2017.
 */
export const Params = {
  steps:['dom','source','filters','includes'],
  dom:{
    root:'html',
    parent:'body'
  },
  root:{
    mount:'window',
    revoke:true,
    units:[0,8,16,64]
  },
  storage:{
    default:'localStorage',
    max:2048,
    fallback:'session',
    onFail:['prompt','continue']
  }
};