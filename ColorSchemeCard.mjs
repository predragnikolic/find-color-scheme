export const ColorSchemeCard = ({colorScheme}) => {
    const id = encodeURI(colorScheme.replaceAll(' ', '_').toLowerCase())
    return `
    <div class='item'>
        <img loading='lazy' src="screenshots/${colorScheme}.png">
        <a class="item_title" id="${id}" href="#${id}">${colorScheme}</a>
    </div>
`}
