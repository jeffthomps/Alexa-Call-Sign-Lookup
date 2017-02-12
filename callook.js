var https = require('https'); var options = {
  host: 'callook.info',
  port: 443,
  path: '/kd8psj/json',
  method: 'GET'
};

var req = https.get(options, function(res) {


    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
		//console.log("Got a response: ", fbResponse);
		console.log("status: ", fbResponse.status);
        console.log("type: ", fbResponse.type);
		console.log("name: ", fbResponse.name);
		console.log("address line 2: ", fbResponse.address.line2);
		console.log("otherInfo.expiryDate: ", fbResponse.otherInfo.expiryDate);
    });

});
req.end(); req.on('error', function(e) {
  console.error(e);
});





