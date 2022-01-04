
function validate(){
  var tel = $('#tel').val();
  $('#errormsg2').html("");
  if(tel!="")
  {
    
    if(nameValidate()==true && emailValidate()==true &&  messageValidate()==true){

      $('.loading').show().removeClass("success")
      $('.loading').show().removeClass("error")
      $('.loading').text("Sending message.....");
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxo1GYFUCUXozYQctxpFO-yQj45wFM3sz0WXhVb97VF5q4js3WZNGW9biduwJ4zYgD2Fg/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
              $('.loading').addClass("success")
                $('.loading').text("Message sent Successfully");
                $("#submit-form").trigger("reset")
                setTimeout(function(){
                  $('.loading').hide()
                },3000);

            },
            error:function (err){
              $('.loading').addClass("errorMsg")
              $('.loading').text("Please check the inputs");
              $("#submit-form").trigger("reset")

              setTimeout(function(){
                $('.loading').hide()
              },3000);
            }
        })
    
      
      
    }
  }else{
    $('#errormsg2').html("Cannot be blank");
  }
}
    
    
    function nameValidate(){
      var varname = $('#name').val();
      var pattern = /[a-zA-Z\s]+/;
    
      if(varname==" "){
        $('#errormsg').html("Name is mandatory");
        return false;
      }else if(varname.match(pattern)){
        $('#errormsg').html("");
        return true;
      }else{
        $('#errormsg').html("Enter correct name");
        return false;
      }
    }
    
    function emailValidate(){
      var varEmail = $('#email').val();
      var emailPattern = /^[a-zA-Z0-9.!#$%&+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    
      if(varEmail==""){
        $('#errormsg1').html("Email is mandatory");
        return false;
      }else if(varEmail.match(emailPattern)){
        $('#errormsg1').html("");
        return true;
      }else{
        $('#errormsg1').html("Enter correct Email");
        return false;
      }
    
    }
    
    
    
    function messageValidate(){
      var varMessage = $('#msg').val();
    
      if(varMessage==""){
        $('#errormsg3').html("Enter something please");
        return false;
      }else {
        $('#errormsg3').html("");
        return true;
      }
    }




    document.querySelector(".name").addEventListener("keypress", function (evt) {
      if (evt.which != 32 && evt.which < 65 || evt.which > 90 && evt.which <97 || evt.which > 122)
      {
          evt.preventDefault();
      }else if ( evt.which == 32)
      {
          if (document.getElementById("name").value == '') {
              evt.preventDefault();
          }
      }
  });
  
  
  document.querySelector(".message").addEventListener("keypress", function (evt) {
      if ( evt.which == 32)
      {
          if (document.getElementById( ".msg").value == '') {
              evt.preventDefault();
          }
      }
  });
  
  document.querySelector(".email").addEventListener("keypress", function (evt) {
      if ( evt.which == 32)
      {
          if (document.getElementById("email").value == '') {
              evt.preventDefault();
          }
      }
  });
