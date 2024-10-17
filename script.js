// Array of album data for 100 albums (add your albums here)
const albums = [
    {
        title: "Album 1",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: [
            { name: "DJ Alpha", link: "#" },
            { name: "DJ Beta", link: "#" },
            { name: "DJ Gamma", link: "#" }
        ],
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    // More albums go here...
];

// Function to create an album card and add it to the page
function addAlbum(album, index) {
    const albumList = document.getElementById('album-list');
    
    // Build the "Most Played" section with DJ names as hyperlinks
    let mostPlayedSection = '';
    if (album.mostPlayed && album.mostPlayed.length > 0) {
        mostPlayedSection = `
            <div class="most-played mt-3">
                <h6>Most Played by:</h6>
               
