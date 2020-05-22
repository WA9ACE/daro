import Node from "./node.ts";

class RadixTree<T> {
  public nodes: Array<Node<T>>;

  constructor() {
    this.nodes = [];
  }

  insert(key: string, value: T): void {
    const node = new Node<T>(key, value);
    this.nodes.push(node);
    this.rebalance();
  }

  rebalance() {
    if (this.nodes.length === 1) return; // No rebalance on only children
    const { splitIndex, sharedKey } = this.findSplit();
    // const parent = new Node<T>(sharedKey, null)

    // parent.append()

    // // this.nodes.forEach((node, index) => {
    // //   // const child = new Node<T>(node.key.slice(splitIndex), node.value)
    // //   parent.append(node)

    // //   delete this.nodes[index]
    // })
  }

  findSplit(): any {
    let splitIndex = -1;
    const keys = this.keys()
    const shortestKey = this.shortestKey()

    for (let charIndex = 0; charIndex < shortestKey.length; charIndex++) {
      const char = shortestKey[charIndex];

      for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
        const key = keys[keyIndex];

        if (key[charIndex] !== char) {
          splitIndex = charIndex;

          return { splitIndex, sharedKey: shortestKey.slice(0, charIndex) }
        }
      }
    }

    if (splitIndex === -1) {
      throw new Error("Tree cannot contain two nodes of the same key");
    }

    // return splitIndex;
  }

  keys(): Array<string> {
    return this.nodes.map((node) => node.key); 
  }

  shortestKey(): string {
    return this.keys().find((key) => (
      key.length === Math.min(...this.keys().map(({ length }) => length))
    ))!;
  }
}

export default RadixTree;
