const reduce = (reducer, initial, array) => {
	let accumulation = initial
	for (let i = 0, { length } = array; i < length; i++) {
		accumulation = reducer(accumulation, array[i])
	}
	return accumulation;
}

reduce((accumulation, current) => accumulation + current, 0, [1,2,3]) // 6

const filter = (predicate, array) =>
	reduce((accumulation, current) =>
		predicate(current) ? accumulation.concat(current) : accumulation, [], array)

const map = (transform, array) =>
	reduce((accumulation, current) =>
		accumulation.concat(transform(current)), [], array)
