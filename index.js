var Hapi = require('hapi');
var mongo = require('mongodb');
var server = new Hapi.Server();
server.connection();

server.decorate('reply', 'success', function () {

    return this.response({ status: 'ok' });
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply.success();
    }
});

server.start(function(err) {
    if (!err) { throw err; }

    console.log('Started');
});
