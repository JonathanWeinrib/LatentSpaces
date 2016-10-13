$(document).ready(function(){
    $('#start_button').css("cursor", "pointer")
    // everything goes inside this next function: can i do that? or if i were to reference my game canvas outside of this function would it not ave any effect?
    $('#start_button').click(function(){
        $('#load_screen').hide(1000);
        $('#game_canvas').show(1000);



        // call the function that creates the $lyric. do i have to make it a var?
        //$lyric = $("<h1>lyric</h1>"); // find a way to make this lyric         dynamic?
        // set the id of the lyric in the lyric function as well
        initialize_lyric();
        game_body();
});
        });


        // make this a function, so i can call back to itself.

                // display right or wrong
                
                //alert("wrong!");

                // run function to change score. wait a minute, then add class
 
    //$('#start_button').draggable();
   
    
//make a function that creates a new lyric!!




function initialize_lyric(rapLyric){
    $lyric = $("<h1>Sam keene has a long ponytail</h1>");
    rapLyric.html($lyric);
    // now set css position
    rapLyric.show(300);
    rapLyric.css("margin-top","30px");
    rapLyric.css("margin-left","500px");

    return rapLyric;
    }

function game_body(rap_lyric){
    //$('.rap_lyric' change the class of the element to be either rap or computer
    $('.rap_lyric').draggable({
        //containment:"window"
        cursor: "move"
   
        });
    $('.bin').droppable({
        drop: function(){
            //if the class of the .rap_lyric is the same as the bin
            //if('.rap_lyric'.id=="rap"){ window.alert("hi");}
            //if('.rap_lyric'.attr("id")=="rap"){alert("hi");}
            var current_id = $(this).attr("id"); // or do i need $(this).attr("id")
            console.log(current_id);
            //console.log($('.rap_lyric').attr("id"));
            if($('.rap_lyric').attr("id") == current_id){
                $(".bin#" + current_id).css("background-color","green");
               
            } else {
                $(".bin#" + current_id).css("background-color","red");
                 
            }

            $('.rap_lyric').hide(1500,function(){
                $('.bin').css("background-color","orange");
            });
            for (i=0; i <5; i++){
                rap_lyrics = initialize_lyric($('.rap_lyric'));
                game_body();
            }
		}
	});
    // make it so that if someone clicks exit it exits the function!
    //initialize_lyric();
    //var count = 0;
    
    //count = count+1;
    //if (count) == 5){x=count; 
//return count;
//}
    //if count
//for (i=0; i <5; i++){
    //initialize_lyric();
    //game_body();
// somehow get rid of this recursion
//}

//return;
};

