---
---

// ^^ Do not remove the above front matter, it is required for Jekyll processing

export const baseurl = "{{ site.baseurl }}";

// Flip a flag to true when you are running that backend yourself on localhost.
// When false, localhost talks to the deployed backend instead.
//
// Heads up on the code runners: the deployed backends only return CORS headers
// on the OPTIONS preflight for https://open-coding-society.github.io and
// https://opencodingsociety.com. From any other origin (this fork's GitHub Pages
// site, or localhost) the browser blocks the request before it is sent, and the
// runner shows "Error: Failed to fetch". Getting this origin added to the
// backend allowlist is the fix; running a backend locally is the workaround.
const USE_LOCAL_PYTHON_BACKEND = false;
const USE_LOCAL_JAVA_BACKEND = false;

const isLocalhost = location.hostname === "localhost" || location.hostname === "127.0.0.1";

export var pythonURI;
if (isLocalhost && USE_LOCAL_PYTHON_BACKEND) {
    pythonURI = "http://localhost:8587";  // Same URI for localhost or 127.0.0.1
} else {
    pythonURI = "https://flask.opencodingsociety.com";
}

export var javaURI;
// 127.0.0.1:8585 does not work for some machines
if (isLocalhost && USE_LOCAL_JAVA_BACKEND) {
        javaURI = "http://localhost:8585";
} else {
    javaURI = "https://spring.opencodingsociety.com";
}

export const fetchOptions = {
    method: 'GET',  // Default method is GET
    mode: 'cors', // Enable CORS (Cross-Origin Resource Sharing)
    cache: 'default', // Default caching behavior
    credentials: 'include', // Include credentials (cookies, etc.)
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client' // Custom header to identify source
    },
};

// User Login Function (allows both GET and POST)
export function login(options) {
    // Modify the options to use the correct method and include the request body
    const requestOptions  = {
        ...fetchOptions,  // Spread the existing fetchOptions object
        method: options.method || 'POST',  // Dynamically set the method (default to POST)
        body: options.method === 'POST' ? JSON.stringify(options.body) : undefined  // Only add body for POST requests
    };

    // Clear the message area
    document.getElementById(options.message).textContent = "";

    // Fetch JWT from the server
    fetch(options.URL, requestOptions)
    .then(response => {
        // Trap error response from the Web API
        if (!response.ok) {
            const errorMsg = 'Login error: ' + response.status;
            console.log(errorMsg);
            document.getElementById(options.message).textContent = errorMsg;
            return response;  // Exit early if response is not OK
        }
        // Success: Proceed with callback
        options.callback();
    })
    .catch(error => {
        // Handle network errors
        console.log('Possible CORS or Service Down error: ' + error);
        document.getElementById(options.message).textContent = 'Possible CORS or service down error: ' + error;
    });
}
