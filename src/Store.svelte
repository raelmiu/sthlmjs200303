<script>
  import { writable } from "svelte/store";
  import { readable } from "svelte/store";

  const count = writable(0, () => {
    console.log("got a subscriber");
    return () => console.log("no more subscribers");
  });

  count.set(1); // does nothing

  const unsubscribe = count.subscribe(value => {
    console.log(value);
  }); // logs 'got a subscriber', then '1'

  unsubscribe(); // logs 'no more subscribers'

  const time = readable(new Date(), set => {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div>
  <button on:click={time()} />
</div>
