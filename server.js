const fastify = require("fastify")({logger: true})

fastify.register(require("./routes/routeOne")) // route One

const PORT = 8000 // port

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

start() // starts the server