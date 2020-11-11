function setTime(time) {
  browser.runtime.sendMessage({
    time
  });
}

window.onload = () => {
  if (localStorage.getItem('time') !== null) {
    const time = localStorage.getItem('time');
    if (time == null) {
      localStorage.setItem('time', 15);
      document.getElementById('time-15').checked = true;
    } else {
      const checkedId = `time-${time}`;
      document.getElementById(checkedId).checked = true;
    }
  }

  let radios = document.forms['time-form'].elements['time'];
  const statusText = document.getElementById('status');
  // Reference for the timeout so we can clear it midway through
  let timeoutHandle;
  for (let i = 0, max = radios.length; i < max; i+=1) {
    radios[i].onclick = (ev) => {
      if (timeoutHandle) { // reset remaining time
        window.clearTimeout(timeoutHandle);
      }
      const time = Number(ev.target.value);
      localStorage.setItem('time', time);

      statusText.classList.remove('hidden');
      statusText.innerText = `Reminder updated to \n ${time} mins`;

      timeoutHandle = setTimeout(() => {
        statusText.classList.add('hidden');
        statusText.innerText = '';
      }, 4000);
      setTime(time);
    }
  }
};
