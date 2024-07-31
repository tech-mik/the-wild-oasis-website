'use server'

import { signIn, signOut } from '@/auth'
import { revalidatePath } from 'next/cache'

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' })
}
