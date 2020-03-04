<script>
  // slots are how svelte components wrap other components, like {props.children} in react.
  // in this example I'm styling the slots in a seperate file.
  import SlotBox from "./SlotBox.svelte";
  import Animation from "./Animate.svelte";
  import State from "./State.svelte";
</script>

<SlotBox>
  <h1>SthlmJS</h1>
  <p>The line is sooo long</p>
  <Animation />
</SlotBox>
<SlotBox>
  <State />
</SlotBox>
