<script setup>
import SectionTitle from '../components/SectionTitle.vue'
</script>

<template>

  <!-- ================= HERO ================= -->
  <section class="hero">

    <div class="hero-content">

      <span class="hero-badge">
        ✦ Together We Make a Difference
      </span>

      <h1>
        Donate What You Can,
        <span>Help Someone in Need.</span>
      </h1>

      <p>
        Give your extra medicines and medical supplies
        to people who need them and make every donation count.
      </p>

      <div class="hero-buttons">

        <RouterLink to="/donate" class="primary-btn">
          Donate Now
          <span>→</span>
        </RouterLink>

        <RouterLink to="/requests" class="secondary-btn">
          Find Medicine
        </RouterLink>

      </div>

      <div class="hero-stats">

        <div>
          <strong>500+</strong>
          <span>Donations</span>
        </div>

        <i></i>

        <div>
          <strong>300+</strong>
          <span>People Helped</span>
        </div>

        <i></i>

        <div>
          <strong>50+</strong>
          <span>Medical Centers</span>
        </div>

      </div>

    </div>

    <div class="hero-visual">

      <div class="hero-shape"></div>

      <img
        src="/images/hero-medical.jpg"
        alt="Medical donation"
      />

      <div class="floating-card">
        <div class="floating-icon">❤️</div>

        <div>
          <strong>Make an Impact</strong>
          <small>Every donation matters</small>
        </div>
      </div>

    </div>

  </section>


  <!-- ================= IMPACT ================= -->
  <section class="impact">

    <div class="impact-intro">

      <span>OUR IMPACT</span>

      <h2>
        Together, we're making
        <strong>a difference.</strong>
      </h2>

      <p>
        Every donation helps connect medical resources
        with people and organizations who need them.
      </p>

    </div>

    <div class="impact-numbers">

      <div class="impact-number">
        <strong>500+</strong>
        <span>Medicines Donated</span>
      </div>

      <div class="impact-number main">
        <strong>300+</strong>
        <span>People Helped</span>
      </div>

      <div class="impact-number">
        <strong>50+</strong>
        <span>Medical Centers</span>
      </div>

      <div class="impact-number">
        <strong>1000+</strong>
        <span>Total Donations</span>
      </div>

    </div>

  </section>


  <!-- ================= CATEGORIES ================= -->
  <section class="categories">

    <div class="categories-header">

      <div>
        <span class="section-label">DONATION CATEGORIES</span>

        <h2>
          What can you
          <span>donate?</span>
        </h2>
      </div>

      <p>
        Explore the different types of medical resources
        that can make a real difference.
      </p>

    </div>


    <div class="category-layout">

      <!-- BIG CARD -->
      <RouterLink to="/medicines" class="category-main">

        <img
          src="/images/medicine.jpg"
          alt="Medicines"
        />

        <div class="category-overlay">

          <span>01</span>

          <h3>Medicines</h3>

          <p>
            Donate safe and unused medicines
            to people who need them.
          </p>

          <strong>
            Explore Medicines →
          </strong>

        </div>

      </RouterLink>


      <!-- SMALL CARDS -->
      <div class="category-side">

        <RouterLink to="/medicines" class="category-small">

          <div class="small-image">
            <img
              src="/images/supplies.jpg"
              alt="Medical Supplies"
            />
          </div>

          <div class="small-content">

            <span>02</span>

            <h3>Medical Supplies</h3>

            <p>
              Masks, bandages, syringes
              and more.
            </p>

            <strong>Explore →</strong>

          </div>

        </RouterLink>


        <RouterLink to="/medicines" class="category-small">

          <div class="small-image">
            <img
              src="/images/equipment.jpg"
              alt="Medical Equipment"
            />
          </div>

          <div class="small-content">

            <span>03</span>

            <h3>Medical Equipment</h3>

            <p>
              Useful equipment for
              patients and centers.
            </p>

            <strong>Explore →</strong>

          </div>

        </RouterLink>

      </div>

    </div>

  </section>


  <!-- ================= HOW IT WORKS ================= -->
  <section class="how">

    <div class="how-header">

      <span class="section-label">HOW IT WORKS</span>

      <h2>
        Simple steps.
        <span>Real impact.</span>
      </h2>

      <p>
        Donating through Ataa is simple,
        organized and meaningful.
      </p>

    </div>


    <div class="timeline">

      <div class="timeline-line"></div>

      <div class="timeline-step">

        <div class="timeline-number">
          01
        </div>

        <div class="timeline-content">

          <span>STEP ONE</span>

          <h3>Add Your Donation</h3>

          <p>
            Add the medicines, supplies or
            equipment you would like to donate.
          </p>

        </div>

      </div>


      <div class="timeline-step">

        <div class="timeline-number">
          02
        </div>

        <div class="timeline-content">

          <span>STEP TWO</span>

          <h3>Donation Review</h3>

          <p>
            Your donation is reviewed to make
            sure everything is suitable and safe.
          </p>

        </div>

      </div>


      <div class="timeline-step">

        <div class="timeline-number">
          03
        </div>

        <div class="timeline-content">

          <span>STEP THREE</span>

          <h3>Find a Request</h3>

          <p>
            People and organizations can find
            the resources they need.
          </p>

        </div>

      </div>


      <div class="timeline-step">

        <div class="timeline-number">
          04
        </div>

        <div class="timeline-content">

          <span>STEP FOUR</span>

          <h3>Make an Impact</h3>

          <p>
            Connect with the recipient and
            complete the donation.
          </p>

        </div>

      </div>

    </div>

  </section>


  <!-- ================= URGENT REQUESTS ================= -->
  <section class="urgent">

    <div class="urgent-container">

      <div class="urgent-heading">

        <div>

          <span>NEED HELP NOW</span>

          <h2>Urgent Requests</h2>

          <p>
            Someone might be waiting for exactly
            what you have.
          </p>

        </div>

        <RouterLink
          to="/requests"
          class="outline-btn"
        >
          View All Requests 
        </RouterLink>

      </div>


      <div class="request-list">

        <!-- REQUEST 1 -->
        <div class="request-row">

          <div class="request-icon">
            💊
          </div>

          <div class="request-details">

            <div class="request-title">

              <h3>Blood Pressure Medicine</h3>

              <span>URGENT</span>

            </div>

            <p>
              Needed for a patient who urgently
              needs regular treatment.
            </p>

            <div class="request-meta">
              <span>📍 Mansoura</span>
              <span>⏱ Within 24 hours</span>
            </div>

          </div>

          <div class="request-progress">

            <div class="progress-top">
              <span>Progress</span>
              <strong>80%</strong>
            </div>

            <div class="progress">
              <div class="bar bar-80"></div>
            </div>

          </div>

          <RouterLink
            to="/requests"
            class="request-button"
          >
            View
          </RouterLink>

        </div>


        <!-- REQUEST 2 -->
        <div class="request-row">

          <div class="request-icon">
            🩹
          </div>

          <div class="request-details">

            <div class="request-title">

              <h3>Medical Supplies</h3>

              <span>URGENT</span>

            </div>

            <p>
              Essential supplies are needed
              for a healthcare center.
            </p>

            <div class="request-meta">
              <span>📍 Mansoura</span>
              <span>⏱ Within 2 days</span>
            </div>

          </div>

          <div class="request-progress">

            <div class="progress-top">
              <span>Progress</span>
              <strong>60%</strong>
            </div>

            <div class="progress">
              <div class="bar bar-60"></div>
            </div>

          </div>

          <RouterLink
            to="/requests"
            class="request-button"
          >
            View
          </RouterLink>

        </div>


        <!-- REQUEST 3 -->
        <div class="request-row">

          <div class="request-icon">
            💉
          </div>

          <div class="request-details">

            <div class="request-title">

              <h3>Diabetes Medicine</h3>

              <span>URGENT</span>

            </div>

            <p>
              A patient is looking for available
              diabetes medication.
            </p>

            <div class="request-meta">
              <span>📍 Mansoura</span>
              <span>⏱ Within 48 hours</span>
            </div>

          </div>

          <div class="request-progress">

            <div class="progress-top">
              <span>Progress</span>
              <strong>40%</strong>
            </div>

            <div class="progress">
              <div class="bar bar-40"></div>
            </div>

          </div>

          <RouterLink
            to="/requests"
            class="request-button"
          >
            View
          </RouterLink>

        </div>

      </div>

    </div>

  </section>


  <!-- ================= WHY ATAA ================= -->
  <section class="why">

    <div class="why-left">

      <span class="section-label">
        WHY ATAA?
      </span>

      <h2>
        Your extra resources
        can become someone's
        <span>hope.</span>
      </h2>

      <p>
        Ataa makes medical donation easier and more organized
        by connecting donors with people and organizations
        who genuinely need medical resources.
      </p>

      <RouterLink
        to="/donate"
        class="primary-btn"
      >
        Start Donating
        <span>→</span>
      </RouterLink>

    </div>


    <div class="why-right">

      <div class="why-feature">

        <div class="why-icon">
          ♻️
        </div>

        <div>
          <h3>Reduce Medical Waste</h3>
          <p>
            Give unused medical resources
            a second life.
          </p>
        </div>

      </div>


      <div class="why-feature">

        <div class="why-icon">
          🤝
        </div>

        <div>
          <h3>Easy Donation</h3>
          <p>
            A simple and organized
            donation process.
          </p>
        </div>

      </div>


      <div class="why-feature">

        <div class="why-icon">
          📋
        </div>

        <div>
          <h3>Organized Requests</h3>
          <p>
            Find requests in one
            clear place.
          </p>
        </div>

      </div>


      <div class="why-feature">

        <div class="why-icon">
          ❤️
        </div>

        <div>
          <h3>Connect People</h3>
          <p>
            Bring donors and recipients
            closer together.
          </p>
        </div>

      </div>

    </div>

  </section>

