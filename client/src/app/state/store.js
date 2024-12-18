import { create } from 'zustand'
import {persist} from 'zustand/middleware'

export const useAuthStore = create(
    persist(
        (set, get) => ({
            isAuth: false,
            auth: () => set({isAuth: get().isAuth = true}),
            resetAuth: () => set({isAuth: false})
    }),
    {
        name: 'auth-storage'
    },
))