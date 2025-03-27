import colorSchemes from "./color-schemes.json" with { type: "json" };


const ColorScheme = ({colorScheme}) => {
    const id = encodeURI(colorScheme.replaceAll(' ', '_').toLowerCase())
    return `
    <div class='item'>
        <img loading='lazy' class="box-shadow" src="/screenshots/${colorScheme}.png">
        <a class="item_title" id="${id}" href="#${id}">${colorScheme}</a>
    </div>
`}

await Deno.writeTextFile("index.html", `
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="icon" href="/img/favicon.svg"> -->
    <meta name="theme-color" content="#161e19">
    <meta charset="utf-8">
    <title>Find Color Scheme - Sublime Text</title>

    <link rel="preload" href="/main.css" as="style" />
    <link rel="stylesheet" type="text/css" href="/main.css">
</head>
<body>
    <section class='first_section'>
        <h1>Find Color Scheme</h1>
        <p>for Sublime Text</p>
    </section>
    <section class="color_schemes_grid">${colorSchemes.map(colorScheme => ColorScheme({colorScheme})).join('')}</section>
</body>
</html>
`)
