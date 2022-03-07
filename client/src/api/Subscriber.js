// node sub.js

const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function() {
    client.subscribe("Hemant");
    client.subscribe("Nikhil")
    console.log('Client has subscribed successfully')
})

client.on('message', function(topic, message) {
    console.log(message.toString())
})