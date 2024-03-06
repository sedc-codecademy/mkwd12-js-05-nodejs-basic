const API_URL = "";

const fetchStudents = async (url) => {
  const response = await fetch(url);
  const result = response.json();

  console.log(result);
};

const btn = document.getElementsByTagName[0];

btn.addEventListener("click", () => {
  fetchStudents(API_URL);
});
