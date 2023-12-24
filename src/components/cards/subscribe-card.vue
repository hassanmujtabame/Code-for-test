<template>
  <!-- start -->
  <div class="subscription-card">
    <div class="subscription-header d-flex align-items-start">
      <h2 class="subscription-title">{{ title }}</h2>
      <div class="subscription-image">
        <img v-if="title == 'مجانا'" src="@/assets/img/subscription_free.png" alt="">
        <img v-if="title == 'ثلاثة اشهر'" src="@/assets/img/subscription_three_months.png" alt="">
        <img v-if="title == 'سنة'" src="@/assets/img/subscription_year.png" alt="">
      </div>
      <div class="subscription-price">
        <span class="price">{{ price }}</span>
        <span v-if="subscribed.type !== 'free'" class="currency">{{ $t('riyals') }}</span>
      </div>
    </div>
    <div class="subscription-features">
      <h3 class="features-title">الميزات و الخدمات:</h3>
      <ul class="feature-list d-flex flex-row flex-wrap">
        <li v-for="(feature, i) in features" :key="i" class="feature-item">
          <i class="fas fa-check-circle mx-2"></i>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
    <div class="subscription-actions">
      <button @click="selected" v-if="typeSubscribe === 'مجانا' && pack.id !== subscribed" class="subscribe-button">{{
        $t('subscribe-now') }}</button>
      <button @click="selected" :id="pack.id" v-else-if="(pack.id !== subscribed)" class="upgrade-button">رقي
        حسابك</button>
      <button v-else-if="pack.id == subscribed" class="subscribed-button">انت مشترك الان</button>
    </div>
  </div>
  <!-- end -->
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
    pack: {
      type: [Array, Object]
    },
    features: {
      type: [Array, Object]
    },
    subscribed: {
      // type: [Array, Object]
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

      if (this.typeSubscribe == 'مجانا') {
        try {
          window.axios.defaults.baseURL = "https://cp.riadiat.sa/";
          window.axios.get(`payments/hyperbill/callback?package_id=${this.pack.id}&package_type=${this.packageType}&user_id=${this.user.id}`).then(res => {
            console.log('res', res);
            this.$refs.normalSteps.nextTab();
          })

        } catch (error) {
          window.SwalError("The given data was invalid")

        }
      } else {
        let el = document.getElementById(this.pack.id)
        el.innerHTML = 'تم الاختيار'
        el.classList.add('upgrade-button');
        el.classList.remove('subscribe-button');
        // Advance to the next tab
        // const scrollY = document.body.scrollHeight - window.innerHeight - 400; // Adjust 100 to your preferred position
        // window.scrollTo(0, scrollY);
        
        this.$emit('chosed', this.pack)
      }
    }
  },
  mounted() {
    this.packageType = this.$route.meta.type
  }
};
</script>
<style scoped>
.subscription-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f936;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  transition: all 0.3s;
}

@media  screen and (max-width: 1200px) {
  .subscription-card {
    flex-direction: column;
    align-items: center;
  }
  .subscription-header {
  flex-direction: column;
  align-items: center !important;
  }
  .subscription-actions {
    align-self: center !important;
  }
  
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
  margin: 10px 0 10px 20px;
}

.subscription-price {
  font-size: 36px;
  display: flex;
  align-items: center;
  margin: 40px 20px 0;
}
.subscription-price span {
  color: #ffbe39;
  margin-right: 5px;
}

.currency {
  font-size: 24px;
  color: #555;
  margin-left: 8px;
}

.subscription-features {
  margin-bottom: 10px;
  margin-right: 10px;
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
  align-self: end;
}

.subscribe-button,
.upgrade-button,
.subscribed-button {
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  width: 180px;
  transition: all 0.3s;
}

.subscribe-button {
  background: linear-gradient(to bottom, #1FB9B3, #13a89d);
  color: #fff;
  margin-bottom: 15px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);

}

.subscribe-button:hover {
  background: linear-gradient(to bottom, #13a89d, #1FB9B3);
}

.upgrade-button {
  background: #ffbe39;
  color: #fff;
  margin-bottom: 20px;

}

.upgrade-button:hover {
  opacity: 0.8;
}

.subscribed-button {
  background: #2eb9b3;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.subscribed-button:hover {
  opacity: 0.8;
}
</style>