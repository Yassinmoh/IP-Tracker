import { createReducer, on } from "@ngrx/store"
import * as appActions from './app.actions'

export interface AppState{
  ipDataInfo:any
}

const initState:AppState ={
  ipDataInfo:null
}

export const appReducer = createReducer(initState,
  on(appActions.searchIP,(state:AppState,action)=>{
    return{
      ...state,
      ipDataInfo:action.ipinfo,
    }
  })
)


