const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "String is Required"
            },

            name: {
                type: String,
                trim: true,
                required: "String is Required"
            },

            duration: {
                type: Number,
                required: false
            },

            weight: {
                type: Number,
                required: false
            },

            reps: {
                type: Number,
                required: false
            },

            sets: {
                type: Number,
                required: false
            },

            distance: {
                type: Number,
                required: false
            }
        }
    ]
},
    //enable virtualization to happen with conversion to JSON
    {
        toJSON: {
            virtuals: true
        }
    }
)
// the virtual total duration uses the reduce method to find the accumulation of the duration of exercises
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;