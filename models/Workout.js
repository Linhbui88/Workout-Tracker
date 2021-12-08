const mongoose= require('mongoose')
const WorkoutSchema = new mongoose.Schema({
  day:Date,
  exercises :[
    {
      type: String,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number
    }
  ]

})
const Workout = mongoose.model('Workout',WorkoutSchema)

module.exports = Workout;
