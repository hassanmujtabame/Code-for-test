<template>
  <div class="subscription-card">
    <div class="subscription-header">
      <h2 class="subscription-title">{{ title }}</h2>
      <div class="subscription-price">
        <span class="price">{{ price }}</span>
        <span v-if="subscribed.type !== 'free'" class="currency">{{ $t('riyals') }}</span>
      </div>
    </div>
    <div class="subscription-features">
      <h3 class="features-title">الميزات و الخدمات:</h3>
      <ul class="feature-list">
        <li v-for="(feature, i) in features" :key="i" class="feature-item">
          <i class="fas fa-check-circle mx-2"></i>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
    <div class="subscription-actions">
      <button @click="selected" v-if="typeSubscribe === 'مجانا' && packId.id !== subscribed" class="subscribe-button">{{ $t('subscribe-now') }}</button>
      <button @click="selected" :id="packId.id" v-else-if="(packId.id !== subscribed)" class="upgrade-button">رقي حسابك</button>
      <button v-else-if="packId.id == subscribed" class="subscribed-button">انت مشترك الان</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    price: {
      type: [String, Number]
    },
    typeSubscribe: {
      type: String
    },
    typeSectionSub: {
      type: String
    },
    packId: {
      type: [Array, Object]
    },
    features: {
      type: [Array, Object]
    },
    subscribed: {
      type: [String, Number]
    }
  },
  data() {
    return {
      packageType: '',
      selected_package: true
    }
  },
  methods: {
  selected(evt) {
    evt.preventDefault();

    if (this.typeSubscribe === 'مجانا') {
      try {
        window.axios.defaults.baseURL = "https://cp.riadiat.sa/";
        window.axios.get(`payments/hyperbill/callback?package_id=${this.packId.id}&package_type=${this.packageType}&user_id=${this.user.id}`).then(res => {
          console.log('res', res);
          // Advance to the next tab
          this.$refs.normalSteps.next();
        });
      } catch (error) {
        window.SwalError("The given data was invalid");
      }
    } else {
      let el = document.getElementById(this.packId.id);
      el.innerHTML = 'تم الاختيار';
      el.classList.add('upgrade-button');
      el.classList.remove('subscribe-button');
      localStorage.setItem('selectedPackage', this.typeSubscribe);
      localStorage.setItem('packagePrice', this.price);
      // Advance to the next tab
  const scrollY = document.body.scrollHeight - window.innerHeight - 400; // Adjust 100 to your preferred position
  window.scrollTo(0, scrollY);



      this.$refs.normalSteps.next();
    }
  }
},

  mounted() {
    this.packageType = this.$route.meta.type;
  }
};
</script>

<style scoped>
.subscription-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  background: linear-gradient(to bottom, #f9f9f9, #e6e6e6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
}

.subscription-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.subscription-header {
  text-align: center;
  margin-bottom: 20px;
}

.subscription-title {
  font-size: 28px;
  color: #333;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.subscription-price {
  font-size: 36px;
  color: #ffbc00;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.currency {
  font-size: 24px;
  color: #555;
  margin-left: 8px;
}

.subscription-features {
  text-align: center;
  margin-bottom: 20px;
}

.features-title {
  font-size: 20px;
  color: #333;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: #555;
  font-size: 18px;
}

.feature-item i {
  color: #1FB9B3;
  margin-right: 10px;
}

.subscription-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subscribe-button,
.upgrade-button,
.subscribed-button {
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  width: 100%;
  transition: all 0.3s;
}

.subscribe-button {
  background: linear-gradient(to bottom, #1FB9B3, #13a89d);
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.subscribe-button:hover {
  background: linear-gradient(to bottom, #13a89d, #1FB9B3);
}

.upgrade-button {
  background: linear-gradient(to bottom, #FFBC00, #e6a100);
  color: #333;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.upgrade-button:hover {
  background: linear-gradient(to bottom, #e6a100, #FFBC00);
}

.subscribed-button {
  background: linear-gradient(to bottom, #6ac259, #5aa84a);
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.subscribed-button:hover {
  background: linear-gradient(to bottom, #5aa84a, #6ac259);
}
</style>
