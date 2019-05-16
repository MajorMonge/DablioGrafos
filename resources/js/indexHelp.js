var GrafoAuxiliar = new Grafo();

$(document).ready(function () {
    $('#loading').addClass('hide')
    $('.modal').modal();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
});

var mModal = $('.modal-content');

//QUERIES
$("#filebutton").click(function () {
    $("#fileElem").click();
});

$(".modal-close").click(function () {
    mModal.children("p").empty();
});

$("#material-iconsbtn").click(function (){
    if($('.card-panel').hasClass('hide') == true){
        $('.card-panel').removeClass('hide');
        $('#material-icons').text("arrow_drop_down")
    }else{
        $('.card-panel').addClass('hide');
        $('#material-icons').text("arrow_drop_up")
    }
});

$("#info").click(function (){
    mModal.children("h4").text("Informações");
    mModal.children("p").text("Feito por: João Henrique Saquetto Teixeira, Luiz Filipe Miguel Monge e Paulo Henrique Silva Peres.")
    $('.modal').modal("open");
});

$("#largbutton").click(function () {
    console.log(GrafoAuxiliar.lista[1])
    var texto = BuscaLargura(GrafoAuxiliar.lista, $("#inputlarg").val())
    console.log("Buscando em largura a partir de " + $("#inputlarg").val())
    mModal.children("h4").text("Busca em largura");
    texto.forEach((element, index) => {
        mModal.children("p").append(`O vértice ${index} possui ${element} de distancia para a Raiz. <br>`);
    });
    $('.modal').modal("open");
});

$("#deepbutton").click(function () {
    var texto = BuscaProfundidade(GrafoAuxiliar.lista);
    mModal.children("h4").text("Busca em Profundidade");
    $('.modal').modal("open");

});

$("#dijkstrabutton").click(function () {
    Dijkstra(GrafoAuxiliar.lista, $("#inputdijkstra").val());
    mModal.children("h4").text("Dijkstra");
    $('.modal').modal("open");
});

$("#primbutton").click(function () {
    Prim(GrafoAuxiliar.lista, $("#inputprim").val());
    mModal.children("h4").text("Prim");
    $('.modal').modal("open");
});


function generateList() {
    for (i = 0; i < GrafoAuxiliar.vertices; i++) {
        $("#listaBody").append(`<tr id="${'lrow' + i}" >
        <td class="bold">${i}</td>
        </tr>`)
    }

    GrafoAuxiliar.lista.forEach((element, index) => {
        element.forEach(vertice => {

            $('#lrow' + index).append(`<td><a>${vertice.ID}</a></td>`);
        });
    });
}

function generateTable() {
    $("#matrizHeader").append(`<th>-</th>`)
    for (i = 0; i < GrafoAuxiliar.vertices; i++) {
        $("#matrizHeader").append(`<th>${i}</th>`)
        $("#matrizBody").append(`<tr id="${'trow' + i}" >
        <td class="bold">${i}</td>
        </tr>`)
    }

    GrafoAuxiliar.matriz.forEach((element, index) => {
        element.forEach(vertice => {
            $('#trow' + index).append(`<td ${vertice.ADJ != 0 ? `class="tooltipped" data-position="top" data-tooltip="${vertice.PES}"` : ``}><a>${vertice.ADJ}</a></td>`);
        });
    });
}


function generateView() {
    $("#view").empty();
    $("#view").append(`<div id="matriz" class="col s12 m6 text-center ">
    <h6>Matriz de Adjacência</h6>
    <table>
        <thead>
            <tr id="matrizHeader">
            </tr>
        </thead>

        <tbody id="matrizBody">

        </tbody>
    </table>
</div>
<div id="Lista" class="col s12 m6">
    <h6>Lista de Adjacência</h6>
    <table>
        <thead>
            <tr id="listaHeader">
            </tr>
        </thead>

        <tbody id="listaBody">

        </tbody>
    </table>
</div>`)
    $("#viewscreen").children("h4").text(`${GrafoAuxiliar.tipo == 0 ? `Grafo` : `Dígrafo`}`)
    generateTable();
    generateList();
    $('#loading').addClass('hide')

}


function parseFiles(string) {
    var array = [];
    array = string.split();
    string = string.replace(/\r?\n|\r/g, ' ')
    string = string.replace("\n", ' ')
    string = string.replace('\r', ' ')
    array = string.split(' ');
    console.log(array)

    var aux = 0;

    if (parseInt(array[aux]) == 0) {
        GrafoAuxiliar.tipo = 0
    } else {
        GrafoAuxiliar.tipo = 1
    }
    console.log("Tipo:" + GrafoAuxiliar.tipo)
    aux += 1;
    GrafoAuxiliar.vertices = array[aux];
    console.log("Vértices:" + GrafoAuxiliar.vertices)
    aux += 1;

    var i = 0
    //Prepara matriz
    while (i < GrafoAuxiliar.vertices) {
        GrafoAuxiliar.matriz[i] = [];
        for (j = 0; j < GrafoAuxiliar.vertices; j++) {
            GrafoAuxiliar.matriz[i][j] = { ADJ: 0, COR: 0, PES: 0 }
        }
        i++;
    }

    if (GrafoAuxiliar.tipo == 0) {
        //Pega a matriz e transforma em gráfo
        while (aux < array.length) {
            GrafoAuxiliar.matriz[parseInt(array[aux])][parseInt(array[aux + 1])] = { ADJ: 1, COR: 'B', PES: parseInt(array[aux + 2]) }
            GrafoAuxiliar.matriz[parseInt(array[aux + 1])][parseInt(array[aux])] = { ADJ: 1, COR: 'B', PES: parseInt(array[aux + 2]) }
            aux += 3;
        }
    } else {
        //Pega a matriz e transforma em dígrafo
        while (aux < array.length) {
            GrafoAuxiliar.matriz[parseInt(array[aux])][parseInt(array[aux + 1])] = { ADJ: 1, COR: 'B', PES: parseInt(array[aux + 2]) }
            aux += 3;
        }
    }
    console.log("Matriz de Adjacência: ")
    console.log(GrafoAuxiliar.matriz)

    i = 0
    aux = 2;
    //Prepara a lista
    while (i < GrafoAuxiliar.vertices) {
        GrafoAuxiliar.lista[i] = [];
        i++;
    }

    if (GrafoAuxiliar.tipo == 0) {
        //Pega a lista e transforma em gráfo
        while (aux < array.length) {
            GrafoAuxiliar.lista[parseInt(array[aux + 1])].push({ ID: parseInt(array[aux]), COR: 0, PES: parseInt(array[aux + 2]) })
            GrafoAuxiliar.lista[parseInt(array[aux])].push({ ID: parseInt(array[aux + 1]), COR: 0, PES: parseInt(array[aux + 2]) })
            aux += 3;
        }
    } else {
        //Pega a lista e transforma em dígráfo
        while (aux < array.length) {
            GrafoAuxiliar.lista[parseInt(array[aux])].push({ ID: parseInt(array[aux + 1]), COR: 0, PES: parseInt(array[aux + 2]) })
            aux += 3;
        }
    }
    console.log("Lista de Adjacência: ")
    console.log(GrafoAuxiliar.lista);
    generateView();
}

function handleFiles(files) {
    $('#loading').removeClass('hide')
    var reader = new FileReader();
    try {
        reader.readAsText(files[0])
        reader.onload = function (e) {
            console.log(e.target.result);
            parseFiles(e.target.result);
        };
    } catch (error) {
        mModal.children("h4").text("Erro ao abrir arquivo");
        mModal.children("p").text(error);
        mModal.modal("open");
    }
}