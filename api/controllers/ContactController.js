/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    sendemail: function (req, res) {
        EmailService.sendContactMessage({email: req.body.email, name: req.body.name, message: req.body.message+"\n\n Phone: "+req.body.phone, phone: req.body.phone}, function(error, body) {

            sails.log.info("Attempt to send contact message, from "+req.body.email+" with message: "+req.body.message);

            if(error == null) {

                return res.json({
                    ok: true,
                    message: "sent a message to Haukur successfully."
                });
            }

            return res.json(500, {
                ok: false,
                message: "failed sending the message to Haukur, Sorry.",
                error: error
            });

        });
    }
};