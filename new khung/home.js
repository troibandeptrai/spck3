document.getElementById('send').addEventListener('click', function() {
    var input = document.getElementById('input');
    var output = document.getElementById('output');

    // Send the message to the web page
    sendMessageToWebPage(input.value);

    // Clear the input field
    input.value = '';
});

function sendMessageToWebPage(message) {
    // You can use the following code to send the message to a web page
    // using the WebSocket API. You will need to set up a WebSocket server
    // to handle the connection.

    // var socket = new WebSocket('ws://your-websocket-server-url');

    // socket.addEventListener('open', function(event) {
    //     socket.send(message);
    // });

    // For demonstration purposes, we will simply display the message in the output div
    var output = document.getElementById('output');
    output.innerHTML += '<p>' + message + '</p>';
}