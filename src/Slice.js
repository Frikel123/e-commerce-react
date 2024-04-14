import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const fetchProducts = createAsyncThunk("produit/fetchProducts",
async ()=>{
   const res  = await fetch("https://fakestoreapi.com/products")
   const data = await res.json()
   return data
}
);


const slice = createSlice({
   name:'products',
   initialState:{products:[] , isLoading:false ,error:''},
   reducers:{
      suup:(state,action)=>{
         state.products=state.products.filter((p)=> p.id!==action.payload)
      },
     
      add(state,action){
       var id=state.products.length===0 ? 1:state.products[state.products.length -1].id +1;
         action.payload.id = id
    state.products.push(action.payload)
      },
      Modif(state,action){
           const product =state.products.find(f=> f.id===action.payload.id)
           product.price = action.payload.prix
      }
   },
   extraReducers(builder){
    builder 
         .addCase(fetchProducts.pending ,(state,action) =>{
              state.isLoading=true
         })
         .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.isLoading=false
            state.products=action.payload
         })
         .addCase(fetchProducts.rejected , (state,action)=>{
                state.error = 'error fetching data'       
  })
 }
})
export const {suup,add,Modif} = slice.actions
export default slice.reducer