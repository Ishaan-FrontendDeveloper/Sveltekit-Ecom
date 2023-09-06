<script lang="ts">
	import '../app.postcss';
  import Heading from './heading.svelte';
  import Footer from './footer.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Heading />
<slot />
<Footer />
