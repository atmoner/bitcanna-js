import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Supplychain {
  id: bigint;
  product: string;
  info: string;
  supplyinfo: string;
  supplyextra: string;
  creator: string;
}
export interface SupplychainProtoMsg {
  typeUrl: "/bitcannaglobal.bcna.bcna.Supplychain";
  value: Uint8Array;
}
export interface SupplychainAmino {
  id?: string;
  product?: string;
  info?: string;
  supplyinfo?: string;
  supplyextra?: string;
  creator?: string;
}
export interface SupplychainAminoMsg {
  type: "/bitcannaglobal.bcna.bcna.Supplychain";
  value: SupplychainAmino;
}
export interface SupplychainSDKType {
  id: bigint;
  product: string;
  info: string;
  supplyinfo: string;
  supplyextra: string;
  creator: string;
}
function createBaseSupplychain(): Supplychain {
  return {
    id: BigInt(0),
    product: "",
    info: "",
    supplyinfo: "",
    supplyextra: "",
    creator: ""
  };
}
export const Supplychain = {
  typeUrl: "/bitcannaglobal.bcna.bcna.Supplychain",
  encode(message: Supplychain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.product !== "") {
      writer.uint32(18).string(message.product);
    }
    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }
    if (message.supplyinfo !== "") {
      writer.uint32(34).string(message.supplyinfo);
    }
    if (message.supplyextra !== "") {
      writer.uint32(42).string(message.supplyextra);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Supplychain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplychain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.product = reader.string();
          break;
        case 3:
          message.info = reader.string();
          break;
        case 4:
          message.supplyinfo = reader.string();
          break;
        case 5:
          message.supplyextra = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Supplychain>): Supplychain {
    const message = createBaseSupplychain();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    message.supplyextra = object.supplyextra ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: SupplychainAmino): Supplychain {
    const message = createBaseSupplychain();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.product !== undefined && object.product !== null) {
      message.product = object.product;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.supplyinfo !== undefined && object.supplyinfo !== null) {
      message.supplyinfo = object.supplyinfo;
    }
    if (object.supplyextra !== undefined && object.supplyextra !== null) {
      message.supplyextra = object.supplyextra;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: Supplychain): SupplychainAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.product = message.product;
    obj.info = message.info;
    obj.supplyinfo = message.supplyinfo;
    obj.supplyextra = message.supplyextra;
    obj.creator = message.creator;
    return obj;
  },
  fromAminoMsg(object: SupplychainAminoMsg): Supplychain {
    return Supplychain.fromAmino(object.value);
  },
  fromProtoMsg(message: SupplychainProtoMsg): Supplychain {
    return Supplychain.decode(message.value);
  },
  toProto(message: Supplychain): Uint8Array {
    return Supplychain.encode(message).finish();
  },
  toProtoMsg(message: Supplychain): SupplychainProtoMsg {
    return {
      typeUrl: "/bitcannaglobal.bcna.bcna.Supplychain",
      value: Supplychain.encode(message).finish()
    };
  }
};