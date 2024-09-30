



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
          title:"Catering",
          description:"Elevate your events with J Lin Restuarent with the premier catering services. Whether it’s an intimate business lunch or a grand celebration,we specialize in delivering exceptional, bespoke dining experiences across Phnom Penh."

        },
        {
          image:"assets/icon/wine.png",
          title:"Wine collection",
          description:"Wine Connection is the leading chain of wine shops and wine-themed restaurants in South-East Asia. Established in 1998, Wine Connection has been developing expertise in wine for over 20 years."

        },
        {
          image:"assets/icon/customer.png",
          title:"Catering",
          description:"An order issued on receiving an order form customers, and refers to the order information received from customers. It is given customer number and the number of the person in charge of receiving the order as well as product number, delivery date, and quantity."

        },{
          image:"assets/icon/delivery.png",
          title:"Delivery",
          description:" We cooperate with the best devivery partner to list your menu and product lists online, help you process orders, pick them up, and deliver to customers – in a heartbeat!"
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
    }],
       
  }),
});




export {useHeroStore, useNavStore, 
  useBreafastStore, useLunchStore,
  useDinnerStore, useServicesStore,
  
  

}
