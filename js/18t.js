$(document).ready(function(){
$("#subir").on("click", function(){
var idRegistro = $("#regnum").val();
var firstName = $("#fname").val();
var lastName = $("#lname").val();
var statusCode = $("#status").val();




    $.ajax({
type: "POST",
url: "https://andreihelo-restful-api.herokuapp.com/students/",
data: {id: idRegistro, registration_number: idRegistro, name:firstName, last_name:lastName, status:statusCode },
dataType: 'json',
error: function(){alert("Lo siento, no se ha podido registrar a la persona con ID " + idRegistro + ".\n\n\t\t\tPor favor, intente de nuevo.");},
success: function(){




$.ajax({

url: "https://andreihelo-restful-api.herokuapp.com/students",
type: 'GET',
dataType: 'json',
success: function(data){
  $.each(data, function(index, item) {
    $("table tbody").append(

      "<tr><td>" + item.id +"</td><td>"+ item.registration_number +
      "</td><td>" + item.name + "</td><td>" + item.last_name + "</td><td>" + item.status + "</td></tr>"

//hacer otro documento html aside index, que cuando se cargue

    );


  });
      }
    });





}


    });




});


});
