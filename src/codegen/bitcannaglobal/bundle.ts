import * as _5 from "./bcna/bcna/bitcannaid";
import * as _6 from "./bcna/bcna/genesis";
import * as _7 from "./bcna/bcna/params";
import * as _8 from "./bcna/bcna/query";
import * as _9 from "./bcna/bcna/supplychain";
import * as _10 from "./bcna/bcna/tx";
import * as _153 from "./bcna/bcna/tx.amino";
import * as _154 from "./bcna/bcna/tx.registry";
import * as _155 from "./bcna/bcna/query.lcd";
import * as _156 from "./bcna/bcna/query.rpc.Query";
import * as _157 from "./bcna/bcna/tx.rpc.msg";
import * as _259 from "./lcd";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace bitcannaglobal {
  export namespace bcna {
    export const bcna = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157
    };
  }
  export const ClientFactory = {
    ..._259,
    ..._260,
    ..._261
  };
}