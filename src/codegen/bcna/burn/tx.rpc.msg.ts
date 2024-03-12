import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgBurnCoinsAction, MsgBurnCoinsActionResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  burnCoinsAction(request: MsgBurnCoinsAction): Promise<MsgBurnCoinsActionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.burnCoinsAction = this.burnCoinsAction.bind(this);
  }
  burnCoinsAction(request: MsgBurnCoinsAction): Promise<MsgBurnCoinsActionResponse> {
    const data = MsgBurnCoinsAction.encode(request).finish();
    const promise = this.rpc.request("bcna.burn.Msg", "BurnCoinsAction", data);
    return promise.then(data => MsgBurnCoinsActionResponse.decode(new BinaryReader(data)));
  }
}