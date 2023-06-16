import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

const Detail = () => {
    const { id } = useParams();
    const [charDetail, setCharDetail] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharDetail(data);
                    console.log(charDetail);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((error) => {
                console.log(error);
                window.alert("Error al cargar los datos del personaje");
            });
        return () => {
            setCharDetail({});
        };
    }, [id]);

    return (
        <div >
            <h2>{charDetail.id}</h2>
            <h2>{charDetail.name}</h2>
            <h4>{charDetail.status}</h4>
            <h4>{charDetail.species}</h4>
            <h4>{charDetail.gender}</h4>
            <h4>{charDetail.origin?.name}</h4>
            <img src={charDetail.image} alt={charDetail.name} />
        </div >
    );
};

export default Detail;

