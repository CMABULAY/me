new Vue({
    el: '#app', 
    vuetify: new Vuetify(),
    data: () => ({
        overlay: true,
      }),  
      created() { 
         setTimeout(() => {
            this.overlay = false
          }, 3000) 
      },  
  })  