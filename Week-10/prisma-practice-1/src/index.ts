import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(email:string,password:string) {
    
    const res = await prisma.user.create({
        data:{
            email,
            password,
        },
        select:{
            id:true
        }
    });
    console.log(res)
}  

createUser("user1@gmail.com","user1password");