
$(function(){
    $("#plus").on("click",function(){
        var val =$("input").val();
        if (val!==""){
            var elem=$("<li class='outer'></li>").text(val);
            $(elem).append("<i class='material-icons rem'>clear</i>");
            $("#list").append(elem);
            $("input").val("");
            $(".rem").on("click",function(){
                $(this).parent().remove();
            });
        }
        else{
            alert("Please enter something!");
        }
    });
});