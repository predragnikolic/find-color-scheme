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

    <link rel="preload" href="main.css" as="style" />
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>

    <section class='first_section'>
        <h1>Find Color Scheme</h1>
        <p>for Sublime Text</p>
        <input placeholder="bg color #FFFFFF" style="margin-top:4rem">
        <section id='results' style="margin: 2rem 0"></section>
    </section>

    <p class="section_title">All</p>
    <section class="color_schemes_grid">${colorSchemes.map(colorScheme => ColorSchemeCard({colorScheme})).join('')}</section>
    <script type="module" src="script.mjs"></script>
</body>
</html>
`)
