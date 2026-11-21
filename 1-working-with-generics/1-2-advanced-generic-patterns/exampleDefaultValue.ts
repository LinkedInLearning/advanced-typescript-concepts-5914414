class SomeList<T = string> {
  private readonly list: T[] = [];

  add(t: T) {
    this.list.push(t);
  }
}

const stringList = new SomeList();
stringList.add("Hello");
stringList.add("World");
