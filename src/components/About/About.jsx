import React from "react";
import styles from "./about.module.css";

const About = () => {
    return (
        <div className={styles["about-container"]}>
            <div className={styles["about-text"]}>
                <span className={styles.li}> - </span>
                Hola, mi nombre es <span className={styles["highlight"]}>Santi</span>, estoy empezando con mis primeros proyectos en React, gracias por echarle un vistazo.
            </div>
        </div>
    );
};

export default About;