# Disney+ Clone Project

This project is a Disney+ clone developed using Next.js 14 with advanced features such as caching and server requests to provide an efficient and fast user experience. Additionally, it incorporates The Movie Database (TMDB) API to fetch detailed information about movies. The TMDB API provides data on a wide variety of movies, including details such as title, description, genre.

## Features

- **Genre Search:** Users can explore movies using different genres, allowing for a more personalized search experience.

- **Name Search:** Users can also search for specific movies by entering the name in the search bar.

- **Integration with TMDB API:** Detailed movie information is obtained by integrating with the TMDB API.

- **Caching and Server Requests:** Advanced caching and server request techniques have been implemented to improve the speed and efficiency of the site.

- **Integration with OpenAI for Suggestions (Optional):** If an OpenAI API key is provided, the system can generate AI-powered suggestions when searching for a movie by name.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/disney-plus-clone.git
   cd disney-plus-clone
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure TMDB API Key:**

- Get a free TMDB API key from https://www.themoviedb.org/documentation/api.

- Add your TMDB API key to the project's **`.env`** file:
  ```bash
  TMDB_API_KEY=YourTMDBApiKey
  ```

4. **Optional: Configure OpenAI API Key for Suggestions:**

- If you want to enable AI-powered suggestion generation, provide an OpenAI API key.

- Add the OpenAI API key to the project's **`.env`** file:
  ```bash
   OPENAI_API_KEY=YourOpenAIApiKey
  ```

5. **Run the Application:**

```bash
   npm run dev
```

6. **Access the Application:**
   The application will be available at http://localhost:3000.

Enjoy exploring and discovering movies in this Disney+ clone!
