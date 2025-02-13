import { create } from "zustand";

const smthStore = () => ({
  counter: [{ soni: 1 }],
  count: [],

});
const useMyStore = create(smthStore);

export default useMyStore;
