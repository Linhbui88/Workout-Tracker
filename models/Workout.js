const mongoose= require('mongoose');
const Schema = mongoose.Schema;




const WorkoutSchema = new mongoose.Schema({
  day:{
    type: Date,
    default: Date.now
  },
  exercises :[
    {
      type: {
        type: String,
        trim: true,
        required: "Enter excercise type"
      },

      name:{ 
        type: String,
        trim: true,
        required: "Enter excercise name"
      },
     
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      duration: {
        type: Number,
        required: "Enter an excercise duration in minutes"
      },
      distance: {
        type: Number
      }
    }
  ]

},
{
  toJSON:{
    virtuals: true
  }
});

 WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, excercise) =>{
    return total + excercise.duration
  }, 0)
}) 

const Workout = mongoose.model('Workout',WorkoutSchema)

module.exports = Workout;
