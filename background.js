var notificationMessage = "Hey buddy, you should drink some water.";
var notificationTitle = "Stay hydrated!";
var timeInterval = 15; 
// var timeInterval = 0.5;

restartAlarms();
browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse) {
  // console.log(" Time: " + request.time);
  timeInterval= request.time; 
  // timeInterval= request.time/30;
  sendResponse({response: "Time received successfully"});
  restartAlarms();
}

browser.alarms.onAlarm.addListener(function(alarm) {
	browser.notifications.create("waterNotification",{
	  "type": "basic",
	  "iconUrl": "icons/bottle.png",
	  "title": notificationTitle,
	  "message": notificationMessage
	});
});

function restartAlarms(){
	browser.alarms.clearAll();
	browser.alarms.create("waterReminder", {periodInMinutes: timeInterval});	
}
