import { assert } from "chai";
import { digitalRootBest as digitalRoot } from "../sumOfDigit.js";


describe("Tests", () => {
    it("test", () => {
      assert.strictEqual( digitalRoot(16), 7 )
      assert.strictEqual( digitalRoot(456), 6 )
    });
  })