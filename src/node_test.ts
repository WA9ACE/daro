import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
const { test } = Deno;

import Node from "./node.ts";

test("works", () => {
  assertEquals(true, true)
})

test("appending children to a parent", () => {
  const parent = new Node<Number>("abc", 1);
  const child = new Node<Number>("abcd", 2);

  throw new Error('we should not get here')

  parent.append(child);

  assertEquals(parent.children[0], child);
});
