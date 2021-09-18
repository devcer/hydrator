function setTime(time) {
  browser.runtime.sendMessage({
    time,
  });
}

window.onload = () => {
  if (localStorage.getItem("time") !== null) {
    const time = localStorage.getItem("time");
    if (time == null) {
      localStorage.setItem("time", 15);
      document.getElementById("time-15").checked = true;
    } else {
      const checkedId = `time-${time}`;
      document.getElementById(checkedId).checked = true;
    }
  }

  const timeForm = document.getElementById("time-form");
  const statusText = document.getElementById("status");
  // Reference for the timeout so we can clear it midway through
  let timeoutHandle;
  timeForm.addEventListener("click", (event) => {
    const radioButtonContainer = event.target.closest(".form-check");
    if (typeof radioButtonContainer !== null) {
      const radioButton =
        radioButtonContainer.querySelector(".form-check-input");
      if (timeoutHandle) {
        // reset remaining time
        window.clearTimeout(timeoutHandle);
      }
      const time = Number(radioButton.value);
      localStorage.setItem("time", time);

      statusText.classList.remove("hidden");
      statusText.innerText = `Reminder updated to \n ${time} mins`;

      timeoutHandle = setTimeout(() => {
        statusText.classList.add("hidden");
        statusText.innerText = "";
      }, 4000);
      setTime(time);
    }
  });
};
