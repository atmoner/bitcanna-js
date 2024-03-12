import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export const AminoConverter = {
  "/bitcannaglobal.bcna.bcna.MsgCreateBitcannaid": {
    aminoType: "/bitcannaglobal.bcna.bcna.MsgCreateBitcannaid",
    toAmino: MsgCreateBitcannaid.toAmino,
    fromAmino: MsgCreateBitcannaid.fromAmino
  },
  "/bitcannaglobal.bcna.bcna.MsgUpdateBitcannaid": {
    aminoType: "/bitcannaglobal.bcna.bcna.MsgUpdateBitcannaid",
    toAmino: MsgUpdateBitcannaid.toAmino,
    fromAmino: MsgUpdateBitcannaid.fromAmino
  },
  "/bitcannaglobal.bcna.bcna.MsgDeleteBitcannaid": {
    aminoType: "/bitcannaglobal.bcna.bcna.MsgDeleteBitcannaid",
    toAmino: MsgDeleteBitcannaid.toAmino,
    fromAmino: MsgDeleteBitcannaid.fromAmino
  },
  "/bitcannaglobal.bcna.bcna.MsgCreateSupplychain": {
    aminoType: "/bitcannaglobal.bcna.bcna.MsgCreateSupplychain",
    toAmino: MsgCreateSupplychain.toAmino,
    fromAmino: MsgCreateSupplychain.fromAmino
  },
  "/bitcannaglobal.bcna.bcna.MsgUpdateSupplychain": {
    aminoType: "/bitcannaglobal.bcna.bcna.MsgUpdateSupplychain",
    toAmino: MsgUpdateSupplychain.toAmino,
    fromAmino: MsgUpdateSupplychain.fromAmino
  },
  "/bitcannaglobal.bcna.bcna.MsgDeleteSupplychain": {
    aminoType: "/bitcannaglobal.bcna.bcna.MsgDeleteSupplychain",
    toAmino: MsgDeleteSupplychain.toAmino,
    fromAmino: MsgDeleteSupplychain.fromAmino
  }
};