import { InitialPosition } from "../models/initialPosition-interface";
import { Position } from "../models/Position-interface";

/**Servico de gerenciamento de conta */
export default class CoordinatesService {
  _position: Array<number> = [];
  _x: string[] = ["L", "O"];
  _y: string[] = ["N", "S"];

  constructor() {}

  /**
   * Inicializa a posição
   * @param account
   */
  public SetInitialPosition(initialPosition: InitialPosition) {
    var coordinates = initialPosition.coordinates.split(",");
    this._position = this._position = coordinates.map(Number);
    initialPosition.coordinates = this._position.toString();

    return initialPosition;
  }

  /**
   * Set as coordernadas
   */
  public SetPosition(position: Position): any {
    var coord = position.coordinates.split(",");

    if (this._x.includes(coord[0]))
      this._position[0] += Number.parseInt(coord[1]);

    if (this._y.includes(coord[0]))
      this._position[1] += Number.parseInt(coord[1]);

      position.coordinates = this._position.toString();

    return position;
  }
}
