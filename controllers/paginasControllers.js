import { Testimonial } from '../models/Testimoniales.js';
import {Viaje} from '../models/Viaje.js'
const paginaInicio = async (req, res)=>{

    // Consultar 3 viajes del modelo Viaje

    const promiseDB = []
    promiseDB.push(Viaje.findAll( {limit: 3} ));
    promiseDB.push(Testimonial.findAll( {limit: 3} ));
    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });       
    } catch(error){
        console.error(error);
    }


};

const paginaViajes = async (req, res)=>{
    //consultar base de datos
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Viajes',
        viajes: viajes
    });
}

const paginaTestimoniales = async (req, res)=>{
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
        
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res)=>{
    res.render('nosotros',{
        pagina:'Nosotros'
    });
}

const paginaContacto = (req, res)=>{
    res.send('Contacto',{
        pagina: 'Contacto'
    });
}
//Muestra un viaje por su slug
const paginaDetalleViajes = async (req, res)=>{
    // console.log(req.params.slug)
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({where: { slug: slug }});

        res.render('viaje', {
            pagina: 'Información viaje',
            resultado
        })
    }catch(error) {
        console.error(error);
    }
}
export {
    paginaInicio,
    paginaViajes,
    paginaContacto,
    paginaNosotros,
    paginaTestimoniales,
    paginaDetalleViajes
};