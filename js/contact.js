
(function () {emailjs.init('user_SRFsHIzQTJqJS7BPPvURx');})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            from_email: userEmail,
            message: userMessage
        };

        emailjs.send('service_pgjn5ea', 'template_u5ve16z', contactParams).then(function (res) {})
}
