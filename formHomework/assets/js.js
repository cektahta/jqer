/**
 *
 */

$(function (){
    console.log("dom loaded");
    var grocs = [];
    var indexChange;

    $("#btn-login").on('click',function(){

        var params = {
            'acc' : $('#acc').val(),
            'pass' : $('#pass').val()
        }

        console.log(params);
        $.ajax({
            url:'login.php',
            method:'POST',
            dataType:'json',
            data: params,


        }).then(function(data){
            window.location.replace("http://localhost/formHomework/Groceries.html");
            console.log("it's okay");
        },function(data){

            console.log('wrong name or pass');
        })
    });
    $("#redbttn").on("click", function(e) {
        location.href = "http://localhost/formHomework/redactor.html";
    });
    $("#addbttn").on("click", function(e) {
        location.href = "http://localhost/formHomework/addForm.html";
    });


    $('#butone').on('click',function(){

        var name = $('#name').val();
        var quantity = $('#quantity').val();
        var price = $('#price').val();


        var input = [name , quantity , price];

        grocs.push(input);
        setGetData();


    });
    function setGetData(){
        var paramz = {
            'groc' : grocs
        };

        $.ajax({
            url:'data.php',
            method:'POST',
            dataType:'json',
            data: paramz


        }).then(function(data){
            window.location.replace("http://localhost/formHomework/Groceries.html");
            displayData();
            console.log('doide')
        },function(data){

            console.log('insert fail');
        })
    }

    function displayData(){


        $('#groc-table tbody').empty();

        for(var i = 0 ; i < grocs.length ; i++){


            $('#groc-table tbody')
                .append( '<tr>'+
                    '<td>' + parseInt(i + 1) + '</td>' +
                    '<td>' + grocs[i][0] + '</td>' +
                    '<td>' + grocs[i][1] + '</td>' +
                    '<td>' + grocs[i][2] + '</td>' +
                    '<td>' +
                    '<span id="redbttn" class="fa fa-pencil fa" aria-hidden="true"></span>' +
                    '<span id="addbttn" class="fa fa-plus-circle" aria-hidden="true"></span>' +
                    '</td>'
                    +'</tr>' );
        }

    };






});
