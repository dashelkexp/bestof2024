// Sample album data (this could come from a form, API, or database in the future)
const albums = [
    {
        title: "Album 1",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 1. Lorem ipsum...",
        quote: "Best album of the year.",
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    },
    {
        title: "Album 2",
        img: "https://via.placeholder.com/150",
        review: "This is a 200-word review of Album 2. Lorem ipsum...",
        quote: "Must-listen for music lovers.",
        links: {
            bandcamp: "#",
            spotify: "#",
            apple: "#"
        }
    }
    // You can add more album objects here
];

// Function to create an album card and add it to the page
function addAlbum(album) {
    const albumList = document.getElementById('album-list');
    
    // Create a new card div for the album
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

// Example: Add the first album when the page loads
document.addEventListener("DOMContentLoaded", () => {
    addAlbum(albums[0]);  // You can change this to add multiple albums
});
