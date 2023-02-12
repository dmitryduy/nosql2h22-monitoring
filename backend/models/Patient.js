const mongoose = require('mongoose');
const Question = require('./Question');
const QuizResult = require('./QuizResult');
const Recommendation = require('./Recommendation');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
        type: String
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctors'
    },
    quiz: [{
        type: Schema.Types.ObjectId,
        ref: 'Questions'
    }],
    quiz_results: [{
        type: Schema.Types.ObjectId,
        ref: 'QuizResults'
    }],
    recommendations: [{
        type: Schema.Types.ObjectId,
        ref: 'Recommendations'
    }]
});

module.exports = mongoose.model('Patients', PatientSchema);