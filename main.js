let currencyRatio = {
  USD: {
    KRW: 1184.36,
    USD: 1,
    VND: 22972.5,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.4,
    unit: "원",
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
};

let fromCurrency = "USD";
let toCurrency = "USD";

//console.log(currencyRatio.VND.unit);

// console.log(currencyRatio["KRW"]["unit"]);

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1.버튼을 가져온다
    document.getElementById("from-button").textContent = this.textContent;
    // 2.버튼에 값을바꾼다
    // 3. 선택된 currency값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    convert();
  })
);

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1.버튼을 가져온다
    // 2.버튼에 값을바꾼다
    document.getElementById("to-button").textContent = this.textContent;
    // 3. 선택된 currency값을 변수에 저장해준다.
    toCurrency = this.textContent;
    convert();
  })
);

//1. 입력하는 순간 환전된 값이 보인다.
function convert() {
  //1. 환전
  //2. 얼마를 환전? 가지고있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지
  //3. 돈 * 환율 = 환전 금액
  // console.log("key up event issue");
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  console.log("환전결과!", convertedAmount);

  document.getElementById("to-input").value = convertedAmount;
}
