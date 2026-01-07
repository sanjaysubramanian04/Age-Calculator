function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerHTML = "❌ Please select your date of birth";
    return;
  }

  const birth = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `🎉 <br>
    <span style="color:#69074d">${years}</span> Years,
    <span style="color:#69074d">${months}</span> Months,
    <span style="color:#69074d">${days}</span> Days old`;
}
