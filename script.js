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
    }
    {
        title: "Album 2",
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
    }
    {
        title: "Album 3",
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
    }
    {
        title: "Album 4",
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
    }
];

function addAlbum(album, index) {
    const albumList = document.getElementById('album-list');
    
    let mostPlayedSection = '';
    if (album.mostPlayed && album.mostPlayed.length > 0) {
        mostPlayedSection = `
            <div class="most-played mt-3">
                <h6>Most Played by:</h6>
                <ul class="list-unstyled">
                    ${album.mostPlayed.map(dj => `<li><a href="${dj.link}" target="_blank">${dj.name}</a></li>`).join('')}
                </ul>
            </div>
        `;
    }

    const albumCard = `
        <div class="col-md-4 col-sm-6 col-12">
            <div class="card mb-4 shadow-sm position-relative">
                <div class="position-absolute album-number">${index + 1}</div>
                <img src="${album.img}" class="card-img-top" alt="${album.title}">
                <div class="card-body">
                    <h5 class="card-title">${album.title}</h5>
                    <p class="card-text">${album.review}</p>
                    <blockquote class="blockquote mb-0">
                        <p>"${album.quote}"</p>
                    </blockquote>
                    ${mostPlayedSection}
                    <div class="mt-3">
                        <a href="${album.links.bandcamp}" class="btn btn-sm btn-outline-primary">Listen on Bandcamp</a>
                        <a href="${album.links.spotify}" class="btn btn-sm btn-outline-secondary">Listen on Spotify</a>
                        <a href="${album.links.apple}" class="btn btn-sm btn-outline-success">Listen on Apple Music</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    albumList.innerHTML += albumCard;
}

document.addEventListener("DOMContentLoaded", () => {
    addAlbum(albums[0], 0);  // Test with just one album to ensure it's working
});
