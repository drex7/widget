widget1();

function widget1() {

    var input = document.createElement("input");
    input.type = "text";
    input.id = "datepicker";
    document.querySelector('[class$="widget"]').appendChild(input);

    //load jQuery dynamically
    ( function() {
        if ( window.jQuery ) {
            main();
            
        } else {
            var jqueryScript = document.createElement("script");
            jqueryScript.type = "text/javascript";
            jqueryScript.src = "https://code.jquery.com/jquery-1.12.4.js";
            document.querySelector('head').appendChild(jqueryScript);

            main();
        }
    })();


    function main() {

        // Load jQuery-UI and CSS
        var jqueryUI = document.createElement("script");
        var css = document.createElement("link");
        var css2 = document.createElement("link");
        css.type = "text/css";
        css.rel = "stylesheet";
        css.href = "./css/jquery-ui.css";
        css2.type = "text/css";
        css2.rel = "stylesheet";
        css2.href = "./css/style.css";
        jqueryUI.type = "text/javascript";
        jqueryUI.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
        document.querySelector('head').appendChild(jqueryUI);
        document.querySelector('head').appendChild(css);
        document.querySelector('head').appendChild(css2);
    }

}    

// Wait for document to fully load to
// initialise the datepicker widget
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        $( function() {
            $("#datepicker").datepicker();
        });
        
        // Position widget
        var position = document.querySelector('body > div').className.split('_')[0].split('-');

        $( function() {
            console.log(position);
            function position_widget() {
                $("#ui-datepicker-div").position({
                    of: $( "#datepicker" ),
                    my: `${position[0]} ${position[1]}`,
                    at: "center",
                    collision: "fit"
                });
            }
            $("input").on("click", position_widget);
        });

    }

}



