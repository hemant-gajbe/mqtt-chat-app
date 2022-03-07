// node pub.js

import mqtt from 'mqtt';
import React, { useEffect, useState } from 'react'

const pub = () => {

    //const [client, setClient] = useState(null);
    let client = mqtt.connect('mqtt://broker.hivemq.com');

    useEffect(() => {
        client.on("connect", function() {
                var random = Math.random() * 50;
                console.log(random);
                if(random < 30) {
                    client.publish('Hemant', 'Messages from Hemant' + random.toString() + '.')
                } else {
                    client.publish('Nikhil', 'Messages from Nikhil' + random.toString() + '.')
                }
        })
    }, [client])
    return (
        <div>pub</div>
    )
}

export default pub

