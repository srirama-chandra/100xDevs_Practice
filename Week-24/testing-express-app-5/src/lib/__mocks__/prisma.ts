import { PrismaClient } from '../../generated/prisma/client.ts';
import { mockDeep } from 'vitest-mock-extended';

export const prismaClient = mockDeep<PrismaClient>();