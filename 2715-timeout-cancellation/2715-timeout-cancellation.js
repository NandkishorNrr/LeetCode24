function cancellable(fn, args, t) {
    let cancelled = false;

    const timeoutId = setTimeout(() => {
        if (!cancelled) {
            const result = fn(...args);
            console.log([{"time": t, "returned": result}]);
        }
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId);
        cancelled = true;
        console.log([]);
    };

    return cancelFn;
}
