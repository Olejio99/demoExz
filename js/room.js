let roomPage = `
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

</div>
`;

let roomName = `<h2>{{name}}</h2>`
let devicesCard = `
<div class ="blocks roomBlocks">
    <div class="wrapper padded-container">
        <img class="img centered" src="{{image}}">
    </div>
</div>
`;

function initRoom(){
    $('#content').html(roomPage);
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