<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="footer-about">
        <h2>Ataa</h2>
        <p>
          Ataa is a medical donation platform that connects donors with
          people and organizations in need of medicines and medical supplies.
        </p>
      </div>

      <div class="footer-links">
        <h3>Quick Links</h3>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/medicines">Medicines</RouterLink>
        <RouterLink to="/donate">Donate</RouterLink>
        <RouterLink to="/requests">Requests</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </div>

      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>📧 info@ataa.com</p>
        <p>📞 +20 100 000 0000</p>
        <p>📍 Mansoura, Egypt</p>
      </div>

      <div class="footer-social">
        <h3>Follow Us</h3>

        <div class="social-links">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 Ataa. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1f2933;
  color: white;
  padding-top: 60px;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 60px 50px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 50px;
}

.footer h2 {
  margin: 0 0 15px;
  font-size: 28px;
}

.footer h3 {
  margin-bottom: 20px;
  font-size: 18px;
}

.footer p {
  color: #cbd5e1;
  line-height: 1.7;
  font-size: 14px;
}

.footer-links,
.footer-contact,
.footer-social {
  display: flex;
  flex-direction: column;
}

.footer a {
  color: #cbd5e1;
  text-decoration: none;
  margin-bottom: 12px;
  transition: 0.3s ease;
}

.footer a:hover {
  color: white;
  transform: translateX(5px);
}

.social-links {
  display: flex;
  flex-direction: column;
}

.footer-bottom {
  border-top: 1px solid #3d4752;
  text-align: center;
  padding: 20px;
}

.footer-bottom p {
  margin: 0;
}

@media (max-width: 768px) {

  .footer-container {
    grid-template-columns: 1fr;
    padding: 0 25px 40px;
    gap: 35px;
    text-align: center;
  }

  .footer-links,
  .footer-contact,
  .footer-social {
    align-items: center;
  }

  .footer-about {
    text-align: center;
  }

  .social-links {
    align-items: center;
  }
}

</style>