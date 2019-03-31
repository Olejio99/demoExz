let token = null;
let host = 'http://localhost:3000/api'
// let host = 'http://192.168.1.93:3000/api'
// let host = 'http://192.168.1.150:3000/api'
// let host = 'http://localhost:5500/api'



// C:/openserver/domains/one/client/api'
// let host = 'http://127.0.0.1:5500/one/client/api'

$('#btnLogin').on('click', (e)=>{
    e.preventDefault();
    $.ajax({
        url: host + '/login',
        type: 'POST',
        dataType: 'text',
        data: {
            login: $('#login').val(),
            password: $('#password').val()
        },
        err: err => {
            console.error(err);
        },
        success: data => {
            console.log(data)
            token = data;
            initMain();
        }
    })
});