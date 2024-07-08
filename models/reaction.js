const {Schema, Types} = require('mongoose');


// Define a new Mongoose schema for a reaction
const reactionSchema = new Schema (
    {
        reactionId: {
            // Type for reactionId is ObjectId
            type: Schema.Types.ObjectId,
            // Default value is a new ObjectId
            default: () => Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLenght: 280

        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD. YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
           getters: true 
        },
        id: false
});

module.exports = reactionSchema;