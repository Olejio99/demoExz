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




let mainPage = `
<header>
	<div class="menu" id="menu">
		<ul class="main_menu">
			<li>Home</li>
			<li>Devices</li>
			<li class="logo"><h1>SmartHouse</h1></li>
			<li>Macros</li>
			<li><a href="auth.html">Login</a> </li>
		</ul>
	</div>
</header>
<div class="home">
    <h2>Room's</h2>
	<div class ="blocks">
	
	</div>
</div>
`;
//<footer class="wrapper padded-container"><img class="img centered" src="img/147217.jpg" alt=""><h3>Я не знаю что здесь делать</h3></footer>
let roomName = `<h2>{{name}}</h2>`
let devicesCard = `
<div class ="blocks roomBlocks">
    <div class="wrapper padded-container">
        <img class="img centered" src="{{image}}">
    </div>
</div>
`;
let roomCard = `
<div class="wrapper padded-container" id="{{id}}">
	<img class="img centered" src="{{image}}">
	<span>{{name}}</span>
</div>
`;

function initMain(){
    $('#content').html(mainPage);

    showRooms();
}

function nav(){
    $('.logo').on('click',(e) => {
        // if(e.text() === 'Home'){
            // console.log($('.main_menu>li').text())
        //     console.log(e.target)
        // // }
        // if($(this).text()==="Home"){
        //     console.log($('li').text())
        // }
        initMain();
        // console.log($('.logo').text())
        // console.log($(this))
        // showRoom(e.currentTarget.id);
    });
}

function showRooms() {
	$.ajax({
		url: host + '/rooms',
		type: 'GET',
		dataType: 'json',
		headers: {'Authorization': `Bearer ${token}`},
		error: err => {
			console.error(err);
		},
		success: data => {
			console.log(data);

			let html = '';
			for (let r of data) {
				let h = roomCard;
				if(r.user_id == 41 ){
					h = h.replace('{{id}}', r.id);
					h = h.replace('{{name}}', r.name);
					h = h.replace('{{image}}', `img/rooms/${r.photo}`);
					// console.log(html)
					html += h;
				}
			}
			$('.blocks').html(html);
            nav();
			$('.wrapper').on('click', (e) => {
				showRoom(e.currentTarget.id);
			});
		}
	});
}

function showRoom(id) {
	$.ajax({
		url: host + '/rooms/' + id,
		type: 'GET',
		dataType: 'json',
		headers: {'Authorization': `Bearer ${token}`},
		error: err => {
			console.error(err);
		},
		success: data => {
            console.log(data);
            
            let html = '';
			// for (let r of data) {
                let name = roomName;
				let h = devicesCard;
				// if(r.user_id == 41 ){
					// h = h.replace('{{id}}', r.id);
                    // h = h.replace('{{name}}', r.name);
			        // console.log(data.photo)
                    name = name.replace('{{name}}', data.name);
                    html += name;
                    h = h.replace('{{image}}', `img/rooms/${data.photo}`);
			        // console.log(h)
                    
					html += h;
				// }
			// }
			$('.home').html(html);
		}
    });
    
    // $('.wrapper').html(roomPage);
    
}
