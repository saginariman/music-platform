import {Context, MakeStore} from "../node_modules/next-redux-wrapper";

import { createWrapper } from "../node_modules/next-redux-wrapper/es6/index";
import { reducer, RootState } from "./reducers/index";
import {AnyAction, applyMiddleware, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

// create a makeStore function
const makeStore:MakeStore<RootState> 
    = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispach = ThunkDispatch<RootState, void, AnyAction>