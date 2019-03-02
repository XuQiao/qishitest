// AJLoveChina
module.exports = {
  sleep(millinSeconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, millinSeconds)
    })
  },


  relative(from, to) {
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));

    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('/');
  },
  shuffle(a) {
    var j, x, i;
    var b = Object.assign([], a);
    var c = [];
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    for (i = 0; i < a.length; i++) {
      c.push(b.indexOf(a[i]));
    }
    return c;
  },
  getKeysWithHighestValue(o){
    let high = Object.keys(o).filter(x => {
         return o[x] == Math.max.apply(null, 
         Object.values(o));
    });
    return high[Math.floor(Math.random() * high.length)];
  },
  doshuffle(a, index){
    var i;
    var b = Object.assign([], a);
    for (i = 0; i < a.length; i++) {
      b[i] = a[index[i]];
    }
    return b;
  }
};
