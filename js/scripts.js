var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },200);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },400);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },400);
},1000);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });

      // Load CSV file with the program
      var client = new XMLHttpRequest();
      client.open('GET', '2023/nehws23-program.csv');
      client.onreadystatechange = function() {

        var result = client.responseText;

        // Parse CSV file contents into an array
        var resultArray = [];
        result.split("\n").forEach(function(row) {
          var rowArray = [];
          row.split(",").forEach(function(cell) {
            rowArray.push(cell);
          });
          resultArray.push(rowArray);
        });

        resultArray.forEach(element => console.log(element));

        // Display array contents as HTML table
        var content = "<table id=\"program_table\"><tr><th>Time</th><th>Program Item</th></tr>";
        resultArray.forEach(function(row) {
          content += "<tr>";
          row.forEach(function(cell) {
            content += "<td>" + cell + "</td>" ;
          });
          content += "</tr>";
        });
        content += "</table>";

        document.getElementById("program_table_div").innerHTML = content;

        console.log(content);

      }
      client.send();

});
