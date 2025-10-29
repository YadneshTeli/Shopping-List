# Shopping List 🛒

A simple, intuitive web application for managing your shopping list with real-time synchronization using Firebase. Add items to your list, and remove them with a simple tap/click when you're done shopping!

## ✨ Features

- **Real-time Synchronization**: Your shopping list is stored in Firebase and updates instantly across all devices
- **Simple Interface**: Clean and user-friendly design with a cute shopping cart icon
- **Easy Item Management**: 
  - Add items by typing and clicking "Add to List"
  - Remove items by simply clicking on them
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **PWA Support**: Can be installed as a Progressive Web App on mobile devices
- **Input Validation**: Prevents adding empty items to the list

## 🚀 Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling with custom design
- **JavaScript (ES6+)**: Application logic and interactivity
- **Firebase**: Real-time database for data storage and synchronization
  - Firebase Realtime Database
  - Firebase App (v10.9.0)
- **PWA (Progressive Web App)**: Manifest file for installable app experience

## 📋 Prerequisites

Before you begin, ensure you have:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Firebase account (for database configuration)
- A web server to serve the files (e.g., Live Server, http-server, or any hosting service)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YadneshTeli/Shopping-List.git
   cd Shopping-List
   ```

2. **Firebase Configuration** (Optional - if you want to use your own Firebase database)
   
   The app currently uses a pre-configured Firebase database. If you want to use your own:
   
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Realtime Database
   - Update the Firebase configuration in `script.js`:
     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
     };
     
     const appSettings = {
         databaseURL: "YOUR_DATABASE_URL"
     };
     ```

3. **Serve the application**
   
   You can use any local server. Here are some options:
   
   **Option 1: Using Python**
   ```bash
   python -m http.server 8000
   ```
   
   **Option 2: Using Node.js http-server**
   ```bash
   npx http-server
   ```
   
   **Option 3: Using Live Server (VS Code Extension)**
   - Install the Live Server extension in VS Code
   - Right-click on `Index.html` and select "Open with Live Server"

4. **Access the application**
   
   Open your browser and navigate to:
   - `http://localhost:8000` (or whichever port your server is using)

## 💡 Usage

1. **Adding Items**:
   - Type the item name in the input field
   - Click the "Add to List" button or press Enter
   - The item will appear in the list below

2. **Removing Items**:
   - Simply click/tap on any item in the list
   - The item will be removed immediately

3. **Empty List**:
   - When the list is empty, you'll see the message "No items here... yet"

## 📁 Project Structure

```
Shopping-List/
├── Index.html              # Main HTML file
├── script.js              # JavaScript with Firebase integration
├── style.css              # Styling and layout
├── site.webmanifest       # PWA manifest file
├── .gitignore            # Git ignore file
├── assets/               # Images and icons
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── cute-colorful-shopping-cart-clipart-*.png
└── README.md             # This file
```

## 🎨 Customization

### Colors
The app uses a pleasant color scheme defined in `style.css`:
- Background: `#EEF0F4`
- Button: `#AC485A`
- Button Hover: `#432000`
- Input Background: `#DCE1EB`
- List Items: `#FFFDF8`
- List Items Hover: `#FFECC7`

You can customize these colors by editing the CSS variables in `style.css`.

### Font
The app uses the 'Rubik' font family. You can change this in the CSS file.

## 🔒 Security Note

⚠️ **Important**: The Firebase API keys and configuration are currently exposed in the `script.js` file. For production use, consider:
- Implementing Firebase Security Rules
- Using environment variables
- Setting up proper authentication
- Restricting database access

## 🌐 Progressive Web App (PWA)

This application can be installed on mobile devices as a PWA:
1. Open the app in a mobile browser
2. Look for the "Add to Home Screen" or "Install" prompt
3. Follow the prompts to install
4. The app will be available as an icon on your home screen

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Yadnesh Teli**
- GitHub: [@YadneshTeli](https://github.com/YadneshTeli)

## 🙏 Acknowledgments

- Shopping cart icon design
- Firebase for the real-time database
- The web development community for inspiration and resources

---

Made with ❤️ for simpler shopping experiences
