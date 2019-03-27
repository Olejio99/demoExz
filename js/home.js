let homePage = `
<header>
    <button onclick = "location.href=''">Home</button>
    <h1>SmartHouse</h1>
    <button onclick = "location.href='auth.html'">Login</button>
</header>
<div class="home">
    <h2>Room's</h2>
	<div class ="blocks">
	
	</div>
</div>
`;
//<footer class="wrapper padded-container"><img class="img centered" src="img/147217.jpg" alt=""><h3>Я не знаю что здесь делать</h3></footer>

let roomCard = `
<div class="wrapper padded-container" id="{{id}}">
	<img class="img centered" src="{{image}}">
	<span>{{name}}</span>
</div>
`;

function initHome(){
    $('#content').html(homePage);

    showRooms();
}

// function showRooms(){
//     $.ajax({
//         url:host + '/rooms',
//     })
// }

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
					h = h.replace('{{image}}', `img/rooms/${r.photo}`);
					h = h.replace('{{name}}', r.name);
					html += h;
				}
			}
			$('.blocks').html(html);

			$('.wrapper').on('click', (e) => {
			 	initRoom(e.currentTarget.id);
			});
		}

	});
}
