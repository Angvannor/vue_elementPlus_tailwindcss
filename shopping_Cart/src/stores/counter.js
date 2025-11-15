import { ref } from "vue";
import { defineStore } from "pinia";

export const useShoppingStore = defineStore("shopping", () => {
  const items = ref([
    {
      name: "bag",
      price: 160,
    },
    {
      name: "basketball",
      price: 80,
    },
    {
      name: "cake",
      price: 200,
    },
    {
      name: "camera",
      price: 1400,
    },
    {
      name: "earphone",
      price: 100,
    },
    {
      name: "glass",
      price: 600,
    },
    {
      name: "headphone",
      price: 800,
    },
    {
      name: "makeup",
      price: 400,
    },
    {
      name: "milk",
      price: 20,
    },
    {
      name: "shoe",
      price: 300,
    },
    {
      name: "sofa",
      price: 550,
    },
    {
      name: "strawberry",
      price: 5,
    },
    {
      name: "wine",
      price: 2000,
    },
  ]);

  const chosenItems = ref([
    {
      name: "",
      price: "",
      amount: "",
    },
  ]);

  const addGood = (index) => {
    chosenItems.value.push(items.value[index]);
  };

  const computeTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i++; i < chosenItems.value.length) {
      totalPrice += chosenItems[i].value.amount * chosenItems[i].value.price;
    }
    return totalPrice;
  };

  return { items, chosenItems, addGood };
});
