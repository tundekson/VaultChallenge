// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v71 = stdlib.protect(ctc0, interact.accountInheritance, 'for Alice\'s interact field accountInheritance');
  
  const txn1 = await (ctc.sendrecv({
    args: [v71],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v71, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75], secs: v77, time: v76, didSend: v29, from: v74 } = txn1;
      
      sim_r.txns.push({
        amt: v75,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v29, from: v74 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v38, from: v83 } = txn2;
  ;
  const v89 = stdlib.protect(ctc0, await interact.switchInheritance(), {
    at: './index.rsh:41:80:application',
    fs: ['at ./index.rsh:40:19:application call to [unknown function] (defined at: ./index.rsh:40:23:function exp)'],
    msg: 'switchInheritance',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v74, v75, v83, v89],
    evt_cnt: 1,
    funcNum: 2,
    lct: v85,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v91], secs: v93, time: v92, didSend: v48, from: v90 } = txn3;
      
      ;
      const v95 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:46:62:decimal', stdlib.UInt_max, '1'));
      const v96 = v95 ? v74 : v83;
      sim_r.txns.push({
        kind: 'from',
        to: v96,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v91], secs: v93, time: v92, didSend: v48, from: v90 } = txn3;
  ;
  const v94 = stdlib.addressEq(v74, v90);
  stdlib.assert(v94, {
    at: './index.rsh:44:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v95 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:46:62:decimal', stdlib.UInt_max, '1'));
  const v96 = v95 ? v74 : v83;
  ;
  stdlib.protect(ctc2, await interact.showTimer(stdlib.checkedBigNumberify('./index.rsh:3:25:decimal', stdlib.UInt_max, '10')), {
    at: './index.rsh:51:35:application',
    fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:31:function exp)'],
    msg: 'showTimer',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v29, from: v74 } = txn1;
  ;
  const v82 = stdlib.protect(ctc1, await interact.acceptTerms(), {
    at: './index.rsh:33:68:application',
    fs: ['at ./index.rsh:32:17:application call to [unknown function] (defined at: ./index.rsh:32:21:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v74, v75, v82],
    evt_cnt: 1,
    funcNum: 1,
    lct: v76,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v84], secs: v86, time: v85, didSend: v38, from: v83 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v84], secs: v86, time: v85, didSend: v38, from: v83 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v91], secs: v93, time: v92, didSend: v48, from: v90 } = txn3;
  ;
  const v94 = stdlib.addressEq(v74, v90);
  stdlib.assert(v94, {
    at: './index.rsh:44:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v95 = stdlib.eq(v91, stdlib.checkedBigNumberify('./index.rsh:46:62:decimal', stdlib.UInt_max, '1'));
  const v96 = v95 ? v74 : v83;
  ;
  stdlib.protect(ctc2, await interact.showTimer(stdlib.checkedBigNumberify('./index.rsh:3:25:decimal', stdlib.UInt_max, '10')), {
    at: './index.rsh:51:35:application',
    fs: ['at ./index.rsh:50:13:application call to [unknown function] (defined at: ./index.rsh:50:31:function exp)'],
    msg: 'showTimer',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECICYCAQAAIjUAMRhBAWwpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQACoSSQMQABTJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQUXNf6ABJdO9xc0/hZQsDT/MQASRLEisgE0AyVbsggjshA0A1coIDT/NP4jEk2yB7NCAJVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BRc1/YAED7/GNDT9FlEHCFCwNP80/hZQMQBQKEsBVwBIZ0gkNQEyBjUCQgBiSIGgjQaIAKsiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gAhTEANP8WUChLAVcAKGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v84",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v84",
                "type": "bool"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610a6e380380610a6e833981016040819052610022916101a8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a160208101515161008390341460076100e6565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100de926002929091019061010f565b505050610281565b8161010b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461011b90610246565b90600052602060002090601f01602090048101928261013d5760008555610183565b82601f1061015657805160ff1916838001178555610183565b82800160010185558215610183579182015b82811115610183578251825591602001919060010190610168565b5061018f929150610193565b5090565b5b8082111561018f5760008155600101610194565b60008183036040808212156101bc57600080fd5b80518082016001600160401b0380821183831017156101eb57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561020457600080fd5b83519450602085019150848210818311171561023057634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025a57607f821691505b6020821081141561027b57634e487b7160e01b600052602260045260246000fd5b50919050565b6107de806102906000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806345f7039614610078578063832307571461008b5780639a3e3912146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b6100526100863660046105c2565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae3660046105c2565b610280565b3480156100bf57600080fd5b506100c8610412565b60405161006f9291906105e5565b6100e6600260005414600d6104af565b610100813515806100f957506001548235145b600e6104af565b60008080556002805461011290610642565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610642565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610693565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16101f83415600b6104af565b8051610210906001600160a01b03163314600c6104af565b6020820135600114610226578060400151610229565b80515b6001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610265573d6000803e3d6000fd5b506000808055600181905561027c906002906104d4565b5050565b61029060016000541460096104af565b6102aa813515806102a357506001548235145b600a6104af565b6000808055600280546102bc90610642565b80601f01602080910402602001604051908101604052809291908181526020018280546102e890610642565b80156103355780601f1061030a57610100808354040283529160200191610335565b820191906000526020600020905b81548152906001019060200180831161031857829003601f168201915b505050505080602001905181019061034d9190610706565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338360405161038092919061076b565b60405180910390a1610394341560086104af565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088528985015184523383526002958690554360015588518086019190915292518389015290511681850152855180820390940184526080019094528151929361040c9391920190610511565b50505050565b60006060600054600280805461042790610642565b80601f016020809104026020016040519081016040528092919081815260200182805461045390610642565b80156104a05780601f10610475576101008083540402835291602001916104a0565b820191906000526020600020905b81548152906001019060200180831161048357829003601f168201915b50505050509050915091509091565b8161027c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546104e090610642565b6000825580601f106104f0575050565b601f01602090049060005260206000209081019061050e9190610595565b50565b82805461051d90610642565b90600052602060002090601f01602090048101928261053f5760008555610585565b82601f1061055857805160ff1916838001178555610585565b82800160010185558215610585579182015b8281111561058557825182559160200191906001019061056a565b50610591929150610595565b5090565b5b808211156105915760008155600101610596565b6000604082840312156105bc57600080fd5b50919050565b6000604082840312156105d457600080fd5b6105de83836105aa565b9392505050565b82815260006020604081840152835180604085015260005b81811015610619578581018301518582016060015282016105fd565b8181111561062b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061065657607f821691505b602082108114156105bc57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461068e57600080fd5b919050565b6000606082840312156106a557600080fd5b6040516060810181811067ffffffffffffffff821117156106d657634e487b7160e01b600052604160045260246000fd5b6040526106e283610677565b8152602083015160208201526106fa60408401610677565b60408201529392505050565b60006040828403121561071857600080fd5b6040516040810181811067ffffffffffffffff8211171561074957634e487b7160e01b600052604160045260246000fd5b60405261075583610677565b8152602083015160208201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461079957600080fd5b8060408501525050939250505056fea26469706673582212200c14317e391c524d0da14bc69f972a13ef3d8d5f4c13b006342887ed254d5aba64736f6c634300080c0033`,
  BytecodeLen: 2670,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:38:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
