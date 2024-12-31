import prismaClient from "../../src/prisma/index";

class GetUsersService{
    async execute(){
        const users = await prismaClient.users.findMany();

        return users;
    };
};

export { GetUsersService }