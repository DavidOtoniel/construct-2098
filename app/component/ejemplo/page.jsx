"use client"
/*
*ejemplo de uso de :
*-useStete()
*-useRef()
*-useRef()
*/


import React, { useState, useEffect, useRef } from 'react'

const Ejemplo2 = () => {

    // crear contaddores  distintos 
    // cada uno con esdtado direrente
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);


    // crear referencia con useRef()para asociar una variable
    // con un elemnto del DOM del componente (vista HTML)

    const miRef = useRef();

    const increment1 = () => {
        setcontador1(contador1 + 1)
    }

    const increment2 = () => {
        setcontador2(contador2 + 1)
    }


    // trabajando con UseEffect


    // ? caso 1: ejecutar siempre un snippet de codigo 
    //  cada vez que haya cambio del estado sde ejecuta aquello que esta dentro del useEffect

    // useEffect(() => {
    //     console.log('cambio del estado componete');
    //     console.log('Mostrando Referencia a elemento del DOM');
    //     console.log(miRef);
    // })

    // ? caso 2  ejecutar solo cuando cambie contador1
    // cada vez  que haya un cambio en contador 1, se ejecute lo que diga el useEffect
    // en caso de que cambie contador 2, no habra ejecucion


    // useEffect(() => {
    //     console.log('cambio en el estado del componente');
    //     console.log('Mostrando Referencia a elemento del DOM');
    //     console.log(miRef);
    // }, [contador1])



    // ? caso 2  ejecutar solo cuando cambie contador1  o contador 2 
    // cada vez  que haya un cambio en contador 1, se ejecute lo que diga el useEffect
    // en caso de que cambie contador 2, no habra ejecucion

    useEffect(() => {
        console.log('cambio de estado contador1  / contador2 ');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2])


    return (
        <div>
            <h1>ejemplo1 de hooks useState(), useRef(), useEffect()***</h1>
            <h2>CONTADOR 1:{contador1}</h2>
            <h2>CONTADOR 2:{contador2}</h2>
            {/* elemento referenciado  */}
            <h4 ref={miRef}>
                ejemplo de referenciado
            </h4>

            {/* botones para cambiar los controladores  */}
            <div>
                <button onClick={increment1}>Incrementar Contador 1</button>
                <button onClick={increment2}>Incrementar Contador 2</button>
            </div>
        </div>
    )
}


export default Ejemplo2