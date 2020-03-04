<script>
  import { Route } from "svelte-router-spa";
  export let currentRoute;
  const params = {};
</script>

<style>
  section {
    margin: 2rem auto;
    width: 80vw;
    max-width: 768px;
  }
</style>

<div class="app">
  <nav>
    <a href="/">Hello</a>
    <a href="/state">State</a>
    <a href="/animate">Animate</a>
    <a href="/slots">Slots</a>
  </nav>
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
</div>