</template>


<style scoped>

/* =========================
   COLORS
   =========================

   Primary   #2A9D8F
   Dark      #264653
   Background#F8F9FA
   Light     #E8F5F3
   Text      #6C757D
   Urgent    #E76F51

   ========================= */


/* =========================
   HERO
   ========================= */

.hero {
  min-height: 620px;
  padding: 75px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 70px;
  background:
    radial-gradient(
      circle at 80% 20%,
      #e8f5f3 0,
      transparent 35%
    ),
    #f8f9fa;
}

.hero-content {
  max-width: 610px;
}

.hero-badge {
  display: inline-block;
  padding: 8px 15px;
  margin-bottom: 22px;
  border-radius: 30px;
  background: #e8f5f3;
  color: #2a9d8f;
  font-size: 12px;
  font-weight: 700;
}

.hero h1 {
  margin: 0;
  color: #264653;
  font-size: 55px;
  line-height: 1.08;
  letter-spacing: -1.5px;
}

.hero h1 span {
  display: block;
  color: #2a9d8f;
}

.hero p {
  max-width: 550px;
  margin: 25px 0 30px;
  color: #6c757d;
  font-size: 17px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 12px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 13px 22px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: 0.25s ease;
}

.primary-btn {
  background: #2a9d8f;
  color: white;
  box-shadow: 0 8px 20px rgba(42, 157, 143, 0.2);
}

