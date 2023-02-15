<script>
  const toggleMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
</script>

<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
  <div class="m-10 rounded-lg bg-white p-6 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800">
    <h3 class="mt-2 text-base font-medium tracking-tight text-slate-900 dark:text-white">Sveltekit & Tailwindcss</h3>
    <p class="mt-2 mb-2 text-sm text-slate-500 dark:text-slate-400">
      Noto is a global font collection for writing in all modern and ancient languages. Noto Sans KR is an unmodulated
      (“sans serif”) design for the Korean language using Hangul and the Korean Hanja scripts. It also supports
      Hiragana, Katakana, Latin, Cyrillic and Greek. It has multiple weights.한글
    </p>
    <button class="rounded-lg bg-red-200 p-2 text-sm shadow-xl" on:click={toggleMode}>dark mode</button>
  </div>
</div>
