function addUser() 
{
    user_name = document.getElementById("user_input").value ; 
    localStorage.setItem("User name", user_name) ; 
    window.location = "room.html" ;
}
$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});

if(screen.height <= 430) {
    document.getElementById("splits").style.width = 100% ;
}