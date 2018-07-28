
function blink(ob) 
{ 
if (ob.style.visibility == "visible" ) 
{ 
ob.style.visibility = "hidden"; 
} 
else 
{ 
ob.style.visibility = "visible"; 
} 
} 
setInterval("blink(bl)",500); 

$(function(){
	var coteG = $("#gauche");
    var coteD = $("#droite");
 
    //Ajoute un FORM à gauche:
    var formGauche = $("<form></form>").appendTo(coteG);
    formGauche.css("margin-top", "50px");
 
    //AJOUTE UNE SEPRATION A DROITE
    coteD.append("<hr>");
 
    //REACTION AU CLIC SUR LE BOUTON LABEL
    $("#droite button:eq(0)").on("click", function(){
        coteD.append("<div id='labelElmt'> <p>Texte du label: <input type='text' id='inputLabel' > <button id='boutonOK'> OK </button>&nbsp;<button id='boutonKO'> Annuler </button> </p> </div>");
  $(this).prop("disabled",true);
 
  //REACTION AU CLIC SUR BOUTON VALIDER
  $("#boutonOK").on("click", function(){
   //sauvegarde la valeur de l'input:
   var titreLabel = $("#inputLabel").val();
   //l'ajoute à la balise <form> de gauche:
   formGauche.append("<span>" + titreLabel + "</span>");
   //efface le formulaire:
   $("#labelElmt").remove();
   $('#droite button:eq(0)').prop("disabled",false);  
  });
  $("#boutonKO").on("click", function(){
   $('#droite button:eq(0)').prop("disabled",false);  
   //efface le formulaire:
   $("#labelElmt").remove(); 
  });   
    });
 
 
    $("#droite button:eq(1)").on("click", function() {
        coteD.append("<div id='idElt'> <p>id de la zone de texte: <input type='text' id='input2'> <button id='boutonOK2'> OK </button>&nbsp;<button id='boutonKO2'> Annuler </button> </p> </div>");
  $(this).prop("disabled",true);
 
  $("#boutonOK2").click(function(){
   var textId = $("#input2").val();
   formGauche.append("<input type='text' id=" + textId + " ></input>");
   //$("#newInput").css("margin-left", "50px"); <= ici tu mets toujours le même id. Un id doit être unique
   $("#idElt").remove();
   $('#droite button:eq(1)').prop("disabled",false);     
  });
  $("#boutonKO2").on("click", function(){
   $('#droite button:eq(1)').prop("disabled",false);  
   //efface le formulaire:
   $("#idElt").remove(); 
  });   
 }); 
	 $("#droite button:eq(2)").click(function(){ 
        coteD.append("<div id='buttonElt'> <p>Texte du bouton: <input type='text' id='input3'> <button id='boutonOK3'> OK </button>&nbsp;<button id='boutonKO3'> Annuler </button> </p> </div>");
  $(this).prop("disabled",true); 
 
  $("#boutonOK3").click(function(){
   var textButton = $("#input3").val();
   formGauche.append("<button id='valider'>" + textButton + "</button>")
   //$("#valider").css("margin-top", "50px"); <= ici tu mets toujours le même id. Un id doit être unique
   $("#buttonElt").remove();
   $('#droite button:eq(2)').prop("disabled",false);     
  }); 
 
  $("#boutonKO3").on("click", function(){
   $('#droite button:eq(2)').prop("disabled",false);  
   //efface le formulaire:
   $("#buttonElt").remove();     
  });     
 
    });
 
 $("#droite button:eq(3)").click(function(){
  formGauche.append("<br/>");
 });  
 
 
});
var svg = document.querySelector('svg') ; 
	var text = document.querySelector('text'); 
	X = 900;
	Y = 100;
	var x = X ; 
	var boucle = setInterval(animate,10); 
	function animate() 
	{
		x = x-1 ; 
		if (x <=-600) x = X ; 
		text.setAttribute('x',x); 
	} // fin fonction animate
