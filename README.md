# URL-Shortener
# URL Shortener

A simple URL Shortener web application built with **HTML, CSS, JavaScript** on the frontend and **Node.js, Express, MongoDB** on the backend. Users can generate short URLs that redirect to the original long URLs.

---

## Features

- Shorten long URLs into 6-character codes.
- Store URLs in **MongoDB** for persistence.
- Redirect short URLs to the original URLs.
- Track clicks for each shortened URL (click counter included in backend).
- Responsive and user-friendly interface using plain HTML, CSS, and JavaScript.

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or cloud)  
- **Other:** dotenv for environment variables, CORS for cross-origin requests

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. **Install dependencies:**

```bash
npm init -y
npm install express
npm install mongoose dotenv
npm install

```

3. **Create a `.env` file** in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/urlshort
BASE_URL=http://localhost:5000
```

4. **Start the server:**

```bash
node server.js
```

5. **Open the frontend**:

Navigate to [http://localhost:5000](http://localhost:5000) in your browser.

---

## Project Structure

```
URL-Shortener/
│
├── models/
│   └── Url.js          # Mongoose schema for URLs
├── public/
│   ├── index.html      # Frontend HTML
│   ├── style.css       # CSS
│   └── script.js       # Frontend JS
├── server.js           # Express server
├── package.json
└── .env
```

---

## Usage

1. Enter a long URL in the input field.
2. Click **Shorten**.
3. Copy the generated short URL or click it to navigate to the original URL.

---

## Future Enhancements

- User authentication to manage URLs per user.
- Analytics dashboard to view clicks per short URL.
- Custom short codes.
- Deploy to **Vercel/Render/Heroku** for live usage.

---

## Author

**Jai Gosain**

- GitHub: [https://github.com/JaiGosain](https://github.com/JaiGosain)
