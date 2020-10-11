const facts = [
  'Do you know adult humans are 60 percent water, and our blood is 90 percent water? 🌊',
  'Drinking water instead of soda can help with weight loss! 🥛',
  'Do you know drinking water reduces the chance of a hangover? 🍺',
  'Drinking water helps in enhancing physical performance! 🏋',
  'Drinking water improves your skin health and beauty! 💃',
  'Drinking water instead of other liquids will help you in weight loss! 🧘‍♀️',
  'Drinking more water may help relieve Constipation! 🚽',
  'Pace yourself to approach half of your recommended consumption by midday! 🌞',
  'Drinking water when you first get up helps you to improve your immune system! 💪',
  'Do you know drinking water before a workout will protect you from dehydration? 🏋',
  'Drinking water helps you to regulate Body temperature! 🚶‍♂️',
  'Did you know that drinking water lubricates the joints? It can even help with your back pain 🎒',
  'Drinking water helps maintaining your blood pressure 🅰️🅱️🆎🅾️',
  'Your brain is strongly influenced by your hydration status, make sure to drink water regularly 🧠',
  'Dehydration can trigger headaches and migraine, drinking water is the cheapest treatment 🧠',
  'Choose water when eating out. Generally, you will save money and reduce calories 😉',
  'Carry a water bottle wherever you go, it\'s the mother nature\'s health potion ❤️',
  'By the time you feel thirsty, your body has lost more than 1% of its total water, so let’s not feel thirst! ⚠️',
  'Drinking enough water everyday can help reduce heart disease and cancer. Water helps flush toxins out of your body 👩🏻‍⚕️',
  'There is the same amount of water on Earth as there was when the planet was formed. Believe it or not, the water you drink could share the same molecules that dinosaurs drank 🦖',
  'Do you know how to say \"I\'m thirsty\" in portuguese? "Estou com sede". Try to speak out loud. 🇧🇷',
  'Did you know that the largest hydrographic basin in the world is the Amazon Basin, in South America? 🤔'
];
const factsSize = facts.length;
const notificationMessage = 'Hey buddy, you should drink some water.';
const notificationTitle = 'Stay hydrated!';
var timeInterval = 15;

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
  const fact = facts[Math.floor(Math.random() * factsSize)];
  browser.notifications.create('waterNotification', {
    'type': 'basic',
    'iconUrl': 'icons/bottle.png',
    'title': notificationTitle,
    'message': notificationMessage + '\n' + fact
  });
});

function restartAlarms() {
  browser.alarms.clearAll();
  browser.alarms.create('waterReminder', {
    periodInMinutes: timeInterval
  });
}
