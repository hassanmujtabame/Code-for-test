
<template>
  <div style="margin-top: 120px">

    <!-- card front face -->
    <div class="container">
      <div class="row justify-content-center mb-5 mt-3">
        <div class="box text-white" style="padding: 0 30px">
          <div class="row justify-content-center">
            <div class="img-wrapper">
              <img src="@/assets/logo-white.png" alt="Riadiat logo">
            </div>
          </div>
          <h3 class="row mt-3">
            الاسم :
            {{ user.name }}
          </h3>
          <h3 class="row">
            رقم العضوية : 2910422
          </h3>
          <div class="row mt-5 d-flex justify-content-end ">
            <h2 class="d-flex align-items-center" style="width: fit-content; margin: 0;">MemberShip</h2>
            <img style="width: 70px;" :src="`${publicPath}assets/img/starrrr.png`" alt="">
          </div>
          <div class="row">
            تاريخ الاشتراك : 23/9/2023
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="box d-flex justify-content-center align-items-center">
          <canvas ref="qrcodeCanvas"></canvas>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import user from '@/services/api/user';

import QRCode from 'qrcode';

export default {
  name: 'show-card',
  components: {
    QRCode
  },
  data() {
    return {
      qrData: 'test', // Store the data for QR code
    };
  },
  methods: {
    generateQRCode() {
      // Get the canvas element where the QR code will be rendered
      const canvas = this.$refs.qrcodeCanvas;

      // Clear the canvas before generating a new QR code
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate QR code only if there's data to encode
      if (this.qrData) {
        // Generate the QR code
        QRCode.toCanvas(canvas, this.qrData, (error) => {
          if (error) {
            console.error(error);
          }
        });
      }
    },
  },
  mounted() {
    this.generateQRCode()
  }
}
</script>
<style scoped>
.box {
  width: 500px;
  height: 300px;
  background-color: var(--pc);
  border-radius: 10px;
}

.img-wrapper {
  background: #009688;
  padding: 10px 15px;
  border-radius: 0 0 10px 10px;
  width: 30%;
}

.img-wrapper img {
  width: 100%;
}
</style>