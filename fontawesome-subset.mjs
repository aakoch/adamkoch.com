// Import fontawesome-subset
import { fontawesomeSubset } from "fontawesome-subset";

// Create or append a task to be ran with your configuration
// fontawesomeSubset(['feather', 'pencil-ruler', 'angle-double-right', 'external-link-alt', 'archive', 'microchip', 'paint-brush', 'code-branch', 'cube', 'id-card', 'twitter', 'github'], 'sass/webfonts');

fontawesomeSubset(
  {
      solid: ['feather', 'pencil-ruler', 'angle-double-right', 'external-link-alt', 'archive', 'microchip', 'paint-brush', 'code-branch', 'cube', 'id-card', 'sink'],
      brands: ["twitter', 'github"],
  },
  "dist/fonts"
);
