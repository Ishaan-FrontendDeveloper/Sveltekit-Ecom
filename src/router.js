import { createRouter } from 'svelte-routing';

const router = createRouter({
  routes: [
    {
      path: '/login',
      component: './routes/(auth)/login/+page.svelte',
    },
    {
      path: '/',
      component: './routes/+page.svelte',
    },
  ],
});

export default router;
