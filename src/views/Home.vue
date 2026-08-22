<script setup>
import SectionTitle from '../components/SectionTitle.vue'
</script>
<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Donate What You Can, Help Someone in Need ❤️</h1>

      <p>
        Give your extra medicines and medical supplies
        to people who need them.
      </p>

      <div class="hero-buttons">
        <RouterLink to="/donate" class="hero-btn">Donate Now</RouterLink>
        <RouterLink to="/donate" class="hero-btn">Find Medicine</RouterLink>
      </div>
    </div>

    <div class="hero-image">
      <img src="/images/hero-medical.jpg" alt="photo">
    </div>
  </section>

  <section class="statistics">
    <h2 class="statistics-title">Our Impact</h2>
    <div class="statistics-cards">

        <div class="stat-card">

            <h2>500+</h2>
            <p>Medicines Donated</p>
        </div>

        <div class="stat-card">
            <h2>300+</h2>
            <p>People Helped</p>
        </div>

        <div class="stat-card">
            <h2>50+</h2>
            <p>Medical Centers</p>
        </div>

        <div class="stat-card">
            <h2>1000+</h2>
           <p>Donations</p>
        </div>
    </div>
</section>

<section class="categories">
   <SectionTitle
   title="Explore Our Medical Categories"
   subtitle="Discover different types of medical donations and find the right resources to support individuals and healthcare organizations in need."/>
   <div class="category-cards">
    <RouterLink to="/medicines" class="category-card">
      <div class="category-icon"><img src="/images/medicine.jpg" alt=""></div>
      <h3>Medicines</h3>
      <p>
        Donate extra or unused medicines in good condition, or find available
        medicines for people who need them.
      </p>
    </RouterLink>

    <RouterLink to="/medicines" class="category-card">
      <div class="category-icon"><img src="/images/supplies.jpg" alt=""></div>
      <h3>Medical Supplies</h3>
      <p>
        Help provide essential medical supplies such as bandages, masks,
        syringes, and other healthcare necessities.
      </p>
    </RouterLink>

    <RouterLink to="/medicines" class="category-card">
      <div class="category-icon"><img src="/images/equipment.jpg" alt=""></div>
      <h3>Medical Equipment</h3>
      <p>
        Share useful medical equipment that is no longer needed and help
        healthcare centers and patients access important resources.
      </p>
    </RouterLink>
  </div>
</section>

<section class="how-it-works">
  <SectionTitle
    title="How It Works"
    subtitle="Donating medical supplies through Ataa is simple, safe, and meaningful."/>
  <div class="steps">
    <div class="step">
      <div class="step-number">1</div>
      <h3>Add Your Donation</h3>
      <p>
        Add the medicines, medical supplies, or equipment you would like to donate.
      </p>
    </div>

    <div class="step">
      <div class="step-number">2</div>
      <h3>Donation Review</h3>
      <p>
        Your donation details are reviewed to make sure everything is suitable and safe.
      </p>
    </div>

    <div class="step">
      <div class="step-number">3</div>
      <h3>Request What You Need</h3>
      <p>
        Individuals or organizations in need can request available medical donations.
      </p>
    </div>

    <div class="step">
      <div class="step-number">4</div>
      <h3>Complete the Donation</h3>
      <p>
        The donor and recipient coordinate to complete the donation successfully.
      </p>
    </div>
  </div>
</section>

