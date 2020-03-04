import Hello from "./Hello.svelte";
import State from "./State.svelte";
import Animate from "./Animate.svelte";
import Slots from "./Slots.svelte";
import Layout from "./Layout.svelte";

const routes = [
  {
    name: "/",
    component: Hello,
    layout: Layout
  },
  { name: "/state", component: State, layout: Layout },
  { name: "/animate", component: Animate, layout: Layout },
  { name: "/slots", component: Slots, layout: Layout }
];

export { routes };
