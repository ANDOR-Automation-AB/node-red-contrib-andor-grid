module.exports = function(RED) {
    function AndorGridNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        const group = RED.nodes.getNode(config.group);
        if (!group) {
            node.status({fill:"red", shape:"ring", text:"no group"});
            return;
        }

        const evts = {};
        
        group.register(node, config, evts);

        node.on('input', function(msg, send, done) {
            try {
                send(msg);
                done && done();
            } catch (err) {
                done && done(err);
            }
        });
    }

    RED.nodes.registerType("andor-grid", AndorGridNode);
};
