$(document).ready(function(){

    button =  $("button")
    button.on("click", function(){

        let qr_value =$("input").val();
        if(!qr_value) return;
        document.getElementById("myImg").src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qr_value+'';

        $("img").css({
            "display": "block"
        });
      });


      $("input").keyup(function(){
        if(!$("input").val()){
            $("img").css({
                "display": "none"
            });
        }
      });

    });
