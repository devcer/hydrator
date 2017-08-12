window.onload=()=>{
	console.log("Popup loaded:" +localStorage.getItem('time'));
	if(localStorage.getItem('time')==null){
		localStorage.setItem('time',15);
		document.getElementById("time-15").checked=true;
	}else{
		let checkedId="time-"+localStorage.getItem('time');
		document.getElementById(checkedId).checked= true;
	}
}

var radios = document.forms["time-form"].elements["time"];
for(var i = 0, max = radios.length; i < max; i++) {
  radios[i].onclick = function() {
    console.log("Time:"+this.value);
    localStorage.setItem('time',this.value);
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