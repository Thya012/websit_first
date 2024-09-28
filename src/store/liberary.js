
import { defineStore } from "pinia";

const useHeroStore = defineStore('hero',{
    state: ()=>({
        heroes: [
          {
            image:"assets/img/food/img-5.png",
            title_hero:"fried_food",
            description:"dec_fried"
          },
          {
            image:"assets/img/food/img-8.png",
            title_hero:"soup",
            description:"dec_soup"
          },{
            image:"assets/img/food/img-2.png",
            title_hero:"roasting",
            description:"dec_roasting"
          }],
         
    }),
});
const useNavStore = defineStore('nav',{
  state: ()=>({
    navs: [{
      name: 'home', path: "/"
    },
    {
      name: "about", path: "/about"
    },
    {
      name: "menu", path: "/menu"
    },
    {
      name: "special", path: "/special"
    },
    {
      name: "food", path: "/food"
    },
    
    
   
    
      {
      name: "service", path: "/service"
    }],
       
  }),
});

export {useHeroStore, useNavStore}
