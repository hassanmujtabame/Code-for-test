<template>
  <div class="pagination container2">
    <ul class="pagination page2">
      <li
        class="pagination page__btn"
        @click="$emit('navigate', links[0])"
        :class="{ active: currentPage !== 1 }"
      >
        <i class="pagination fa-solid fa-chevron-right"></i>
      </li>
      <li
        v-for="link in filteredLinks"
        :key="link.label"
        class="pagination page__numbers"
        @click="$emit('navigate', link)"
        :class="{ active: currentPage == link.label }"
      >
        {{ link.label }}
      </li>
      <li
        class="pagination page__btn"
        @click="$emit('navigate', links[links.length - 1])"
        :class="{ active: currentPage !== lastPage }"
      >
        <i class="pagination fa-solid fa-chevron-left"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pagination-bar",
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    filteredLinks() {
      const _filteredLinks = this.links.filter(
        (link) =>
          link.label !== "pagination.previous" &&
          link.label !== "pagination.next"
      );
      if (_filteredLinks.length <= 5) {
        return _filteredLinks;
      }
      const result = [];
      for (let i = 0; i < _filteredLinks.length; i++) {
        if (i < 1 || i >= _filteredLinks.length - 1) {
          // Keep the first two items and the last two items
          result.push(_filteredLinks[i]);
        } else if (
          _filteredLinks[i].label - this.currentPage <= 1 &&
          _filteredLinks[i].label - this.currentPage >= -1
        ) {
          result.push(_filteredLinks[i]);
        }
      }
      return result;
    },
  },
};
</script>

<style scoped>
.pagination,
.pagination::before,
.pagination::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.container2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2d4848;
}

ul.page2 {
  list-style-type: none;
}
.page2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
}
.page__numbers,
.page__btn,
.page__dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  font-size: 1.4rem;
  cursor: pointer;
}

.page__dots {
  width: 2.6rem;
  height: 2.6rem;
  color: #23adade1;
  cursor: initial;
}

.page__numbers {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.4rem;
}
.page__numbers:hover {
  color: #23adad;
}

.page__numbers.active {
  color: #ffffff;
  background: #23adad;
  font-weight: 600;
  border: 1px solid #23adad;
}

.page__btn {
  color: #23adade1;
  pointer-events: none;
}

.page__btn.active {
  color: #2d4848;
  pointer-events: initial;
}
.page__btn.active:hover {
  color: #23adad;
}
</style>
