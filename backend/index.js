const express = require("express");

const app = express();

app.use(express.json());

const dotenv =require("dotenv");

dotenv.config();

const cors = require("cors");

app.use(cors())

let todos = [
    {
        title:"Buying groceries",
        status:false
    }
]

app.get("/",(request,response)=>{
    try{
        response.status(200).send({msg:"This is todo backend"})
    }catch(error){
        response.status(500).send({msg:"error occured",error});
    }
})

app.get("/get-todo",(req,res)=>{
    try{
        res.status(200).send({msg:"secesseful",todos:todos})
    }catch(error){
        response.status(500).send({msg:"erroe occured",error});
    }
})

app.post("/post-todo",(req,res)=>{
    try{
        const{title} = req.body;
        console.log(title)
        // const title = req.body.title
        if(title == ""){
            res.status(200).send({msg:"todo input was empty"});
        }
        const newTodo ={
            title:title,
            stataus:false
        }
        todos.push(newTodo);

        res.status(200).send({msg:"todo created secesseful"})
    }catch(error){
        res.status(500).send({msg:"erroe occured",error});
    }
    
}
)

app.listen(8080,()=>{
    console.log("connected to server sucessfully")
})

