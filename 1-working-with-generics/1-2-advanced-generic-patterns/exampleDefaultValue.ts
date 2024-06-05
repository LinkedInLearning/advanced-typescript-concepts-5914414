class SomeList<T = string> {
  private readonly list: T[] = []

  add(t: T) {
    this.list.push(t)
  }
}
