const Project = require('../models/Project');
const fs = require('fs');
const path = require('path');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createProject = async (req, res) => {
    const { title, category, location, capacity } = req.body;

    if (!req.file) {
        return res.status(400).json({ msg: 'Please upload an image' });
    }

    const image = req.file.filename;

    try {
        const newProject = new Project({
            title,
            category,
            location,
            capacity,
            image
        });

        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateProject = async (req, res) => {
    const { title, category, location, capacity } = req.body;
    const projectId = req.params.id;

    try {
        let project = await Project.findById(projectId);
        if (!project) return res.status(404).json({ msg: 'Project not found' });

        project.title = title || project.title;
        project.category = category || project.category;
        project.location = location || project.location;
        project.capacity = capacity || project.capacity;

        if (req.file) {
            // Delete old image
            const oldImagePath = path.join(__dirname, '..', 'uploads', project.image);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
            project.image = req.file.filename;
        }

        await project.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ msg: 'Project not found' });

        // Delete image
        const imagePath = path.join(__dirname, '..', 'uploads', project.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await Project.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Project removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
