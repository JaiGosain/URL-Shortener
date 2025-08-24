document.getElementById("urlForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    let longUrl = document.getElementById("longUrl").value.trim();
    if (!/^https?:\/\//i.test(longUrl)) {
      longUrl = "https://" + longUrl;
    }
  
    try {
      const res = await fetch("/api/shorten", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: longUrl }), // <-- match backend
      });
  
      const data = await res.json();
  
      if (res.ok) {
        document.getElementById("result").innerHTML = `
          Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>
        `;
      } else {
        document.getElementById("result").innerHTML = `Error: ${data.error}`;
      }
    } catch (err) {
      console.error(err);
      document.getElementById("result").innerHTML = "Server error!";
    }
  });
  