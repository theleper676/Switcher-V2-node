import * as dgram from 'dgram';

const UDP_IP = "0.0.0.0";
const UDP_PORT = 20002;



export const server = () => {
    
    const server = dgram.createSocket("udp4");
    
    server.bind({
        port: UDP_PORT,
        address: UDP_IP,
    });
    
    server.on("listening", () => {
        console.log("Waiting for Switcher Response");
    })
    
    server.on("message", (message, rinfo) => {
        process.stdout.write("UDP String: " + message + "\n");
        process.stdout.write("server info" + rinfo.address);
    });
    
}