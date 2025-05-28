const showPhoto = document.getElementById('show-photo');
const photo = document.getElementById('photo');

showPhoto.addEventListener('click', () => {
  if (photo.style.display === 'none') {
    photo.style.display = 'block';
  } else {
    photo.style.display = 'none';
  }
});
