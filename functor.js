const myFunctor = value => ({
    myMap: fn => myFunctor(fn(value)),
    valueOf: () => value,
    toString: () => `Identity(${value})`,
    [Symbol.iterator]: function* () {
        yield value
    }
})

const trace = value => {
    console.log(value)
    return value
}

fun = myFunctor(2)

console.log("== identity law ==")
fun.myMap(trace)
fun.myMap(x => x).myMap(trace)

const g = x => x + 1
const f = x => x * 2

console.log("== composition law ==")
const comp1 = fun.myMap(x => f(g(x)))
const comp2 = fun.myMap(g).myMap(f)

comp1.myMap(trace)
comp2.myMap(trace)
