class SomeList<T = string> {
  private readonly list: T[] = []

  add(t: T) {
    this.list.push(t)
  }
}

const stringList = new SomeList();
stringList.add("TS");
stringList.add("is cool");
