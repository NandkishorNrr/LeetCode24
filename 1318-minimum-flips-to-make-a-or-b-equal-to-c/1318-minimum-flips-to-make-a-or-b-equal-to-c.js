var minFlips = function(a, b, c) {
    const resultA = a.toString(2);
    const resultB = b.toString(2);
    const resultC = c.toString(2);
    let Atoarray =resultA.split('')
    let Btoarray = resultB.split('')
    let Ctoarray = resultC.split('')
    let len = [Atoarray.length,Btoarray.length,Ctoarray.length]
    let maxLen =Math.max(...len)
    console.log(maxLen)
    for (let j = 0; j < maxLen; j++) {
        if (Atoarray.length < maxLen) {
            Atoarray.unshift('0')
        }
        if (Btoarray.length < maxLen) {
            Btoarray.unshift('0')
        }
        if (Ctoarray.length < maxLen) {
            Ctoarray.unshift('0')
        }
    }
    let count =0
    for(let j=0;j<Ctoarray.length;j++){
        if(Ctoarray[j]==='0'){
            if (Atoarray[j] === '0' && Btoarray[j] === '1' || Atoarray[j] === '1' && Btoarray[j] === '0') {
                count++
            } else if (Atoarray[j] === '1' && Btoarray[j] === '1'){
                count+=2
            }
        } else if (Ctoarray[j] === '1'){
                if (Atoarray[j] === '0' && Btoarray[j] === '0') {
                    count++
                }
        }
    }
    return count
};
