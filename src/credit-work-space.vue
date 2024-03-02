<template>
  <div class="container-creditcard">
    <div
      class="creditcard"
      ref="creditcard"
      :class="{ flipped: !showFront }"
      @click="cardClicked"
    >
      <div class="front">
        <div id="ccsingle"></div>
        <svg
          version="1.1"
          id="cardfront"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          style="enable-background: new 0 0 750 471"
          xml:space="preserve"
        >
          <g id="Front">
            <g id="CardBackground">
              <g id="Page-1_1_">
                <g id="amex_1_">
                  <path
                    id="Rectangle-1_1_"
                    class="lightcolor grey"
                    d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                            C0,17.9,17.9,0,40,0z"
                  />
                </g>
              </g>
              <path
                class="darkcolor greydark"
                d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
              />
            </g>
            <text
              transform="matrix(1 0 0 1 60.106 295.0121)"
              id="svgnumber"
              class="st2 st3 st4"
            >
              {{ card_number }}
            </text>
            <text
              transform="matrix(1 0 0 1 54.1064 428.1723)"
              id="svgname"
              class="st2 st5 st6"
            >
              {{ card_holder }}
            </text>
            <text
              transform="matrix(1 0 0 1 54.1074 389.8793)"
              class="st7 st5 st8"
            >
              cardholder name
            </text>
            <text
              transform="matrix(1 0 0 1 479.7754 388.8793)"
              class="st7 st5 st8"
            >
              expiration
            </text>
            <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">
              card number
            </text>
            <g>
              <text
                transform="matrix(1 0 0 1 574.4219 433.8095)"
                id="svgexpire"
                class="st2 st5 st9"
              >
                {{ expiry_date }}
              </text>
              <text
                transform="matrix(1 0 0 1 479.3848 417.0097)"
                class="st2 st10 st11"
              >
                VALID
              </text>
              <text
                transform="matrix(1 0 0 1 479.3848 435.6762)"
                class="st2 st10 st11"
              >
                THRU
              </text>
              <polygon
                class="st2"
                points="554.5,421 540.4,414.2 540.4,427.9 		"
              />
            </g>
            <g id="cchip">
              <g>
                <path
                  class="st2"
                  d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                        c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                />
              </g>
              <g>
                <g>
                  <rect x="82" y="70" class="st12" width="1.5" height="60" />
                </g>
                <g>
                  <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
                </g>
                <g>
                  <path
                    class="st12"
                    d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                            c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                            C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                            c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                            c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                  />
                </g>
                <g>
                  <rect
                    x="82.8"
                    y="82.1"
                    class="st12"
                    width="25.8"
                    height="1.5"
                  />
                </g>
                <g>
                  <rect
                    x="82.8"
                    y="117.9"
                    class="st12"
                    width="26.1"
                    height="1.5"
                  />
                </g>
                <g>
                  <rect
                    x="142.4"
                    y="82.1"
                    class="st12"
                    width="25.8"
                    height="1.5"
                  />
                </g>
                <g>
                  <rect
                    x="142"
                    y="117.9"
                    class="st12"
                    width="26.2"
                    height="1.5"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="Back" />
        </svg>
      </div>
      <div class="back">
        <svg
          version="1.1"
          id="cardback"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          style="enable-background: new 0 0 750 471"
          xml:space="preserve"
        >
          <g id="Front">
            <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
          </g>
          <g id="Back">
            <g id="Page-1_2_">
              <g id="amex_2_">
                <path
                  id="Rectangle-1_2_"
                  class="darkcolor greydark"
                  d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
                />
              </g>
            </g>
            <rect y="61.6" class="st2" width="750" height="78" />
            <g>
              <path
                class="st3"
                d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                    C707.1,246.4,704.4,249.1,701.1,249.1z"
              />
              <rect
                x="42.9"
                y="198.6"
                class="st4"
                width="664.1"
                height="10.5"
              />
              <rect
                x="42.9"
                y="224.5"
                class="st4"
                width="664.1"
                height="10.5"
              />
              <path
                class="st5"
                d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
              />
            </g>
            <text
              transform="matrix(1 0 0 1 621.999 227.2734)"
              id="svgsecurity"
              class="st6 st7"
            >
              {{ card_cvv }}
            </text>
            <g class="st8">
              <text
                transform="matrix(1 0 0 1 518.083 280.0879)"
                class="st9 st6 st10"
              >
                security code
              </text>
            </g>
            <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5" />
            <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5" />
            <text
              transform="matrix(1 0 0 1 59.5073 228.6099)"
              id="svgnameback"
              class="st12 st13"
            >
              {{ card_holder }}
            </text>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import IMask from "imask";
