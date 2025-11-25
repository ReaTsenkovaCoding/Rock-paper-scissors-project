# ✊🖐✌ Rock Paper Scissors✌🖐✊

A tiny web game where you duel a bot in classic Rock–Paper–Scissors.  
First to reach **5 wins** takes the crown. 👑

---

## 🔗 Play Online

👉 **Live version:**  
https://reatsenkovacoding.github.io/Rock-paper-scissors-project/

No setup needed — just click and play.

---

## 🎮 Gameplay

- Click one of the move buttons: **Rock**, **Paper**, or **Scissors**.
- The bot instantly picks a random move.
- Score updates after every round.
- Hit **Reset score** to start a fresh match.

---

## ✨ Features

- Clean, centered layout with bold title and big circular move buttons.  
- Emoji-based moves: 🪨 📄 ✂ (rock / paper / scissors). 
- Match ends automatically when either player reaches **5 wins**, with a custom alert message.  
- Score + last moves are saved in `localStorage` so they survive refreshes. 💾  

---

## 🧠 Under the Hood

- **HTML** – structure and buttons with `onclick` handlers.  
- **CSS** – dark theme, centered layout, hover effects on move + reset buttons.  
- **JavaScript**  
  - Random bot choice via `Math.random()`  
  - Score tracking (`wins`, `losses`, `ties`) in an object  
  - Persistent storage with `localStorage`  
  - DOM updates for result text, moves, and score

---

## 🛠 Run Locally

1. Clone the repo.
2. Open `index.html` in your browser.
3. Start clicking and try to beat the bot. 😈

---

## 🚀 Future Ideas

- Add sounds + animations.
- Show a mini match history.
- Add difficulty levels or streak bonuses.

Enjoy the game & feel free to fork / tweak it. ✌

## 📜 License
Copyright © 2025 Rea Tsenkova All rights reserved. Redistribution, modification, or commercial use is strictly prohibited.

