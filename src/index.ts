import { PrismaClient } from "@prisma/client";
import express from "express"


const app=express()

const client=new PrismaClient() 

app.get("/users",async(req,res)=>{
    const allusers= await client.users.findMany({
        where:{id:1},
        select:{username:true,age:true,password:true,city:true}
    })

    res.json({message:allusers})
})


app.listen(3000)