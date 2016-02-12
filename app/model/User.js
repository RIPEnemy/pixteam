/*
 * File: app/model/User.js
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

Ext.define('PixonicTeam.model.User', {
    extend: 'Ext.data.Model',
    alias: 'model.user',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'email'
            },
            {
                name: 'password'
            }
        ],
        validations: [
            {
                type: 'presence',
                field: 'email'
            },
            {
                type: 'format',
                field: 'email',
                matcher: /^\w+([-+.']\w+)*@pixonic.ru$/,
                message: 'Wrong e-mail format. Try again'
            }
        ]
    }
});