import prismaClient from "../../src/prisma/index";

interface CreateUserServiceProps {
    name: string;
    email: string;
    password: string;
};

class CreateUserService {
    async execute({ name, email, password }: CreateUserServiceProps){

        if(!name || !email) return

        const user = await prismaClient.users.create({
            data: {
                name, email, password
            }
        });

        return user;
    };
};

export { CreateUserService };