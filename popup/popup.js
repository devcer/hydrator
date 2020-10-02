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
  const statusText = document.getElementById('status');
  // Reference for the timeout so we can clear it midway through
  let timeoutHandle; 
  for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function () {
      if (timeoutHandle) // reset remaining time 
          window.clearTimeout(timeoutHandle);

      let time = this.value;
      localStorage.setItem('time', time);

      statusText.classList.remove("hidden");
      statusText.innerText = 'Reminder updated to \n' + time + ' mins';

      timeoutHandle = setTimeout(() => {
        statusText.classList.add("hidden");
        statusText.innerText = '';
      }, 4000);
      setTime(Number(this.value));
    }
  }

  function setTime(time) {
    browser.runtime.sendMessage({
      'time': time
    });
  }
};
