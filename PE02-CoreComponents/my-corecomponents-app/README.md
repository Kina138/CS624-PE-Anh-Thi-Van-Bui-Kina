# PE02 – Core Components App

This project is a simple React Native application built using Expo. It demonstrates the use of core components in React Native such as `View`, `Text`, `ScrollView`, `Image`, `TextInput`, and `StyleSheet`. The purpose of this app is to display the MSCS course list in three categories: Core Requirements, Depth of Study, and Capstone, while allowing users to input their favorite course.

---

# Input

The user interacts with the app by entering the name or code of their favorite course into a `TextInput` field. Additionally, the program uses a local image file `icon.png` from the `assets/images/` folder to display at the top of the app. The course data (Core, Depth, and Capstone) is hardcoded in arrays within the main component.

---

# Process

The app is implemented using functional components and React Native’s core components. It manages user input with the `useState` hook, and lays out the content using `ScrollView` to support vertical scrolling. The courses are categorized and displayed dynamically using the `map()` function. Styling is applied using `StyleSheet.create()` for consistent layout and design. Each section header is highlighted with a yellow background for visual separation, following the design shown in the assignment prompt.

---

# Output

The app displays:
- An image banner at the top
- A labeled input field with placeholder text
- A scrollable list of MSCS courses grouped into:
  - Core Requirements (8 courses)
  - Depth of Study (2 courses)
  - Capstone (1 course)

All components are aligned cleanly and designed to work smoothly on mobile devices using the Expo Go app or web browser.

![IMG_9988](https://github.com/user-attachments/assets/e8109447-dff0-4246-ab8c-f07f1936522c)


---

## 🚀 How to Run the Program

To run this project inside GitHub Codespaces using Expo:

1. **Open Terminal in Codespaces**

cd my-corecomponents-app

2. **Start the app**

npx expo start --tunnel


3. **View the App**
- On your phone:
  - Download the **Expo Go** app (iOS/Android)
  - Scan the QR code displayed in your terminal
- On your browser:
  - Press `w` in the terminal to open the app in a web browser

---

✅ *Developed as part of CS624 - Mobile Full Stack Development course assignment (PE02).*
