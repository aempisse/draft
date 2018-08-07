// Tiny, recursive autocurry
const curry = ( f, array = [] ) =>
    (...args) =>
        (a => a.length === f.length ?
            f(...a) :
            curry(f, a)
        )([...array, ...args])
