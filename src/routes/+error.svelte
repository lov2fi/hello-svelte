<script>
  import { page } from '$app/stores';
</script>

<h1>
  this is the global error view
  {$page.status}: {$page.error.message}
</h1>
