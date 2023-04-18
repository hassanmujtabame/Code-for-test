<template>
    <div @click="selectItem" class="chat-users__item" :class="{ 'chat-users__item-selected': selected }">
        <div class="chat-users__item-wrapper">
            <avatarChat class="chat-users__item-avatar" :image="item.user_image" :name="item.user_name"
                :userId="item.user_id" 
                :dir="$i18n.locale == 'ar' ? 'left' : 'right'"
                status="online"
                >
            </avatarChat>
            <div class="chat-users__item-info">
                <div class="chat-users__item-title">{{ item.user_name }}</div>
                <div class="chat-users__item-subtitle">{{ item.message }}</div>
            </div>
            <div class="chat-users__item-time"> <showTime :dateTime="item.datetime" /> </div>
        </div>
    </div>
</template>

<script>
import avatarChat from '@/components/chat/chat-card/avatar-chat.vue'
import showTime from '@/components/chat/chat-card/show-time.vue'

export default {
    props: {
        item: {},
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    components: {
        avatarChat,
        showTime
    },
    data: () => {
        return {
            selected: false,
        }
    },
    watch: {
        isSelected: {
            deep: true,
            immediate: true,
            handler() {
                this.selected = this.isSelected
            }
        }
    },
    methods: {
        selectItem() {
            this.$emit('selected', this.item)
        }
    }
}
</script>

<style >
.chat-users__item {
    padding: 10px 0;
    /*border-bottom: 1px solid #f6f8f9;*/
    width: 100%;
    cursor: pointer;
   
background: rgba(240, 240, 251, 0.0001);
border-radius: 5px;
}

.chat-users__item-selected {
    background: rgba(31, 185, 179,10%);
  
}

.chat-users__item-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
}

.chat-users__item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.chat-users__item-avatar>img{
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: 50%;
}
.chat-users__item-avatar,
.chat-users__item-time {
    flex-shrink: 0;
}

.chat-users__item-time {
    font-size: .665em;
    padding: 0 5px;
    align-self: end;
}

.chat-users__item-info {
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: calc(100% - 85px);
    padding: 0 10px;
}

.chat-users__item-title {

    line-height: 1.7;
    font-weight: 600;
    color: #293951;
    font-size: .9375rem;
}

.chat-users__item-subtitle {
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
    color: #737373;
    display: inline-block;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.chat-users__item-time {
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
    color: #737373
}</style>