import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modif, suup } from './Slice';

function Produit() {
    const pro = useSelector(state => state.products.products)
   const [prix,setPrix]=useState('')
    const dispatch=useDispatch()
    const handleSuprime=(id)=>{
         dispatch(suup(id))
    }

    const handleModifer =(id)=>{
        dispatch(Modif({id, prix: +prix}))
    }
    return (
        <div  style={{display:'flex',justifyContent:'center' , flexWrap:'wrap',alignItems:'center'}}>
            { pro.map((e,i)=>{

             return   <ul>
                    <li><img src={e.image} width='150px'/></li>
                    <li>{e.title} </li>
                    <li>{e.price} </li>
                    <input type='text' 
                    onChange={(e)=> setPrix(e.target.value)}

                    /><br></br>
                    <button onClick={()=>handleModifer(e.id)}>Modifer</button>
                    <button onClick={()=>handleSuprime(e.id)}>Supprime</button>
                    

                </ul>
            })
            }
        </div>
    );
}

export default Produit;