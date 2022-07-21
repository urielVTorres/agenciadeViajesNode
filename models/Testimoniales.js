import Sequelize, { DataTypes } from "sequelize";
import db from "../config/db.js";

const Testimonial = db.define('testimoniales', {
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    }
});

export {
    Testimonial
}