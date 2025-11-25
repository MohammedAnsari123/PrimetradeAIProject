const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all tasks (with search and filter)
router.get('/', auth, async (req, res) => {
    try {
        const { search, status } = req.query;
        let query = { userId: req.user._id };

        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (status) {
            query.status = status;
        }

        const tasks = await Task.find(query).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Create a task
router.post('/', auth, async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if (!title) return res.status(400).json({ message: 'Title is required' });

        const task = new Task({
            title,
            description,
            status,
            userId: req.user._id,
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Update a task
router.put('/:id', auth, async (req, res) => {
    try {
        const { title, description, status } = req.body;

        let task = await Task.findOne({ _id: req.params.id, userId: req.user._id });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        if (title) task.title = title;
        if (description) task.description = description;
        if (status) task.status = status;

        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete a task
router.delete('/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
