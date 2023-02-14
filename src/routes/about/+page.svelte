<script>
  export let data;
  // console.log(data);
  const { products } = data;
  const { users } = data;
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
