window.onload = () => {
  if (localStorage.getItem('time') !== null) {
    let time = localStorage.getItem('time');
    if (time == null) {
      localStorage.setItem('time', 15);
      document.getElementById('time-15').checked = true;
    } else {
      let checkedId = 'time-' + time;
      document.getElementById(checkedId).checked = true;
    }
  }

  var radios = document.forms['time-form'].elements['time'];
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      let time = this.value;
      localStorage.setItem('time', time);
      document.getElementById('status').innerText = 'Reminder updated to ' + time + ' mins';
      setTimeout(() => {
        document.getElementById('status').innerText = '';
      }, 5000);
      setTime(Number(this.value));
    }
  }

  function setTime(time) {
    browser.runtime.sendMessage({
      'time': time
    });
  }
};