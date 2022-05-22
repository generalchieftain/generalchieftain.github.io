$(".screens").hide();

        initFirstScreen('start');
        
        
        $("#user_name_btn").click(function(){
            let userAnswer = $("#user_name_input").val();
            if (userAnswer.length > 0) {
                // notie.alert({ type: 'success', text: '<img src="https://c.tenor.com/noNJGfVkHQUAAAAC/uh-huh-yeah.gif" width="150">', position: 'top' })
                $(".dialogs-block").each(function(index, element){
                    element.innerHTML = element.innerHTML.replace('{name}', userAnswer);
                });
                $("#user_name_next_btn").click();

                addFinishShowSourcesEL();

                // $("#secret_phrase_input_block").hide();
            }
            else {
                notie.alert({ type: 'warning', text: 'name cannot be empty <img src="https://c.tenor.com/VoDifLJ0IVYAAAAi/noppers-pepe-frog.gif">', position: 'top' })
            }
            // console.log(userAnswer);
        });


        $("div[data-option-result]").hide();

        // show results after each option
        $("button[data-next-option-result]").click(function(){
            let nextOptionResult = $(this).data('next-option-result');
            let h_name = "bW9uaWV6eg==";
            $("div[data-option-result]").hide();
            $("div[data-option-result='" + nextOptionResult + "']").show();
            $("[data-next-option-result]").hide();
        });

        $(".replay-btn").click(function(){
            $("[data-next-option-result]").show();
            $("div[data-option-result]").hide();
        });


        // move to the next screen
        $("button[data-next-screen]").click(function(){
            $("[data-next-option-result]").show();

            // console.log("debug ", $(this), $(this).data("next-screen"));
            let next_screen_id = $(this).data('next-screen');
            $("div[data-screen]").hide();
            // console.log("div[data-screen='" + next_screen_id + "']")
            let next_screen = $("div[data-screen='" + next_screen_id + "']");
            // console.log(next_screen);
            $(next_screen).show();
            bg_image = $(next_screen).data('background-img');
            if (bg_image) {
                $("body").css("background-image", "url("+ bg_image +")");
            }
            else {
                $("body").css("background-image", "none");
            }
        });


        $("#gates_secret_phrase_btn").click(function(){
            let userAnswer = $("#gates_secret_phrase").val();
            let correctAnswers = ['you shall not pass!', 'you shall not pass', 'you shall not pass.'];
            if (correctAnswers.includes(userAnswer.toLowerCase())) {
                notie.alert({ type: 'success', text: '<img src="https://c.tenor.com/noNJGfVkHQUAAAAC/uh-huh-yeah.gif" width="150">', position: 'top' });
                let d_name = "Z2VuZXJhbHdoaXRlY2F0";
                $("#gates_secret_phrase_option_btn").click();
                $("#secret_phrase_input_block").hide();
            }
            else {
                notie.alert({ type: 'warning', text: 'Wrong... <img src="https://c.tenor.com/VoDifLJ0IVYAAAAi/noppers-pepe-frog.gif">', position: 'top' })
            }
            // console.log(userAnswer);
        });

        $("#cave_secret_phrase_btn").click(function(){
            let userAnswer = $("#cave_secret_phrase").val();
            let correctAnswers = ['2008'];
            if (correctAnswers.includes(userAnswer.toLowerCase())) {
                notie.alert({ type: 'success', text: '<img src="https://c.tenor.com/noNJGfVkHQUAAAAC/uh-huh-yeah.gif" width="150">', position: 'top' })
                $("#cave_secret_phrase_option_btn").click();
                $("#cave_secret_phrase_input_block").hide();
            }
            else {
                notie.alert({ type: 'warning', text: 'Wrong... <img src="https://c.tenor.com/VoDifLJ0IVYAAAAi/noppers-pepe-frog.gif">', position: 'top' })
            }
            // console.log(userAnswer);
        });



        function initFirstScreen(dataScreen){
            $("div[data-screen='" + dataScreen + "']").show();
            let bg_image = $("div[data-screen='" + dataScreen + "']").data('background-img');
            $("body").css("background-image", "url("+ bg_image +")");
        }


        function addFinishShowSourcesEL(){
            $("#finish_sources_list_trs").hide();
            $("#finish_show_sources_trs").click(function(){
                console.log('finish_show_sources clicked ');
                $("#finish_sources_list_trs").show();
            });
        }