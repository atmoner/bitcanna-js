import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBurnCoinsAction } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bcna.burn.MsgBurnCoinsAction", MsgBurnCoinsAction]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    burnCoinsAction(value: MsgBurnCoinsAction) {
      return {
        typeUrl: "/bcna.burn.MsgBurnCoinsAction",
        value: MsgBurnCoinsAction.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    burnCoinsAction(value: MsgBurnCoinsAction) {
      return {
        typeUrl: "/bcna.burn.MsgBurnCoinsAction",
        value
      };
    }
  },
  fromPartial: {
    burnCoinsAction(value: MsgBurnCoinsAction) {
      return {
        typeUrl: "/bcna.burn.MsgBurnCoinsAction",
        value: MsgBurnCoinsAction.fromPartial(value)
      };
    }
  }
};