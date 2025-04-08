# GitRepo Finder

A modern web application that allows users to search and view GitHub user profiles with a beautiful, responsive interface. Built with Next.js and the GitHub API.

## Features

- 🔍 Search GitHub users by username
- 👤 View detailed user profiles including:
  - Profile picture and basic information
  - Bio and join date
  - Repository count, followers, and following
  - Location, Twitter, website, and company information
- 🌓 Light/Dark mode support (coming soon)
- 📱 Fully responsive design
- ⚡ Real-time search results
- 🎨 Modern UI with custom styling

## Technologies Used

- **Next.js 15** - React framework for production
- **React 19** - UI library
- **Octokit** - GitHub API client
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **CSS Modules** - Styling
- **GitHub API** - Data source

## Challenges Faced

1. **API Integration**

   - Implementing GitHub API authentication
   - Error handling for non-existent users

2. **State Management**

   - Managing global state with React Context
   - Handling loading and error states
   - Real-time updates

3. **UI/UX Design**
   - Creating a responsive layout
   - Implementing dark/light mode
   - Ensuring accessibility
   - Handling loading states and errors gracefully

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/gitrepo-finder.git
cd gitrepo-finder
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your GitHub access token:

```env
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=your_github_token_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

1. Enter a GitHub username in the search bar
2. Click the "Search" button or press Enter
3. View the user's profile information including:
   - Profile picture
   - Name and username
   - Join date
   - Bio
   - Repository statistics
   - Social links and location

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
