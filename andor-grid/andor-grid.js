module.exports = function(RED) {
    function AndorGridNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.gridSize = config.gridSize;

        node.on('input', function(msg, send, done) {
            try {
                msg.topic = msg.topic || "andor-grid";
                msg.andor = {
                    gridSize: node.gridSize,
                    original: msg.payload
                };
                send(msg);
                if (done) done();
            } catch (err) {
                node.error("error in andor-grid: " + err, msg);
                if (done) done(err);
            }
        });
    }

    RED.nodes.registerType("andor-grid", AndorGridNode);
};
