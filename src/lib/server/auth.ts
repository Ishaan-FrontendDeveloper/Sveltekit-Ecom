import {lucia} from 'lucia'
import {prisma} from '@lucia-auth/adapter-prisma'
import { dev } from '$app/environment'
import {sveltekit} from "lucia/middleware"
import prismaClient from './database'

export const auth = lucia({
	adapter: prisma(prismaClient),
	env: dev ? 'DEV' : 'PROD',
	transformUserData: (userData) => {
		return {
			userId: userData.id,
			username: userData.username,
		}

	},
  
})

export type Auth = typeof auth
