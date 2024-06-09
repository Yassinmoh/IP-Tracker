import { createAction, props } from "@ngrx/store";


export const searchIP = createAction('[App] search IP',props<{ipinfo:any}>())
