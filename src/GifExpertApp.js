
import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory'
import { GifGrid } from './component/GifGrid'

export const GifExpertApp = () => {

    //const categorias = ['Capitan America', 'Iroman', 'Superman'];

    const [categorias, setcategorias] = useState(['Capitan America'])

    //const handleAdd = () =>{
    //    //setcategorias([...categorias,'Goku']);
    //    setcategorias( c => [...c, 'Goku']);
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategorias={setcategorias} />
            <hr />

            <ol>
                {
                    categorias.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
