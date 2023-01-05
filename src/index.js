import './style.css';
import { fetchData, sendData } from './modules/hit-api.js';

const refreshBtn = document.getElementById('refresh-btn');
const form = document.getElementById('submit');

refreshBtn.addEventListener('click', fetchData);
form.addEventListener('submit', sendData);