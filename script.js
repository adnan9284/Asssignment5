const getAllElements = document.getElementById("get_all_elements");
const clearBtn = document.getElementById("clear_btn");
const callHistory = document.getElementById("call_history");

let heard = 1;
let copy = 1;

for (element of getAllElements.children) {
  const cartHeartIcon = element.querySelector(".flex .fa-heart");
  const copyBtn = element.querySelector(".btn-neutral");
  const hotlineNumber = element.querySelector(".hotline_number");
  const callBtn = element.querySelector(".btn-success");
  const coinCount = document.getElementById("coin_count");
  const hotlineTitle = element.querySelector(".hotline_title");
  const holineNumber = element.querySelector(".hotline_number");

  // header heart count
  cartHeartIcon.addEventListener("click", function () {
    return (document.getElementById("header_heart_count").innerText = heard++);
  });

  // call event
  callBtn.addEventListener("click", function () {
    if (coinCount.innerText <= 0) {
      alert(`❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে অবশ্যই ২০ কয়েন লাগবে।`);
      return;
    }

    document.getElementById("coin_count").innerText =
      Number(coinCount.innerText) - 20;

    const date = new Date();
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="flex justify-between items-center w-full mb-4 rounded-md p-4 mt-4 shadow-md">
      <div>
        <h4 class="text-lg sm:text-xl font-medium">${hotlineTitle.innerText}</h4>
        <p class="mt-2 text-base sm:text-lg font-medium">${holineNumber.innerText}</p>
      </div>
      <div>
        <h5 class="text-sm sm:text-base">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h5>
      </div>
    </div>
    `;
    callHistory.appendChild(div);
    return alert(
      `📞 Calling Emergency Service Number: ${holineNumber.innerText} `
    );
  });

  // copy event
  copyBtn.addEventListener("click", function () {
    document.getElementById("copy_count").innerText = copy++;

    if (hotlineNumber) {
      navigator.clipboard.writeText(hotlineNumber.innerText);
      alert(`The number is copied: ${hotlineNumber.innerText}`);
    }
  });
}

clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
});