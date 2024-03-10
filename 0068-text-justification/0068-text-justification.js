function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const totalLength = lineLength + word.length + line.length;

        if (totalLength <= maxWidth) {
            line.push(word);
            lineLength += word.length;
        } else {
            result.push(justifyLine(line, maxWidth, lineLength));
            line = [word];
            lineLength = word.length;
        }
    }

    if (line.length > 0) {
        result.push(leftJustify(line, maxWidth));
    }

    return result;
}

function justifyLine(line, maxWidth, lineLength) {
    const numWords = line.length;
    const numSpaces = maxWidth - lineLength;
    const numGaps = numWords - 1;

    if (numGaps === 0) {
        return line.join('') + ' '.repeat(numSpaces);
    }

    const baseSpaces = Math.floor(numSpaces / numGaps);
    const extraSpaces = numSpaces % numGaps;

    let result = '';

    for (let i = 0; i < line.length - 1; i++) {
        result += line[i] + ' '.repeat(baseSpaces + (i < extraSpaces ? 1 : 0));
    }

    result += line[line.length - 1];

    return result;
}

function leftJustify(line, maxWidth) {
    return line.join(' ') + ' '.repeat(maxWidth - line.join(' ').length);
}
