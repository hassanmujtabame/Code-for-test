<template>
      <div class="Dashboard__cards">
         <div id="total-conversions" class="Dashboard__card">
            <div class="caption">التحويلات</div>
            <div class="Dashboard__data">
               <div class="item" id="conversionsundefined" data-active="0" style="display: flex;">
                  <div class="value">57</div>
                  <div class="diff diff_negative">65%</div>
               </div>
            </div>
            <div class="footer">
               <div class="icon_Gpy size_xl_28J color_white_2nZ" tabindex="-1"><svg fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M5.625 18.358A9.003 9.003 0 1 0 12 2.996M3.778 15.427a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M3.096 12a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M3.778 8.574a.05.05 0 1 1-.015-.036.05.05 0 0 1 .015.036M5.72 5.669a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M8.623 3.728a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M16.05 12.602h-4.652M11.398 12.602V6.998"
                        stroke="#B4AEB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>مقارنة بالامس
            </div>
         </div>
         <div id="total-events" class="Dashboard__card">
            <div class="caption">النقرات</div>
            <div class="Dashboard__data">
               <div class="item" id="eventsundefined" data-active="0" style="display: flex;">
                  <div class="value">733</div>
                  <div class="diff diff_negative">220%</div>
               </div>
            </div>
            <div class="footer">
               <div class="icon_Gpy size_xl_28J color_white_2nZ" tabindex="-1"><svg fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M5.625 18.358A9.003 9.003 0 1 0 12 2.996M3.778 15.427a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M3.096 12a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M3.778 8.574a.05.05 0 1 1-.015-.036.05.05 0 0 1 .015.036M5.72 5.669a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M8.623 3.728a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M16.05 12.602h-4.652M11.398 12.602V6.998"
                        stroke="#B4AEB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>مقارنة بالامس
            </div>
         </div>
         <div id="total-commission-amount" class="Dashboard__card">
            <div class="caption">مبلغ العمولة</div>
            <div class="Dashboard__data">
               <div class="item" id="defaultundefined" data-active="0" style="display: flex;">
                  <div class="value">43</div>
                  <div class="diff diff_negative">160%</div>
               </div>
            </div>
            <div class="footer">
               <div class="icon_Gpy size_xl_28J color_white_2nZ" tabindex="-1"><svg fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M5.625 18.358A9.003 9.003 0 1 0 12 2.996M3.778 15.427a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M3.096 12a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M3.778 8.574a.05.05 0 1 1-.015-.036.05.05 0 0 1 .015.036M5.72 5.669a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M8.623 3.728a.05.05 0 1 1-.1 0 .05.05 0 0 1 .1 0M16.05 12.602h-4.652M11.398 12.602V6.998"
                        stroke="#B4AEB9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>مقارنة بالامس
            </div>
         </div>
      </div>
</template>

<script>
import balanceCard from './card.vue';
import userAPI from '@/services/api/user';
export default {
   name: 'section-balance',
   components: {
      balanceCard
   },
   data: () => ({
      total_balance: 0,
      outstanding_balance: 0,
      available_balance: 0,
   }),
   methods: {
      async initializing() {
         try {
            let { data } = await userAPI.me()
            if (data.success) {
               let { total_balance, outstanding_balance, available_balance } = data.data;
               this.total_balance = total_balance
               this.outstanding_balance = outstanding_balance
               this.available_balance = available_balance
            }
         } catch (error) {
            console.log('error', error)
            console.log('error response', error.response)
            if (error.response) {
               let response = error.response
               if (response.status == 401) {
                  this.logout()
               }
            }

         }
      }
   },
   mounted() {
      this.initializing()
   }
}
</script>

