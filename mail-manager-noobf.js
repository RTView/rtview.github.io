function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        product_name : selectedModel,
        first_material_name : firstMaterial,
        second_material_name : secondMaterial,
        total_price : totalPrice,
        message : document.getElementById("message").value
    }
    emailjs.send("service_jkgbegs", "template_hyutvti", params).then(function (res) {
        alert("L'email è stata inviata!");
    })
}