// input Array, 만들 랜덤 인덱스수 5개

const randomArray = (array, length) => {
	let count = 0
	let IndexNumber = new Array(array.length).fill('').map((v, i) => i)
	const newArrayIndex = []
	while (count < length) {
		const randomIndex = Math.floor(Math.random() * IndexNumber.length)
		const deleteArray = IndexNumber.splice(randomIndex, 1)
		newArrayIndex.push(...deleteArray)
		count++
	}
	return newArrayIndex.map(value => array[value])
}

export default randomArray
