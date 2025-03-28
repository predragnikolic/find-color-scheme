import colorSchemes from "./color-schemes.json" with { type: "json" };
import {ColorSchemeCard} from './ColorSchemeCard.mjs'

await Deno.writeTextFile("index.html", `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="icon" href="/img/favicon.svg"> -->
    <meta name="theme-color" content="#161e19">
    <meta charset="utf-8">
    <title>Find Color Scheme - Sublime Text</title>

    <link rel="preload" href="css/main.css" as="style" />
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>

    <section class='first_section'>
        <div class="noise-overlay"></div>
        <div style="padding: 2rem">
          <h1>Find Color Scheme</h1>

          <p style="display: flex; align-items: center; justify-content: center; gap: 1rem">for <img src="img/st.png" height="50px" /></p>
          <input placeholder="bg color #FFFFFF" style="margin-top: 2rem" maxlength="7" required>
        </div>
        <section id='results' style="margin: 2rem 0"></section>
    </section>

    <p class="section_title">All</p>
    <section class="color_schemes_grid">${colorSchemes.map(colorScheme => ColorSchemeCard({colorScheme})).join('')}</section>

    <button onclick="backToTop()" id="scrollToTopBtn" title="Go to top">Back to Top</button>
    <script>
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        window.onscroll = function() {
          scrollFunction();
        };
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
          } else {
            scrollToTopBtn.style.display = "none";
          }
        }
        function backToTop() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
    </script>

    <script type="module" src="script.mjs"></script>
</body>
</html>
`)
