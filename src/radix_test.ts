import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
const { test } = Deno;

import RadixTree from "./radix.ts";

test("inserting a node", () => {
  const tree = new RadixTree();

  tree.insert("he", 1);

  assertEquals(tree.nodes[0].value, 1);
});

test("rebalancing the tree", () => {
  const tree = new RadixTree();

  tree.insert("hello", 1);
  tree.insert("hat", 2);
  tree.insert("have", 3);

  // The top of the tree should have one 'h' node
  assertEquals(tree.nodes.length, 1);
  assertEquals(tree.nodes[0].value, 1);
});
