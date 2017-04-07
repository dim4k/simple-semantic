$(document).ready(function() {
    /* CONTACT MODAL */
    $('.contact-me').click(function(){
            $('.modal.contact')
                .modal('setting', 'transition', 'fade down')
                .modal('show');
        });


    /* FORM CONTROLS */
    $('.ui.form')
        .form({
            on: 'blur',
            inline : true,
            fields: {
                firstname: {
                    identifier: 'firstname',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your first name'
                        }
                    ]
                },
                lastname: {
                    identifier: 'lastname',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your last name'
                        }
                    ]
                },
                message: {
                    identifier: 'message',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter a message'
                        }
                    ]
                },
                email: {
                    identifier  : 'email',
                    rules: [
                        {
                            type   : 'email',
                            prompt : 'Please enter a valid e-mail'
                        }
                    ]
                }
            }
        });


    /* FORM VALIDATION */
    $('.ui.form').keyup(function(){
        if ( $('.ui.form').form('is valid') ) {
            $('.submit-form').removeClass('disabled');
        }else{
            $('.submit-form').addClass('disabled');
        }
    });

    /* MAIL SERVER CALL */
    $('.submit-form').click(function(){

        var data = $('.form').serializeArray();

        data.push({'name':'userId','value':'1'});

        $.ajax({
            data: data,
            type: "POST",
            url: "http://localhost:3000/sendMail",
            success: function(data){
                $('.modal.callback')
                    .modal('show')
                ;
                $('.callback-message').html(data.responseDesc);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $('.modal.callback')
                    .modal('show')
                ;
                $('.callback-message').html("Couldn't reach the server");
            }
        });
    });
});

/* ANIMATED TYPING */
document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.thin-title', {
        strings: ["", "Web Developer"],
        typeSpeed: 100
    });
});
