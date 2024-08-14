const now = new Date();
const time = now.toLocaleTimeString();
const date = now.toLocaleDateString();
const country = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.write(`<p>Current time: ${time}</p>`);
document.write(`<p>Current date: ${date}</p>`);
document.write(`<p>Country: ${country}</p>`);