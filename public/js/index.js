Vue.use(Vuetify);
Vue.component('carousel-3d', Carousel3d.Carousel3d);
Vue.component('slide', Carousel3d.Slide);

var app = new Vue({
  el: "#app",
  data: {
    categories: [],
    currentRecipe: {},
    currentCategory: {},
    showRecipeInfo: false,
    showCategories: false,

  },
  methods: {

    getFoodCategories() {
      $.ajax({
        url: "/api/categories/",
        success: function(data) {
          app.categories = data;
          app.showCategories = true;
          app.setCategory(app.categories[0]);
          console.log(data);
        }
      })
    },
    //the currentCategory is set on the slide click
    setCategory(category) {
      console.log("Setting category: " + category.name);
      this.currentCategory = category;
      this.setRecipe(category.Recipes[0]);
      this.showRecipeInfo = false;
    },
    setRecipe(recipe) {
      this.currentRecipe = recipe;
      this.showRecipeInfo = true;

    }
  },
  created: function() {
    this.getFoodCategories();
  },
})
