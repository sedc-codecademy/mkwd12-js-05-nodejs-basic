fetch('http://localhost:3000/api/students')
	.then(res => res.json())
	.then(students => console.log(students))
	.catch(err => console.error(err))
	.finally(() => console.log('all done'));
