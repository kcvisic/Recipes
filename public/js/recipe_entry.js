Vue.use(Vuetify);

var app = new Vue({
  el:"#app",
  data: {

      categories: [],
      currentStep: 1,
      currentCategory: {},
      ingredients: [],
      ingredient: "",
      directions: [],
      direction:"",
      recipes:[],
      recipeName: "",
      stepNextText: "Continue",
      stepBackText: "Back",
      stepSubmitText: "Submit",
      toolbarColor: "pink",
    
  },

  methods: {
    FoodCategories() {
      $.ajax({
        url: "/api/categories/",
        success: function(data) {
          app.categories = data;

        }
      })
    },
    AddRecipe(recipe){
      this.recipes.push(recipe);
      console.log(recipe)
    },
    addIngredient(ingredient){
      this.ingredients.push(ingredient);

    },
    addDirection(direction){
      this.directions.push(direction)
      console.log(direction)
    },
  },
    created: function() {
      this.FoodCategories();

  },
})
