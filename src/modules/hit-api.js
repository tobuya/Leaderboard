const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tobuya13/scores/';

const addTableRow = (scoreData) => {
  const tableBody = document.getElementById('holder');
  tableBody.innerHTML = '';
  scoreData.forEach((individualScore) => {
    const { user, score } = individualScore;
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    const userInfo = document.createElement('td');
    userInfo.innerHTML = `${user} : ${score}`;
    tableRow.appendChild(userInfo);
  });
};

const fetchData = async () => {
  const resource = await fetch(API_URL);
  const json = await resource.json();
  const data = json.result;
  addTableRow(data);
};

const sendData = async (event) => {
  event.preventDefault();

  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  await fetch(API_URL,
    {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: { 'content-type': 'application/json; charset=UTF-8' },
    });

  event.target.reset();
  fetchData();
};

export { fetchData, sendData };