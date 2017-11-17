<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="css/reset.css" type="text/css">
        <link rel="stylesheet" href="css/main.css" type="text/css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
		<meta name="msapplication-tap-highlight" content="no"/>

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script type="text/javascript" src="js/createjs-2013.09.25.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        
    </head>
    <body ondragstart="return false;" ondrop="return false;" >
          <script>
            $(document).ready(function(){
                     var oMain = new CMain({
                                    min_bet:0.1,                //MIN BET PLAYABLE BY USER
                                    max_bet:300,                //MAX BET PLAYABLE BY USER
                                    bet_time:10000,             //WAITING TIME FOR PLAYER BETTING
                                    money:2000                  //STARING CREDIT FOR THE USER
                                });

                     $(oMain).on("game_start", function(evt) {
                             //alert("game_start");
                     });

                     $(oMain).on("end_hand", function(evt,iMoney) {
                             //alert("iMoney: "+iMoney );
                     });

                     $(oMain).on("restart", function(evt) {
                             //alert("restart");
                     });
           });

        </script>
        <canvas id="canvas" class='ani_hack' width="1024" height="768"> </canvas>

    </body>
</html>