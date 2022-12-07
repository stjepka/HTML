function handleSubmit() {
  const nameAndSurname = document.getElementById("nameAndSurname").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const date = document.getElementById("date").value;

  console.log([nameAndSurname, email, tel, date]);
}
