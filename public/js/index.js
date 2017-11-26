Vue.use(Vuetify);
Vue.component('carousel-3d', Carousel3d.Carousel3d);
Vue.component('slide', Carousel3d.Slide);

var app = new Vue({
  el: "#app",
  data: {
    foodName: "",
    newfoodType: "",
    food: [],
    categories: [],
    currentRecipe: {},
    currentCategory: {},
    showRecipeInfo: false,
    showCategories: false,

    images: [
      "https://www.martialtribes.com/wp-content/uploads/2017/09/veggie_main-1024x886.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
      "https://image.freepik.com/free-photo/food-background-food-concept-with-various-tasty-fresh-ingredients-for-cooking-italian-food-ingredients-view-from-above-with-copy-space_1220-1491.jpg"],
  },
  methods: {
    addFoodToDatabase: function() {
      $.ajax({
        method: "POST",
        url: "/api/food",
        data: {
          name: app.foodName,
          type: app.newfoodType,
        },
        success: function(data) {
           app.food.push(data)
           app.foodName = ""
           app.newfoodType=""
           app.addedFood = true;
           setTimeout(function(){
             app.addedFood = false;
           },2000)
        }
      })
    },
    getFoodListFromServer() {
      $.ajax({
        url: "/api/recipes/",
        success: function(data) {
          app.food = data
          console.log(data)
        }
      })
    },
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
    setCategory(category) {
      console.log("Setting category: " + category.name);
      this.currentCategory = category;
      this.setRecipe(category.Recipes[0]);
      this.showRecipeInfo = false;
    },
    setRecipe(recipe){
      this.showRecipeInfo = true;
      this.currentRecipe = recipe;
    }
  },
  created: function() {
    this.getFoodListFromServer();
    this.getFoodCategories();
  },
})
