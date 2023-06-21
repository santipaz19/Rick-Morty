import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css";

const Detail = () => {
    const { id } = useParams();
    const [charDetail, setCharDetail] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharDetail(data);
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

        <div className={style.fullCard}>
            <div className={style.detalles}>
                <h2 className={style.elemento}>{charDetail.id}</h2>
                <h2 className={style.elemento}>{charDetail.name}</h2>
                <h4 className={style.elemento}>{charDetail.status}</h4>
                <h4 className={style.elemento}>{charDetail.species}</h4>
                <h4 className={style.elemento}>{charDetail.gender}</h4>
                <h4 className={style.elemento}>{charDetail.origin?.name}</h4>
            </div>
            <div className={style.img}>
                <img src={charDetail.image} alt={charDetail.name} />
            </div>
        </div>
    );
};

export default Detail;

