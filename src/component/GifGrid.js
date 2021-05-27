import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GitGridItem } from "./GitGridItem";


export const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GitGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    );

};
