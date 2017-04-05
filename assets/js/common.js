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
        })
    ;

    $('.submit-form').click(function(){

        var data = $('.form').serializeArray();

        data.push({'name':'emailto','value':'contact@antoine.kim'});
        data.push({'name':'sitefrom','value':'antoine.kim'});
        console.log(data);

        $.ajax({
            data: data,
            type: "POST",
            url: "http://37.187.20.149:3000/sendMail",
            success: function(data){
                alert(data.responseDesc);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
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