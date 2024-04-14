import React, { useReducer, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './Slice';
import { current } from '@reduxjs/toolkit';

function Ajoute(props) {
    const [img , setImg]= useState('')
    const image = useRef()
    const dispatch=useDispatch()
    const handleajoute=(id)=>{
        dispatch(add({
            id,
            image:URL.createObjectURL(image.current.files[0])
        }))
    }
    return (
        <div>
           <input type='file' 
           ref={image}
           onChange={(e)=> setImg(e.target.value)} 
           />
           <button onClick={handleajoute}>ajoute</button>
        </div >
    );
}

export default Ajoute;