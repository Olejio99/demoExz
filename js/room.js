let roomPage = `
<header>
    <button onclick = "location.href=''">Home</button>
    <h1>SmartHouse</h1>
    <button onclick = "location.href='auth.html'">Login</button>
</header>
<div class="home">
<div class ="blocks roomBlocks">
<div class="wrapper padded-container">
    <img class="img centered" ></div>
<div class="devSen">
    <div class="devices">
    <label for="">Devices</label>
    <ul>
        <li>Device 1</li>
        <li>Device 2</li>
        <li>Device 3</li>
    </ul>
    </div>
    <div class="sensors">
    <label for="">Sensors</label>
    <ul>
        <li>Sensor 1</li>
        <li>Sensor 2</li>
        <li>Sensor 3</li>
    </ul>
    </div>
</div>
</div>
</div>
`;


let devicesCard = `
<div class ="blocks roomBlocks">
        <div class="wrapper padded-container">
            <img class="img centered" ></div>
        <div class="devSen">
            <div class="devices">
            <label for="">Devices</label>
            <ul>
                <li>Device 1</li>
                <li>Device 2</li>
                <li>Device 3</li>
            </ul>
            </div>
            <div class="sensors">
            <label for="">Sensors</label>
            <ul>
                <li>Sensor 1</li>
                <li>Sensor 2</li>
                <li>Sensor 3</li>
            </ul>
            </div>
        </div>
    </div>
`;

function initRoom(){
    $('#content').html(roomPage);
    
}


function initRoom(id) {
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
		}
    });
    
    $('#content').html(roomPage);
    
}


