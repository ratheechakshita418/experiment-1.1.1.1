# Social Media Post Composer (Experiment 1.1.1)

## Aim

To design and develop a dynamic post composer interface supporting multiple social media platforms with platform-specific constraint validation.

---

## Objectives

- Understand multi-platform content handling.
- Implement real-time validation mechanisms.
- Design a responsive and user-friendly interface.
- Enforce platform-specific character limits and validation rules.

---

## Project Description

This project is a React.js-based social media post composer that allows users to create a post and publish it across multiple social media platforms. The application provides real-time validation according to the selected platform's content constraints, such as character limits, and gives instant feedback through character counters and validation messages.

---

## Features

- ✍️ Write social media posts
- 📱 Select one or more platforms
- 🔢 Live character counter
- ✅ Platform-specific validation
- ⚠️ Warning and error messages
- 🎨 Responsive user interface
- 📷 Media upload support (optional)

---

## Supported Platforms

| Platform | Character Limit |
|----------|----------------:|
| Twitter (X) | 280 |
| Instagram | 2200 |
| Facebook | 63206 |
| LinkedIn | 3000 |

---

## Technologies Used

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- Node.js
- npm

---

## Folder Structure

```
social-media-post-composer-react/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── PostComposer.jsx
│   │   ├── PlatformSelector.jsx
│   │   ├── CharacterCounter.jsx
│   │   └── ValidationMessage.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
├── .gitignore
└── README.md
```

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/social-media-post-composer-react.git
```

2. Open the project folder

```bash
cd social-media-post-composer-react
```

3. Install dependencies

```bash
npm install
```

4. Run the application

```bash
npm start
```

The application will open at:

```
http://localhost:3000
```

---

## Expected Output

- A responsive post composer interface.
- Users can select multiple social media platforms.
- Real-time character counting.
- Platform-specific validation.
- Instant feedback using warning and error messages.

---

## Learning Outcomes

- React component development
- State management using React Hooks
- Real-time form validation
- Responsive UI design
- Component-based architecture

---

## Future Enhancements

- Emoji picker
- Image and video upload
- Dark mode
- Post preview
- Draft saving
- Direct API integration with social media platforms

---

## Author

**Your Name**

B.E. CSE (AI & ML)

Chandigarh University

---

## License

This project is developed for academic purposes as part of **Experiment 1.1.1**.
