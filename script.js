document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.post').forEach(post => {
    const button = post.querySelector('.toggle');
    const content = post.querySelector('.content');
    button.addEventListener('click', () => {
      const isHidden = content.classList.toggle('hidden');
      button.textContent = isHidden ? 'Read More' : 'Show Less';
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