import BrandsIcon from "@/plugins/card-visa-icons";
import masks from "@/plugins/maskes-credit-cards";
export default {
  props: {
    group: {
      type: String,
      default: "credit-card-image",
    },
  },
  data: () => ({
    showFront: true,
    card_number: "0123 4567 8910 1112",
    card_holder: "JOHN DOE",

    card_cvv: "985",
    expiry_date: "MM/YY",
    cardnumber_mask: null,
    expirationdate_mask: null,
    securitycode_mask: null,
    ccicon: null,
    ccsingle: null,
  }),
  methods: {
    cardClicked() {
      this.showFront = !this.showFront;
    },
    async changeCardNumber(data) {
      await this.cardnumber_mask.resolve(data);
      this.onAcceptCardNumber();
    },
    changeCardHolder(data) {
      this.card_holder = data;
    },
    changeCVV(data) {
      this.card_cvv = data;
    },
    async changeExpiryDate(data) {
      await this.expirationdate_mask.resolve(data);
      this.expiry_date = this.onExpirtyDateAccept(data);
    },
    changeBrandIcon(data) {
      this.ccicon = BrandsIcon[data];
      this.ccsingle = BrandsIcon[data + "_single"];
    },

    onExpirtyDateAccept(val) {
      if (
        this.expirationdate_mask.value.length == 0 ||
        this.expirationdate_mask.value != val
      ) {
        this.fireEvent(this.group + "-state-expiry-date", {
          correct: false,
          value: "MM/YY",
        });
        return "MM/YY";
      } else {
        this.fireEvent(this.group + "-state-expiry-date", {
          correct: true,
          value: this.expirationdate_mask.value,
        });
        return this.expirationdate_mask.value;
      }
    },
    onAcceptCardNumber() {
      let send_data = {};
      if (this.cardnumber_mask.value.length == 0) {
        this.card_number = "0123 4567 8910 1112";
        send_data = {
          correct: false,
          cardtype: false,
          value: this.card_number,
        };
      } else {
        //console.log('ok number',this.cardnumber_mask)
        this.card_number = this.cardnumber_mask.value;
        let mask_c = this.cardnumber_mask.currentMask.mask.replaceAll(" ", "");
        send_data = {
          correct: true,
          cardtype: this.cardnumber_mask.currentMask.cardtype,
          value: this.card_number,
          regex: this.cardnumber_mask.currentMask.regex,
          mask: mask_c,
          mask_length: mask_c.length,
        };
      }
      switch (this.cardnumber_mask.currentMask.cardtype) {
        case "american express":
          send_data.ccicon = BrandsIcon.amex;
          //this.ccicon.innerHTML = BrandsIcon.amex;
          this.ccsingle.innerHTML = BrandsIcon.amex_single;
          this.swapColor("green");
          break;
        case "visa":
          send_data.ccicon = BrandsIcon.visa;
          //this.ccicon.innerHTML = BrandsIcon.visa;
          this.ccsingle.innerHTML = BrandsIcon.visa_single;
          this.swapColor("lime");
          break;
        case "diners":
          send_data.cciconL = BrandsIcon.diners;
          //this.ccicon.innerHTML = BrandsIcon.diners;
          this.ccsingle.innerHTML = BrandsIcon.diners_single;
          this.swapColor("orange");
          break;
        case "discover":
          send_data.ccicon = BrandsIcon.discover;
          // this.ccicon.innerHTML = BrandsIcon.discover;
          this.ccsingle.innerHTML = BrandsIcon.discover_single;
          this.swapColor("purple");
          break;
        case "jcb" || "jcb15":
          send_data.ccicon = BrandsIcon.jcb;
          //this.ccicon.innerHTML = BrandsIcon.jcb;
          this.ccsingle.innerHTML = BrandsIcon.jcb_single;
          this.swapColor("red");
          break;
        case "maestro":
          send_data.ccicon = BrandsIcon.maestro;
          //this.ccicon.innerHTML = BrandsIcon.maestro;
          this.ccsingle.innerHTML = BrandsIcon.maestro_single;
          this.swapColor("yellow");
          break;
        case "mastercard":
          send_data.ccicon = BrandsIcon.mastercard;
          //this.ccicon.innerHTML = BrandsIcon.mastercard;
          this.ccsingle.innerHTML = BrandsIcon.mastercard_single;
          this.swapColor("lightblue");

          break;
        case "unionpay":
          send_data.ccicon = BrandsIcon.unionpay;
          //this.ccicon.innerHTML = BrandsIcon.unionpay;
          this.ccsingle.innerHTML = BrandsIcon.unionpay_single;
          this.swapColor("cyan");
          break;
        default:
          send_data.ccicon = "";
          // this.ccicon.innerHTML = '';
          this.ccsingle.innerHTML = "";
          this.swapColor("grey");
          break;
      }
      this.fireEvent(this.group + "-state-card-number", send_data);
    },
    swapColor(basecolor) {
      document.querySelectorAll(".lightcolor").forEach(function (input) {
        input.setAttribute("class", "");
        input.setAttribute("class", "lightcolor " + basecolor);
      });
      document.querySelectorAll(".darkcolor").forEach(function (input) {
        input.setAttribute("class", "");
        input.setAttribute("class", "darkcolor " + basecolor + "dark");
      });
    },
    changeFace(data) {
      this.showFront = data == "front";
    },
  },
  created() {
    this.cardnumber_mask = IMask.createMask({
      mask: masks,
      dispatch: function (appended, dynamicMasked) {
        var number = (dynamicMasked.value + appended).replace(/\D/g, "");

        for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
          let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
          if (number.match(re) != null) {
            return dynamicMasked.compiledMasks[i];
          }
        }
      },
    });
    //Mask the Expiration Date
    this.expirationdate_mask = new IMask.createMask({
      mask: "{MM/YY}",
      blocks: {
        YY: {
          mask: "00",
        },

        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
      },
    });
    //Mask the security code
    this.securitycode_mask = new IMask.createMask({
      mask: "0000",
    });
    //console.log(this.cardnumber_mask,this.cardnumber_mask.masked)
    //this.cardnumber_mask.on("accept",this.onAcceptCardNumber );
    window.EventBus.listen(this.group + "-show-face", this.changeFace);
    window.EventBus.listen(this.group + "-brand-card", this.changeBrandIcon);
    window.EventBus.listen(this.group + "-card-number", this.changeCardNumber);
    window.EventBus.listen(this.group + "-card-holder", this.changeCardHolder);
    window.EventBus.listen(this.group + "-expiry-date", this.changeExpiryDate);
    window.EventBus.listen(this.group + "-cvv", this.changeCVV);
  },
  beforeDestroy() {
    window.EventBus.off(this.group + "-show-face", this.changeFace);
    window.EventBus.off(this.group + "-brand-card", this.changeBrandIcon);
    window.EventBus.off(this.group + "-card-number", this.changeCardNumber);
    window.EventBus.off(this.group + "-card-holder", this.changeCardHolder);
    window.EventBus.off(this.group + "-expiry-date", this.changeExpiryDate);
    window.EventBus.off(this.group + "-cvv", this.changeCVV);
  },
  mounted() {
    // this.ccicon= document.getElementById('ccicon');
    this.ccsingle = document.getElementById("ccsingle");
  },
};
</script>

