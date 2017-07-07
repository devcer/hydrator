var notificationMessage = "Hey buddy, You should drink some water.";
var notificationTitle = "Stay hidrated!";
// var timeInterval = 15; 
var timeInterval = 0.5;
// var buttons = [
//   {
//     "title": "Snooze"
//   }, {
//     "title": "Thank you"
//   }
// ];

restartAlarms();
browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse) {
  console.log(" Time: " + request.time);
  //timeInterval= request.time; 
  timeInterval= request.time/30;
  sendResponse({response: "Time received successfully"});
  restartAlarms();
}

browser.alarms.onAlarm.addListener(function(alarm) {
	console.log(new Date());
	browser.notifications.create("waterNotification",{
	  "type": "basic",
	  "iconUrl": "icons/bottle.png",
	  "title": notificationTitle,
	  //"buttons": buttons,
	  //"eventTime": 3000,
	  "message": notificationMessage
	});
});

function restartAlarms(){
	browser.alarms.clearAll();
	browser.alarms.create("waterReminder", {periodInMinutes: timeInterval});	
}