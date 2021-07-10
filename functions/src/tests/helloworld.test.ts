import "mocha";
import * as functionsTest from "firebase-functions-test";
import {FeaturesList} from "firebase-functions-test/lib/features";
import {expect} from "chai";
import SongSeeder from "../../../seeds/seeders/SongSeeder";
import {WrappedFunction} from "firebase-functions-test/lib/main";

describe("Thu test case", () => {
  let test: FeaturesList;
  let songSeeder: SongSeeder;
  let wrapped: WrappedFunction;
  before(() => {
    songSeeder = new SongSeeder();
    test = functionsTest({
      projectId: "spotify-clone-5ed36",
      // eslint-disable-next-line max-len
    });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const functions = require("../../src/index");
    wrapped = test.wrap(functions.countSongs);
  });

  after(() => {
    test.cleanup();
  });

  beforeEach(async () => {
    await songSeeder.up(10);
  });
  afterEach(async () => {
    await songSeeder.down();
  });

  it("Should be oke!", async () => {
    const result = await wrapped({});
    expect(result).equal(10);
  });
});
