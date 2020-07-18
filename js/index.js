$(".project").hover(function() {
    console.log("It's working")
    $(this).children(".project_hover").css("display","block");
    }, function() {
        $(this).children(".project_hover").css("display","none");
    }
)

