const http = require('http');

const requestListener = async (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  try {
    const result = await someAsyncOperation();
    response.end(JSON.stringify({ message: 'Success!', result }));
  } catch (error) {
    console.error('Error:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'An error occurred' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a success
      resolve('success');
      //Simulate an error
      //reject(new Error('Simulated error'));
    }, 100);
  });
}
