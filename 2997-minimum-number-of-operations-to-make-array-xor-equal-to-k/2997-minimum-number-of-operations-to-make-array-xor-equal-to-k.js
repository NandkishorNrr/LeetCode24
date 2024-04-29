var minOperations = function (a, k) {
  let x = 0
  for (const e of a) {
    x ^= e
  }
  const binx = x.toString(2)
  const m = binx.length
  const bink = k.toString(2)
  const n = bink.length
  let count = 0
  for (let i = m - 1, j = n - 1; i >= 0 || j >= 0; i--, j--) {
    if ((binx[i] || "0") !== (bink[j] || "0")) count++
  }
  return count
}