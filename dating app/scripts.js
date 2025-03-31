document.getElementById("profile-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;
    const bio = document.getElementById("bio").value;
  
    // Mock match data
    const mockMatches = [
      {
        name: "John",
        age: 25,
        location: "New York",
        bio: "Love to travel and meet new people!",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Alice",
        age: 28,
        location: "Los Angeles",
        bio: "Food lover and fitness enthusiast.",
        image: "https://via.placeholder.com/150"
      },
      {
        name: "Sophia",
        age: 22,
        location: "Chicago",
        bio: "Enjoys painting and hiking.",
        image: "https://via.placeholder.com/150"
      }
    ];
  
    // Clear previous matches
    const matchesContainer = document.getElementById("matches-container");
    matchesContainer.innerHTML = '';
  
    // Add mock matches to the page
    mockMatches.forEach(match => {
      const matchCard = document.createElement("div");
      matchCard.classList.add("match-card");
  
      matchCard.innerHTML = `
        <img src="${match.image}" alt="Profile Picture">
        <h3>${match.name}, ${match.age}</h3>
        <p>${match.bio}</p>
        <p><strong>Location:</strong> ${match.location}</p>
      `;
  
      matchesContainer.appendChild(matchCard);
    });
  
    // Clear form
    document.getElementById("profile-form").reset();
  });
  