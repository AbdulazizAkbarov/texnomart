import { create } from "zustand";

const smthStore = () => ({
  counter: [{ soni: 1 }],
  count: [],
  currentSort: "price0",
  tartibi: false,
});
const useMyStore = create(smthStore);

export default useMyStore;
