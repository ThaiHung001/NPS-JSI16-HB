
////tạo biến giờ-phút-giây-miligiay
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;

////tạo hàm start-time
const ST = () => {
  // nếu int = null thì dừng thời gian
  if (int !== null) {
    clearInterval(int);
  }
  //int = chạy hàm displayTimer mỗi 10 miligiay
  int = setInterval(displayTimer, 10);
};

///tạo hàm hiển thị thời gian 
function displayTimer() {
  //mỗi lần chạy thì miligiay tăng 10
  milliseconds += 10;
  //nếu miligiaya = 1000 -> giây + 1, nhưng phải lấy dư 60 vì nếu trên 60 chuyển qua phút, 
  /// TH2: miligiay != 1000, hiển thị số giây bth ( không tăng vì chưa đủ 1000 ms để tăng)
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  //làm tương tự với phút và giờ
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
  //đặt lại miligiay neu đã đủ 1000, không thì để nguyên
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  // let h = String(hours).padStart(2, "0");
  //đặt phút và giây dạng 00 (hàm padStart)
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  // let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${m} : ${s}`;
}

// document.getElementById("pause-timer").addEventListener("click", 
const PT = () => {
  clearInterval(int);
};

// document.getElementById("reset-timer").addEventListener("click",
const RS = () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00";
};



//////////clock 2

// let []