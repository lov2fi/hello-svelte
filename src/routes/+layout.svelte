<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<h1 class="fond-bold space-x-2 text-3xl underline">
  <a href="{base}/">home</a>
  <a href="{base}/about">about</a>
</h1>
<slot />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.orange.100);
  }
</style>
