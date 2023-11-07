import React, { useState } from 'react'
import '../Form/form.css'
import Inputs from '../inputs/Inputs'
import {useMyStates} from '../state/myStates'

function Form() {

  const {
    id,
    campana, 
    cod_proveedor, 
    fecha_cap, 
    nombre,
     ape, 
     ape2, 
     nif, 
     telefono,
      email, 
      direccion, 
      cod_postal, 
      poblacion, 
      provincia, 
      acepta1, 
      acepta2, 
      acepta3, 
      num1, 
      num2, 
      num3,
      dual1,
      dual2,
      dual3,
      variable1,
      variable2,
      variable3,
      memo,
      fecha,
      hora,
      foto,
      foto2,
      comercial,
      centro }= myStates();

  return (
    <div>
      <div>
        <div className='title'>
          <h3>Proveedor</h3>
        </div>
        <div className='id-container'>
          <Inputs name='id :' type="text" />
        </div>
        <div className='campana-container'>
          <Inputs name='campana :' type="number" />
        </div>
        <div className='codigo-container'>
          <Inputs name='cod_proveedor :' type="text" />
        </div>
        <div className='fecha-container'>
          <Inputs name='fecha_caption :' type="text" />
        </div>
        <div className='nombre-container'>
          <Inputs name='nombre :' type="text" />
        </div>
        <div className='ape-container'>
          <Inputs name='ape1:' type="text" />
        </div>
        <div className='ape2-container'>
          <Inputs name='ape2:' type="text" />
        </div>
        <div className='nif-container'>
          <Inputs name='nif:' type="text" />
        </div>
        <div className='telefono-container'>
          <Inputs name='telefono:' type="text" />
        </div>
        <div className='email-container'>
          <Inputs name='email :' type="text" />
        </div>
        <div className='direccion-container'>
          <Inputs name='direccion :' type="text" />
        </div>
        <div className='postal-container'>
          <Inputs name='codigo_postal :' type="text" />
        </div>
        <div className='poblacion-container'>
          <Inputs name='poblacion :' type="text" />
        </div>
        <div className='provincia-container'>
          <Inputs name='provincia :' type="text" />
        </div>
        <div className='acepta-container'>
          <Inputs name='acepta 1:' type="text" />
        </div>
        <div className='acepta2-container'>
          <Inputs name='acepta 2:' type="text" />
        </div>
        <div className='acepta3-container'>
          <Inputs name='acepta 3:' type="text" />
        </div>
        <div className='num-container'>
          <Inputs name='num 1:' type="number" />
        </div>
        <div className='num2-container'>
          <Inputs name='num 2:' type="number" />
        </div>
        <div className='num3-container'>
          <Inputs name='num 3:' type="number" />
        </div>
        <div className='dual-container'>
          <Inputs name='dual 1:' type="text" />
        </div>
        <div className='dual2-container'>
          <Inputs name='dual 2:' type="text" />
        </div>
        <div className='dual3-container'>
          <Inputs name='dual 3:' type="text" />
        </div>
        <div className='variable-container'>
          <Inputs name='variable 1:' type="number" />
        </div>
        <div className='variable2-container'>
          <Inputs name='variable 2:' type="number" />
        </div>
        <div className='variable3-container'>
          <Inputs name='variable 3:' type="number" />
        </div>
        <div className='memo-container'>
          <Inputs name='memo :' type="number" />
        </div>
        <div className='fecha-container'>
          <Inputs name='Fecha: ' type="date" />
        </div>
        <div className='hora-container'>
          <Inputs name='Hora: ' type="time" />
        </div>
        <div className='foto-container'>
          <Inputs name='foto 1 ' type="text" />
        </div>
        <div className='foto2-container'>
          <Inputs name='foto 2: ' type="text" />
        </div>
        <div className='comercial-container'>
          <Inputs name='Comercial: ' type="Text" />
        </div>
        <div className='centro-container'>
          <Inputs name='Centro: ' type="text" />
        </div>
      </div>
    </div>
  )
}



export default Form


