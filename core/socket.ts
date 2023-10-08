import * as SocketIo from "socket.io";
import { Server } from "http";

export class SocketIO {
  private io: SocketIo.Server;

  constructor(server: Server) {
    this.io = new SocketIo.Server(server);
    this.io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("join", (roomId) => {
        socket.join(roomId);
      });

      socket.on("leave", (roomId: string) => {
        console.log(`user left room ${roomId}`);
        socket.leave(roomId);
      });

      socket.on("message", (roomId: string, message: any) => {
        console.log(`message received in room ${roomId}: ${message}`);
        this.io.to(roomId).emit("message", message);
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }

  public getIO() {
    return this.io;
  }
}
