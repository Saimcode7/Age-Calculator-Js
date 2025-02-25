function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const birthDate = new Date(birthdate);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getData() < birthDate.getDate())
  ) {
    age--;
  }

document.getElementById("result").innerText = `Your Age is ${age} years`;
}