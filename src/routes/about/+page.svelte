<script>
  import { base } from '$app/paths';
  export let data;
  // console.log(data);
  const { products } = data;
  const { users } = data;

  let a = 0;
  let b = 0;
  let total = 0;

  async function add() {
    const response = await fetch(base + '/api/add', {
      method: 'POST',
      body: JSON.stringify({ a, b }),
      headers: {
        'content-type': 'application/json'
      }
    });

    total = await response.json();
  }
</script>

<h1 class="text-2xl font-bold">Async Waterfall Test</h1>

<ul class="list-inside list-[upper-roman] p-10">
  {#each products as product}
    <li>{product.title} (only $ {product.price})</li>
  {/each}
</ul>
<ul class="list-outside list-disc pl-10">
  {#each users as user}
    <li>{user.firstName} ({user.age})</li>
  {/each}
</ul>
<br />
<h1>+server api test</h1>
<input type="number" bind:value={a} /> +
<input type="number" bind:value={b} /> =
{total}

<button on:click={add}>Calculate</button>
