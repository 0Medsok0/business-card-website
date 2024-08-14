const img = document.createElement('img');
img.src = 'photo/programmer.jpg';
img.style.borderRadius = '50%';
img.style.width = '300px';
img.style.height = '300px';
img.style.position = 'absolute';
img.style.top = '70px';
img.style.left = '100px';
img.style.transition = 'box-shadow 0.3s ease';
img.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.2)';

img.addEventListener('mouseover', () => {
  img.style.boxShadow = '0px 0px 20px 10px rgba(0, 0, 255, 0.2)';
  // box-shadow: 0px 0px 10px 5px rgba(0, 0, 255, 0.2);
});

img.addEventListener('mouseout', () => {
  img.style.boxShadow = '0px 0px 10px 0px rgba(0, 0, 0, 0.2)';
});

const name = document.createElement('h4');
name.textContent = 'Иван';
name.style.position = 'absolute';
name.style.top = '430px';
name.style.left = '60px';

document.body.appendChild(img);
document.body.appendChild(name);