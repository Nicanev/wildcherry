<script>
export default {
  data() {
    return {
      isCatalogOpen: false,
      currentCatalogCategory: "Electronic",
      test: "dsad",
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
