import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  thumbnail: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: boolean;
  data:string;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: false,
  data:''
};

export const fetchProducts = createAsyncThunk<Product[], void>(
  "products/fetch",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    
    const data = await response.json();
   
    return data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.data="Data Fetched Successfully"
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.data=action.error.message || "Error In Fetching Data";
      });
  },
});

export default productSlice.reducer;
export const selectProducts = (state: RootState) => state.products.products;
export const loading = (state: RootState) => state.products.loading;
export const error = (state: RootState) => state.products.error