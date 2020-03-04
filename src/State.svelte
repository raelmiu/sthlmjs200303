<script>
  // an observable variable.
  import { writable } from "svelte/store";
  let count = writable(0);

  function decrement() {
    count.update(n => n - 1);
  }
  function increment() {
    count.update(n => n + 1);
  }
</script>

<div class="wrapper">
  <!-- the $ is shorthand for subscribing to this variable -->
  <h1>{$count}</h1>
  <button on:click={increment}>Add 1</button>
  <button on:click={decrement}>Remove 1</button>
</div>
