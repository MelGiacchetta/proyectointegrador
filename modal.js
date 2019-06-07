(function($){
    $.fn.modal = function(opts){
        opts = $.extend({
            // colour: '#0c8',
            class: 'modal',
            title: 'Modal',
            content: '',
            extra: '',
            closeCallback: function(){}
        }, opts);

        var modal = this;

        this.openModal = function(){
            var underlay = $('<div />', {
                class: opts.class + '-underlay'
            });

            var overlay = $('<div />', {
                class: opts.class
            }).append(
                $('<h2 />', {
                    class: 'title'
                }).text(opts.title).append(
                    $('<div />', {
                        class: 'closer waves-effect'
                    })
                )
            ).append(
                $('<div />', {
                    class: 'content'
                }).append(opts.content).append(
                    $('<div />', {
                        class: 'extra'
                    }).append(opts.extra)
                )
            );

            $('body').append(underlay);
            $('body').append(overlay);
            $('body').addClass(opts.class + '-active');

            if(opts.confirm){
                overlay.addClass('with-confirm');
                overlay.append(
                    $('<div />', {
                        class: 'confirm-wrapper'
                    }).append(
                        $('<a />', {
                            href: opts.confirm.link,
                            class: 'confirm waves-effect'
                        }).text(opts.confirm.text)
                    )
                );
                overlay.find(' .confirm').on('click', function(){
                    modal.removeModal(opts.closeCallback);
                    return false;
                });
            }

            setTimeout(function(){
                $('.' + opts.class + '-underlay').css({
                    'opacity': '1'
                });
                $('.' + opts.class).addClass('active');
                $('.' + opts.class + '-underlay').on('click', function(){
                    modal.removeModal(opts.closeCallback);
                });
                $('.' + opts.class + ' .closer').on('click', function(){
                    modal.removeModal(opts.closeCallback);
                });
            }, 50);
        }

        this.removeModal = function(callback){
            $('.' + opts.class + '-underlay').css({
                'opacity': '0'
            });
            $('.' + opts.class).removeClass('active');
            setTimeout(function(){
                $('.' + opts.class + '-underlay').remove();
                $('.' + opts.class).remove();
                $('body').removeClass(opts.class + '-active');
            },350);
            callback();
        }

        modal.on('click', function(){
            modal.openModal();
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".modal").offset().top - 200
            }, 1000);
            return false;
        });

        return this;
    }
})(jQuery);

$(document).ready(function(){
    $('.modal-opener').modal({
        title:"Ingresar",
        content: '<form> <label>Nombre: </label> <input name="nombre" type="text"> <br> <label>Email: </label> <input name="email" type="email"> <br> <label>Contraseña: </label> <input name="contraseña" type="password"> </form>',
        confirm: {
            text: 'ENVIAR',
            link: '#'
        }
    });
});
