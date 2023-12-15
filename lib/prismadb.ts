import { PrismaClient } from "@prisma/client";

interface CustomGlobal extends NodeJS.Global {
  prismadb?: PrismaClient;
}

const customGlobalThis = globalThis as CustomGlobal;

const client = customGlobalThis.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') {
  customGlobalThis.prismadb = client;
}

export default client;
