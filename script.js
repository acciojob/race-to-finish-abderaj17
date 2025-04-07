window.promises = [];
for (let i = 0; i < 5; i++) {
    promises.push(new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
        setTimeout(() => {
            resolve(`Promise ${i + 1} resolved after ${randomTime / 1000} seconds`);
        }, randomTime);
    }));
}

// Use Promise.any() here
Promise.any(promises)
    .then(result => {
        document.getElementById('output').innerText = result; // Update the output div
    })
    .catch(error => {
        console.error('All promises were rejected:', error);
    });
// Do not change the code above this
// add your promises to the array `promises`
