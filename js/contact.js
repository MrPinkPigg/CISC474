//initializes emailjs
(function () {emailjs.init('user_SRFsHIzQTJqJS7BPPvURx');})();

function sendmail() {
    //pulls all info from fields
    let user_lname = document.getElementById("lName").value;
    let user_fname = document.getElementById("fName").value;
    let user_email = document.getElementById("email").value;
    let user_phone = document.getElementById("phone").value;
    let user_message = document.getElementById("message").value;

    //grabs full form for reset later
    var frm = document.getElementById("frm");

    //only sends if minimum fields are filled out
    if(user_lname != "" && user_fname != "" && user_message != ""){
        var contactParams = {
            from_name: user_fname + " " + user_lname,
            from_email: user_email,
            from_phone: user_phone,
            message: user_message
        };

        //sends email and resets form
        emailjs.send('service_pgjn5ea', 'template_u5ve16z', contactParams).then(function (res) {})
        frm.reset();
    }
    else{
        //popup in case some required boxes are not filled
        alert("Make sure you at lest fill in first name, last name, and a message");
        window.location.reload(false);
    }
}
