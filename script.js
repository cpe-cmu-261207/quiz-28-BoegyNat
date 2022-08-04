const btnRandom = document.querySelector("#btn-random");
const img = document.querySelector("#img-profile");
const sex = document.getElementById("span-gender-icon");
const N = document.getElementById("p-name");
const email = document.getElementById("p-email");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

btnRandom.onclick = async () => {
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data);
  img.src = resp.data.picture.large;
  if (resp.data.gender == male) {
    sex = "👨";
  } else sex = "👩";

  let f = resp.data.name.first;
  let l = resp.data.name.last;

  N = f + " " + l;

  email = resp.data.email;
};
