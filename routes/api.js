const router = require('express').Router();
const Workout = require('../models/models');

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        })
});

