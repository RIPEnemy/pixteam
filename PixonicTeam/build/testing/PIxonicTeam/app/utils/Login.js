var clientId = '433633888093-oaqdtl7civ9m9bhh91joidq5hh0sivvd.apps.googleusercontent.com';
var scopes = 'https://www.googleapis.com/auth/calendar';


function auth() {
    var config = {
        'client_id': '433633888093-3e1lolt86gbs88nks6cfmp20l22gq95b.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/calendar'
    };
    gapi.auth.authorize(config, function() {
        console.log('login complete');
        console.log(gapi.auth.getToken());
    });
}

function checkAuth(immediate) {
    console.log("trying login");
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: immediate}, handleAuthResult);
}

function handleAuthResult(authResult) {
    var authorizeButton = document.getElementById('authorize-button');
    if (authResult && !authResult.error) {
        // authorizeButton.style.visibility = 'hidden';
        // makeApiCall();
        console.log("Auth OK");
    } else {
        console.log("Auth ERROR " + error);
    }
}

function handleAuthClick(event) {
    checkAuth(false);
    return false;
}

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth(true),1);
}
