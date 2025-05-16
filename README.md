# ⌨️ Next.js Typing Game

![Typing Game Banner](https://github.com/user-attachments/assets/22671fa4-46a4-4c29-a965-461483038d2b)

## 📝 Description

A modern, minimalist typing test application built with Next.js and TypeScript. This project demonstrates advanced React patterns, state management, and responsive design principles while providing users with an engaging way to measure and improve their typing speed and accuracy.

The application features a clean, distraction-free interface with real-time WPM (Words Per Minute) calculation, accuracy tracking, and multiple theme options. The typing test presents users with literary quotes and provides immediate visual feedback on typing performance.

## 🚀 Live Demo

[Try the Typing Game](https://v0-next-js-typing-game-zeta.vercel.app/)

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and functional components
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-themes** - Theme management
- **Geist Font** - Typography
- **Radix UI** - Accessible component primitives
- **class-variance-authority** - Component styling variants

## ✨ Features

- **Real-time WPM Calculation**: Tracks typing speed as you type
- **Accuracy Measurement**: Calculates and displays typing accuracy percentage
- **Visual Feedback**: Character-by-character highlighting for correct/incorrect keystrokes
- **Animated Cursor**: Tracks current position in the text
- **Multiple Themes**: Choose from 7 different color themes (dark, light, blue, red, yellow, green, purple)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: Keyboard navigation and screen reader support
- **Results Summary**: Detailed performance statistics after completing a test
- **Quote Variety**: Collection of literary quotes for typing practice

## 📋 Installation and Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/next-js-typing-game.git
   cd next-js-typing-game

2. Install dependencies:

   ```shellscript
   npm install
   # or
   yarn install
   ```
3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


### Building for Production

```shellscript
npm run build
# or
yarn build
```

## 📖 Usage Instructions

1. **Start Typing**: Click anywhere on the text area and begin typing the displayed quote.
2. **Real-time Feedback**:

1. Green text indicates correctly typed characters
2. Red text indicates typing errors
3. The cursor shows your current position
4. Current WPM is displayed below the text



3. **Theme Selection**: Click the "theme" button in the top right corner to change the color theme.
4. **Reset Test**: Click the "Reset" button to get a new random quote and start over.
5. **Results**: After completing a quote, view your final WPM and accuracy statistics.


## 🧠 Technical Implementation

### State Management

The application uses React's useState and useEffect hooks for state management, tracking:

- Current quote and user input
- Timing information for WPM calculation
- Cursor position and styling
- Theme preferences


### Performance Optimization

- Efficient re-rendering with proper dependency arrays in useEffect
- Memoized calculations for WPM and accuracy
- Optimized animations with Framer Motion
- Tailwind CSS for reduced CSS bundle size


### Accessibility Considerations

- Keyboard navigation support
- Proper ARIA attributes
- Color contrast compliance
- Screen reader friendly structure


## 🔮 Future Enhancements

- **User Accounts**: Save progress and statistics over time
- **Multiplayer Mode**: Race against friends or random opponents
- **Custom Text Input**: Allow users to practice with their own text
- **Difficulty Levels**: Adjust the complexity of quotes
- **Advanced Statistics**: Detailed analysis of typing patterns and problem areas
- **Typing Lessons**: Structured exercises to improve specific skills
- **Offline Support**: PWA implementation for offline usage
- **Keyboard Heatmap**: Visual representation of typing patterns
- **Language Support**: Multiple language options for international users


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Literary quotes from various authors
- Inspiration from typing test websites like MonkeyType and TypeRacer
- Next.js team for the amazing framework
- Vercel for hosting the application


---

Built with ❤️ by [Rohaz Shaik](https://https://github.com/rohazshaik07)
