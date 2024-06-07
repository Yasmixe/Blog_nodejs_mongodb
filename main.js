const express = require('express');
const router = express.Router();
const Post = require('../model/posts');

router.get('', async (req, res) => {
    const locals = {
        title: "Node.js Blog",
        description: "Simple blog created by the one and only Yasminouu"
    };

    try {
        const data = await Post.find();
        res.render('../views/index.ejs', { locals, data });
    } catch (error) {
        console.error('Database fetch error:', error);
        res.render('../views/index.ejs', { locals, data: [] }); // Render with empty data in case of error
    }
});

router.get('/about', (req, res) => {
    res.render('../views/about.ejs');
});

module.exports = router;
