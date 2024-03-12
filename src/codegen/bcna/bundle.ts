import * as _1 from "./burn/genesis";
import * as _2 from "./burn/params";
import * as _3 from "./burn/query";
import * as _4 from "./burn/tx";
import * as _148 from "./burn/tx.amino";
import * as _149 from "./burn/tx.registry";
import * as _150 from "./burn/query.lcd";
import * as _151 from "./burn/query.rpc.Query";
import * as _152 from "./burn/tx.rpc.msg";
import * as _256 from "./lcd";
import * as _257 from "./rpc.query";
import * as _258 from "./rpc.tx";
export namespace bcna {
  export const burn = {
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._148,
    ..._149,
    ..._150,
    ..._151,
    ..._152
  };
  export const ClientFactory = {
    ..._256,
    ..._257,
    ..._258
  };
}