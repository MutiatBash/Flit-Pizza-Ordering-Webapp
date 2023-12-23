import { create } from "zustand";

import React from 'react'

const cartState = create((set) => ({
    items:0,
    addToCart:()=> set((state)=>({items:state.items + 1})),
    removeFromCart:()=> set((state)=>({items:state.items - 1})),
    removeAllFromCart:()=> set({item:0}),
}));

export default cartState
