import * as dgram from 'dgram';
import type { Socket } from 'dgram';



export class Server {
    socket: Socket;
    server: any;
    constructor() {
        this.socket = dgram.createSocket("udp4");
    }

   private init () {
    const UDP_IP = "0.0.0.0";
    const UDP_PORT = 20002;

    return this.socket.bind({
        port: UDP_PORT,
        address: UDP_IP,
    });

   };

   public connect () {
    const SWITCHER_IP = "10.100.102.5";
    const server = this.init();

    server.connect(9557, SWITCHER_IP);


    server.on("connect", () => {
        process.stdout.write("Connection established");
    });

    server.on("message", (data) => {
        console.log("current data", data);
    })

    server.on("error", (error) => {
        process.stdout.write("Connection error due to"  + error);
    });
   }

}
