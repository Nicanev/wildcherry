<script>
export default {
  data() {
    return {
      isCatalogOpen: false,
      currentCatalogCategory: "Electronic",
      filters: [
        {
          title: "Категория",
          type: "check",
          hide: false,
          items: [
            { name: "Защитное стекло (5)", id: "glass" },
            { name: "Смартфон (10)", id: "phone" },
          ],
        },
        {
          title: "Срок доставки",
          type: "radio",
          hide: false,
          items: [
            { name: "День 1", id: "day1" },
            { name: "День 2", id: "day2" },
            { name: "День 3", id: "day3" },
          ],
        },
        {
          title: "Бренд",
          type: "check",
          hide: false,
          items: [{ name: "Nothing", id: "Nothing" }],
        },
        {
          title: "Продавец",
          type: "check",
          hide: false,
          items: [{ name: "MobileShop", id: "MobileShop" }],
        },
        {
          title: "Цена, ₽",
          type: "cost",
          hide: false,
          items: [{ name: "MobileShop", id: "MobileShop" }],
        },
        {
          title: "Цвет",
          type: "color",
          hide: false,
          items: [{ name: "MobileShop", id: "MobileShop" }],
        },
      ],
    };
  },
  methods: {
    openCatalog() {
      this.isCatalogOpen = !this.isCatalogOpen;
    },
    selectCatalogCategory(category) {
      this.currentCatalogCategory = category;
    },
  },
};
</script>
