import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as bitcannaglobalBcnaBcnaTxRegistry from "./bcna/bcna/tx.registry";
import * as bitcannaglobalBcnaBcnaTxAmino from "./bcna/bcna/tx.amino";
export const bitcannaglobalAminoConverters = {
  ...bitcannaglobalBcnaBcnaTxAmino.AminoConverter
};
export const bitcannaglobalProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...bitcannaglobalBcnaBcnaTxRegistry.registry];
export const getSigningBitcannaglobalClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...bitcannaglobalProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...bitcannaglobalAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBitcannaglobalClient = async ({
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
  } = getSigningBitcannaglobalClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};