import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface user{
    email:string,
    name:string,
    password:string
}

async function createUser(obj:user) {

    const response = await prisma.user.create({
        data:{
            name:obj.name,
            email:obj.email,
            password:obj.password,
            posts:{
                create:[{title:"Post-1"}]
            }
        },
        select:{
            id:true
        }
    });
    console.log(response);
    console.log("User Created",response);
    
}

async function findUser(email:string) {

    const response = await prisma.user.findUnique({
       where:{
        email:email
       },
       include:{
        posts:true
       }
    });
    console.log(response);
    
}

findUser("user3@gmail.com");