const express=require("express")
const app=express()
const PORT=3000

app.get("/",(req,res)=>{
    res.send("Server established successfully!")
})

app.listen(PORT,()=>{
    console.log(`Successfuly connected to the port:{$PORT}`)
})

app.post("/signup",(req,res)=>{
    const {username,email,password}=req.body
    
    if (!username) {
        return res.status(400).json({
            error:"Username cannot be empty"
        })
        }
        if (!email) {
            return res.status(400).json({
                error:"Email cannot be empty"
            })
        }
        if (!password) {
            return res.status(400).json({
                error:"password cannot be empty"
            })
        }
        res.status(200).json({
            message:"Successful"
        })
    
})