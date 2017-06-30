function showNotification(){
	// browser.notifications.create({
	//   "type": "basic",
	//   "title": "Test notification title",
	//   "message": "Test notification message";
	// });
	console.log("showNotification");
}

var radios = document.forms["time-form"].elements["time"];
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        console.log("Time:"+this.value);
        setTime(parseInt(this.value));
    }
}

function setTime(time){
	console.log("Time:"+time);
	var message=browser.runtime.sendMessage({"time": time});
	message.then(handleSuccess, handleError);
}


function handleSuccess(message) {
  console.log("Message from the background script:" + message.response);
}

function handleError(error) {
  console.log("Error:"+error);
}