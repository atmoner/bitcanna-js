import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetBitcannaidRequest, QueryGetBitcannaidResponseSDKType, QueryAllBitcannaidRequest, QueryAllBitcannaidResponseSDKType, QueryGetBitcannaidByBcnaidRequest, QueryGetBitcannaidByBcnaidResponseSDKType, QueryGetSupplychainRequest, QueryGetSupplychainResponseSDKType, QueryAllSupplychainRequest, QueryAllSupplychainResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.bitcannaid = this.bitcannaid.bind(this);
    this.bitcannaidAll = this.bitcannaidAll.bind(this);
    this.bitcannaidByBcnaid = this.bitcannaidByBcnaid.bind(this);
    this.supplychain = this.supplychain.bind(this);
    this.supplychainAll = this.supplychainAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `BitCannaGlobal/bcna/bcna/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Bitcannaid by id. */
  async bitcannaid(params: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponseSDKType> {
    const endpoint = `BitCannaGlobal/bcna/bcna/bitcannaid/${params.id}`;
    return await this.req.get<QueryGetBitcannaidResponseSDKType>(endpoint);
  }
  /* Queries a list of Bitcannaid items. */
  async bitcannaidAll(params: QueryAllBitcannaidRequest = {
    pagination: undefined
  }): Promise<QueryAllBitcannaidResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `BitCannaGlobal/bcna/bcna/bitcannaid`;
    return await this.req.get<QueryAllBitcannaidResponseSDKType>(endpoint, options);
  }
  /* Queries a Bitcannaid by bcnaid. */
  async bitcannaidByBcnaid(params: QueryGetBitcannaidByBcnaidRequest): Promise<QueryGetBitcannaidByBcnaidResponseSDKType> {
    const endpoint = `BitCannaGlobal/bcna/bcna/bitcannaid/bcnaid/${params.bcnaid}`;
    return await this.req.get<QueryGetBitcannaidByBcnaidResponseSDKType>(endpoint);
  }
  /* Queries a Supplychain by id. */
  async supplychain(params: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponseSDKType> {
    const endpoint = `BitCannaGlobal/bcna/bcna/supplychain/${params.id}`;
    return await this.req.get<QueryGetSupplychainResponseSDKType>(endpoint);
  }
  /* Queries a list of Supplychain items. */
  async supplychainAll(params: QueryAllSupplychainRequest = {
    pagination: undefined
  }): Promise<QueryAllSupplychainResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `BitCannaGlobal/bcna/bcna/supplychain`;
    return await this.req.get<QueryAllSupplychainResponseSDKType>(endpoint, options);
  }
}