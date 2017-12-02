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
      // recipes:[],
      recipeName: "",
      stepNextText: "Continue",
      stepBackText: "Back",
      stepSubmitText: "Submit",
      toolbarColor: "pink",
      clearable:false,
      chip:true ,
      addedFood:true


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

      console.log(recipe)

    },
    addIngredient(ingredient){
      this.ingredient= ""
      this.ingredients.push(ingredient);
      this.clearable= true
      this.chip=true
    },
    addDirection(direction){
      this.direction= ""
      this.directions.push(direction)
      console.log(direction)
      this.clearable= true
      this.chip=true
    },
    addFoodToDatabase: function() {
  $.ajax({
    method: "POST",
    url: "/api/entry",
    data: {
      category: this.currentCategory,
      recipeName: this.recipeName,
      ingredients: this.ingredients,
      directions:this.directions,
    },
    success: function(data) {

    }
  })
},


  },
    created: function() {
      this.FoodCategories();

  },
})
