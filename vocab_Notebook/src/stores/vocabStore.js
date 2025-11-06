import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

export const useVocabStore = defineStore("todo", {
  state: () => ({
    vocabs: [
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
    ],
  }),
  action: {
    addVocab(newVocab) {
      if (
        newVocab.name.trim() === "" ||
        newVocab.nature.trim() === "" ||
        newVocab.interpretation.trim() === "" ||
        newVocab.example.trim() === ""
      ) {
        ElMessage.warning("添加内容不能为空");
        return;
      } else {
        this.vocabs.push({
          id: Date.now(),
          name: newVocab.name,
          nature: newVocab.nature,
          interpretation: newVocab.interpretation,
          example: newVocab.example,
        });
      }
    },
    deleteVocab(vocabId) {
      this.vocabs = this.vocabs.filter((vocab) => vocab.id !== vocabId);
    },
  },
});
