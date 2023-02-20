<script>
  import '../app.css';
  import { base } from '$app/paths';

  const toggleMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
</script>

<div class="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
  <div class="flex flex-row">
    <h1 class="fond-bold flex-auto space-x-2 text-3xl underline">
      <a href="{base}/">home</a>
      <a href="{base}/about">about</a>
    </h1>
    <button class="rounded-lg bg-slate-800 p-2 text-sm text-white shadow-xl" on:click={toggleMode}>mode</button>
  </div>
  <slot />
</div>
