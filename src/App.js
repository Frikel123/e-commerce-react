
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
 import { fetchProducts } from './Slice';
import { useEffect } from 'react';
import Produit from './Produit';
import Ajoute from './Ajoute';
function App() {
  const dispatch= useDispatch()

const {products, isLoading, error} = useSelector(state=>state.products)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])
  if(isLoading) {
    return <h1>noo</h1>
  }
  if(error) {
    return <h1>{error}</h1>
  }
  
  return (
    <div className="App">
   <Produit/>
   <Ajoute/>
    </div>
  );
}

export default App;
