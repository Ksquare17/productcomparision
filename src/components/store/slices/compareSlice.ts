import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "./productSlice";
import { NoticeType } from "antd/es/message/interface";
interface CompareState {
    comparedProducts: Product[];
    text:string
    type:NoticeType | undefined
  }
const initialState: CompareState = {
  comparedProducts: [],
  text:'',
  type:undefined
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addProductToCompare: (state, action: PayloadAction<Product>) => {
        if (state.comparedProducts.length >= 4) {
           state.text="You can compare up to 4 products only!"
           state.type='warning'
          return;
        }
        const exists = state.comparedProducts.find((p) => p.id === action.payload.id);
        if (!exists) {
          state.comparedProducts.push(action.payload);
          state.text="Product added for comparison!"
          state.type='success'

        }
      },
      // Remove product from compare list
      removeProductFromCompare: (state, action: PayloadAction<number>) => {
        state.comparedProducts = state.comparedProducts.filter((p) => p.id !== action.payload);
        state.text="Product removed from comparison."
        state.type='success'

      },
    clearCompare: (state) => {
      state.comparedProducts = [];
       state.text="Compare List Cleared"
       state.type='success'

    },
  },
});

export const { addProductToCompare, removeProductFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
export const selectComparedProducts = (state: RootState) => state.compare.comparedProducts;
export const text = (state: RootState) => state.compare.text;
export const type = (state: RootState) => state.compare.type;

