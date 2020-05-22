import { serve, Server } from "https://deno.land/std/http/server.ts";

class DaroServer {
  public port: number;
  public server: Server;
  public workers: Array<Worker> = [];

  constructor(port: number) {
    this.port = port;
    this.server = serve({ port });
  }

  async listen() {
    console.log("Listening on port", this.port);

    for await (const req of this.server) {
      console.log("Processing request");

      const requestWorker = new Worker(
        "./src/handler_worker.ts",
        { type: "module" },
      );

      requestWorker.onmessage = this.processWorkerResponse(async (res: any) => {
        await req.respond(res);
      });

      requestWorker.postMessage({
        request: req,
      });
    }
  }

  processWorkerResponse(closure: any) {
    return (event: any) => {
      // Process event.data from worker, then hand it to the closure to respond
      const response = {
        status: 200,
        headers: new Headers({
          "content-type": "text/plain",
        }),
        body: event.data.text,
      };

      closure(response);
    };
  }
}

export default DaroServer;
