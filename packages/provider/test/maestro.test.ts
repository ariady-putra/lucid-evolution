import { assert, describe, expect, test } from "vitest";
import { ProtocolParameters, UTxO } from "@lucid-evolution/core-types";
import { Config, Effect } from "effect";
import { Maestro } from "../src/index.js";
import * as PreprodConstants from "./preprod-constants.js";

export const maestro = await Effect.gen(function* () {
  const MAESTRO_KEY = yield* Config.string("VITE_MAESTRO_KEY_PREPROD");
  return new Maestro({ network: "Preprod", apiKey: MAESTRO_KEY });
}).pipe(Effect.runPromise);

describe("maestro", async () => {
  test("getProtocolParameters", async () => {
    const pp: ProtocolParameters = await maestro.getProtocolParameters();
    assert(pp);
  });

  test("getUtxos", async () => {
    const utxos = await maestro.getUtxos(
      "addr_test1qrngfyc452vy4twdrepdjc50d4kvqutgt0hs9w6j2qhcdjfx0gpv7rsrjtxv97rplyz3ymyaqdwqa635zrcdena94ljs0xy950",
    );
    assert(utxos);
  });

  test("getUtxosWithUnit", async () => {
    const utxos = await maestro.getUtxosWithUnit(
      "addr_test1wpgexmeunzsykesf42d4eqet5yvzeap6trjnflxqtkcf66g0kpnxt",
      "4a83e031d4c37fc7ca6177a2f3581a8eec2ce155da91f59cfdb3bb28446973636f7665727956616c696461746f72",
    );
    expect(utxos.length).toBeGreaterThan(0);
  });

  test("getUtxoByUnit", async () => {
    const utxo = await maestro.getUtxoByUnit(
      "4a83e031d4c37fc7ca6177a2f3581a8eec2ce155da91f59cfdb3bb28446973636f7665727956616c696461746f72",
    );
    expect(utxo).toStrictEqual(PreprodConstants.discoveryUTxO);
  });

  test("getUtxosByOutRef", async () => {
    const utxos: UTxO[] = await maestro.getUtxosByOutRef([
      {
        txHash:
          "b50e73e74a3073bc44f555928702c0ae0f555a43f1afdce34b3294247dce022d",
        outputIndex: 0,
      },
    ]);
    expect(utxos).toStrictEqual([PreprodConstants.discoveryUTxO]);
  });

  test("getDelegation", async () => {
    const delegation = await maestro.getDelegation(
      "stake_test17zt3vxfjx9pjnpnapa65lx375p2utwxmpc8afj053h0l3vgc8a3g3",
    );
    assert(delegation);
  });

  test("getDatum", async () => {
    const datum = await maestro.getDatum(
      "95472c2f46b89500703ec778304baf1079c58124c254bf4bf8c96e5d73869293",
    );
    expect(datum).toStrictEqual(
      "d87b9fd8799fd8799f9f581c3f2728ec78ef8b0f356e91a5662ff3124add324a7b7f5aeed69362f4581c17942ff3849b623d24e31ec709c1c94c53b9240311820a9601ad4af0581cba4ab50bdecca85162f3b8114739bc5ba3aaa6490e2b1d15ad0f9c66581c25aa4132c7ce7d8f96ee977cd921cba7681891d114d088449d1d63b2581c5309fa786856c1262d095b89adf64fe8a5255ad19142c9c537359e41ff1917701a001b77401a001b774018c818641a000927c0d8799f0a140aff021905dcd8799f9f581c1a550d5f572584e1add125b5712f709ac3b9828ad86581a4759022baff01ffffffff",
    );
  });

  test("awaitTx", async () => {
    const isConfirmed: boolean = await maestro.awaitTx(
      "2a1f95a9d85bf556a3dc889831593ee963ba491ca7164d930b3af0802a9796d0",
    );
    expect(isConfirmed).toBe(true);
  });

  test("submitTxBadRequest", async () => {
    await expect(() => maestro.submitTx("80")).rejects.toThrowError();
  });

  test("Maestro evaluate tx", async () => {
    const cbor =
      "84a800818258206bfe283509bd40ab90ef68116e79f67468e29a694cbbb53db32f9d5489a803f5010182a4005839009b619deb6e46ed004e49cb9a158462189cf093bab8eef2765d9b8bf75da571c9ab6fc02a347d0443bb80566c3408b4ee2a1b3a6a5019a28101821a006d6f00a1581cb92906f99519f847c2c7ff96979bb89a3d74c9a1eacaff508d1d3833a24d4275726e61626c65546f6b656e015820accbfb633f637e3bb1abee40c9539d1effd742cd2716b3b1db9de3aaf3f3779401028201d81843d8798003d81859053b8202590536590533010000323232323232322253232323233300730013008375400a264a666010646464a666016600a60186ea80044c8c8c8c8c8c8c94ccc048c94ccc04ccc00401c8cdc42400000229444cc00401c8cdc4000a400044646600200200644a66603200229444c94ccc05cc010dd6980e0010998018018008a50301c001153330123370e004002266e1c008cc8c004004894ccc05c004520001301033002002301a0013758600a60286ea80445280a503330023758602c602e602e60266ea802120000033330013758600660246ea801d20002233004301730183014375400400244464666002002008006444a66603000420022666006006603600466008603400400244a66602066ebcc00cc048dd5180198091baa0023374a90011980a1ba90054bd70098060008800918098009919800800992999807180598079baa00114bd6f7b63009bab301330103754002646600200264660020026eacc050c054c054c054c054c044dd50031129998098008a5eb7bdb1804c8c8c8c94ccc050cdc8a4500002153330143371e91010000210031005133018337606ea4008dd3000998030030019bab3015003375c6026004602e004602a00244a666024002298103d87a80001323232325333013337220100042a66602666e3c0200084c038cc05cdd3000a5eb80530103d87a8000133006006003375660280066eb8c048008c058008c050004894ccc04400452f5c0266024602060260026600400460280026eb8c040c034dd50008b18079808001180700098051baa00614984d9594ccc01cc004c020dd5003099192999806180780109924c646600200200444a66601c0022930991980180198090011bad3010001163758601a00260126ea8018584c8c894ccc028c8c8c94ccc034c028c038dd500089919192999808180518089baa0011325333011300e30123754002264a666024666024a66602a64a666026602060286ea800452f5bded8c026eacc060c054dd500099191980080099198008009bab301a301b301b301b301b3017375401444a666032002297adef6c60132323232533301a33722911000021533301a3371e9101000021003100513301e337606ea4008dd3000998030030019bab301b003375c6032004603a004603600244a666030002298103d87a800013232323253330193372200e0042a66603266e3c01c0084c050cc074dd3000a5eb80530103d87a8000133006006003375660340066eb8c060008c070008c068004dd7180b980a1baa00214a22941282511300f00114a0664600200244a66602c002290000980799801001180c80099198008009bac30043014375401644a66602c002297ae0132325333015325333016301030173754002266ebcc020c060dd5180d980c1baa0010091633323001001222533301b00214c103d87a800013232533301a3014003130153301e0024bd70099980280280099b8000348004c07c00cc074008dd61803980b9baa00a00213301937500046600800800226600800800260340046eb4c06000458c008c048dd5180118091baa3015301630123754602a60246ea800458c8cc004004dd6180118091baa00522533301400114c103d87a80001323253330133375e600a602a6ea80080184c038cc05c0092f5c02660080080026030004602c002460280026024601e6ea800458c044c048008c040004c030dd50008a4c26caca666010600460126ea80044c8c94ccc034c0400084c926323300100100222533300f00114984c8cc00c00cc04c008dd698088008b1bac300e001300a37540022c601860126ea8014dc3a40006e952000370090011b87480095cd2ab9d5573caae7d5d02ba157441825839009b619deb6e46ed004e49cb9a158462189cf093bab8eef2765d9b8bf75da571c9ab6fc02a347d0443bb80566c3408b4ee2a1b3a6a5019a281821b000000023cf8b16aa2581c22691d3d969ecf5802226290c2fb98e2bc08522d5b726c1f5f400105a3445465737402534275726e61626c65546f6b656e506c75747573015820accbfb633f637e3bb1abee40c9539d1effd742cd2716b3b1db9de3aaf3f3779401581cb92906f99519f847c2c7ff96979bb89a3d74c9a1eacaff508d1d3833a14e4275726e61626c65546f6b656e3201021a0005018c09a2581cb92906f99519f847c2c7ff96979bb89a3d74c9a1eacaff508d1d3833a34d4275726e61626c65546f6b656e014e4275726e61626c65546f6b656e32015820accbfb633f637e3bb1abee40c9539d1effd742cd2716b3b1db9de3aaf3f3779401581c22691d3d969ecf5802226290c2fb98e2bc08522d5b726c1f5f400105a2534275726e61626c65546f6b656e506c75747573015820accbfb633f637e3bb1abee40c9539d1effd742cd2716b3b1db9de3aaf3f37794010b5820ce0a2440ebdf11ae5a80f8acfa7e4475fa8f36df476fb000fbdb889be2fb41da0d818258206bfe283509bd40ab90ef68116e79f67468e29a694cbbb53db32f9d5489a803f50110825839009b619deb6e46ed004e49cb9a158462189cf093bab8eef2765d9b8bf75da571c9ab6fc02a347d0443bb80566c3408b4ee2a1b3a6a5019a281821b000000023d1ed6b6a1581c22691d3d969ecf5802226290c2fb98e2bc08522d5b726c1f5f400105a1445465737402111a004c4b40a400818258205ee4155d0886da3ff31d482b40e7e0701029018cb0307f658b9458043c7894d45840f5573f5a2d694ceec659fa58aaf0e3d6d7f20185f0e5893b41b388a0730b56afc069a79eae4f3a6d0c8b3e1689965acbb45f367a93541e6a3dd3792072dbae0901818201818200581c9b619deb6e46ed004e49cb9a158462189cf093bab8eef2765d9b8bf70581840100d8798180821a000172481a023409910681590536590533010000323232323232322253232323233300730013008375400a264a666010646464a666016600a60186ea80044c8c8c8c8c8c8c94ccc048c94ccc04ccc00401c8cdc42400000229444cc00401c8cdc4000a400044646600200200644a66603200229444c94ccc05cc010dd6980e0010998018018008a50301c001153330123370e004002266e1c008cc8c004004894ccc05c004520001301033002002301a0013758600a60286ea80445280a503330023758602c602e602e60266ea802120000033330013758600660246ea801d20002233004301730183014375400400244464666002002008006444a66603000420022666006006603600466008603400400244a66602066ebcc00cc048dd5180198091baa0023374a90011980a1ba90054bd70098060008800918098009919800800992999807180598079baa00114bd6f7b63009bab301330103754002646600200264660020026eacc050c054c054c054c054c044dd50031129998098008a5eb7bdb1804c8c8c8c94ccc050cdc8a4500002153330143371e91010000210031005133018337606ea4008dd3000998030030019bab3015003375c6026004602e004602a00244a666024002298103d87a80001323232325333013337220100042a66602666e3c0200084c038cc05cdd3000a5eb80530103d87a8000133006006003375660280066eb8c048008c058008c050004894ccc04400452f5c0266024602060260026600400460280026eb8c040c034dd50008b18079808001180700098051baa00614984d9594ccc01cc004c020dd5003099192999806180780109924c646600200200444a66601c0022930991980180198090011bad3010001163758601a00260126ea8018584c8c894ccc028c8c8c94ccc034c028c038dd500089919192999808180518089baa0011325333011300e30123754002264a666024666024a66602a64a666026602060286ea800452f5bded8c026eacc060c054dd500099191980080099198008009bab301a301b301b301b301b3017375401444a666032002297adef6c60132323232533301a33722911000021533301a3371e9101000021003100513301e337606ea4008dd3000998030030019bab301b003375c6032004603a004603600244a666030002298103d87a800013232323253330193372200e0042a66603266e3c01c0084c050cc074dd3000a5eb80530103d87a8000133006006003375660340066eb8c060008c070008c068004dd7180b980a1baa00214a22941282511300f00114a0664600200244a66602c002290000980799801001180c80099198008009bac30043014375401644a66602c002297ae0132325333015325333016301030173754002266ebcc020c060dd5180d980c1baa0010091633323001001222533301b00214c103d87a800013232533301a3014003130153301e0024bd70099980280280099b8000348004c07c00cc074008dd61803980b9baa00a00213301937500046600800800226600800800260340046eb4c06000458c008c048dd5180118091baa3015301630123754602a60246ea800458c8cc004004dd6180118091baa00522533301400114c103d87a80001323253330133375e600a602a6ea80080184c038cc05c0092f5c02660080080026030004602c002460280026024601e6ea800458c044c048008c040004c030dd50008a4c26caca666010600460126ea80044c8c94ccc034c0400084c926323300100100222533300f00114984c8cc00c00cc04c008dd698088008b1bac300e001300a37540022c601860126ea8014dc3a40006e952000370090011b87480095cd2ab9d5573caae7d5d02ba157441f5f6";
    const redeemers = await maestro.evaluateTx(cbor);
    assert.equal(Array.from(redeemers).length, 1);
  });

  test("evaluates additonal utxos - sample 1", async () => {
    const redeemers = await maestro.evaluateTx(
      PreprodConstants.evalSample1.transaction,
      PreprodConstants.evalSample1.utxos,
    );
    assert.deepStrictEqual(
      redeemers,
      PreprodConstants.evalSample1.redeemersExUnits,
    );
  });

  test("evaluates additinal utxos - sample 2", async () => {
    const redeemers = await maestro.evaluateTx(
      PreprodConstants.evalSample2.transaction,
      PreprodConstants.evalSample2.utxos,
    );
    assert.deepStrictEqual(
      redeemers,
      PreprodConstants.evalSample2.redeemersExUnits,
    );
  });
  // NOTE: The following transaction doesn't work with Maestro TX evaluation.
  //Error: Evaluate transaction failed: {"code":400,"error":"Bad Request","message":"A validator threw an error while executing redeemer withdraw:0. The following information was returned: 'Script must be executed as stake withdrawal'"}
  test.skip("evaluates additinal utxos - sample 3", async () => {
    const redeemers = await maestro.evaluateTx(
      PreprodConstants.evalSample3.transaction,
      PreprodConstants.evalSample3.utxos,
    );
    assert.deepStrictEqual(
      redeemers,
      PreprodConstants.evalSample3.redeemersExUnits,
    );
  });

  // NOTE: The following transaction doesn't work with Maestro TX evaluation.
  //Error: Evaluate transaction failed: {"code":400,"error":"Bad Request","message":"A validator threw an error while executing redeemer withdraw:0. The following information was returned: 'Script must be executed as stake withdrawal'"}
  test.skip("evaluates additinal utxos - sample 4", async () => {
    const redeemers = await maestro.evaluateTx(
      PreprodConstants.evalSample3.transaction,
      PreprodConstants.evalSample3.utxos,
    );
    assert.deepStrictEqual(
      redeemers,
      PreprodConstants.evalSample3.redeemersExUnits,
    );
  });
});
