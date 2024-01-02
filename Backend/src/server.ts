import Express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken"


const app = Express();
app.use(Express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/foods",(req, res)=>{
    res.send(sample_foods)
})
//get food via searchTerm
app.get("/api/foods/search/:searchTerm",(req, res)=>{
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food =>food.name.toLowerCase().includes
    (searchTerm.toLocaleLowerCase()));
    res.send(foods)
})
//get food by tags
app.get("/api/foods/tags",(req,res)=>{
    res.send(sample_tags)
})

//get food by special tags
app.get("/api/foods/tag/:tagName",(req, res)=>{
    const tagName = req.params.tagName;
    const foods = sample_foods.filter(food=> food.tags?.includes(tagName));
    res.send(foods)
})
//get Food by Id
app.get("/api/foods/:foodId",(req, res)=>{
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id ==foodId);
    res.send(food)
})
//Login Api
app.post("/api/users/login",(req, res)=>{
    const{Email, password} = req.body;
    const user = sample_users.find(user => user.email ===Email && user.Password ===password);

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("user name or password is not Valid!")
    }
})

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
      
         email:user.email, isAdmin:user.isAdmin
       
    },"TestyCodeiz",{
        expiresIn:"30d"
    });
    user.token = token;
    return user;

}

const port = 5000;
app.listen(port,()=>{
    console.log("website is running on http://localhost:"+port)
})