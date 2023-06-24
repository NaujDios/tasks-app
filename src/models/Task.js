const { Schema, model } = require("mongoose");

taskSchema = new Schema(
  {
    title: {
    type: String,
    required: true,
    unique: true,
    trim: true},
    description:{
        type: String,
        required: true},
    done: {
        type: Boolean,
        default: false
    }
  },
  { timestamps: true,
    versionKey: false}
);


modelo = model('task', taskSchema)

module.exports = modelo

