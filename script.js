window.promises = [];

for(let i = 0; i < 5; i++){
	const randomTime = Math.floor(Math.random() * 5000) + 1000;
	setTimeout(() => {
		resolve(`Promise ${i+1}`)
	}, randomTime);
}

// Do not change the code above this
// add your promises to the array `promises`
