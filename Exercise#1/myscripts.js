// create function to plot chart
function plotDonut(indo, france, canada, usa, argen) {
    // data array
    var xArray = ["Indonesia", "France", "Canada", "USA", "Argentina"];
    var yArray = [indo, france, canada, usa, argen];

    // define layout
    var layout = {title:"World Wide Wine Production"};

    // define data
    var data = [{labels:xArray, values:yArray, hole: 4, type:"pie"}];

    // display using plotly
    Plotly.newPlot("myPlot", data, layout);
}

// view default donut chart
plotDonut(55, 49, 44, 24, 15);

// set default values to input fields
document.getElementById("id-indo").value= "55";
document.getElementById("id-fran").value= "48";
document.getElementById("id-cana").value= "44";
document.getElementById("id-usa").value= "24";
document.getElementById("id-arge").value= "80";

// get the button, and when the user clicks on it, execute myFunction
document.getElementById("btn-update").onclick = function() {
    // get input values
    var val_indo = document.getElementById("id-indo").value;
    var val_fran = document.getElementById("id-fran").value;
    var val_cana = document.getElementById("id-cana").value;
    var val_usa = document.getElementById("id-usa").value;
    var val_arge = document.getElementById("id-arge").value;

    // update donut chart
    plotDonut(val_indo, val_fran, val_cana, val_usa, val_arge);
};