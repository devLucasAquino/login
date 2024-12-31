import { FastifyReply } from "fastify";
import { GetUsersService } from "../services/get-users-service";

class GetUsersController{
    async handle(reply: FastifyReply){
        const getUsers = new GetUsersService();

        const users = await getUsers.execute();

        reply.send(users)
    };
};

export { GetUsersController }