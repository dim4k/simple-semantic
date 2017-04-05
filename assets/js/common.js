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
});

/* ANIMATED TYPING */
document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.thin-title', {
        strings: ["", "Web Developer"],
        typeSpeed: 100
    });
});