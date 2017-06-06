/**
 * Created by subbulakshmir on 15/5/17.
 */
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var ex = 'ola';

        ch.assertExchange(ex, 'fanout', {durable: false});

        ch.assertQueue('', {exclusive: true}, function(err, q) {
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
            ch.bindQueue(q.queue, ex, '');
console.log("hjhjhjhh");
            ch.consume(q.queue, function(msg) {
                console.log("hjhjhjhh");
                console.log(" [x] %s", msg.content.toString());
            }, {noAck: true});
        });
    });
});