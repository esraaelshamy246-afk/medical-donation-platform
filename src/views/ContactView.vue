<template>
  <div class="container py-5">
    <h2 class="mb-4 text-center">Contact Us</h2>
    
    <form @submit.prevent="sendMessage" class="col-md-6 offset-md-3">
      <div class="mb-3">
        <label class="form-label">Full Name</label>
        <input v-model="form.name" type="text" class="form-control" placeholder="Enter your name" required />
      </div>
      
      <div class="mb-3">
        <label class="form-label">Email Address</label>
        <input v-model="form.email" type="email" class="form-control" placeholder="Enter your email" required />
      </div>
      
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea v-model="form.message" class="form-control" rows="4" placeholder="How can we help you?" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary w-100">Send Message</button>
    </form>

    <div v-if="successMessage" class="alert alert-success mt-3 text-center">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: ''
    }
  },
  methods: {
    async sendMessage() {
      try {
        const res = await fetch('http://localhost:3000/contactMessages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });
        if (res.ok) {
          this.successMessage = 'Your message has been sent successfully!';
          this.form = { name: '', email: '', message: '' };
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  }
}
</script>
