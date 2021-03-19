import { formatError } from "./common.js";
import { audio } from "./audio.js";

const timerButtonStart = document.getElementById("timer_start");
const timerButtonStop = document.getElementById("timer_stop");
const timerResult = document.getElementById("timer_result");

timerButtonStart.addEventListener("click", handleTimerStart);
timerButtonStop.addEventListener("click", handleTimerStop);
let timeId;

function handleTimerStart() {
    timerResult.innerHTML = "";
    event.preventDefault();

    let timerInterval = +document.getElementById("timer_interval").value;

    if (document.getElementById("timer_interval").value == "" || typeof timerInterval == "string") {
        timerResult.innerHTML = formatError("Введите число");
    } else {
        timeId = setInterval(() => {
            if (timerInterval > 0) {
                timerResult.innerHTML = "Осталось" + formatError(--timerInterval) + "секунд";
                this.disabled = true;
                timerButtonStop.disabled = false;
                // document.getElementById("timer_interval").value = "";
            }
            if (timerInterval <= 0) {
                clearInterval(timeId);

                this.disabled = false;
                timerButtonStop.disabled = true;
            }

            if (timerInterval <= 5) {
                document.body.append(audio);
            }
        }, 1000);
    }
}

function handleTimerStop() {
    event.preventDefault();
    clearInterval(timeId);

    this.disabled = true;
    timerButtonStart.disabled = false;
    // timerInterval = "";
}
