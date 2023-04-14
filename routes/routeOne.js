function routeOne (fastify, options, done) {
    
    fastify.get("/one", (req, reply) => {
        reply.send("this is route one")
    })

    done()
}

module.exports = routeOne