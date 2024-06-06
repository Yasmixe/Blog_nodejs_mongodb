const express = require('express'); 

const router  = express.Router();

router.get('', (req, res) => {

    const locals = {
        title: "nodejs Blog",
        description: "simple blog created by the one and only yasminouu"
    }
    res.render('../views/index.ejs', {locals}); 
});

router.get('/about', (req, res) => {
    res.render('../views/about.ejs'); 
});
module.exports = router;