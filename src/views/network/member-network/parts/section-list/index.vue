<template>
  <div class="container mt-5 reverse-total-filter">
    <div class="col-12">
      <h2>أعضاء رياديات</h2>
    </div>

    <div v-if="!userIsSubNetwork" class="empty-tab" style="min-height: 200px">
      <img class="empty-img" src="/assets/img/noDataCloud.png" />
      <div class="main-text">لا يمكنك رؤية الأعضاء</div>
      <div class="sec-text">
        اشترك الآن في الشبكة لتتمكن من الاطلاع على القائمة الخاصة بالأعضاء
      </div>
    </div>

    <div v-else-if="!items.length" class="empty-tab" style="min-height: 200px">
      <img class="empty-img" src="/assets/img/noDataCloud.png" />
      <div class="main-text">لا بوجد أي أعضاء</div>
      <div class="sec-text">قد لا يكون هناك أعضاء حاليا توافق عملية البحث</div>
    </div>
    <div v-else>
      <div class="row items-grid grid-container">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="item-card-container"
        >
          <ItemCard
            :to="getRouteLocale('network-show-profile', { id: item.id })"
            :name="item.name"
            :description="item.job_title"
            :img="item.image"
            :showJob="true"
          >
          </ItemCard>
        </div>
      </div>
      <div>
        <div class="pagination container2">
          <ul class="pagination page2">
            <li
              class="pagination page__btn"
              @click="navigate(links[0])"
              :class="{ active: currentPage !== 1 }"
            >
              <i class="pagination fa-solid fa-chevron-right"></i>
            </li>
            <li
              v-for="link in filteredLinks"
              :key="link.label"
              class="pagination page__numbers"
              @click="navigate(link)"
              :class="{ active: currentPage == link.label }"
            >
              {{ link.label }}
            </li>
            <li
              class="pagination page__btn"
              @click="navigate(links[links.length - 1])"
              :class="{ active: currentPage !== lastPage }"
            >
              <i class="pagination fa-solid fa-chevron-left"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MembersApi from "@/services/api-v2/network/members.js";
import ItemCard from "@/components/cards/card-member.vue";
import SidebarBox from "./sidebar.vue";
export default {
  name: "section-list",
  components: {
    ItemCard,
    SidebarBox,
  },
  props: {
    searchData: {
      type: Object,
      default: () => {
        return {
          searchText: null,
          classification: null,
          regions: null,
          competence: null,
        };
      },
    },
  },

  data: (vm) => {
    return {
      filterSide: {
        membership: null,
        category_id: [],
      },

      items_test: [
        {
          id: 1,
          name: "العنقود محمد",
          image: `${vm.publicPath}assets/img/Rectangle 1775qa.png`,
          job_title: "التصوير",
        },
        {
          id: 2,
          name: "العنقود محمد",
          image: `${vm.publicPath}assets/img/Rectangle 1775qa.png`,
          job_title: "التصوير",
        },
        {
          id: 3,
          name: "العنقود محمد",
          image: `${vm.publicPath}assets/img/Rectangle 1775qa.png`,
          job_title: "التصوير",
        },
        {
          id: 4,
          name: "العنقود محمد",
          image: `${vm.publicPath}assets/img/Rectangle 1775qa.png`,
          job_title: "التصوير",
        },
        {
          id: 5,
          name: "العنقود محمد",
          image: `${vm.publicPath}assets/img/Rectangle 1775qa.png`,
          job_title: "التصوير",
        },
        {
          id: 6,
          name: "العنقود محمد",
          image: `${vm.publicPath}assets/img/Rectangle 1775qa.png`,
          job_title: "التصوير",
        },
      ],
      items: [],
      metadata: {
        links: [],
        current_page: 1,
        last_page: 1,
      },
    };
  },
  watch: {
    searchData: {
      handler(newVal) {
        this.loadList({ current_page: 1 });
      },
      deep: true, // Watch for changes within the object
    },
  },
  computed: {
    filterItem() {
      return {
        search: this.searchData.searchText,
        classification_id: this.searchData.classification
          ? this.searchData.classification.id
          : null,
        region_id: this.searchData.regions ? this.searchData.regions.id : null,
        competence_id: this.searchData.competence
          ? this.searchData.competence.id
          : null,
      };
    },
    links() {
      return this.metadata.links;
    },
    currentPage() {
      return this.metadata.current_page;
    },
    lastPage() {
      return this.metadata.last_page;
    },
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
  mounted() {
    this.loadList({ current_page: 1 });
  },
  methods: {
    async loadList(metaInfo) {
      if (!this.userIsSubNetwork) {
        return;
      }
      try {
        let params = {
          page: metaInfo.current_page,
          paginate: 10,
          ...this.filterItem,
        };
        //return this.items_test;
        const res = await MembersApi.getAll(params);
        this.items = res.data.data;
        this.metadata = res.data.meta;
      } catch (error) {
        console.log("error", error);
        console.log("response", error.response);
      }
    },
    navigate(link) {
      if (link.label == "pagination.previous") {
        if (this.currentPage == 1) {
          return;
        }
        this.loadList({ current_page: this.currentPage - 1 });
      }
      if (link.label == "pagination.next") {
        if (this.currentPage == this.lastPage) {
          return;
        }
        this.loadList({ current_page: this.currentPage + 1 });
      } else {
        this.loadList({ current_page: link.label });
      }
    },
  },
};
</script>

<style scoped>
.empty-tab {
  display: block;
  text-align: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
}
.empty-img {
  width: 50%;
}
.main-text {
  font-size: 32px;
  color: #414042;
}
.sec-text {
  margin-top: 10px;
  font-size: 24px;
  color: #737373;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

@media (max-width: 920px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 426px) {
  .grid-container {
    padding-inline: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 376px) {
  .grid-container {
    padding-inline: 10px;
    grid-template-columns: 1fr;
  }
}
.item-card-container {
  margin-top: 20px;
}
:root {
  --primary: #23adad;
  --greyLight: #23adade1;
  --greyLight-2: #cbe0dd;
  --greyDark: #2d4848;
}

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
