
function str_rand() {
		
        var result       = '';
        var words        = 'qwertyuiopasdfghjklzxcvbnm';
        var max_position = words.length - 1;
            for( i = 0; i < 9; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
        return result;
    }

function str_email() {
		var emaill = 'gpavel.p@ya.ru';
        return emaill;
    }

$(document).ready(function() {
        $("#login").val(str_rand());
		$("#password").val(str_rand());
		$("#emailPhone").val(str_email());
       
});
