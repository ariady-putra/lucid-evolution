import { UTxO } from "@lucid-evolution/core-types";
import { applyDoubleCborEncoding } from "@lucid-evolution/utils";

export const discoveryUTxO: UTxO = {
  txHash: "b50e73e74a3073bc44f555928702c0ae0f555a43f1afdce34b3294247dce022d",
  outputIndex: 0,
  address: "addr_test1wpgexmeunzsykesf42d4eqet5yvzeap6trjnflxqtkcf66g0kpnxt",
  assets: {
    lovelace: 11977490n,
    "4a83e031d4c37fc7ca6177a2f3581a8eec2ce155da91f59cfdb3bb28446973636f7665727956616c696461746f72":
      1n,
  },
  datumHash: undefined,
  datum: undefined,
  scriptRef: {
    type: "PlutusV2",
    script: applyDoubleCborEncoding(
      "5909d1010000322223232325333573466e1d20000021323232323232533357346644664646460044660040040024600446600400400244a666aae7c0045288a9991199ab9a00200114a060066ae840044c008d5d1000919919180111980100100091801119801001000912999aab9f00114a02a666ae68cdd79aba100100314a2260046ae88004cc8c8c8c0088cc0080080048c0088cc008008004894ccd55cf8008a5eb804cd5d018019aba1001300235744002aae7400c004dd59aba100333223233232323002233002002001230022330020020012253335573e002297ae0133574060066ae84004c008d5d1000aab9d33232323002233002002001230022330020020012253335573e002297adef6c60132533357346008002266ae80004c00cd5d1001098019aba2002357420024664646460044660040040024600446600400400244a666aae7c0045280a99919ab9a00114a260066ae840044c008d5d1000918019bae35573a0026eacd55cf000801919b8f33371890001b8d00200100237566ae84d5d1000a4410346534e00149858c8d55cf1baa0013232325333573466e1d200200213322332323002233002002001230022330020020012253335573e0022c264a666ae68cc88cdd79ba73235573c6ea8004008dd3991aab9e37540020020086ae840044d5d09aba20011300335744004646aae78dd50009aba1001002004357420022c6aae78008d55ce8009baa357426ae88014dd61aba1003357446ae88004d5d11aba20013235573c6ea8004d5d0800991aab9e37540020082a666ae68cdc3a4008004266664664446646460044660040040024600446600400400244a666aae7c004489400454ccd5cd19baf35573a6ae840040104c014d5d0800898011aba2001001232223002003375a6aae78004004d5d0991aba235744002646aae78dd5000803991bab35742646ae88d5d11aba235744646ae88d5d1000800991aab9e37540020026ae84c8d55cf1baa0010042498584c8c8c8c8c8c8c8c8c94ccd5cd19b87480080084c8c8c8c94ccd5cd19b874801000854ccd5cd199119baf374e646aae78dd50008011ba73235573c6ea8004004c8c8c8c8c80154ccd5cd19b87480000084c8c8c8c8c8c8c8c8c8c8c8c8c92653335573e0022930b1aba20065333573466e1d20000021323232324994ccd55cf8008a4c2c6ae8800cdd70009aba100115333573466e1d20020021324994ccd55cf8008a4c2c2c6aae78008d55ce8009baa001357420026ae880194ccd5cd19b87480000084c8c8c8c92653335573e0022930b1aba2003375c0026ae8400454ccd5cd19b87480080084c92653335573e0022930b0b1aab9e00235573a0026ea8004d5d08008b1aab9e00235573a0026ea8004d5d08008098a999ab9a33223375e6e98008dd3000992999aab9f00110011333573466ebcd55ce9aba10013752910100357440020026eacd5d09aba20083253335573e00220022666ae68cdd79aab9d357420026ea522100357440020026eacd5d08020a999ab9a3371064a666aae7c004520001333573466ebcd55ce9aba1001375291100375a6aae78d5d09bab35573c6ae84005200037566ae84d5d100419b803253335573e002290000999ab9a3375e6aae74d5d08009ba9488100375a6aae78d5d09bab35573c6ae84005200037566ae840112080dac4091533357346644664646460044660040040024600446600400400244a666aae7c0045288a9991199ab9a00200114a060066ae840044c008d5d1000918019bab35573c002002644664646460044660040040024600446600400400244a666aae7c0045288a9991199ab9a00200114a060066ae840044c008d5d1000918019bad35573c002002466e1c0052000332233323222333323232300223300200200123002233002002001322323223300100300222253335573e002266ae8000c0084c8c8c94ccd5cd19baf002001133574066ec0008cc024d55cf0031aab9e00333300822002005357440082a666ae68cdc81bae002375c002266ae80018cccc0208800400cd5d1002002899aba0003333300822001006005357440086aae74008d55ce8021aba10012253335573e004200226666006440026ae84008d5d100100080080191001001000911ba63300337560046eac00488ccc888cccc8c8c8c0088cc0080080048c0088cc008008004c88c8c88cc00400c0088894ccd55cf800899aba000300213232325333573466ebc0080044cd5d019bb00023300935573c00c6aae7800cccc02088008014d5d10020a999ab9a337206eb8008dd7000899aba00063333008220010033574400800a266ae8000ccccc02088004018014d5d10021aab9d00235573a0086ae84004894ccd55cf801080089999801910009aba10023574400400200200644004004002446ea0cdc09bad002375a0020040020040026eacd5d080525eb7bdb18054ccd5cd199119192999ab9a323370e6aae74dd5000a40046ae84d5d100109919192999ab9a3370e90000010a5015333573466e1d2002002132337100020106eb4d5d08008a5135573c0046aae74004dd500089919192999ab9a3370e90000010a99919ab9a00114a29405280a999ab9a3370e90010010a99919ab9a00114a26466e20004020dd69aba10011323370e0100026eb4d5d08008a99919ab9a00114a29445281aab9e00235573a0026ea8004d5d0800991aab9e37540026ae84d5d1191aab9e375400200266e04dd69aba13235573c6ea80040512080c60a35742646ae88d5d10009aba200a1498585858585858d55cf0011aab9d00137546ae84d5d10009aba23235573c6ea8004cc88cc8c8c0088cc0080080048c0088cc008008004894ccd55cf8008b09919192999ab9a3370e90010010a999ab9a3371e00c6eb8d5d080089aba100413005357440082600a6ae88010d55cf0011aab9d0013754646ae84c8d55cf1baa0010013235742646aae78dd50008009aba100100237586ae8401cdd71aba10011635573c0046aae74004dd5191aba13235573c6ea8004004d5d0800991aab9e3754002646464a666ae68cdc3a4004004266446646460044660040040024600446600400400244a666aae7c004584c94ccd5cd199119baf374e646aae78dd50008011ba73235573c6ea8004004010d5d080089aba135744002260066ae88008c8d55cf1baa001357420020040086ae8400458d55cf0011aab9d00137546ae84d5d10029bac357420066ae88d5d10009aba235744002646aae78dd50009aba10013235573c6ea8004010d55cf0011aab9d001375400498183d8799f1b00000189a8e534b6d8799fd8799f581c4e773fd59569b8e154de2fd6ae5b1c4b56dd7957a9d6f77267e06f41ffd8799fd8799fd8799f581c3bd05909969e8c3e98a3b3f8debf8b1f3cb48a1fc32d8541c9340ef3ffffffffd8799fd87a9f581ce579d647711d851e074a36bf6a6e549704287f778e7eab6e769ab515ffffff0001",
    ),
  },
};

