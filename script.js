document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop page reload

  const userName = document.getElementById("username").value;

  // Replace with your real email address
  const myEmail = "youremail@example.com";  

  const subject = "Portfolio Contact";
  const body = `Hello Priyalaxmi,\n\nMy name is ${userName}. I visited your portfolio site.\n\nRegards,\n${userName}`;

  const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});