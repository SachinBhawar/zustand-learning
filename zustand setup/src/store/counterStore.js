import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })), // when we need previous state then only we have to use (state)=>
    reset: () => set({ count: 0 }),
}));

export default useCounterStore;
