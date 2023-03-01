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

<header>
  <nav class="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
    <div class="p-2 font-bold text-purple-300">
      <a href="{base}/">🥩 hello-svelte</a>
    </div>
    <ul class="flex justify-around">
      <li class="rounded-lg p-2 hover:bg-amber-500"><a href="{base}/modern">modern</a></li>
      <li class="rounded-lg p-2 hover:bg-amber-500"><a href="{base}/regex">regex</a></li>
      <li class="rounded-lg p-2 hover:bg-amber-500"><a href="{base}/about">about</a></li>
    </ul>
    <div>
      <button class="rounded-lg bg-slate-800 p-2 text-sm text-white hover:bg-slate-500" on:click={toggleMode}
        >mode</button
      >
    </div>
  </nav>
</header>
<main class="h-screen bg-gray-100 pt-4 dark:bg-gray-400"><slot /></main>
<footer class="bg-gray-100 dark:bg-gray-400">
  <p class="text-center">testing...</p>
</footer>
