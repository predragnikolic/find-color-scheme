import json from "./data.json" with { type: "json" };
import {ColorSchemeCard} from './ColorSchemeCard.mjs'


function areColorsSimilar(color1, color2, tolerance = 10) {
  function hexToRgb(hexColor) {
    hexColor = hexColor.replace("#", "");
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    return [r, g, b];
  }

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  return (
    Math.abs(r1 - r2) <= tolerance &&
    Math.abs(g1 - g2) <= tolerance &&
    Math.abs(b1 - b2) <= tolerance
  );
}

const input = document.querySelector('input')
const resultsSection = document.querySelector('#results')

const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;


input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      const match = []
      const inputBgColor = event.target.value

      if (!hexColorRegex.test(inputBgColor)) {
            input.setCustomValidity("Please enter a valid 6-character hex color code (e.g., #RRGGBB).");
            input.reportValidity(); // This will trigger the browser's built-in validation UI
            return; // Stop further processing if the input is invalid
        } else {
            // Clear the custom validity if the input is valid
            input.setCustomValidity('');
        }

      for (const [key, value] of Object.entries(json)) {
        const colorSchemeBg = value.color_scheme.palette.background
        if (areColorsSimilar(inputBgColor, colorSchemeBg)) {
          match.push(key)
        }
      }

      if (match.length === 0) {
        resultsSection.innerHTML = `
          <p style='text-align: center; margin: 3rem; opacity: 0.3; font-weight:bold'>No results</p>
        `
        return
      }

      resultsSection.innerHTML = `
        <p class="section_title">Results</p>
        <div class="color_schemes_grid">
          ${match.map(colorScheme =>  ColorSchemeCard({colorScheme})).join('')}
        </div>
      `
    }
});
