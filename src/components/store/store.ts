import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import productReducer from "./slices/productSlice";
import compareReducer from "./slices/compareSlice";


const rootReducer = combineReducers({
  products: productReducer,
  compare: compareReducer,
});


const persistConfig = {
  key: "root", 
  storage, 
  whitelist: ["compare"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
