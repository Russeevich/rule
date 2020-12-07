const string = "Привет! Как дела?"

const getVowels = text => text.split('').filter(item => 'аоиеёэыуюя'.includes(item)).join('')

console.log(getVowels(string))