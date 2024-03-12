import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateBitcannaid, MsgUpdateBitcannaid, MsgDeleteBitcannaid, MsgCreateSupplychain, MsgUpdateSupplychain, MsgDeleteSupplychain } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bitcannaglobal.bcna.bcna.MsgCreateBitcannaid", MsgCreateBitcannaid], ["/bitcannaglobal.bcna.bcna.MsgUpdateBitcannaid", MsgUpdateBitcannaid], ["/bitcannaglobal.bcna.bcna.MsgDeleteBitcannaid", MsgDeleteBitcannaid], ["/bitcannaglobal.bcna.bcna.MsgCreateSupplychain", MsgCreateSupplychain], ["/bitcannaglobal.bcna.bcna.MsgUpdateSupplychain", MsgUpdateSupplychain], ["/bitcannaglobal.bcna.bcna.MsgDeleteSupplychain", MsgDeleteSupplychain]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgCreateBitcannaid",
        value: MsgCreateBitcannaid.encode(value).finish()
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgUpdateBitcannaid",
        value: MsgUpdateBitcannaid.encode(value).finish()
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgDeleteBitcannaid",
        value: MsgDeleteBitcannaid.encode(value).finish()
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgCreateSupplychain",
        value: MsgCreateSupplychain.encode(value).finish()
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgUpdateSupplychain",
        value: MsgUpdateSupplychain.encode(value).finish()
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgDeleteSupplychain",
        value: MsgDeleteSupplychain.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgCreateBitcannaid",
        value
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgUpdateBitcannaid",
        value
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgDeleteBitcannaid",
        value
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgCreateSupplychain",
        value
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgUpdateSupplychain",
        value
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgDeleteSupplychain",
        value
      };
    }
  },
  fromPartial: {
    createBitcannaid(value: MsgCreateBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgCreateBitcannaid",
        value: MsgCreateBitcannaid.fromPartial(value)
      };
    },
    updateBitcannaid(value: MsgUpdateBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgUpdateBitcannaid",
        value: MsgUpdateBitcannaid.fromPartial(value)
      };
    },
    deleteBitcannaid(value: MsgDeleteBitcannaid) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgDeleteBitcannaid",
        value: MsgDeleteBitcannaid.fromPartial(value)
      };
    },
    createSupplychain(value: MsgCreateSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgCreateSupplychain",
        value: MsgCreateSupplychain.fromPartial(value)
      };
    },
    updateSupplychain(value: MsgUpdateSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgUpdateSupplychain",
        value: MsgUpdateSupplychain.fromPartial(value)
      };
    },
    deleteSupplychain(value: MsgDeleteSupplychain) {
      return {
        typeUrl: "/bitcannaglobal.bcna.bcna.MsgDeleteSupplychain",
        value: MsgDeleteSupplychain.fromPartial(value)
      };
    }
  }
};