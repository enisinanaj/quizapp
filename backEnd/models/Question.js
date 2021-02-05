const mongoose = require('mongoose')
const QuestionSchema = new mongoose.Schema({
  description: String,
  alternatives: [
    {

      text: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false
      }
    }

  ]
})

// Basically, what we've done is describe how are the fields

module.exports = mongoose.model('Question', QuestionSchema)

