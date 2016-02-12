/*
 * File: app/controller/LoginController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PixonicTeam.controller.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginBtn: '#loginBtn',
            errorLabel: '#loginErrorLabel'
        },

        control: {
            "[action=confirm]": {
                tap: 'onButtonTap'
            }
        }
    },

    onButtonTap: function(button, e, eOpts) {
        this.checkAuth(false);
        var err = this.getErrorLabel();
    },

    checkAuth: function(immediate) {
        console.log("trying login with immediate " + immediate);
        //var email = this.getUsernameField().getValue() + "@pixonic.ru";
         //   gapi.auth.authorize({client_id: clientId, scope: scopes, login_hint: email, immediate: immediate}, this.handleAuthResult);
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: immediate}, this.handleAuthResult);
    },

    handleAuthResult: function(authResult) {
        //var errorLbl = this.getErrorLabel();
        if (authResult && !authResult.error) {
                // authorizeButton.style.visibility = 'hidden';
                // makeApiCall();

              //  errorLbl.setHtml("Auth OK: Token "+ authResult.access_token);
                console.log("Auth OK, code, token"+authResult.code + authResult.access_token);
            //    loadCalendarApi();
            } else {
                console.log("AUth ERROR"+ authResult.error);
                // errorLbl.setHtml("Auth ERROR:" + authResult.error);
            }
    },

    launch: function() {
        console.log('launch controller');
        gapi.client.setApiKey(apiKey);
    },

    loadCalendarApi: function() {

                gapi.client.load('calendar', 'v3', listUpcomingEvents);
    },

    listUpcomingEvents: function() {
               var request = gapi.client.calendar.events.list({
                  'calendarId': 'primary',
                  'timeMin': (new Date()).toISOString(),
                  'showDeleted': false,
                  'singleEvents': true,
                  'maxResults': 10,
                  'orderBy': 'startTime'
                });

                request.execute(function(resp) {
                  var events = resp.items;
                  var msg = 'Upcoming events:';

                  if (events.length > 0) {
                    for (i = 0; i < events.length; i++) {
                      var event = events[i];
                      var when = event.start.dateTime;
                      if (!when) {
                        when = event.start.date;
                      }
                      msg += event.summary + ' (' + when + ')';
                    }
                  } else {
                    msg += 'No upcoming events found.';
                  }

                console.log(msg);
                });
    }

});