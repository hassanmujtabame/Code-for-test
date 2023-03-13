<template>
<p class="chat-message-text" v-bind="$attrs">
<slot></slot>
</p>
</template>
<style >
.chat-message-text{
  margin-bottom: .25rem !important;
  border-radius: 0.5rem;
  font-size: .875em;
  border-radius: 0.6rem;
  padding: 1rem 1.25rem;
}
.chat-message-text.bg-your-msg:first-of-type{
  border-top-left-radius: 0% !important;
}
.chat-message-text.bg-my-msg:first-of-type{
  border-top-right-radius: 0% !important;
}
</style>