<template>
  <div class="faq-page">
    <div class="faq-hero">
      <h1>Frequently Asked Questions</h1>
      <p>Find answers to common questions about Ata'a platform.</p>
    </div>

    <div class="faq-container">
      <div v-for="(item, index) in faqs" :key="index" class="faq-card">
        <h3>{{ item.q }}</h3>
        <p>{{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqView',
  data() {
    return {
      faqs: [
        { q: "How do I donate medicine or supplies?", a: "You can post a new donation request with the item details, quantity, and expiry date through your dashboard." },
        { q: "Are the donated medical supplies checked?", a: "Yes, all listings go through a verification process to ensure safety and usability before matching." },
        { q: "Who can request medical supplies?", a: "Individual patients in need as well as registered medical organizations and charities." }
      ]
    }
  }
}
</script>

<style scoped>
.faq-page { background-color: #f8fafc; min-height: 85vh; padding-bottom: 50px; }
.faq-hero { background: linear-gradient(135deg, #2a7d75 0%, #1b5e56 100%); color: white; text-align: center; padding: 60px 20px; }
.faq-hero h1 { font-size: 32px; font-weight: 700; margin-bottom: 12px; }
.faq-hero p { font-size: 15px; opacity: 0.9; }
.faq-container { max-width: 800px; margin: -30px auto 0; padding: 0 20px; }
.faq-card { background: white; padding: 25px; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); }
.faq-card h3 { color: #1b5e56; font-size: 18px; margin-bottom: 8px; }
.faq-card p { color: #64748b; font-size: 14px; line-height: 1.6; margin: 0; }
</style>
