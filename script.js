document.addEventListener("DOMContentLoaded", () => {
    const albumList = document.getElementById('album-list');
    
    // Sample data for testing
    const album = {
        title: "Sample Album",
        img: "https://via.placeholder.com/150",
        review: "This is a sample review of the album. It’s a placeholder review.",
        quote: "This is an amazing album!",
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
    };
    
    // Create an album card
    const albumCard = `
        <div class="col-md-4 col-sm-6 col-12">
            <div class="card mb-4 shadow-sm">
                <img src="${album.img}" class="card-img-top" alt="${album.title}">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.review}</p>
                    <blockquote class="blockquote mb-0">
                        <p>"${album.quote}"</p>
                    </blockquote>
                    <div class="most-played">
                        <h6>Most Played by:</h6>
                        <ul class="list-unstyled">
                            ${album.mostPlayed.map(dj => `<li><a href="${dj.link}">${dj.name}</a></li>`).join('')}
                        </ul>
                    </div>
                    <div class="mt-3">
                        <a href="${album.links.bandcamp}" class="btn btn-sm btn-outline-primary">Bandcamp</a>
                        <a href="${album.links.spotify}" class="btn btn-sm btn-outline-secondary">Spotify</a>
                        <a href="${album.links.apple}" class="btn btn-sm btn-outline-success">Apple Music</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Append card to album list
    albumList.innerHTML += albumCard;
});