<section class="urgent-requests">
  <div class="urgent-header">
    <div>
      <span class="urgent-label">NEED HELP NOW</span>
      <h2>Urgent Requests</h2>
      <p>
        Help people and healthcare organizations get the medical support
        they urgently need.
      </p>
    </div>

    <span class="urgent-icon">🚨</span>
  </div>

  <div class="request-list">

    <div class="request-item">
      <div class="request-icon">💊</div>

      <div class="request-info">
        <div class="request-title">
          <h3>Blood Pressure Medicine</h3>
          <span>Urgent</span>
        </div>

        <p>
          Needed for a patient who urgently needs regular treatment.
        </p>

        <div class="request-meta">
          <span>⏳ Within 24 hours</span>
          <span>📍 Mansoura</span>
        </div>

        <div class="progress">
          <div class="progress-bar progress-80"></div>
        </div>
      </div>

      <RouterLink to="/requests" class="request-btn">
        View Request
      </RouterLink>
    </div>


    <div class="request-item">
      <div class="request-icon">🩹</div>

      <div class="request-info">
        <div class="request-title">
          <h3>Medical Supplies</h3>
          <span>Urgent</span>
        </div>

        <p>
          Essential medical supplies are needed for a healthcare center.
        </p>

        <div class="request-meta">
          <span>⏳ Within 2 days</span>
          <span>📍 Mansoura</span>
        </div>

        <div class="progress">
          <div class="progress-bar progress-60"></div>
        </div>
      </div>

      <RouterLink to="/requests" class="request-btn">
        View Request
      </RouterLink>
    </div>


    <div class="request-item">
      <div class="request-icon">💉</div>

      <div class="request-info">
        <div class="request-title">
          <h3>Diabetes Medicine</h3>
          <span>Urgent</span>
        </div>

        <p>
          A patient is looking for available diabetes medication.
        </p>

        <div class="request-meta">
          <span>⏳ Within 48 hours</span>
          <span>📍 Mansoura</span>
        </div>

        <div class="progress">
          <div class="progress-bar progress-40"></div>
        </div>
      </div>

      <RouterLink to="/requests" class="request-btn">
        View Request
      </RouterLink>
    </div>

  </div>

  <RouterLink to="/requests" class="view-all-btn">
  View All Requests →
  </RouterLink>
</section>

<section class="why-us">
  <div class="why-us-content">
    <span class="why-us-label">WHY ATAA?</span>

    <h2>Why Choose Ataa?</h2>

    <p>
      Ataa makes medical donation easier, more organized, and more meaningful
      by connecting people who have extra medical resources with those who
      genuinely need them.
    </p>
  </div>

  <div class="why-us-features">

    <div class="feature">
      <span class="feature-icon">♻️</span>
      <div>
        <h3>Reduce Medical Waste</h3>
        <p>
          Give unused medical resources a second life instead of letting them
          go to waste.
        </p>
      </div>
    </div>

    <div class="feature">
      <span class="feature-icon">🤝</span>
      <div>
        <h3>Easy Donation</h3>
        <p>
          Donate your extra medicines and medical supplies through a simple
          and organized process.
        </p>
      </div>
    </div>

    <div class="feature">
      <span class="feature-icon">📋</span>
      <div>
        <h3>Organized Requests</h3>
        <p>
          Find and manage medical requests in one clear and easy-to-use place.
        </p>
      </div>
    </div>

    <div class="feature">
      <span class="feature-icon">❤️</span>
      <div>
        <h3>Connect People</h3>
        <p>
          Bring donors and people or organizations in need closer together.
        </p>
      </div>
    </div>

  </div>
</section>

</template>

