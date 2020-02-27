$("#contactform").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var text = $("#message").val();
    alert("Hello " + name + " ,Thank You for Contacting Us.");
});
});