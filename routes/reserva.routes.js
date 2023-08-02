// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    renderLista,
    renderNuevo,
    renderEditar,
    obtenerReservas,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
} = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Vista para todas las reservas
router.get('/lista-reservas', renderLista)

// Formulario para crear una reserva
router.get('/nueva-reserva', renderNuevo)

// Formulario para editar una reserva
router.get('/editar-reserva/:id', renderEditar)

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', obtenerReservas);
//Obtener una reserva
router.get('/api/:id', obtenerReserva)
 
// Crear una reserva
router.post('/api/', crearReserva);
 
// Actualizar una reserva
router.put('/api/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',eliminarReserva);

 
 module.exports = router;