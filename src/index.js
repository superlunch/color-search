fetch("https://x-colors.herokuapp.com/api/random")
.then((res) => res.json())
.then((json) => console.log(json))
