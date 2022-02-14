import React, { useState, useEffect } from 'react'

export default function ScrollHooks(props){
    const [scrollY, setScrollY] = useState(0);
    
    // Solo se actualida cuando el estado ScrollY tenga cambios
    useEffect(()=> {
        console.log("Moviendo el scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {window.removeEventListener("scroll", detectarScroll)}; 
    }, [scrollY]);

    // Este hooks solo se ejecuta una vez
    useEffect(()=> {
        console.log("Fase de montaje");

    }, []);

    // Fase de desmontaje, Sirve para desubcribirse de servicios de algun servicios, deconectarse de base de datos, Limpiar Temporizadores

    useEffect(()=> {

        return () => {
            console.log("Fase de Desmontaje");
        }
        

    }, []);

    return (
        <>
            <h2> useEffect y el ciclo de vida</h2>
            <p> Scroll Y del navegador: { scrollY } px </p>
        </>

    )

}