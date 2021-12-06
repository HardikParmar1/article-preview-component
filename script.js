document.querySelector(".share").addEventListener("mouseover" , function() {
      document.querySelector(".share-icon").style.filter = "brightness(0) invert(1)";
      document.querySelector(".share").style.backgroundColor ="rgb(109, 127, 151)";
      document.querySelector(".popover").style.visibility="visible";
});

document.querySelector(".share").addEventListener("mouseout" , function(){
    document.querySelector(".share-icon").style.filter =null;
    document.querySelector(".share").style.backgroundColor = null;
    document.querySelector(".popover").style.visibility=null;

});