.primary-btn:hover {
  background: #238377;
  transform: translateY(-2px);
}

.secondary-btn {
  color: #264653;
  background: white;
  border: 1px solid #dce7e5;
}

.secondary-btn:hover {
  color: #2a9d8f;
  border-color: #2a9d8f;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 42px;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hero-stats strong {
  color: #264653;
  font-size: 20px;
}

.hero-stats span {
  color: #8d99ae;
  font-size: 10px;
}

.hero-stats i {
  width: 1px;
  height: 32px;
  background: #dce7e5;
}

.hero-visual {
  position: relative;
  width: 450px;
  height: 460px;
  flex-shrink: 0;
}

.hero-shape {
  position: absolute;
  width: 390px;
  height: 390px;
  top: 35px;
  left: 30px;
  border-radius: 50%;
  background: #e8f5f3;
}

.hero-visual img {
  position: absolute;
  width: 350px;
  height: 390px;
  top: 45px;
  left: 50px;
  object-fit: cover;
  border-radius: 175px 175px 25px 25px;
  box-shadow: 0 20px 45px rgba(38, 70, 83, 0.13);
}

.floating-card {
  position: absolute;
  left: -10px;
  top: 120px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px;
  border-radius: 12px;
  background: white;
  border: 1px solid #eef2f5;
  box-shadow: 0 12px 30px rgba(38, 70, 83, 0.1);
}

.floating-icon {
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: #e8f5f3;
}

.floating-card strong,
.floating-card small {
  display: block;
}

.floating-card strong {
  color: #264653;
  font-size: 11px;
}

.floating-card small {
  margin-top: 3px;
  color: #8d99ae;
  font-size: 9px;
}


/* =========================
   IMPACT
   ========================= */

.impact {
  padding: 80px;
  display: flex;
  align-items: center;
  gap: 80px;
  background: white;
}

.impact-intro {
  flex: 1;
  max-width: 390px;
}

.impact-intro > span {
  color: #2a9d8f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.impact-intro h2 {
  margin: 12px 0;
  color: #264653;
  font-size: 35px;
  line-height: 1.2;
}

.impact-intro h2 strong {
  color: #2a9d8f;
}

.impact-intro p {
  color: #6c757d;
  font-size: 14px;
  line-height: 1.7;
}

