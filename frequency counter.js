const text = "hello";
const freq = {};

for (let char of text) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);
// { h: 1, e: 1, l: 2, o: 1 }
