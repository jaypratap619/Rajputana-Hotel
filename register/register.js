path = "http://localhost:5000/";

const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

const signIn = () => {
  const username = document.getElementById("user_name_si").value;
  const password = document.getElementById("password_si").value;

  axios
    .post(path + "auth/sign-in", {
      username: username,
      password: password,
    })
    .then(function (response) {
      console.log(response);
      localStorage.setItem("token", response.data.token);
      window.location.href = "../index.html";
    })
    .catch(function (error) {
      console.log(error);
    });
};

const signUp = () => {
  const username = document.getElementById("user_name_su").value;
  const email = document.getElementById("email_su").value;
  const password = document.getElementById("password_su").value;
  const cpassword = document.getElementById("confirm_password_su").value;
  if (cpassword !== password) {
    alert("password do not match");
  } else {
    axios
      .post(path + "auth/sign-up", {
        username: username,
        password: password,
        email: email,
      })
      .then(function (response) {
        console.log(response);
        const container = document.querySelector(".container");
        container.classList.toggle("active");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
