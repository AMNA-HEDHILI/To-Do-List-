
```markdown
# ✅ To-Do List App

A beautiful, modern task management application with persistent storage. Add, edit, delete, and complete tasks with real-time counter updates. Your tasks are automatically saved in your browser's local storage!

![To-Do List App](https://img.shields.io/badge/version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- ✅ **Add new tasks** - Quickly add tasks to your list
- ✏️ **Edit existing tasks** - Modify any task with a simple prompt
- 🗑️ **Delete tasks** - Remove tasks you no longer need
- ☑️ **Mark as complete** - Check off completed tasks (strikethrough effect)
- 📊 **Live counters** - See completed vs uncompleted tasks in real-time
- 💾 **Persistent storage** - Tasks are saved automatically using localStorage
- ⌨️ **Keyboard support** - Press Enter to quickly add tasks
- 📱 **Responsive design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Gradient background with glassmorphism effects


```

## 🛠️ Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling, gradients, and responsive design
- **JavaScript (ES6)** - DOM manipulation and localStorage API
- **LocalStorage** - Browser-based persistent data storage

## 📁 Project Structure

```
todo-list-app/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Application logic and localStorage handling
└── README.md           # Project documentation
```

## 🏃‍♂️ How to Run Locally

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.) for modifications

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

2. **Navigate to project folder**
   ```bash
   cd todo-list-app
   ```

3. **Open the application**
   - Double-click `index.html` OR
   - Use Live Server in VS Code OR
   - Run `python -m http.server 8000` and visit `http://localhost:8000`

That's it! No dependencies or installation required.

## 🎮 How to Use

| Action | Method |
|--------|--------|
| **Add task** | Type in input field → Click "Add" button OR press Enter |
| **Complete task** | Click the checkbox next to any task |
| **Edit task** | Click "Edit" button → Modify text in prompt → OK |
| **Delete task** | Click "Delete" button → Confirm deletion |
| **View progress** | Check counters at the bottom |

## 💾 Data Persistence

- All tasks are automatically saved to your browser's **localStorage**
- Tasks persist after:
  - Page refresh
  - Browser restart
  - Computer restart
- No account or internet connection required
- Data never leaves your browser (100% private)

### Clear saved data
```javascript
// Open browser console (F12) and run:
localStorage.removeItem("todoTasks");
location.reload();
```

## 📱 Responsive Design

- **Desktop**: Full layout with side-by-side buttons
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Buttons stack below tasks for easy touch interaction

## 🔧 Customization

### Change default tasks
Edit line in `script.js`:
```javascript
const defaultTasks = ["wash dishes", "edit resume", "finish Codedex course"];
```

### Modify colors
Edit CSS variables in `style.css`:
```css
.todo-container {
  border: 2px solid #0033ff;  /* Change border color */
}

#input-button {
  background: #2e60ea;        /* Change button color */
}
```

### Change storage key
In `script.js`, modify:
```javascript
localStorage.setItem("todoTasks", ...);  // Change "todoTasks" to your key
```





mmit it to your repository!
