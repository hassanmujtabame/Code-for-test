<template>
  <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>

            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div>
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
  <!-- <div class="single-workspace mobile-center">
    <d-overlays-simple v-if="loading" />
    <div v-else class="container py-4">
      <div class="row justify-content-between">
        <div class="col-md-6">
          <h3 class="word-break-all">
            <span class="m-c">غرفة مكتبية:</span>
            {{ singleWorkspace.title }}
          </h3>
        </div>
        <ActionCrud :singleWorkspace="singleWorkspace" v-if="isOwner" />
        <ActionForVisiter v-else :singleWorkspace="singleWorkspace" />
      </div>

      <div class="row">
        <div class="col-md-7 mt-5">
          <Gallery :singleWorkspace="singleWorkspace" />
          <SectionRate :singleWorkspace="singleWorkspace" />
        </div>

        <div class="col-md-5 mt-5">
          <d-user-info-li
            route-name="service-provider-show-profile"
            group-dialog="send-message-to-provider"
            :member="singleWorkspace.user_info"
            class="mb-3 border"
            :showBtnChat="false"
          />
          <Info :singleWorkspace="singleWorkspace" />
        </div>
        <div
          style="margin-right: auto; padding: 0"
          class="col-md-6 mt-5 box border rounded-3"
        >
          <div class="border p-4 p-4" style="font-size: 24px">
            شارك مساحة العمل
          </div>
          <div
            class="d-flex justify-content-center gap-4 p-4 p-4 icon-social-exibition"
          >
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="twitter"
                :url="shareLink"
                title="Share in twitter"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Twitter.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
         
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Linkedin"
                :url="shareLink"
                title="Share in Linkedin"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Linkedin.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <button style="background: transparent; border: 0">
              <ShareNetwork
                network="Facebook"
                :url="shareLink"
                title="Share in facebook"
                description="This is another awesome article for awesome readers"
              >
                <img
                  class="h-100"
                  :src="`${publicPath}assets/img/Facebook.png`"
                  alt=""
                />
              </ShareNetwork>
            </button>
            <div
              class="fb-share-button"
              :data-href="currentUrl"
              data-layout="button_count"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <showRescheduleDialog mode="create" :price="singleWorkspace.price" />
    <DialogDeleteService />
    <continue-course-card />
    <whatPeopleSaid />
  </div> -->
</template>

<script>
export default {};
</script>

<style></style>
