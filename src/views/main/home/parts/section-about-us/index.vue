<template>
  <div class="sec-seven  max-width-100-hidden">
        <div class="container">
            <div class="row align-items-center  p-4">
                <div class="col-md-6" data-aos="fade-up">
                    <img class="rounded-cirle img-res" :src="`${publicPath}assets/img/Group 14516.png`" alt="" width="380" height="380">
                </div>
                <div class="col-md-6 position-relative" >
                    <h2 class="text-white">{{ $t('know-more-about-riadiat') }}</h2>
                    <p  class="text-white">
                      {{ $t('definition-riadiat-text') }}
                        
                    </p>
                    <p style="top: 113px;left: 44%;" class="position-absolute">
                        <svg
                          width="107"
                          height="94"
                          viewBox="0 0 107 94"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M81.1915 92.4384C86.9149 87.0983 94.0431 83.4125 99.7012 78.0658C100.661 77.1595 104.447 74.99 104.723 73.6053M104.723 73.6053C105.081 71.8073 100.645 69.7505 99.6239 69.2414C94.474 66.6749 85.4524 62.2818 79.5569 60.1025M104.723 73.6053C83.9625 78.5102 51.9176 68.0166 48.7853 48.8748M48.7853 48.8748C47.956 43.807 49.1532 38.133 53.123 31.9781C60.6291 20.3409 75.209 31.7358 68.575 42.6097C64.9117 48.6129 56.0376 49.5691 48.7853 48.8748ZM48.7853 48.8748C46.7022 48.6754 44.753 48.3398 43.0995 47.9485C22.5988 43.0976 5.10282 22.2476 1.99773 1.82192"
                            stroke="white"
                            stroke-width="2.93433"
                            stroke-miterlimit="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </p>
                      <div style="margin-top: 100px;" class="">
                          <button class="btn border p-2 text-white bg-transpernt ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#F6F8F9"/>
                                <path d="M11.9999 18.25C11.7899 18.25 11.5899 18.22 11.4199 18.16C9.26986 17.43 5.85986 14.81 5.85986 10.91C5.85986 8.83 7.53986 7.14001 9.60986 7.14001C10.5099 7.14001 11.3399 7.45001 12.0099 8.01001C12.6799 7.45001 13.5199 7.14001 14.3999 7.14001C16.4699 7.14001 18.1499 8.83 18.1499 10.91C18.1499 14.8 14.7399 17.42 12.5799 18.16C12.4099 18.22 12.1999 18.25 11.9999 18.25ZM9.59987 8.64999C8.35987 8.64999 7.34987 9.67001 7.34987 10.92C7.34987 14.41 10.7199 16.35 11.8999 16.75C11.9399 16.76 12.0399 16.76 12.0799 16.75C13.2599 16.35 16.6299 14.41 16.6299 10.92C16.6299 9.67001 15.6199 8.64999 14.3799 8.64999C13.6799 8.64999 13.0099 8.99 12.5899 9.56C12.3099 9.94 11.6699 9.94 11.3899 9.56C10.9699 8.98 10.3199 8.64999 9.59987 8.64999Z" fill="#F6F8F9"/>
                                </svg> 
                            {{ $t('knows-more') }}
                          </button>
                      </div>
                </div>
            </div>
        </div>

      </div>
</template>

<script>
export default {
 name:'about-us'
}
</script>

<style>

</style>