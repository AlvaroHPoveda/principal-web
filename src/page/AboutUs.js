import React, { useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import  '../styles/aboutus.css';
const AboutUs = () => {
  //Declaración de variables y constantes
  const [contactUs,setContactUs]=useState(false);
  const form=document.getElementsByClassName("form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Función para enviar el formulario
  const onSubmit=(data)=>{
   
    console.log(data)
    
    
    }
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <button className="contactUs" onClick={()=>{setContactUs(!contactUs)}}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button> 
      

      
      <form className="form"onSubmit={handleSubmit (onSubmit)}
      style={contactUs?{visibility:"visible"}:{visibility:"hidden"}}>
        <div className="input">
          <label htmlFor="from">Email:</label>
          <input {...register("from")} type="email"id="from" />
        </div>
        <div className="input">
          <label htmlFor="subjet">Asunto:</label>
          <input {...register("subjet")}type="text"id="subjet" />
        </div>
        <div className="input">
          <label htmlFor="body">Comentario:</label>
          <textarea {...register("body")}type="text"id="body" />
        </div>
        <div className="botones">
          <button>Enviar</button>
          <button type="reset">Limpiar Formularion</button>
        </div>
        <button type="button"className="cruz" onClick={()=>setContactUs(!contactUs)}>
          <FontAwesomeIcon  icon={faXmarkCircle} />
        </button>
      </form>
    </div>
  );
};

export default AboutUs;