export const utxos = [
  {
    txHash: "35509191d07f018849fa7d32217b70ae33b49983aea21339850d6fcda31b030b",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
  {
    txHash: "75af72128f59d7cae87965399a01fd775fb8f69095cecb5ce45f55b8e3f5052c",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
  {
    txHash: "4f070d5ffaa972c554bdbbad5d01ddd032fddf91f8f3262136b8cce0ba3b790a",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
  {
    txHash: "f4918fe2de471b137901d6809e849ee920ed9013f7454fd073bd5b632b9596f0",
    outputIndex: 0,
    assets: { lovelace: 10000000n },
    address: "addr_test1wrqlusc0rxkzfz5206j8mvgxqqkyxfl9gtplm3s26eypzqcxsnfs3",
    datumHash: undefined,
    datum: "d87981581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e50",
    scriptRef: undefined,
  },
];
export const cbor =
  "84a8008482582035509191d07f018849fa7d32217b70ae33b49983aea21339850d6fcda31b030b008258204f070d5ffaa972c554bdbbad5d01ddd032fddf91f8f3262136b8cce0ba3b790a0082582075af72128f59d7cae87965399a01fd775fb8f69095cecb5ce45f55b8e3f5052c00825820f4918fe2de471b137901d6809e849ee920ed9013f7454fd073bd5b632b9596f0000181825839009fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e505064b671634d14cb8d543e71dd8eb437a47efb47b0b22882866c420d1a025f365c021a000323a40b58203f42956d83a3940b571b4cf51c6098535b9c7e0b240bf4daaa0fb1c917e8a4370d81825820f4918fe2de471b137901d6809e849ee920ed9013f7454fd073bd5b632b9596f0010e81581c9fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e5010825839009fc430ea1f3adc20eebb813b2649e85c934ea5bc13d7b7fbe2b24e505064b671634d14cb8d543e71dd8eb437a47efb47b0b22882866c420d821b000000022ca6f211a2581c22691d3d969ecf5802226290c2fb98e2bc08522d5b726c1f5f400105a1445465737403581cef6ed47a6917a3cbbeb46561e8853da969343794d66128598a34af2ca14e4275726e61626c65546f6b656e3201111a004c4b40a20584840000d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99840001d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99840002d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99840003d879814d48656c6c6f2c20576f726c6421821966ad1a0077ca99068158eb58e901000032323232323223223225333006323253330083371e6eb8c008c028dd5002a4410d48656c6c6f2c20576f726c642100100114a06644646600200200644a66601c00229404c94ccc030cdc79bae301000200414a226600600600260200026eb0c02cc030c030c030c030c030c030c030c030c024dd5180098049baa002375c600260126ea80188c02c0045261365653330043370e900018029baa001132325333009300b002149858dd7180480098031baa0011653330023370e900018019baa0011323253330073009002149858dd7180380098021baa001165734aae7555cf2ab9f5742ae881f5f6";

export const redeemersExUnits = [
  {
    redeemer_tag: "spend",
    redeemer_index: 0,
    ex_units: { mem: 26285, steps: 7850649 },
  },
  {
    redeemer_tag: "spend",
    redeemer_index: 1,
    ex_units: { mem: 26285, steps: 7850649 },
  },
  {
    redeemer_tag: "spend",
    redeemer_index: 2,
    ex_units: { mem: 26285, steps: 7850649 },
  },
  {
    redeemer_tag: "spend",
    redeemer_index: 3,
    ex_units: { mem: 26285, steps: 7850649 },
  },
];
