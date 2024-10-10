



import { defineStore } from "pinia";

///Menu breakfast, lunch , dinner

const useBreafastStore = defineStore('breakfast',{
  state: ()=>({
    breakfasts: [
        {
          image:"assets/img/food/papaya.jpg",
          title:"papaya",
          price: "$ 2.5",
          description:"Super easy, this papaya boat recipe is quick and tasty summer breakfast, lunch or dinner for one! If papaya is not in season, swap for half a rockmelon."

        },
        {
          image:"assets/img/food/Banana-bars.jpg",
          title:"Banana-bars",
          price: "$ 4.00",
          description:"These banana oat bars are great for an on-the-go breakfast or to add to a school or work packed lunch."
        },{
          image:"assets/img/food/Perfect-Porridge.jpg",
          title:"Perfect-Porridge",
          price: "$ 3.50",
          description:"Getting tired of the same breakfast every morning? Why not try this super speedy; cook in a microwave, flavour-packed porridge."
        }],
       
  }),
});
/// Lunch
const useLunchStore = defineStore('lunch',{
  state: ()=>({
    lunches: [
        {
          image:"assets/img/food/salmon.webp",
          title:"salmon",
          price: "$ 12.5",
          description:"A simple, fresh and delicious salmon recipe that anyone can enjoy. Add a teaspoon of capers, some sliced spring onions or a sprinkle of chives for an extra zing."

        },
        {
          image:"assets/img/food/teryaki-salmon-steamed.jpg",
          title:"Teryaki salmon steamed",
          price: "$ 14.00",
          description:"You only need four ingredients to make homemade teriyaki sauce!"
        },{
          image:"assets/img/food/aubergine-pizza.jpg",
          title:"Subergine pizza",
          price: "$ 13.50",
          description:"Eggplants are a low-carb, low calorie and nutritious vegetable. This aubergine and cheese pizza recipe offers a healthy alternative to your usual pizza base."
        }],
       
  }),
});
/// Dinner
const useDinnerStore = defineStore('dinner',{
  state: ()=>({
    dinners: [
        {
          image:"assets/img/food/img-7.jpg",
          title:"Low carb spaghetti marinara",
          price: "$ 14.5",
          description:"Delicious spaghetti marinara, on the table in 20 minutes. By swapping out spaghetti for zucchini noodles you turn this hearty seafood dish into a low carb delight."

        },
        {
          image:"assets/img/food/honey-orange.jpeg",
          title:"honey orange",
          price: "$ 17.00",
          description:"These chicken drumsticks are coated in honey and spice and all things nice."
        },{
          image:"assets/img/food/spring-feta-and-lamb-salad.jpeg",
          title:"Spring feta and lamb salad",
          price: "$ 18.50",
          description:"Treat the family to this delicious and healthy spring feta & lamb salad."
        }],
       
  }),
});

//Services
const useServicesStore = defineStore('services',{
  state: ()=>({
    services: [
        {
          image:"assets/icon/catering.png",
          title:"catering_title",
          description:"catering_desc"

        },
        {
          image:"assets/icon/wine.png",
          title:"win_title",
          description:"win_desc"

        },
        {
          image:"assets/icon/customer.png",
          title:"chat_title",
          description:"chat_desc"

        },{
          image:"assets/icon/delivery.png",
          title:"delivery_title",
          description:"delivery_desc"
        }],
       
  }),
});






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
    },
    {
      name: "login", path: "/login"
    }],
       
  }),
});
//Special

const useSpecialStore = defineStore('special',{
  state: ()=>({
    specials: [
        {
          image:"assets/img/food/img-7.jpg",
          title:"Low carb spaghetti marinara",
          price: "$ 14.5",
          s_price:"$ 10.5",
          description:"Delicious spaghetti marinara, on the table in 20 minutes. By swapping out spaghetti for zucchini noodles you turn this hearty seafood dish into a low carb delight."

        },
        {
          image:"assets/img/food/honey-orange.jpeg",
          title:"honey orange",
          price: "$ 17.00",
          s_price:"$ 13.5",
          description:"These chicken drumsticks are coated in honey and spice and all things nice."
        },{
          image:"assets/img/food/spring-feta-and-lamb-salad.jpeg",
          title:"Spring feta and lamb salad",
          price: "$ 18.50",
          s_price:"$ 14.5",
          description:"Treat the family to this delicious and healthy spring feta & lamb salad."
        }],
       
  }),
});




export {useHeroStore, useNavStore, 
  useBreafastStore, useLunchStore,
  useDinnerStore, useServicesStore,
  useSpecialStore
  
  

}
