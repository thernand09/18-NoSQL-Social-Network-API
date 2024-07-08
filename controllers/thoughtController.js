const { Thought, User } = require ('../models');

module.exports = {
// GET all thoughts 
    async getThoughts (req, res) {
        try { 
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
// GET a single thought by id 
async getSingleThought(req, res) {
    try {
        const thought = await Thought.findOne(
            {_id: req.params.thoughtId,}
        ).populate(["reactions"]);

        if(!thought) {
            return res
                .status(404)
                .json({ message: "No thought with that id "})
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}, 
// CREATE a thought 
async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "Thought created, but found no user with that ID",
            });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
// UPDATE a single thought by id
async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            // make the updated thought return rather than the original
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({
                message: "No thought with that ID",
            });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
// DELETE a single thought by id 
async deleteThought(req, res) {
    try {
        const thought = await Thought.findOneAndDelete({
            _id: req.params.thoughtId,
        });

        if (!thought) {
            return res.status(404).json({
                message: "No thought with that ID",
            });
        }

        const user = await User.findOneAndUpdate(
            { username: thought.username },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message:
                    "Thought deleted but no user with that thought found",
            });
        }

        res.json({
            message: "Thought deleted and removed from users thoughts!",
        });
    } catch (err) {
        res.status(500).json(err);
    }
},
// CREATE a new reaction in thoughts reaction array
async addReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            // make the updated thought return rather than the original
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({
                message:
                    "Reaction created, but found no thought found with that ID",
            });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
// DELETE a reaction in a thoughta reactions array by reaction id
async removeReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({
                message: "No thought with that ID",
            });
        }
        res.json({ message: "Reaction to thought deleted!" });
    } catch (err) {
        res.status(500).json(err);
    }
},
}