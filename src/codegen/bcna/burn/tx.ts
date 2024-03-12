import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgBurnCoinsAction {
  creator: string;
  coins: Coin[];
}
export interface MsgBurnCoinsActionProtoMsg {
  typeUrl: "/bcna.burn.MsgBurnCoinsAction";
  value: Uint8Array;
}
export interface MsgBurnCoinsActionAmino {
  creator?: string;
  coins?: CoinAmino[];
}
export interface MsgBurnCoinsActionAminoMsg {
  type: "/bcna.burn.MsgBurnCoinsAction";
  value: MsgBurnCoinsActionAmino;
}
export interface MsgBurnCoinsActionSDKType {
  creator: string;
  coins: CoinSDKType[];
}
export interface MsgBurnCoinsActionResponse {}
export interface MsgBurnCoinsActionResponseProtoMsg {
  typeUrl: "/bcna.burn.MsgBurnCoinsActionResponse";
  value: Uint8Array;
}
export interface MsgBurnCoinsActionResponseAmino {}
export interface MsgBurnCoinsActionResponseAminoMsg {
  type: "/bcna.burn.MsgBurnCoinsActionResponse";
  value: MsgBurnCoinsActionResponseAmino;
}
export interface MsgBurnCoinsActionResponseSDKType {}
function createBaseMsgBurnCoinsAction(): MsgBurnCoinsAction {
  return {
    creator: "",
    coins: []
  };
}
export const MsgBurnCoinsAction = {
  typeUrl: "/bcna.burn.MsgBurnCoinsAction",
  encode(message: MsgBurnCoinsAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnCoinsAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoinsAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgBurnCoinsAction>): MsgBurnCoinsAction {
    const message = createBaseMsgBurnCoinsAction();
    message.creator = object.creator ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBurnCoinsActionAmino): MsgBurnCoinsAction {
    const message = createBaseMsgBurnCoinsAction();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBurnCoinsAction): MsgBurnCoinsActionAmino {
    const obj: any = {};
    obj.creator = message.creator;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgBurnCoinsActionAminoMsg): MsgBurnCoinsAction {
    return MsgBurnCoinsAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnCoinsActionProtoMsg): MsgBurnCoinsAction {
    return MsgBurnCoinsAction.decode(message.value);
  },
  toProto(message: MsgBurnCoinsAction): Uint8Array {
    return MsgBurnCoinsAction.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnCoinsAction): MsgBurnCoinsActionProtoMsg {
    return {
      typeUrl: "/bcna.burn.MsgBurnCoinsAction",
      value: MsgBurnCoinsAction.encode(message).finish()
    };
  }
};
function createBaseMsgBurnCoinsActionResponse(): MsgBurnCoinsActionResponse {
  return {};
}
export const MsgBurnCoinsActionResponse = {
  typeUrl: "/bcna.burn.MsgBurnCoinsActionResponse",
  encode(_: MsgBurnCoinsActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnCoinsActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoinsActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgBurnCoinsActionResponse>): MsgBurnCoinsActionResponse {
    const message = createBaseMsgBurnCoinsActionResponse();
    return message;
  },
  fromAmino(_: MsgBurnCoinsActionResponseAmino): MsgBurnCoinsActionResponse {
    const message = createBaseMsgBurnCoinsActionResponse();
    return message;
  },
  toAmino(_: MsgBurnCoinsActionResponse): MsgBurnCoinsActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnCoinsActionResponseAminoMsg): MsgBurnCoinsActionResponse {
    return MsgBurnCoinsActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnCoinsActionResponseProtoMsg): MsgBurnCoinsActionResponse {
    return MsgBurnCoinsActionResponse.decode(message.value);
  },
  toProto(message: MsgBurnCoinsActionResponse): Uint8Array {
    return MsgBurnCoinsActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnCoinsActionResponse): MsgBurnCoinsActionResponseProtoMsg {
    return {
      typeUrl: "/bcna.burn.MsgBurnCoinsActionResponse",
      value: MsgBurnCoinsActionResponse.encode(message).finish()
    };
  }
};