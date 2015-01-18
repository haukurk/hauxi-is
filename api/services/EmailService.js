// EmailService.js - in api/services
module.exports = {

    sendContactMessage: function(options, cb) {

        var mailgun = require('mailgun-js')({apiKey: sails.config.mailgun.api_key, domain: sails.config.mailgun.domain});

        var data = {
            from: options.name+' <'+options.email+'>',
            to: 'haukur@hauxi.is',
            subject: "Someone is sending you a message on hauxi.is",
            text: options.message
        };

        mailgun.messages().send(data, function (error, body) {
            if(error == null) {
                sails.log.info("[Mailgun Service] Sent a email successfully through Mailgun.");
                cb(error, body);
            }
            else {
                sails.log.info("[Mailgun Service] Error sending email through Mailgun. Error: "+error+" Body:"+body);
                cb(error, body);
            }
        });

    }
};