$(document).ready(function(){
$("#consultas").on("click", function(){
var idBato = $("#inputID").val();
    $.ajax({

url: "https://andreihelo-restful-api.herokuapp.com/students/" + idBato,
type: 'GET',
dataType: 'json',
error: function(){alert("Lo siento, no se ha encontrado un alumno para el id " + idBato + ".\n\n\t\t\tPor favor, intente de nuevo.");},
success: function(data){

$("table tbody").append(  "<tr><td>" + data.id +"</td><td>"+ data.registration_number +
  "</td><td>" + data.name + "</td><td>" + data.last_name + "</td><td>" + data.status + "</td></tr>");


//  $("p").append(data.id);

      }
    });




});




});
