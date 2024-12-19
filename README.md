# Video Streaming Application

A responsive single-page application (SPA) for browsing and playing videos, built using Vite and React. This project provides a modern video browsing interface with search, filtering, and playback features.

## Features

- **Video Grid Layout**: Displays video thumbnails, titles, and durations in a clean, responsive grid layout.
- **Search Functionality**: Filter videos by title or genre using a search bar.
- **Video Details Page**: Includes a video player, title, and description for selected videos.
- **Like Feature**: Allows users to "like" videos (state saved locally).
- **Responsive Design**: Optimized for mobile and desktop devices.
- **No Results Message**: Displays a "No Results Found" message when no videos match the search criteria.

## Tech Stack

- **Frontend**: React.js (with Vite for build and development)
- **Styling**: CSS
- **Mock API**: JSON file for video data
- **Additional Libraries**: React Router for navigation

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-streaming-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd video-streaming-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   --->>
   o 
   ```
5. Open the app in your browser at the address provided in the terminal (usually `http://localhost:5173`).

## Usage

1. Use the search bar to filter videos by title or genre.
2. Click on any video thumbnail to view its details and play the video.
3. Use the "like" button to like videos (state is saved locally).

## Mock Data

The video data is stored in a JSON file located in the `public` directory. You can edit `mock-videos.json` to customize the video data with new titles, thumbnails, and video URLs.

## Folder Structure

```
video-streaming-app/
├── public/
│   ├── mock-videos.json
│   └── index.html
├── src/
│   ├── components/
│   │   ├── VideoGrid.jsx
│   │   ├── VideoDetails.jsx
│   │   └── VideoCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   └── styles.css
├── package.json
└── README.md
```

## Future Enhancements

- **Pagination**: Add a "Load More" feature to handle large video datasets.
- **Accessibility**: Improve keyboard navigation and ARIA roles for better accessibility.
- **Backend Integration**: Connect to a real database for persistent storage of videos and user preferences.
  

## Contact

For any inquiries or feedback, please contact angwechima@gmail.com.com.
