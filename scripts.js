$(document).ready(function(){
    $(".links-nav").hover(function(){
        $(".links").show();
        
    }, function(){
        $(".links").hide();
        
    });
    
    
});
$(document).ready(function(){
    $(".contact-nav").hover(function(){
        $(".contact").show();
        
    }, function(){
        $(".contact").hide();
        
    });
    
    
});
$(document).ready(function(){
    $(".visuals-nav").hover(function(){
        $(".visuals").show();
        
    }, function(){
        $(".visuals").hide();
        
    });
    
    
});

$(document).ready(function(){
    $(".info-nav").hover(function(){
        $(".info").show();
        
    }, function(){
        $(".info").hide();
        
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


