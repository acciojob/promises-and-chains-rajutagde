//your JS code here. If required.
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const submitBtn = document.querySelector("#btn");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!nameInput.value || !ageInput.value) {
    alert("Inputs cannot be empty.");
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = parseInt(ageInput.value);
      if (age >= 18) {
        resolve({ age, name: nameInput.value });
      } else {
        reject({ age, name: nameInput.value });
      }
    }, 4000);
  });

  promise
    .then((result) => {
      const { name } = result;
      alert(`Welcome, ${name}. You can vote.`);
      return result.age;
    })
    .then((age) => {
      return { canVote: true, age };
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      const { name } = error;
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