<style>
#ccsingle {
  position: absolute;
  right: 15px;
  top: 20px;
}

#ccsingle svg {
  width: 100px;
  max-height: 60px;
}

.creditcard svg#cardfront,
.creditcard svg#cardback {
  width: 100%;
  -webkit-box-shadow: 1px 5px 6px 0px black;
  box-shadow: 1px 5px 6px 0px black;
  border-radius: 22px;
}

#generatecard {
  cursor: pointer;
  float: right;
  font-size: 12px;
  color: #fff;
  padding: 2px 4px;
  background-color: #909090;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* CHANGEABLE CARD ELEMENTS */
.creditcard .lightcolor,
.creditcard .darkcolor {
  -webkit-transition: fill 0.5s;
  transition: fill 0.5s;
}

.creditcard .lightblue {
  fill: #03a9f4;
}

.creditcard .lightbluedark {
  fill: #0288d1;
}

.creditcard .red {
  fill: #ef5350;
}

.creditcard .reddark {
  fill: #d32f2f;
}

.creditcard .purple {
  fill: #ab47bc;
}

.creditcard .purpledark {
  fill: #7b1fa2;
}

.creditcard .cyan {
  fill: #26c6da;
}

.creditcard .cyandark {
  fill: #0097a7;
}

.creditcard .green {
  fill: #66bb6a;
}

