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

}

