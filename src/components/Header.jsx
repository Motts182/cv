import React, { useState, useEffect } from 'react'

const Header = () => {

    const [variable, setVariable] = useState([]);

    // useEffect(() => {
    //     const consultarAPi = async () => {
    //         const url = "https://rickandmortyapi.com/api/character"
    //         const respuesta = await fetch(url);
    //         const resultado = await respuesta.json();

    //         setVariable(resultado.results);
    //     }
    //     consultarAPi();
    // }, [variable])

    return (
        <div className='grid  grid-cols-12 gap-4'>
            <div className='h-64 col-span-12	'>
                <h1>1</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-4	'>
                <h1>2</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-4'>
                <h1>3</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-4'>
                <h1>4</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-9'>
                <h1>5</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-4'>
                <h1>6</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-4'>
                <h1>7</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64 col-span-4'>
                <h1>8</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
            <div className='h-64'>
                <h1>9</h1>
                {/* {variable.map((personaje) => {
                    return (<h1>{personaje.name}</h1>)
                })} */}
            </div>
        </div>
    );
}

export default Header;