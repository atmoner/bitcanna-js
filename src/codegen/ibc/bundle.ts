import * as _113 from "./applications/transfer/v1/genesis";
import * as _114 from "./applications/transfer/v1/query";
import * as _115 from "./applications/transfer/v1/transfer";
import * as _116 from "./applications/transfer/v1/tx";
import * as _117 from "./applications/transfer/v2/packet";
import * as _118 from "./core/channel/v1/channel";
import * as _119 from "./core/channel/v1/genesis";
import * as _120 from "./core/channel/v1/query";
import * as _121 from "./core/channel/v1/tx";
import * as _122 from "./core/client/v1/client";
import * as _123 from "./core/client/v1/genesis";
import * as _124 from "./core/client/v1/query";
import * as _125 from "./core/client/v1/tx";
import * as _126 from "./core/commitment/v1/commitment";
import * as _127 from "./core/connection/v1/connection";
import * as _128 from "./core/connection/v1/genesis";
import * as _129 from "./core/connection/v1/query";
import * as _130 from "./core/connection/v1/tx";
import * as _131 from "./core/port/v1/query";
import * as _132 from "./core/types/v1/genesis";
import * as _133 from "./lightclients/localhost/v1/localhost";
import * as _134 from "./lightclients/solomachine/v1/solomachine";
import * as _135 from "./lightclients/solomachine/v2/solomachine";
import * as _136 from "./lightclients/tendermint/v1/tendermint";
import * as _235 from "./applications/transfer/v1/tx.amino";
import * as _236 from "./core/channel/v1/tx.amino";
import * as _237 from "./core/client/v1/tx.amino";
import * as _238 from "./core/connection/v1/tx.amino";
import * as _239 from "./applications/transfer/v1/tx.registry";
import * as _240 from "./core/channel/v1/tx.registry";
import * as _241 from "./core/client/v1/tx.registry";
import * as _242 from "./core/connection/v1/tx.registry";
import * as _243 from "./applications/transfer/v1/query.lcd";
import * as _244 from "./core/channel/v1/query.lcd";
import * as _245 from "./core/client/v1/query.lcd";
import * as _246 from "./core/connection/v1/query.lcd";
import * as _247 from "./applications/transfer/v1/query.rpc.Query";
import * as _248 from "./core/channel/v1/query.rpc.Query";
import * as _249 from "./core/client/v1/query.rpc.Query";
import * as _250 from "./core/connection/v1/query.rpc.Query";
import * as _251 from "./core/port/v1/query.rpc.Query";
import * as _252 from "./applications/transfer/v1/tx.rpc.msg";
import * as _253 from "./core/channel/v1/tx.rpc.msg";
import * as _254 from "./core/client/v1/tx.rpc.msg";
import * as _255 from "./core/connection/v1/tx.rpc.msg";
import * as _265 from "./lcd";
import * as _266 from "./rpc.query";
import * as _267 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._235,
        ..._239,
        ..._243,
        ..._247,
        ..._252
      };
      export const v2 = {
        ..._117
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._236,
        ..._240,
        ..._244,
        ..._248,
        ..._253
      };
    }
    export namespace client {
      export const v1 = {
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._237,
        ..._241,
        ..._245,
        ..._249,
        ..._254
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._126
      };
    }
    export namespace connection {
      export const v1 = {
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._238,
        ..._242,
        ..._246,
        ..._250,
        ..._255
      };
    }
    export namespace port {
      export const v1 = {
        ..._131,
        ..._251
      };
    }
    export namespace types {
      export const v1 = {
        ..._132
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._133
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._134
      };
      export const v2 = {
        ..._135
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._136
      };
    }
  }
  export const ClientFactory = {
    ..._265,
    ..._266,
    ..._267
  };
}