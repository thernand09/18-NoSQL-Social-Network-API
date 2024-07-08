const {Schema, model} = require('mongoose');

// Define a new Mongoose schema for a user
const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
         // Validate email format
        match: [/.+@.+\..+/, 'Must match an email adress!']
    },
    thoughts: [{   
        type: Schema.Types.ObjectId,
        // Reference the Thought model
        ref: 'Thought',
        }],
    friends: [{
        type: Schema.Types.ObjectId,
        // Reference the User model
        ref: 'User'
    }]
},
{
    toJSON: {
        // This will include the virtual properties when convertion to JSON
        virtuals: true
    },
    // Disable the default '_id'
    id: false
});

// Define a virtual propert 'friendCOunt' that computers the number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
// Create a Mongoose model 'User' based on userSchema
const User = model ('User', userSchema);

module.exports = User;


