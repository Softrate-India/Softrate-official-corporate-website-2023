$(document).ready(function(){
    $(".hide-cnt").hide();
    $(document).on('click',"#read-btn",function(){
        var moreLessButton=$(".hide-cnt").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".cont").find(".hide-cnt").toggle();
        $(this).parent(".cont").find(".visible-text").toggle();
    });
});