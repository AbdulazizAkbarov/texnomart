import { create } from "zustand";

const smthStore = () => ({
  counter: [{ soni: 1 }],
  count: [],
});
const useSmthStore = create(smthStore);

export default useSmthStore;
