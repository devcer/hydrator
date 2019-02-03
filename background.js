const notificationMessage = 'Hey buddy, you should drink some water.';
const notificationTitle = 'Stay hydrated!';
var timeInterval = 15;
// var timeInterval = 0.5;

restartAlarms();
browser.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse) {
  timeInterval = request.time;
  sendResponse({
    response: 'Time received successfully'
  });
  restartAlarms();
}

browser.alarms.onAlarm.addListener(function (alarm) {
  browser.notifications.create('waterNotification', {
    'type': 'basic',
    'iconUrl': 'icons/bottle.png',
    'title': notificationTitle,
    'message': notificationMessage
  });
});

<<<<<<< HEAD
function restartAlarms() {
  browser.alarms.clearAll();
  browser.alarms.create('waterReminder', {
    periodInMinutes: timeInterval
  });
}
=======
function restartAlarms(){
	browser.alarms.clearAll();
	browser.alarms.create("waterReminder", {periodInMinutes: timeInterval});	
}
>>>>>>> 807d5930ddaf21127b233c49c18f27eb9ce6b0f8
