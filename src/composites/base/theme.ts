import log from 'loglevel';
import { watch, Ref } from 'vue';

function initTheme(colorRef: Ref<string>) {
  watch(colorRef, applyThemeColor);
}

function applyThemeColor(color: string) {
  const shades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  log.info(`setting primary theme color to '${color}'.`);
  for (const shade of shades) {
    // e.g., --primary_1000: var(--blue_1000);
    const { style } = document.documentElement;
    style.setProperty(`--primary_${shade}`, `var(--${color}_${shade})`);
  }
}

export { initTheme };
