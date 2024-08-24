
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser() {

    await prisma.user.create({
        data:{
            email:"user1@gmail.com",
            name:"user1"
        }
    });
    console.log("User Created Successfully");   
}

createUser();