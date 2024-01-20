import * as dgram from 'dgram';
import type { Socket } from 'dgram';

const UDP_IP = "0.0.0.0";
const UDP_PORT = 20002;

export class Server {
    socket: Socket;
    server: any;
    constructor() {
        this.socket = dgram.createSocket("udp4");
    }

   public init () {
    const server = this.socket.bind({
        port: UDP_PORT,
        address: UDP_IP,
    });

    server.on("listening", () => {
        process.stdout.write("Listening to Incoming Connections");
    });

    server.on("error", (error) => {
        process.stdout.write("Connection Listening Failed" + error);
    })
   }
}
