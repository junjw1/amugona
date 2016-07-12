function sendemailfunc(useremail) {
    var email = require("../../node_modules/emailjs/email");
    var server = email.server.connect({
        user: "user_email_input"
        , password: "your password"
        , host: "smtp.naver.com"
        , ssl: true
    });
    // send the message and get a callback with an error or details of the message that was sent 
    server.send({
        text: "환영합니다 내용"
        , from: "Jihwan, Moon <user_email_input@naver.com>"
        , to: "username <" + useremail + ">"
        , cc: ""
        , subject: "환영합니다 제목."
    }, function (err, message) {
        console.log(err || message);
    });
}
module.exports.email = sendemailfunc;