const checkTitle = (req, res, next) => {
    if (req.body.title) {
        return next();
    } else {
        res.status(400).json({ error: "Name is required" });
    }
};

const checkDescription = (req, res, next) => {
    if (req.body.description) {
        return next();
    } else {
        res.status(400).json({ error: "Name is required" });
    }
};

module.exports ={checkTitle, checkDescription}