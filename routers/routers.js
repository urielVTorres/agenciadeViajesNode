import express from 'express';
import {
    paginaDetalleViajes, 
    paginaContacto, 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes 
} from '../controllers/paginasControllers.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';


const router = express.Router();

router.get('/', paginaInicio);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);

router.get('/nosotros', paginaNosotros);

router.get('/contacto', paginaContacto);

router.post('/testimoniales', guardarTestimonial);

export default router;
