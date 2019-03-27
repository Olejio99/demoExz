

function req(p){
    $.ajax({
        url: host + p.url,
        type: p.method,
        dataType: 'json',
        data: p.data,
        error:p.err,
        success:p.ok
    });
}