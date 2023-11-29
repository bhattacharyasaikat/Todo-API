// will make object in database

const Todo = require("../models/todo");

//define route handler

exports.createTodo = async (req, res) => {
    try {
        // extract title and desc from req body

        const { title, description } = req.body;

        //create a noew todo obj and insert in DB

        //.create() create an object in DB
        const response = await Todo.create({ title, description });

        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Entry created successfully"
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                data: "Internal server error",
                message: err.message,
            }
        )
    }
}