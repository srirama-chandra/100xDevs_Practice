import { mockDeep } from 'vitest-mock-extended';
import { PrismaClient } from '../generated/prisma/client.ts';

export const prismaClient = mockDeep<PrismaClient>();

