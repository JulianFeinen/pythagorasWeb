var avar;
var bvar;
var cvar;
var chypotenuse;




function Berechnen()
{
    if(isKathetenInputValid()) 
    {
        var uebertragungswertHypotenuse = fKathetenBerechnen(); 
        fInitInputs(); //cvar.value ist noch undefiniert 
        cvar.value = uebertragungswertHypotenuse; 
        
        doppelF = (avar.value * bvar.value)
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (doppelF/2);
    }

    if(isHypotenusenUndAInputValid())
    {
        var uebertragungswertKatheteA = fHypotenuseUndABerechnen();
        fInitInputs();
        bvar.value = uebertragungswertKatheteA;

        doppelF = (avar.value * bvar.value)
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (doppelF/2);
    }

    if(isHypotenusenUndBInputValid())
    {
        var uebertragungswertKatheteB = fHypotenuseUndBBerechnen();
        fInitInputs();
        avar.value = uebertragungswertKatheteB;

        doppelF = (avar.value * bvar.value)
        document.getElementById("labelF").innerHTML = "(Fläche)F:" + (doppelF/2);
    }
}



function isHypotenusenUndBInputValid() {
    return (document.getElementById("inputB").value !== "") && (document.getElementById("inputC").value !== "") && (document.getElementById("inputA").value == "");
}

function isHypotenusenUndAInputValid() {
    return (document.getElementById("inputA").value !== "") && (document.getElementById("inputC").value !== "") && (document.getElementById("inputB").value == "");
}

function isKathetenInputValid() {
    return (document.getElementById("inputA").value !== "") && (document.getElementById("inputB").value !== "") && (document.getElementById("inputC").value == "");
}

function alleInputsResetten()
{
   
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("inputC").value = "";
    document.getElementById("labelF").innerHTML = "(Fläche)F:";
}




function fKathetenBerechnen()
{
    fInitInputs();
     
    return chypotenuse = Math.sqrt((avar.value * avar.value) + (bvar.value * bvar.value));
    
}

function fHypotenuseUndABerechnen()
{
    fInitInputs();

    return bkathete = Math.sqrt((cvar.value * cvar.value) - (avar.value * avar.value));
}

function fHypotenuseUndBBerechnen()
{
    fInitInputs();

    return akathete = Math.sqrt((cvar.value * cvar.value) - (bvar.value * bvar.value));
}
function fInitInputs() {
    avar = document.getElementById("inputA");
    bvar = document.getElementById("inputB");
    cvar = document.getElementById("inputC");
}
  