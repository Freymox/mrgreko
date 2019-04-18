//------------------//
//Dog text to normal//
//------------------//

var DOG_CODE = 
{"Wo":"A",
 "Grrr":"B",
 "Wow": "C",
 "Woo": "D",
 "W":"E",
 "Grof":"F",
 "Gof":"G",
 "Rrrr":"H",
 "Rr":"I",
 "Roff":"J",
 "Row":"K",
 "Wauu":"L",
 "Mm":"M",
 "Gr":"N",
 "Uuu":"O",
 "Wauw":"P",
 "Ruff":"Q",
 "Ruf":"R",
 "Wuff":"S",
 "R":"T",
 "Vau":"U",
 "Arff":"V",
 "Arf":"W",
 "Vauu":"X",
 "Rarww":"Y",
 "Arrr":"Z",
 ".----":"1",
 "..---":"2",
 "...--":"3",
 "....-":"4",
 ".....":"5", 
 "-....":"6",
 "--...":"7",
 "---..":"8",
 "----.":"9",
 "-----":"0",
 ".":".",
 "!":"!",
 "?":"?",
 "|":" "};

var decodeDOG = function(dogCode){
  var words = (dogCode).split('  ');
  var letters = words.map((w) => w.split(' '));
  var decoded = [];

  for(var i = 0; i < letters.length; i++){
    decoded[i] = [];
    for(var x = 0; x < letters[i].length; x++){
        if(DOG_CODE[letters[i][x]]){
            decoded[i].push( DOG_CODE[letters[i][x]] );
        }
    }
  }

  return decoded.map(arr => arr.join('')).join(' ');
}

document.querySelector('.submit').addEventListener('click', function() {
    var val = decodeDOG(document.querySelector('.search').value)
	document.querySelector('.tooltip-content').textContent = val;
    document.querySelector('.search').value = "";
    if (val==null || val=="") {
        console.log(`Empty value`);
        document.querySelector('.tooltip-effect-1').classList.remove("visible");
    } else {
        document.querySelector('.tooltip-effect-1').classList.add("visible");
    }
});

// Animate CSS by Daniel Eden: https://github.com/daneden/animate.css

$(document).ready( function(){
  $("#west .content").click( function() {
    $("#west-overlay").addClass("animated fadeInLeft open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated fadeInLeft");
    });
    $("#west-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipInY");
    }); 
  });
  $("#west-overlay .close-icon").click( function() {
      $("#west-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipOutY open");
      }); 
  });
  $("#east .content").click( function() {
    $("#east-overlay").addClass("animated fadeInRight open").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass("animated fadeInRight");
    }); 
    $("#east-overlay .product-content").addClass("animated flipInY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass("animated flipInY");
     }); 
  });
  $("#east-overlay .close-icon").click( function() {
    $("#east-overlay").addClass("animated flipOutY ").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass("animated flipOutY open");
    });     
  });  
});
