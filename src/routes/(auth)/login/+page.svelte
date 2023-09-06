
<!--<script lang="ts">
	import AuthForm from '$lib/components/forms/auth.svelte'

	export let data
</script>

<div class="mx-auto mt-32 max-w-sm">
	<h1>Log in</h1>
	<AuthForm data={data.form} />
	<p class="mt-4">
		Don't have an account? <a href="/register">Register</a>
	</p>
</div>-->
<script>
    import { onMount, onDestroy } from 'svelte';
    import { auth } from './auth.js';

    let user;

    onMount(() => {
        const { user } = await auth.login('username', 'password');
        if (user) {
            // The user is logged in, redirect to the home page.
            window.location.href = '/home';
        }
    });
 // Make the login request when the button is clicked.
    const login = () => {
        const { status } = await auth.login('username', 'password');
        if (status === 'success') {
            // The login was successful.
        } else if (status === 'error') {
            // The login failed.
        }
    };
    onDestroy(() => {
        // Log out the user.
        auth.logout();
    });
</script>

<h1>Login</h1>

<button on:click="login">Login</button>
