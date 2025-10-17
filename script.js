
// Simple JS for interactive touches and contact form simulation
document.addEventListener('DOMContentLoaded', function(){
  // Smooth link clicks (if desired)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // Contact form handling (simulate submission)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      var msgEl = document.getElementById('formMessage');

      if(!name || !email || !message){
        msgEl.style.color = 'crimson';
        msgEl.textContent = 'Please fill in all fields before sending.';
        return;
      }
      // Basic email pattern check
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(email)){
        msgEl.style.color = 'crimson';
        msgEl.textContent = 'Please enter a valid email address.';
        return;
      }
      // simulate success
      msgEl.style.color = 'green';
      msgEl.textContent = 'Message sent (simulated). Thank you, ' + name + '!';
      form.reset();
    });
  }
});
