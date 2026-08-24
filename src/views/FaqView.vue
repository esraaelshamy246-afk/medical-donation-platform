<template>
  <div class="container py-5">
    <h2 class="text-center mb-4">Frequently Asked Questions</h2>
    
    <div class="accordion" id="faqAccordion">
      <div v-for="(item, index) in faqs" :key="item.id" class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + index">
          <button 
            class="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            :data-bs-target="'#collapse' + index"
          >
            {{ item.question }}
          </button>
        </h2>
        <div :id="'collapse' + index" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqView',
  data() {
    return {
      faqs: []
    }
  },
  async mounted() {
    try {
      const res = await fetch('http://localhost:3000/faqs');
      this.faqs = await res.json();
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  }
}
</script>
