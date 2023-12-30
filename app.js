// const array = [1, 2, 3, 4, 5, 20, 40]
// const arrayStrings = ['a', 'b', 'c', 'd', null, 12]
 



// // console.log(arrayStrings)
// // console.log(array)

// console.log(array[1])
// console.log(array[array.length - 1])



const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


console.log(inputElement.value)

createBtn.onclick = function () {

	if (inputElement.value.lenght === 0) {
		return
	}

	listElement.insertAdjacentHTML('beforeend', 
	`
		<li
		class="list-group-item d-flex justify-content-between align-items-center"
		>
			<span>${inputElement.value}</span>
			<span>
				<span class="btn btn-small btn-success">&check;</span>
				<span class="btn btn-small btn-danger">&times;</span>
			</span>
		</li>
	`
	)

}
