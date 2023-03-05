import React from "react";
import {RootStoreType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as RootStoreType);

export const Provider = (props: any) => {
  return <StoreContext.Provider value={props.store}>
      {props.children}
      </StoreContext.Provider>

}