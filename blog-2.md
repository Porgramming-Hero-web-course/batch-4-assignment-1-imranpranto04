-- Handling Asynchronous Operations with Async/Await in TypeScript --

    As a beginner in TypeScript, we need to know what is Async/Await. This feature makes asynchronous operations easier and code much more readable.

--> What is an Asynchronous Operation?

    Asynchronous operations are a type of computer operation that allows the host operation to continue without waiting for another operation to complete. This means that the host thread can move on to the next statement before the operation is finished.

    In programming, some tasks take time, like:
    1. Fetching data from a remote server (an API).
    2. Loading large files.
    3. Waiting for a user’s response.
    These tasks don't complete instantly, so instead of making entire app wait, we use asynchronous operations to keep things moving smoothly.

--> Understanding Callbacks and Promises.

    Callbacks are functions passed as arguments to other functions. The function that receives the callback can call it once the async task finishes. However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback.

    Promises allow us to work with async operations in a more organized way. A promise represents a value that will be available in the future. When the task completes, the promise is "resolved," and if it fails, the promise is "rejected."
    example:

        function fetchData(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve("Data received!");
            }, 2000);
        });
        }
        fetchData().then((data) => console.log(data));
        //output: Logs "Data received!" after 2 seconds

--> Async/Await

    async: A function declared with async automatically returns a promise.
    await: Used within an async function to pause execution until a promise is resolved.

    example:
        async function fetchDataAsync(): Promise<void> {
        const data = await fetchData(); //Waits until fetchData() is resolved
        console.log(data); //Logs "Data received!"
        }
        fetchDataAsync();

--> Error Handling with Try-Catch

    Async/await also makes it easier to handle errors. We can use try-catch blocks to handle any errors that happen in an async function.

--> Summary

    Async/await helps make asynchronous code look like synchronous code.
    Use async to declare a function that returns a promise.
    Use await to wait for a promise to resolve.
    it can handle errors with try-catch blocks.

    Async/await makes our code cleaner and easier to understand. It’s perfect for tasks like fetching data or waiting for user input without making entire app wait.

--> Thank You
