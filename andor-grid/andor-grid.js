module.exports = function(RED) {
    function AndorGridNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        // Till exempel: en property som kan konfigureras via HTML-formuläret
        node.gridSize = config.gridSize;

        node.on('input', function(msg, send, done) {
            try {
                // här skriver du din logik
                // Exempel: lägg till property som demonstration
                msg.andor = {
                    gridSize: node.gridSize,
                    original: msg.payload
                };
                send(msg);
                if (done) done();
            } catch (err) {
                node.error("Fel i andor-grid: " + err, msg);
                if (done) done(err);
            }
        });
    }

    RED.nodes.registerType("andor-grid", AndorGridNode);
};
