$(document).ready(function(){
    var slidein = $(".ma01 .ma11 .ma32 i")
    var slideout =$(".ma01 .ma11 .ma32")
   //div에 마우스 커서를 올렸을 때
    $(slidein).on("mouseenter",function(){
        $(slideout).animate({"width":"580px"},1200,"easeOutBounce");
        });
    //div에서 마우스 커서가 벗어났을 때
    $(slidein).on("mouseleave",function(){
        $(slideout).animate({"width":"130px"},1200,"easeOutBounce");
    });
});