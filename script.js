// Array of album data for 100 albums (add your albums here)
const albums = [
    {
        title: "Album 1",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 2",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "A masterpiece in modern music.",
        mostPlayed: ["DJ Zeta"],  // Add DJ(s) here
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 3",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 4",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 5",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 6",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 7",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 8",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Best album of the year.",
        mostPlayed: ["DJ Alpha", "DJ Beta", "DJ Gamma"],  // Add up to 3 DJs
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    // Add more albums here in this format, up to 100 albums
    {
        title: "Album 100",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 100. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        quote: "Incredible soundscapes and storytelling.",
        mostPlayed: ["DJ Delta", "DJ Omega"],  // Add DJ(s) here
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    }
];

// Function to create an album card and add it to the page
function addAlbum(album) {
    const albumList = document.getElementById('album-list');
    
    // Build the "Most Played" section (handles 0, 1, 2, or 3 DJs)
    let mostPlayedSection = '';
    if (album.mostPlayed && album.mostPlayed.length > 0) {
        mostPlayedSection = `
            <div class="most-played mt-3">
                <h6>Most Played by:</h6>
                <ul class="list-unstyled">
                    ${album.mostPlayed.map(dj => `<li>${dj}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Create a new card for the album
    const albumCard = `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="${album.img}" class="card-img-top" alt="${album.title}">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.review}</p>
                    <blockquote class="blockquote mb-0">
                        <p>"${album.quote}"</p>
                    </blockquote>
                    ${mostPlayedSection}  <!-- Inserted Most Played section -->
                    <div class="mt-3">
                        <a href="${album.links.bandcamp}" class="btn btn-sm btn-outline-primary">Listen on Bandcamp</a>
                        <a href="${album.links.spotify}" class="btn btn-sm btn-outline-secondary">Listen on Spotify</a>
                        <a href="${album.links.apple}" class="btn btn-sm btn-outline-success">Listen on Apple Music</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the new album card to the album list
    albumList.innerHTML += albumCard;
}

// Function to add all albums on page load
function addAllAlbums() {
    for (let i = 0; i < albums.length; i++) {
        addAlbum(albums[i]);
    }
}

// Run the function to add all albums when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    addAllAlbums();
});
