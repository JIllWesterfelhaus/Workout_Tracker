const router = require("express").Router();
const Workout = require("../models/models")

router.post("/api/workouts",(req,res)=>{
    Workout.create()
    .then(dbWorkout => {
      console.log(dbWorkout);
    })
    .catch(({message}) => {
      console.log(message);
    });
}) 


router.get("/api/workouts",(req,res)=>{
    Workout.find()
    .then(dbWorkout => {
      console.log(dbWorkout);
    })
    .catch(({message}) => {
      console.log(message);
    });
}) 

router.get("/api/workouts/range",(req,res)=>{
    Workout.find({}).limit(7)
    .then(dbWorkout => {
      console.log(dbWorkout);
    })
    .catch(({message}) => {
      console.log(message);
    });
}) 

router.delete("/api/workouts",({body},res)=>{
    Workout.findByIdAndDelete(body.id)
    .then(()=>{
        res.json(true)
    })
    .catch(({message}) => {
        console.log(message);
      });
})

router.put("/api/workouts/:id",({body,params},res)=>{
  Workout.findByIdAndUpdate(params.id,
  {$push:{exercises:body}}
      )
      .then(dbWorkout => {
          console.log(dbWorkout);
        })
        .catch(({message}) => {
          console.log(message);
        });
})


module.exports = router

