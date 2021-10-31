// VARIABLES
var experience_item = $(".experience_item");
var tablist_item = $(".tablist_item");

// DECLENCHEURS
experience_item.click(function() {
    $(this).siblings().removeClass("clicked");
    $(this).addClass("clicked");
});


// FONCTIONS
function toggleExp (buttonToClick, divToDisplay) {
    buttonToClick.click(function(){
        $(this).siblings().removeClass("selected");
        $(this).siblings().removeClass("clicked");
        $(this).addClass("selected");
        $(this).addClass("clicked");
        divToDisplay.siblings().removeClass("selected");
        divToDisplay.siblings().removeClass("clicked");
        divToDisplay.addClass("selected");
    });
}

toggleExp($("#exp_cds_btn"), $("#exp_cds"));
toggleExp($("#exp_chu_btn"), $("#exp_chu"));
toggleExp($("#exp_rt2i_btn"), $("#exp_rt2i"));