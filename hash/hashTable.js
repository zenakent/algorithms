class HashTable {
  constructor(size = 13) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])


    //do a if key already exist. alert or if key already exist change the value of the existing key
  }

  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          console.log(this.keyMap[index][i][1])
          return this.keyMap[index][i][1];
        }
      }
    }
    console.log(undefined)
    return undefined;
  }

  values() {
    let valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }

        }
      }
    }
    console.log(valuesArr)
    return valuesArr;
  }

  keys() {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    console.log(keysArr)
    return keysArr
  }
}

let ht = new HashTable();
ht.set("Hello", "goodbye")
ht.set("maui", "vina")
ht.set("pizza", "me want")
ht.set("dog", "fifi")
ht.set("otherdog", "fifi")


ht.values()
ht.keys()
console.log(ht)