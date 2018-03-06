$(document).ready(function(){
    $(".music-nav").hover(function(){
        $(".music").show();
        
    }, function(){
        $(".music").hide();
        
    });
    
    
});
$(document).ready(function(){
    $(".store-nav").hover(function(){
        $(".store").show();
        
    }, function(){
        $(".store").hide();
        
    });
    
    
});
$(document).ready(function(){
    $(".visuals-nav").hover(function(){
        $(".visuals").show();
        
    }, function(){
        $(".visuals").hide();
        
    });
    
    
});






var visibleText = "show less";
var hideText = "show more";

// maybe at top //

$(document).ready(function(){
    
    $(".info-box button").click(function(){
        $(this).toggleClass("visible");
        
        if($(this).hasClass("visible")){
           $(this).html("show less"); 
        }else{
           $(this).html("show more");
        }
        
        $(this).next().toggleClass("visible");
    });
    
});


