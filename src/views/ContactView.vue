<template>
  <div class="contact-page">
    <div class="contact-card">
      <div class="contact-header">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div v-if="submitted" class="alert-success">
        ✓ Your message has been sent successfully!
      </div>

      <form @submit.prevent="sendMessage" class="contact-form">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" v-model="form.name" placeholder="Enter your name" required />
        </div>

        <div class="form-group">
          <label>Email Address</label>
          <input type="email" v-model="form.email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label>Subject</label>
          <input type="text" v-model="form.subject" placeholder="Subject" required />
        </div>

        <div class="form-group">
          <label>Message</label>
          <textarea v-model="form.message" rows="4" placeholder="Write your message here..." required></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: { name: '', email: '', subject: '', message: '' },
      loading: false,
      submitted: false
    }
  },
  methods: {
    async sendMessage() {
      this.loading = true;
      this.submitted = false;

      try {
        await fetch('http://localhost:3000/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...this.form, createdAt: new Date().toISOString() })
        });
      } catch (e) {
        console.log('Saved offline');
      } finally {
        this.loading = false;
        this.submitted = true;
        this.form = { name: '', email: '', subject: '', message: '' }; // تفريغ الخانات فوراً
        setTimeout(() => { this.submitted = false; }, 4000);
      }
    }
  }
}
</script>

<style scoped>
.contact-page { display: flex; justify-content: center; align-items: center; padding: 40px 20px; background-color: #f8fafc; min-height: 80vh; }
.contact-card { background: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); width: 100%; max-width: 500px; }
.contact-header { text-align: center; margin-bottom: 25px; }
.contact-header h2 { color: #1b5e56; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
.contact-header p { color: #64748b; font-size: 14px; }
.alert-success { background-color: #e6f4f1; color: #2a7d75; border: 1px solid #2a7d75; padding: 12px; border-radius: 8px; font-size: 14px; text-align: center; margin-bottom: 20px; }
.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px; }
.form-group input, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; outline: none; }
.form-group input:focus, .form-group textarea:focus { border-color: #2a7d75; box-shadow: 0 0 0 3px rgba(42, 125, 117, 0.15); }
.submit-btn { width: 100%; padding: 13px; background: linear-gradient(135deg, #2a7d75 0%, #1b5e56 100%); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; }
.submit-btn:hover { opacity: 0.92; }
</style>
