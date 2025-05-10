document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const videoUrl = document.getElementById('videoUrl').value;
    const downloadPath = document.getElementById('downloadPath').value;

    // Send a POST request to the backend (Flask app)
    fetch('/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: videoUrl,
            path: downloadPath,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Video downloaded successfully: ${data.title}`);
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        alert('Something went wrong: ' + error);
    });
});
