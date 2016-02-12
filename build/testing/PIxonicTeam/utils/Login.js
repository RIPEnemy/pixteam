var clientId = 'YOUR CLIENT ID';
var apiKey = 'YOUR API KEY';
var scopes = 'https://www.googleapis.com/auth/plus.me';

function handleClientLogin (){
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth(true),1);
}

function checkAuth(immediate) {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: immediate}, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  checkAuth(false);
  return false;
}
