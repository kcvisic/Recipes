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
      clearable:false,
      chip:true ,


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
      this.clearable= true
      this.chip=true
    },
    addIngredient(ingredient){
      this.ingredients.push(ingredient);
      this.clearable= true
      this.chip=true
    },
    addDirection(direction){
      this.directions.push(direction)
      console.log(direction)
      this.clearable= true
      this.chip=true
    },


  },
    created: function() {
      this.FoodCategories();

  },
})
