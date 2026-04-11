import { prismaClient } from "../../lib/prisma.js";

export default async function clearDB() {
    await prismaClient.$transaction([
        prismaClient.calculator.deleteMany()
    ])
}