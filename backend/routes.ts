import { 
    FastifyInstance, 
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';
import { CreateUserController } from './src/controllers/create-user-controller';
import { GetUsersController } from './src/controllers/get-users-controller';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.post("/user", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply)
    });

    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetUsersController().handle(reply)
    });
};