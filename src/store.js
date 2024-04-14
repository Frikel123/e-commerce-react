import slice from "./Slice"
import {configureStore} from'@reduxjs/toolkit'
const store = configureStore({
    reducer:{
        products:slice
    }
})
export default store