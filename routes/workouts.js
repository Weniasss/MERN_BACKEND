const express = require('express');
const {
	createWorkout,
	getWorkout,
	getWorkouts,
	deleteWorkout,
	updateWorkout
} = require('../controllers/workoutController')


const router = express.Router();

// GET all 
router.get('/', getWorkouts);

// GET single
router.get('/:id' , getWorkout);

// POST new
router.post('/', createWorkout)

// DELETE
router.delete('/:id', deleteWorkout)

// UPDATE
router.patch('/:id', updateWorkout)

module.exports = router;