<style scoped>
.hero {
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.hero-btn {
  display: inline-block;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  background-color: rgb(243, 236, 249);
  color: rgb(63, 7, 7);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.hero-buttons button {
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.hero-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image img {
  width: 400px;
  max-width: 100%;
  height: auto;
}

.statistics {
  padding: 50px 80px;
  text-align: center;
}

.statistics-title {
  font-size: 32px;
  margin-bottom: 30px;
}

.statistics-cards {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.stat-card {
  flex: 1;
  max-width: 220px;
  padding: 30px 20px;
  text-align: center;
  border-radius: 12px;
  background: #f5f9f8;
  transition: 0.3s ease;
}

.stat-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.stat-card h2 {
  font-size: 36px;
  margin-bottom: 10px;
}

.stat-card p {
  font-size: 16px;
  margin: 0;
}

.categories {
  padding: 70px 80px;
  text-align: center;
}

.categories-title {
  font-size: 32px;
  margin-bottom: 10px;
}

.categories-subtitle {
  font-size: 17px;
  margin-bottom: 40px;
  color: #666;
}

.category-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 25px;
  flex-wrap: nowrap;
}
 
.category-card {
  width: 30%;
  max-width: 320px;
  padding: 35px 25px;
  border-radius: 15px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  transition: 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.category-icon img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 12px;
}

.category-icon {
  font-size: 55px;
  margin-bottom: 15px;
}

.category-card h3 {
  font-size: 22px;
  margin-bottom: 12px;
}

.category-card p {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

.how-it-works {
  padding: 70px 80px;
  text-align: center;
}

.how-it-works h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

.how-it-works-subtitle {
  font-size: 17px;
  color: #666;
  margin-bottom: 45px;
}

.steps {
  display: flex;
  justify-content: center;
  gap: 25px;
}

.step {
  flex: 1;
  max-width: 250px;
  padding: 30px 20px;
  border-radius: 15px;
  background: #f5f9f8;
  transition: 0.3s ease;
}

.step:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.step-number {
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  background: white;
}

.step h3 {
  font-size: 19px;
  margin-bottom: 12px;
}

.step p {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

.urgent-requests {
  padding: 80px;
  background: #f8fafb;
}

.urgent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 40px;
}

.urgent-label {
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.urgent-header h2 {
  font-size: 36px;
  margin: 8px 0 12px;
}

.urgent-header p {
  max-width: 650px;
  color: #666;
  line-height: 1.6;
}

.urgent-icon {
  font-size: 65px;
}

.request-list {
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.request-item {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 16px;
  border: 1px solid #e5e5e5;
  transition: 0.3s ease;
}

.request-item:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.request-icon {
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 14px;
  background: #f1f5f5;
  font-size: 32px;
}

.request-info {
  flex: 1;
}

.request-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.request-title h3 {
  margin: 0;
  font-size: 20px;
}

.request-title span {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.request-info > p {
  margin: 8px 0;
  color: #666;
}

.request-meta {
  display: flex;
  gap: 20px;
  margin: 12px 0;
  font-size: 13px;
  color: #777;
}

.progress {
  width: 100%;
  height: 7px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: 10px;
}

.progress-80 {
  width: 80%;
}

.progress-60 {
  width: 60%;
}

.progress-40 {
  width: 40%;
}

.request-btn,
.view-all-btn {
  display: inline-block;
  padding: 11px 20px;
  border: 2px solid #333;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}

.view-all-btn {
  display: block;
  width: fit-content;
  margin: 35px auto 0;
  padding: 12px 25px;
  border: 2px solid #333;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-size: 15px;
}

.why-us {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  padding: 90px 80px;
  background: #ffffff;
}

.why-us-content {
  flex: 1;
  max-width: 500px;
}

.why-us-label {
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.why-us-content h2 {
  font-size: 38px;
  margin: 12px 0 20px;
}

.why-us-content > p {
  color: #666;
  line-height: 1.8;
  font-size: 16px;
}

.why-us-features {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  border-left: 3px solid #333;
  transition: 0.3s ease;
}

.feature:hover {
  transform: translateX(6px);
}

.feature-icon {
  font-size: 30px;
}

.feature h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.feature p {
  margin: 0;
  color: #666;
  line-height: 1.5;
  font-size: 14px;
}

@media (max-width: 768px) {

  /* Hero */
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 50px 20px;
    gap: 30px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-image {
    font-size: 100px;
  }


  /* Statistics */
  .statistics {
    padding: 50px 20px;
  }

  .statistics-cards {
    flex-direction: column;
    align-items: center;
  }

  .stat-card {
    width: 100%;
    max-width: 350px;
  }


  /* Categories */
  .categories {
    padding: 50px 20px;
  }

  .category-cards {
    flex-direction: column;
    align-items: center;
  }

  .category-card {
    width: 100%;
    max-width: 400px;
  }


  /* How It Works */
  .how-it-works {
    padding: 50px 20px;
  }

  .steps {
    flex-direction: column;
    align-items: center;
  }

  .step {
    width: 100%;
    max-width: 400px;
  }


  /* Urgent Requests */
  .urgent-requests {
    padding: 50px 20px;
  }

  .urgent-header {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .urgent-header p {
    max-width: 100%;
  }

  .request-item {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .request-icon {
    margin: 0 auto;
  }

  .request-title {
    justify-content: center;
    flex-wrap: wrap;
  }

  .request-meta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .request-btn {
    align-self: center;
  }


  /* Why Choose Ataa */
  .why-us {
    flex-direction: column;
    padding: 60px 20px;
    gap: 40px;
  }

  .why-us-content {
    max-width: 100%;
    text-align: center;
  }

  .why-us-features {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .feature {
    text-align: left;
  }
}

</style>