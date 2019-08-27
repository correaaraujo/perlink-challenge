import express from "express";
import bodyParser from "body-parser";
import Logger from "morgan";
import CoordinatesRoutes from "./account/coordinates";

/**
 * Server startup 
 */
export class Server {
  public app: express.Application;

  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {
    this.app.use(Logger("dev"));
    this.app.use(bodyParser.json());
  }

  /**
   * Create router
   *
   * @class Server
   * @method api
   */
  public routes() {
    this.app.use("/api/v1/coordinates", new CoordinatesRoutes().Router);
  }

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }
}
