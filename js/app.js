const form = document.querySelector("#loan-form");

form.addEventListener("submit", calculateResults);

function calculateResults(e) {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");

  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  document.getElementById("output").style.display = "none"; //eski rezul'tat kalbaw uchun

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    document.getElementById("loader").style.display = "inline"; //show loader

    setTimeout(function () {
      document.getElementById("loader").style.display = "none"; //hidden loader
      document.getElementById("output").style.display = "inline-block"; // show result
    }, 2000);
  } else {
    document.getElementById("loader").style.display = "inline"; //show loader
    //alert("Заполните все поля!");
    setTimeout(function () {
      document.getElementById("loader").style.display = "none"; //hidden loader
      document.getElementById("warnings").style.display = "inline-block"; //show warnings
    }, 2000);
    setTimeout(function () {
      document.getElementById("warnings").style.display = "none"; //hidden warnings
    }, 4000);
  }
  //bravo Ermek
  e.preventDefault();
}
