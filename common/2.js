const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }
]

const getWorthyWorkers = worker => worker.filter(item => item.salary > 1000).map(works => works.name).join(',')

console.log(getWorthyWorkers(workers))