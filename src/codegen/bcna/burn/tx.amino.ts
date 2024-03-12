import { MsgBurnCoinsAction } from "./tx";
export const AminoConverter = {
  "/bcna.burn.MsgBurnCoinsAction": {
    aminoType: "/bcna.burn.MsgBurnCoinsAction",
    toAmino: MsgBurnCoinsAction.toAmino,
    fromAmino: MsgBurnCoinsAction.fromAmino
  }
};