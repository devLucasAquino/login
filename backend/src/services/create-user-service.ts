import prismaClient from "../../src/prisma/index";

interface CreateUserServiceProps {
    name: string;
    email: string;
    password: string;
};

class CreateUserService {
    async execute({ name, email, password }: CreateUserServiceProps){

        if(!name || !email) return

        const hasUser = await prismaClient.users.findUnique({
            where: {
                email: email
            }
        });

        if(hasUser) {
            throw new Error("Este e-mail já está em uso.");
        };

        const user = await prismaClient.users.create({
            data: {
                name, email, password
            }
        });

        return user;
    };
};

export { CreateUserService };