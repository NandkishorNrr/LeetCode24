function customSort(a, b, order) {
    return order.indexOf(a) - order.indexOf(b);
}

var customSortString = function(order, s) {
    return s.split('').sort((a, b) => customSort(a, b, order)).join('');
};
