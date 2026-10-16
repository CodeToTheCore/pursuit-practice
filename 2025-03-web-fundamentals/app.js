// Function that returns a promise
function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating a successful response from an asynchronous operation
            resolve("Data received successfully!");
        }, 2000);  // The operation will take 2 seconds
    });
}

simulateAsyncOperation().then(successMessage => {
    console.log(successMessage);  // This will log: "Data received successfully!"
}).catch(error => {
    console.log(error);  // This will handle any errors that occur during the promise execution.
});

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('there was a problem with the fetch operation:', error);
});
