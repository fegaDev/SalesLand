import {useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react'
import myStates from '../state/myStates';
//Aqui agregamos componentes de las respuestas al las solicitudes de http al servidor 
//que se va a comunicar con la api de SalesLand
// https://webapp.salesland.net:8095/WS_SALESLAND_LEADS/SALESLAND_LEADSCmb.svc/AltaLead
import response from '../request/response'

const Http = () => {

    const [data,setData] = useState([response]);
    //Obteniendo los datos del Formulario
    const [formData,setFormData] = useState({
        id,
        campana,
        cod_proveedor,
        fecha_cap,
        nombre,
        ape,
        ape2,
        ape3,
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
        centro
    })


    useEffect(() => {
        axios.post('https://webapp.salesland.net:8095/WS_SALESLAND_LEADS/SALESLAND_LEADSCmb.svc/AltaLead') 
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error al obtener datos:', error);
            if (error.response && error.response.data && error.response.data.RESULTADO) {
              setErrorMessage(error.response.data.RESULTADO);
            } else {
              setErrorMessage('Error desconocido. Por favor, inténtalo de nuevo más tarde.');
            }
          });
      }, []);

      const handleResponse = () => {
        axios.post(formData) // Env+io del Formulario Salesland
          .then(response => {
            console.log('Solicitud POST exitosa:', response.data);
          })
          .catch(error => {
            console.error('Error en la solicitud POST:', error);
          });
      };
}

export default Http