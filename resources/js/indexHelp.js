var GrafoAuxiliar = new Grafo();

$(document).ready(function() {
    $('.modal').modal();
});

var mModal = $('.modal');

//QUERIES
$("#filebutton").click(function() {
    $("#fileElem").click();
});


function parseFiles(string) {
    var array = [];
    array = string.split();
    string = string.replace('\n', ' ')
    string = string.replace('\r', ' ')
    array = string.split(' ');
    console.log(array)


    var aux;

    if (array[aux] == 0) {
        GrafoAuxiliar.tipo = 0
    } else {
        GrafoAuxiliar.tipo = 1
    }
    aux++;
    console.log("Tipo:" + GrafoAuxiliar.tipo)
    GrafoAuxiliar.vertices = array[aux];
    console.log("Vértices:" + GrafoAuxiliar.vertices)
    aux++;

}

function handleFiles(files) {
    var reader = new FileReader();
    try {
        reader.readAsText(files[0])
        reader.onload = function(e) {
            console.log(e.target.result);
            parseFiles(e.target.result);
        };
    } catch (error) {
        mModal.children("h4").text("Erro ao abrir arquivo");
        mModal.children("p").text(error);
        mModal.modal("open");
    }
}