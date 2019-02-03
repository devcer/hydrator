window.onload = () => {
    if (localStorage.getItem('time') == null) {
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
        localStorage.setItem('time', this.value);
        setTime(Number(this.value));
      }
    }

    function setTime(time) {
      var message = browser.runtime.sendMessage({
        'time': time
      });
      // message.then(handleSuccess, handleError);
    }


    function handleSuccess(message) {
      console.log('Message from the background script:' + message.response);
    }

    function handleError(error) {
      console.log('Error:' + error);
    }