const Workout = require('../models/Workout');
const mongoose = require("mongoose");


// get all
const getWorkouts = async(req, res) => {
	const workouts = await Workout.find({}).sort({createdAt: -1})

	res.status(200).json(workouts);
}

// get single
const getWorkout = async (req,res) => {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({err: "No such"})
	}

	const workout = await Workout.findById(id);

	if(!workout){
		return res.status(404).json({error: 'No workout'})
	}

	res.status(200).json(workout);

}

// create new
const createWorkout = async (req,res) => {
	const {title, load, reps} = req.body;

	try {
		const workout = await Workout.create({title, load, reps});
		res.status(200).json(workout);
	} catch(err){
		res.status(400).json({err: err.message})
	}
}

// delete one
const deleteWorkout = async (req, res) => {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({err: "No such"})
	}

	const workout = await Workout.findOneAndDelete({_id: id})

	if(!workout){
		return res.status(404).json({error: 'No workout'})
	}

	res.status(200).json(workout);

}

// update one
const updateWorkout = async(req, res) => {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id)){
		return res.status(404).json({err: "No such"})
	}

	const workout = await Workout.findByIdAndUpdate({_id: id}, {
		...req.body
	})

	if(!workout){
		return res.status(404).json({error: 'No workout'})
	}

	res.status(200).json(workout);
}

module.exports = {
	getWorkout,
	getWorkouts,
	createWorkout,
	deleteWorkout,
	updateWorkout
}