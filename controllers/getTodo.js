const todo = require("../models/todo");
const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {

    try{
         //fetch all todo items form database
         //mongoose provide us many in built functions like create, findone, find by id,delete, update etc.

         const allTodos = await Todo.find({}) ; // fetch all 

         //response 
          res.status(200).json({
            success:true,
            data:allTodos,
            message:"Entire Todo data is fetched",

          })
    }
    catch(e){
         console.error(e) ;
         res.status(500).json({
            success:false,
            data:message,
            message:"Server error",
         })
    }
}

//get single todo by id

exports.getTodosById = async (req,res) => {

    try{

        //extract todo by id

        // step1 : extract id
        const id = req.params.id ;

        //_id is in api req so set _id:id ;
        const singleTodo = await Todo.findById({_id:id}) ;

        // data for given id not found
        if(!singleTodo){
            return res.status(404).json({
                success:false,
                message:"Data not found"
            })
        }
        // data found
        return res.status(200).json({
            success:true,
            data: singleTodo,
            message:`Data found for given ${id}`,
        })
    }

    catch(e){
        console.error(e) ;
        res.status(500).json({
           success:false,
           data:message,
           message:"Server error",
        })
    }
}