<script lang="ts">
  let regex: string = '[a-z]{2}\\d\\D';
  let txt: string = 'ab0c1d ef2g3hij';
  let answer: string | undefined = '';

  const whenTyping = () => {
    try {
      let regexp = new RegExp(regex);
      answer = getAnswer(txt, regexp)?.join() ?? ' ';
    } catch {
      answer = '[Expression Error]';
    }
  };

  const getAnswer = (str: string, regexp: RegExp) => str.match(new RegExp(regex));

  whenTyping();
</script>

<div class="mx-auto flex h-2/3 w-2/3 flex-col-reverse items-center justify-around border-2">
  <div class="w-2/3 border-2 border-red-400">
    <h1>sample</h1>
    <input class="w-full" bind:value={txt} on:keyup={whenTyping} />
  </div>
  <div class="w-2/3 border-2 border-red-400">
    <h1>regex</h1>
    <input class="w-full" bind:value={regex} placeholder="regular expression" on:keyup={whenTyping} />
  </div>
  <div class="w-2/3 border-2 border-red-400">
    <h1>result</h1>
    <input class="w-full font-bold italic" bind:value={answer} />
  </div>
</div>
