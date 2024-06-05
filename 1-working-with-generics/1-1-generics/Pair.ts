export interface Pair<K, V> {
  key: K;
  value: V;
}

let configProp: Pair<string, string> = {
  key: 'url',
  value: 'www.someurl.com'
};
