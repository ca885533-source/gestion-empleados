const express = require('express');
const router = express.Router();
const Empleado = require('../models/empleado');

// Leer todos los empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un empleado
router.post('/', async (req, res) => {
  try {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.json({ mensaje: 'Empleado guardado', empleado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un empleado por su id
router.put('/:id', async (req, res) => {
  try {
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({ mensaje: 'Empleado actualizado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un empleado por su id
router.delete('/:id', async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Empleado eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
