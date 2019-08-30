import { Router, Request, Response, NextFunction } from "express";
import AccountService from "../../services/coordinates-service";

/**
 * Account Controller
 */
export default class CoordinatesRoutes {
  public Router: Router;
  private _service: AccountService;

  constructor() {
    this.Router = Router();
    this._service = new AccountService();
    this.init();
  }

  init() {
    this.Router.post("/setInitialPosition", this.setInitialPosition);
    this.Router.post("/setPosition", this.setPosition);
  }

  /**Set Initial Position/Reset*/
  setInitialPosition = (req: Request, res: Response, next: NextFunction) => {
    try {
      let initialPosition = req.body;
      res.send(this._service.SetInitialPosition(initialPosition));
    } catch (ex) {
      console.log(ex);
    }
  };

    /**Set Position*/
    setPosition = (req: Request, res: Response, next: NextFunction) => {
      try {
        let position = req.body;
        res.send(this._service.SetPosition(position));
      } catch (ex) {
        console.log(ex);
      }
    };
}
