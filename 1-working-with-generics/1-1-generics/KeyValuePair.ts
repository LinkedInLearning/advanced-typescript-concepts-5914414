class KeyValuePair<K, V> {
  private key: K;
  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  // accessors 

  displayPair(): void {
    console.log(`Key: ${this.key} - Value: ${this.value}`);
  }
}

let pair = new KeyValuePair<string, string>("url", "something.com");
pair.displayPair();