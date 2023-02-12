<script>
  export let data;
  // console.log(data);
  const { products } = data;
  const { users } = data;
</script>

{#each products as product}
  <h2>{product.title}</h2>
  <h3>($ {product.price})</h3>
{/each}

{#each users as user}
  <p>{user.firstName}({user.age})</p>
{/each}
