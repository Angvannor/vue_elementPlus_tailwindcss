import { computed, ref } from "vue";
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

  const chosenItems = ref([]);

  const addGood = (index) => {
    const itemToAdd = items.value[index];

    const existingIndex = chosenItems.value.findIndex((item) => item.name === itemToAdd.name);

    if (existingIndex > -1) {
      chosenItems.value[existingIndex].amount++;
    } else {
      chosenItems.value.push({
        ...itemToAdd,
        amount: 1,
      });
    }
  };

  const computeTotalPrice = computed(() => {
    return chosenItems.value.reduce((total, item) => {
      return total + item.price * item.amount;
    }, 0);
  });

  const increaseAmount = (name) => {
    const existingIndex = chosenItems.value.findIndex((item) => item.name === name);
    if (existingIndex > -1) {
      chosenItems.value[existingIndex].amount++;
    }
  };

  const decreaseAmount = (name) => {
    const existingIndex = chosenItems.value.findIndex((item) => item.name === name);
    if (existingIndex > -1) {
      chosenItems.value[existingIndex].amount--;

      if (chosenItems.value[existingIndex].amount === 0) {
        chosenItems.value.splice(existingIndex, 1);
      }
    }
  };

  return { items, chosenItems, addGood, computeTotalPrice, increaseAmount, decreaseAmount };
});
