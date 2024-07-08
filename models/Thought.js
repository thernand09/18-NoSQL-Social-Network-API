const {Schema, model} = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');

// Define a new Mongoose schema for a thought
const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        // Default to the current  date/time when created
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD. YYYY [at] hh:mm a') 
    },
    username: {
        type: String,
        required: true
    },
    // Creates array of reactions associated with the thought
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        // apply getters when convertion to JSON
        getters: true
    },
    id: false
});
// Define a virtual property 'reactionCount' that computes the number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create a Mongoose model 'Thought' based on thoughtSchema
const Thought= model('Thought', thoughtSchema);

module.exports = Thought;