<template>
  <div class="about-page">
    <div class="about-hero">
      <h1>About Ata'a Platform</h1>
      <p>Connecting medical donors with individuals and health organizations in need.</p>
    </div>

    <div class="about-container">
      <div class="grid-section">
        <div class="info-card">
          <h3>🎯 Our Mission</h3>
          <p>Reducing medical waste and providing access to necessary medicines and medical supplies for everyone in need through a safe digital platform.</p>
        </div>

        <div class="info-card">
          <h3>👁️ Our Vision</h3>
          <p>Building a sustainable community network where healthcare supplies are efficiently reallocated to save lives and support health institutions.</p>
        </div>
      </div>

      <div class="stats-section">
        <div class="stat-box">
          <h2>100%</h2>
          <p>Verified Donations</p>
        </div>
        <div class="stat-box">
          <h2>24/7</h2>
          <p>Support & Access</p>
        </div>
        <div class="stat-box">
          <h2>Zero</h2>
          <p>Medical Waste Goal</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'AboutView' }
</script>

<style scoped>
.about-page { background-color: #f8fafc; min-height: 85vh; padding-bottom: 50px; }
.about-hero { background: linear-gradient(135deg, #2a7d75 0%, #1b5e56 100%); color: white; text-align: center; padding: 60px 20px; }
.about-hero h1 { font-size: 32px; font-weight: 700; margin-bottom: 12px; }
.about-hero p { font-size: 15px; max-width: 600px; margin: 0 auto; opacity: 0.9; }
.about-container { max-width: 900px; margin: -30px auto 0; padding: 0 20px; }
.grid-section { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px; }
.info-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); }
.info-card h3 { color: #1b5e56; font-size: 20px; margin-bottom: 10px; }
.info-card p { color: #64748b; line-height: 1.6; font-size: 14px; }
.stats-section { background: white; padding: 25px; border-radius: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; text-align: center; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); }
.stat-box h2 { color: #2a7d75; font-size: 30px; margin-bottom: 4px; }
.stat-box p { color: #64748b; font-size: 13px; }
</style>
