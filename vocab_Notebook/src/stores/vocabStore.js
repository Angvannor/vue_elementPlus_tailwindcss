import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

const defaultVocabs = [
  {
    id: 1,
    name: "pray",
    nature: "v",
    interpretation: "祈祷",
    example: "Now all we have to is to help ourselves and pray to God",
  },
  {
    id: 2,
    name: "develop",
    nature: "v",
    interpretation: "使...发达",
    example: "She won a grant to develop her own business",
  },
  {
    id: 3,
    name: "inform",
    nature: "v",
    interpretation: "通知",
    example: "I informed them about the party",
  },
];

const STORAGE_KEY = "my-vocab-app-data";

export const useVocabStore = defineStore("todo", {
  state: () => {
    const storedVocabs = localStorage.getItem(STORAGE_KEY);

    return {
      vocabs: storedVocabs ? JSON.parse(storedVocabs) : defaultVocabs,
    };
  },
  actions: {
    addVocab(newVocab) {
      if (
        newVocab.name.trim() === "" ||
        newVocab.nature.trim() === "" ||
        newVocab.interpretation.trim() === "" ||
        newVocab.example.trim() === ""
      ) {
        return false;
      } else {
        this.vocabs.push({
          id: Date.now(),
          name: newVocab.name,
          nature: newVocab.nature,
          interpretation: newVocab.interpretation,
          example: newVocab.example,
        });
        return true;
      }
    },
    deleteVocab(vocabId) {
      this.vocabs = this.vocabs.filter((vocab) => vocab.id !== vocabId);
    },
  },
});
