$(document).ready(function(){
    $(".add-row").click(function(){
        var name = $("#name").val();
        var last_name = $("#last_name").val();
        var date_of_birth = $("#date_of_birth").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + last_name + "</td><td>" + date_of_birth +"</td></tr>";
        $("table tbody").append(markup);
    });
    
    // Find and remove selected table rows
    $(".delete-row").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
});