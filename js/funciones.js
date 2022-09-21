function get_data(){
    $.ajax({
        url: "https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            mostarInformacio(respuesta.items);
        }
    });
}

function mostarInformacio(items){
    let table = "<table>";
    for (i=0; i<items.length; i++){
        table += "<tr>";
        table += "<td>" + items[i].id +"</td>";
        table += "<td>" + items[i].name +"</td>";
        table += "<td>" + items[i].email +"</td>";
        table += "<td>" + items[i].age +"</td>";
        table += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        table += "</tr>";
    }
    table += "</table>";
    $("#get_resultados").append(table);
}

function post_data(){
    let mydata ={
        id: $("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    
    let dataToJson = JSON.stringify(mydata); 

    $.ajax({
        url: "https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type: "POST",
        data: mydata,
        dataType: "JSON"
    });
}

function put_data(){
    let mydata ={
        id: $("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };

    let dataToSend = JSON.stringify(mydata); 
    $.ajax({
        url: "https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#get_resultados").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            get_data();
        },
    });
}

function borrarElemento(idElemento){
    let myData = {
        id: idElemento,
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#get_resultados").empty();
            get_data();
        }
    });
}

function get_id_data(){
    let mydata = $("#id").val(); 
    $.ajax({
        url: "https://g54e18a710da042-kymjdtjzxutnpf0b.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/ejemplo/ejemplo/" + mydata,
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            mostarInformacio(respuesta.items);
        }
    });
}