function hIndex(citations) {
    let left = 0;
    let right = citations.length - 1;
    const n = citations.length;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const papers = n - mid; // Number of papers with at least h citations

        if (citations[mid] === papers) {
            return papers;
        } else if (citations[mid] < papers) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return n - left; // h-index is n - left
}
