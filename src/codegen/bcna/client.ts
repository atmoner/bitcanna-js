import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bcnaBurnTxRegistry from "./burn/tx.registry";
import * as bcnaBurnTxAmino from "./burn/tx.amino";
export const bcnaAminoConverters = {
  ...bcnaBurnTxAmino.AminoConverter
};
export const bcnaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bcnaBurnTxRegistry.registry];
export const getSigningBcnaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bcnaProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...bcnaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBcnaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningBcnaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};