.impact-numbers {
  flex: 1.5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid #eef2f5;
  border-radius: 15px;
  overflow: hidden;
}

.impact-number {
  padding: 30px;
  background: #f8f9fa;
  border: 1px solid #eef2f5;
}

.impact-number.main {
  background: #e8f5f3;
}

.impact-number strong {
  display: block;
  color: #2a9d8f;
  font-size: 32px;
}

.impact-number span {
  color: #6c757d;
  font-size: 12px;
}


/* =========================
   CATEGORIES
   ========================= */

.categories {
  padding: 90px 80px;
  background: #f8f9fa;
}

.categories-header {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
}

.section-label {
  color: #2a9d8f;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.categories-header h2 {
  margin: 10px 0 0;
  color: #264653;
  font-size: 38px;
}

.categories-header h2 span {
  color: #2a9d8f;
}

.categories-header p {
  max-width: 420px;
  color: #6c757d;
  line-height: 1.7;
  font-size: 14px;
}

.category-layout {
  max-width: 1100px;
  height: 470px;
  margin: 45px auto 0;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;
}

.category-main {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  text-decoration: none;
}

.category-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease;
}

.category-main:hover img {
  transform: scale(1.05);
}

.category-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 35px;
  color: white;
  background: linear-gradient(
    transparent,
    rgba(38, 70, 83, 0.9)
  );
}

.category-overlay span {
  color: #8de0d4;
  font-size: 12px;
  font-weight: bold;
}

.category-overlay h3 {
  margin: 8px 0;
  font-size: 28px;
}

.category-overlay p {
  max-width: 400px;
  margin: 0 0 15px;
  font-size: 13px;
  line-height: 1.6;
}

.category-overlay strong {
  color: #8de0d4;
  font-size: 12px;
}

.category-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.category-small {
  flex: 1;
  display: flex;
  overflow: hidden;
  text-decoration: none;
  background: white;
  border: 1px solid #eef2f5;
  border-radius: 16px;
  transition: 0.25s ease;
}

.category-small:hover {
  transform: translateX(5px);
  border-color: #2a9d8f;
}

.small-image {
  width: 42%;
  overflow: hidden;
}

.small-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.small-content {
  padding: 20px;
}

.small-content > span {
  color: #2a9d8f;
  font-size: 10px;
  font-weight: bold;
}

.small-content h3 {
  margin: 8px 0;
  color: #264653;
  font-size: 17px;
}

.small-content p {
  color: #6c757d;
  font-size: 11px;
  line-height: 1.5;
}

.small-content strong {
  color: #2a9d8f;
  font-size: 11px;
}


/* =========================
   HOW IT WORKS
   ========================= */

.how {
  padding: 90px 80px;
  background: white;
}

.how-header {
  max-width: 650px;
  margin: auto;
  text-align: center;
}

.how-header h2 {
  margin: 10px 0;
  color: #264653;
  font-size: 38px;
}

.how-header h2 span {
  color: #2a9d8f;
}

.how-header p {
  color: #6c757d;
  font-size: 14px;
}

.timeline {
  position: relative;
  max-width: 1050px;
  margin: 60px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.timeline-line {
  position: absolute;
  top: 25px;
  left: 8%;
  right: 8%;
  height: 2px;
  background: #dce7e5;
}

.timeline-step {
  position: relative;
  z-index: 1;
}

.timeline-number {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #2a9d8f;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border: 6px solid white;
}

.timeline-content span {
  color: #2a9d8f;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 1px;
}

.timeline-content h3 {
  margin: 8px 0;
  color: #264653;
  font-size: 16px;
}

.timeline-content p {
  color: #6c757d;
  font-size: 12px;
  line-height: 1.7;
}


/* =========================
   URGENT REQUESTS
   ========================= */

.urgent {
  padding: 90px 80px;
  background: #f8f9fa;
}

.urgent-container {
  max-width: 1100px;
  margin: auto;
}

.urgent-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 35px;
}

.urgent-heading > div > span {
  color: #e76f51;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
}

.urgent-heading h2 {
  margin: 8px 0;
  color: #264653;
  font-size: 38px;
}

.urgent-heading p {
  margin: 0;
  color: #6c757d;
  font-size: 14px;
}

.outline-btn {
  padding: 11px 18px;
  border: 1px solid #dce7e5;
  border-radius: 8px;
  color: #264653;
  background: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
}

.outline-btn:hover {
  border-color: #2a9d8f;
  color: #2a9d8f;
}

