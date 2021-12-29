const router = require('express').Router();
const db = require('../models/index')

router.get("/workouts", (req,res) =>{
    db.Workout.find({})
    .then(dbWorkouts =>{
    
      res.json(dbWorkouts)
    })
    .catch(error => {
      res.json(error)
    })
 
  });
  router.post("/workouts", async ({body},res) =>{
  
    const workout = new db.Workout(body);

    try{
      db.Workout.create(workout)
      res.json(workout)
    }
    catch(error) {
      console.log(error)
    }
   console.log(workout)
  })

  router.put("/workouts/:id",(req ,res) =>{
  
    const workoutId = req.params.id;
    const exercise = req.body;
    console.log(exercise)
   
   
    // db.Workout.findByIdAndUpdate({_id:workoutId}, {exercises: [exercise]})
    db.Workout.findByIdAndUpdate({_id:workoutId}, {$push: {exercises: exercise}}, {new: true})
    
      .then((dbWorkout) => {
        console.log(dbWorkout)
        res.json(dbWorkout)
        

        
      })
      .catch((err)=> {
        console.log(err)
      })

  })
  router.get("/workouts/range", (req,res) =>{
    db.Workout.find({})
    .then((dbWorkout) =>{
      res.json(dbWorkout)
    }).catch((error) =>{
      console.log(error)
    })

  })
        
      
 

 

 












module.exports = router;
