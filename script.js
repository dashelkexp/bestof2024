function addAlbum(album, index) {
    const albumList = document.getElementById('album-list');
    
    // Build the "Most Played" section with DJ names as hyperlinks
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

    // Create a new card for the album
    const albumCard = `
        <div class="col-md-4 col-sm-6 col-12"> <!-- Updated classes for grid layout -->
            <div class="card mb-4 shadow-sm position-relative">
                <div class="position-absolute album-number">${index + 1}</div> <!-- Superimposed number -->
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
