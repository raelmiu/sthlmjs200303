<script>
  // css opacity transition
  import { fade } from "svelte/transition";
  // easing math, thank you!
  import { elasticOut } from "svelte/easing";

  let visible = true;

  // creates a CSS animation based on ticks
  function spin(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
      }
    };
  }
</script>

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <!-- Check out these binders, in: & out:, how great is that? -->
  <div class="centered" in:spin={{ duration: 8000 }} out:fade>
    <span>transitions!</span>
  </div>
{/if}
