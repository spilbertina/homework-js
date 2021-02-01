const TimeInterval = 1000;

class CountDown {
    get ALL_SECONG() {
        return this.hour * 3600 + this.min * 60 + this.sec;
    }
    set ALL_SECONG(value) {
        this.hour = parseInt(value / 3600);
        this.min = parseInt((value - this.hour * 3600) / 60);
        this.sec = parseInt(value - (this.hour * 3600) - (this.min * 60));
    }
    constructor(hour, min, sec, print, dindon) {
        this.hour = parseInt(hour);
        this.min = parseInt(min);
        this.sec = parseInt(sec);
        this.delay = TimeInterval;
        this.timePrint = print;
        this.loop(dindon);
    }
    get TIME_TEXT() {
        const h = this.hour < 10 ? "0" + String(this.hour) : String(this.hour);
        const m = this.min < 10 ? "0" + String(this.min) : String(this.min);
        const s = this.sec < 10 ? "0" + String(this.sec) : String(this.sec);

        return `${h} : ${m} : ${s}`;
    }
    stop() {
        clearInterval(this.timer);
    }
    loop(dindon) {
        this.timer = setInterval(() => {
            this.ALL_SECONG--;
            this.timePrint(this.TIME_TEXT);
            if (this.ALL_SECONG < 1) {
                dindon();
                clearInterval(this.timer)
            }
        }, this.delay);
    }
}

let Clock = null;

function run() {
    const hour = document.querySelector("input[name='hour']").value;
    const min = document.querySelector("input[name='min']").value;
    const sec = document.querySelector("input[name='sec']").value;

    if (Clock != undefined) Clock.stop();
    Clock = new CountDown(hour, min, sec, timePrint, dindon);
}

function stop() {
    Clock.stop();
}

function timePrint(time) {
    document.getElementById("time").innerText = time;
    console.log(time);
}

function dindon() {
    document.getElementById("time").innerText = "БА-БАХ!!!";
}
