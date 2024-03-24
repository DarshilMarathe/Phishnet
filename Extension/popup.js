console.log('Phisnet Dev V0')

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    console.log(url);
    modelsender(url);
});

function modelsender(url){
    //to be sent to model
    console.log(url);
    fetch('http://localhost:5000/cextension', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Data to send to the backend
        "checkurl" : url
    })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the backend
        console.log(data)
        document.getElementById("cc").innerHTML= data.xx;
    })
    .catch(error => {
        // Handle any errors
        console.log(error)
        document.getElementById("cc").innerHTML= "Server Error Occured";

        // Link to web && error handling
    });

}


