class Node<T> {
  public key: string;
  public children: Array<Node<T>>;
  public value: T;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
    this.children = [];
  }

  append(child: Node<T>) {
    this.children.push(child);
  }
}

export default Node;