.request-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.request-row {
  display: grid;
  grid-template-columns: 60px 1.8fr 1fr 80px;
  align-items: center;
  gap: 22px;
  padding: 20px;
  background: white;
  border: 1px solid #eef2f5;
  border-radius: 13px;
  transition: 0.25s ease;
}

.request-row:hover {
  border-color: #2a9d8f;
  transform: translateX(4px);
}

.request-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: #e8f5f3;
  font-size: 22px;
}

.request-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.request-title h3 {
  margin: 0;
  color: #264653;
  font-size: 15px;
}

.request-title span {
  padding: 4px 7px;
  border-radius: 5px;
  color: #e76f51;
  background: #fdf0ed;
  font-size: 8px;
  font-weight: bold;
}

.request-details > p {
  margin: 7px 0;
  color: #6c757d;
  font-size: 11px;
}

.request-meta {
  display: flex;
  gap: 18px;
  color: #8d99ae;
  font-size: 10px;
}

.progress-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  color: #8d99ae;
  font-size: 9px;
}

.progress-top strong {
  color: #2a9d8f;
}

.progress {
  height: 6px;
  overflow: hidden;
  border-radius: 10px;
  background: #eef2f5;
}

.bar {
  height: 100%;
  border-radius: 10px;
  background: #2a9d8f;
}

.bar-80 {
  width: 80%;
}

.bar-60 {
  width: 60%;
}

.bar-40 {
  width: 40%;
}

.request-button {
  padding: 9px 14px;
  border-radius: 7px;
  color: white;
  background: #2a9d8f;
  text-align: center;
  text-decoration: none;
  font-size: 11px;
  font-weight: bold;
}

.request-button:hover {
  background: #238377;
}


.outline-btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  color: #ffffff;
  background: #2a9d8f;
  border: 2px solid #2a9d8f;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.outline-btn:hover {
  background: #238377;
  border-color: #238377;
}


/* =========================
   WHY
   ========================= */

.why {
  padding: 100px 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: center;
  background: white;
}

.why-left {
  max-width: 520px;
}

.why-left h2 {
  margin: 12px 0 20px;
  color: #264653;
  font-size: 42px;
  line-height: 1.15;
}

.why-left h2 span {
  color: #2a9d8f;
}

.why-left > p {
  margin-bottom: 28px;
  color: #6c757d;
  font-size: 15px;
  line-height: 1.8;
}

.why-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.why-feature {
  padding: 25px;
  border-left: 3px solid #2a9d8f;
  background: #f8f9fa;
  transition: 0.25s ease;
}

.why-feature:hover {
  background: #e8f5f3;
  transform: translateY(-3px);
}

.why-icon {
  margin-bottom: 14px;
  font-size: 25px;
}

.why-feature h3 {
  margin: 0 0 7px;
  color: #264653;
  font-size: 15px;
}

.why-feature p {
  margin: 0;
  color: #6c757d;
  font-size: 11px;
  line-height: 1.6;
}


/* =========================
   RESPONSIVE
   ========================= */

@media (max-width: 950px) {

  .hero {
    padding: 60px 30px;
    flex-direction: column;
    text-align: center;
  }

  .hero-buttons,
  .hero-stats {
    justify-content: center;
  }

  .impact {
    padding: 70px 30px;
    flex-direction: column;
  }

  .categories,
  .how,
  .urgent {
    padding: 70px 30px;
  }

  .category-layout {
    height: auto;
    grid-template-columns: 1fr;
  }

  .category-main {
    height: 400px;
  }

  .category-small {
    min-height: 190px;
  }

  .timeline {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline-line {
    display: none;
  }

  .request-row {
    grid-template-columns: 55px 1fr;
  }

  .request-progress,
  .request-button {
    grid-column: 2;
  }

  .why {
    padding: 70px 30px;
    grid-template-columns: 1fr;
  }

}

@media (max-width: 600px) {

  .hero {
    padding: 50px 20px;
  }

  .hero h1 {
    font-size: 38px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-stats {
    gap: 12px;
  }

  .hero-visual {
    transform: scale(0.75);
    margin: -50px 0;
  }

  .impact,
  .categories,
  .how,
  .urgent,
  .why {
    padding: 55px 20px;
  }

  .impact-numbers {
    grid-template-columns: 1fr;
  }

  .categories-header,
  .urgent-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .timeline {
    grid-template-columns: 1fr;
  }

  .request-row {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .request-icon {
    margin: auto;
  }

  .request-title,
  .request-meta {
    justify-content: center;
    flex-wrap: wrap;
  }

  .request-progress,
  .request-button {
    grid-column: auto;
  }

  .why-right {
    grid-template-columns: 1fr;
  }

}

</style>