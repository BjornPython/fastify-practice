const fastify = require("fastify")({logger: true})

const PORT = 8000

fastify.get("/", (req, reply) => {
    reply.send({msg: "success!"})
})

const start = async () => {
    try {
        await fastify.listen({port: 8000})
    }   catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()