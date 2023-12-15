<template>
    <div class="social-feed">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post-header">
          <img :src="post.author.avatar" alt="avatar" class="avatar" />
          <div class="author-info">
            <span class="author-name">{{ post.author.name }}</span>
            <span class="post-time">{{ post.time }}</span>
          </div>
        </div>
        <p class="post-content">{{ post.content }}</p>
        <div class="post-actions">
          <button @click="toggleLike(post)" :class="{ liked: post.liked }">
            {{ post.liked ? 'Unlike' : 'Like' }}
          </button>
          <button @click="toggleComment(post)" class="comment-btn">Comment</button>
        </div>
        <div v-if="post.showComments" class="comments-section">
          <div v-for="comment in post.comments" :key="comment.id" class="comment">
            <span class="comment-author">{{ comment.author }}</span>
            <p class="comment-content">{{ comment.content }}</p>
          </div>
          <form @submit.prevent="addComment(post)">
            <input v-model="post.newComment" class="comment-input" placeholder="Add a comment..." />
            <button type="submit" class="comment-submit-btn">Submit</button>
          </form>
        </div>
        <div class="post-likes">{{ post.likes }} Likes</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            id: 1,
            author: {
              name: 'John Doe',
              avatar: 'john_avatar.jpg',
            },
            time: '2 hours ago',
            content: 'This is a sample post!',
            liked: false,
            likes: 15,
            showComments: false,
            comments: [
              { id: 1, author: 'Alice', content: 'Great post!' },
              { id: 2, author: 'Bob', content: 'Nice one!' },
            ],
            newComment: '',
          },
          // More sample posts...
        ],
      };
    },
    methods: {
      toggleLike(post) {
        post.liked = !post.liked;
        if (post.liked) {
          post.likes++;
        } else {
          post.likes--;
        }
      },
      toggleComment(post) {
        post.showComments = !post.showComments;
      },
      addComment(post) {
        const newCommentContent = post.newComment.trim();
        if (newCommentContent !== '') {
          post.comments.push({
            id: post.comments.length + 1,
            author: 'You',
            content: newCommentContent,
          });
          post.newComment = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for the social feed */
  .social-feed {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .post {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
  }
  
  .post-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .author-name {
    font-weight: bold;
  }
  
  .post-time {
    color: #888;
  }
  
  .post-content {
    margin-bottom: 10px;
  }
  
  .post-actions {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .comment-btn {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #337ab7;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .comments-section {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }
  
  .comment {
    margin-bottom: 5px;
  }
  
  .comment-author {
    font-weight: bold;
    margin-right: 5px;
  }
  
  .comment-input {
    width: calc(100% - 80px);
    margin-right: 10px;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ddd;
  }
  
  .comment-submit-btn {
    padding: 5px 10px;
    background-color: #337ab7;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  