.creditcard .greendark {
  fill: #388e3c;
}

.creditcard .lime {
  fill: #d4e157;
}

.creditcard .limedark {
  fill: #afb42b;
}

.creditcard .yellow {
  fill: #ffeb3b;
}

.creditcard .yellowdark {
  fill: #f9a825;
}

.creditcard .orange {
  fill: #ff9800;
}

.creditcard .orangedark {
  fill: #ef6c00;
}

.creditcard .grey {
  fill: #bdbdbd;
}

.creditcard .greydark {
  fill: #616161;
}

/* FRONT OF CARD */
#svgname {
  text-transform: uppercase;
}

#cardfront .st2 {
  fill: #ffffff;
}

#cardfront .st3 {
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
}

#cardfront .st4 {
  font-size: 54.7817px;
}

#cardfront .st5 {
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
}

#cardfront .st6 {
  font-size: 33.1112px;
}

#cardfront .st7 {
  opacity: 0.6;
  fill: #ffffff;
}

#cardfront .st8 {
  font-size: 24px;
}

#cardfront .st9 {
  font-size: 36.5498px;
}

#cardfront .st10 {
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
}

#cardfront .st11 {
  font-size: 16.1716px;
}

#cardfront .st12 {
  fill: #4c4c4c;
}

/* BACK OF CARD */
#cardback .st0 {
  fill: none;
  stroke: #0f0f0f;
  stroke-miterlimit: 10;
}

#cardback .st2 {
  fill: #111111;
}

#cardback .st3 {
  fill: #f2f2f2;
}

#cardback .st4 {
  fill: #d8d2db;
}

#cardback .st5 {
  fill: #c4c4c4;
}

#cardback .st6 {
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
}

#cardback .st7 {
  font-size: 27px;
}

#cardback .st8 {
  opacity: 0.6;
}

#cardback .st9 {
  fill: #ffffff;
}

#cardback .st10 {
  font-size: 24px;
}

#cardback .st11 {
  fill: #eaeaea;
}

#cardback .st12 {
  font-family: "Rock Salt", cursive;
}

#cardback .st13 {
  font-size: 37.769px;
}
/* CREDIT CARD IMAGE STYLING */
.preload * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
  transition: none !important;
}
/* FLIP ANIMATION */
.container-creditcard {
  perspective: 1000px;
  max-height: 251px;
  height: 54vw;
}

.creditcard {
  direction: ltr;
  position: relative;
  width: 100%;
  max-width: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: -webkit-transform 0.9s;
  -webkit-transition: -webkit-transform 0.9s;
  transition: transform 0.9s;
  transition: transform 0.9s, -webkit-transform 0.9s;
  /* -webkit-transition: 1s ease-in-out;
    -moz-transition: 1s ease-in-out;
    -o-transition: 1s ease-in-out;
    transition: 1s ease-in-out;*/
  cursor: pointer;
}

.creditcard .front,
.creditcard .back {
  position: absolute;
  width: 100%;
  max-width: 400px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
  color: #47525d;
}

.creditcard .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.creditcard.flipped {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>
