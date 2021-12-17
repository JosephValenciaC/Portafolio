$(document).ready(function() {
    $('#entrar').click(function() {
        grecaptcha.ready(function() {
            grecaptcha.execute('reCAPTCHA_site_key', {
                action: 'validarUsuario'
                }).then(function(token) {
                $('#form-login').prepend('<input type="hidden" name="token" value="' + token + '" >');
                $('#form-login').prepend('<input type="hidden" name="action" value="validarUsuario" >');
                $('#form-login').submit();
            });
        });
    });
});