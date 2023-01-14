<template>
  <form class="d-flex position-relative form-nav" role="search">
                  <input
                    class="form-control me-2 serach-navbar"
                    type="search"
                    :placeholder="$t('What_are_you_looking_for')"
                    aria-label="Search"
                    height="56"
                  />
                  <div class="position-absolute icon-search px-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                        fill="#A6A6A6"
                      />
                      <path
                        d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>
                </form>
</template>

<script>
export default {
 name:'search-input'
}
</script>

<style scoped>
@media screen and (max-width:600px) {
  input{
    font-size: 12px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
}
html[dir=rtl] input{
  padding-right: 24px !important
}
html[dir=ltr] input{
  padding-left: 24px !important
}
  svg{
    height: 16px;
    width: 16px;
  }
  .icon-search{
    top: calc(50% - 8px)
  }
}

</style>