<style scoped>
.Dashboard__card {
   --gridGap: 16px;
   --commonPadding: 30px;
   --asidePadding: 20px;
   --asideMenuPadding: 15px;
   --headerHeight: 80px;
   --sidebarWidth: 270px;
   --maxWidth: 1200px;
   --border-radius: 8px;
   --globalIndent-xxxl: 40px;
   --globalIndent-xxl: 35px;
   --globalIndent-xl: 30px;
   --globalIndent-l: 20px;
   --globalIndent-m: 15px;
   --globalIndent-s: 10px;
   --globalIndent-xs: 5px;
   --uk-kit-2-colors-backgroundPrimary: #fff;
   --uk-kit-2-colors-backgroundSecondary: #fcfbfd;
   --uk-kit-2-colors-backgroundTertiary: #f7f7fa;
   --uk-kit-2-colors-backgroundQuaternary: #efeff5;
   --uk-kit-2-colors-backgroundFifth: #948f98;
   --uk-kit-2-colors-backgroundSixth: #625c66;
   --uk-kit-2-colors-backgroundSeventh: #29272b;
   --uk-kit-2-colors-backgroundActionConfirm: #f2f9ec;
   --uk-kit-2-colors-backgroundActionNotice: #fcf6ed;
   --uk-kit-2-colors-backgroundActionError: #fcf0f0;
   --uk-kit-2-colors-backgroundActionBrand: #f2efff;
   --uk-kit-2-colors-backgroundActionLink: #eef5fe;
   --uk-kit-2-colors-interfacePrimary: #5a545f;
   --uk-kit-2-colors-interfaceSecondary: #6e6873;
   --uk-kit-2-colors-interfaceTertiary: #8c8691;
   --uk-kit-2-colors-interfaceQuaternary: #b4aeb9;
   --uk-kit-2-colors-interfaceOnsurface: #fff;
   --uk-kit-2-colors-interfaceFifth: #ddd9e0;
   --uk-kit-2-colors-interfaceSixth: #f3eff5;
   --uk-kit-2-colors-interfaceSeventh: #f8f6fa;
   --uk-kit-2-colors-interfaceBluePrimary: #57b9f0;
   --uk-kit-2-colors-interfaceBlueSecondary: #6bcdff;
   --uk-kit-2-colors-interfaceBlueTertiary: #43a5dc;
   --uk-kit-2-colors-interfaceBlueQuaternary: #399bd2;
   --uk-kit-2-colors-interfaceAdPrimary: #8776e0;
   --uk-kit-2-colors-interfaceAdSecondary: #9b8af4;
   --uk-kit-2-colors-interfaceAdTertiary: #7362cc;
   --uk-kit-2-colors-interfaceAdQuaternary: #6958c2;
   --uk-kit-2-colors-interfaceFocusPrimary: #f6d83b;
   --uk-kit-2-colors-labelPrimary: #0b1116;
   --uk-kit-2-colors-labelSecondary: #333a40;
   --uk-kit-2-colors-labelTertiary: #5a6065;
   --uk-kit-2-colors-labelQuaternary: #888c8f;
   --uk-kit-2-colors-labelOnsurface: #fff;
   --uk-kit-2-colors-labelLink: #43a5dc;
   --uk-kit-2-colors-labelFifth: #b5b8bb;
   --uk-kit-2-colors-labelSixth: #d8dadc;
   --uk-kit-2-colors-labelSeventh: #eeeff1;
   --uk-kit-2-colors-labelError: #e47470;
   --uk-kit-2-colors-labelNotice: #d79735;
   --uk-kit-2-colors-labelConfirm: #7ec050;
   --uk-kit-2-colors-labelBrand: #8776e0;
   --uk-kit-2-colors-actionConfirmPrimary: #7ec050;
   --uk-kit-2-colors-actionConfirmSecondary: #92d464;
   --uk-kit-2-colors-actionConfirmTertiary: #6aac3c;
   --uk-kit-2-colors-actionNoticePrimary: #ebab49;
   --uk-kit-2-colors-actionNoticeSecondary: #ffbf5d;
   --uk-kit-2-colors-actionNoticeTertiary: #d79735;
   --uk-kit-2-colors-actionErrorPrimary: #e47470;
   --uk-kit-2-colors-actionErrorSecondary: #f88884;
   --uk-kit-2-colors-actionErrorTertiary: #d0605c;
}

.Dashboard__cards {
   grid-gap: 10px;
   display: flex;
   gap: 10px;
   justify-content: stretch;
   margin-bottom: calc(var(--commonPadding)*2);
   margin-top: var(--commonPadding);
}

.Dashboard__card {
   position: relative;
}

.Dashboard__card,
.Dashboard__graph {
   border: 2px solid var(--uk-kit-2-colors-interfaceSixth);
   border-radius: 8px;
   border-bottom-left-radius: 0;
   border-bottom-right-radius: 0;
   flex-grow: 1;
   padding: var(--commonPadding);
}

.Dashboard__card .caption {
   color: var(--uk-kit-2-colors-labelQuaternary);
   font-size: 24px;
   font-weight: 500;
}

.Dashboard__card .footer {
   color: var(--uk-kit-2-colors-labelFifth);
   font-size: 14px;
   font-weight: 400;
   margin-top: var(--gridGap);
}

.Dashboard__card .caption [class*=icon] {
   height: 18px;
   margin-left: 10px;
   width: 18px;
}

.Dashboard__card [class*=icon] {
   color: inherit;
}

.size_xl_28J {
   height: 24px;
   width: 24px;
}

.icon_Gpy {
   display: inline-block;
   outline: none;
}

.color_white_2nZ {
   color: #fff;
}

.Dashboard__card .item {
   align-items: center;
   display: flex;
   flex-direction: row;
   margin-top: 10px;
}

.Dashboard__card .value {
   font-size: 36px;
   font-weight: 500;
}

.Dashboard__card .diff.diff_negative {
   background-color: #fcf0f0;
   color: #e47470;
}

.Dashboard__card .diff {
   font-size: 16px;
   font-style: normal;
   font-weight: 500;
   margin-left: 10px;
   padding: 7px 10px;
}

.Dashboard__card [class*=icon] svg {
   color: inherit;
   display: inline-block;
   height: 24px;
   vertical-align: text-top;
   width: 24px;
}</style>