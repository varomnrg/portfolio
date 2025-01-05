---
layout: ../../layouts/LayoutBlogPost.astro
title: "Building a Real-time Multiplayer TicTacToe in Go"
description: "A deep dive into creating a concurrent TCP-based multiplayer game using Go's networking"
pubDate: 2025-01-05
category: "Programming"
---

# Building a Real-Time Multiplayer TicTacToe with Go

While trying to improve my skills in Go because of some future project, i asked ai to give me some ideas for a fun small project to work on. Among the suggestions, one caught my eye: a multiplayer game server. Although I've built web servers in different languages before, I hadn't really dabbled in networking, so this idea seemed like an exciting challenge. I decided on Tic-Tac-Toe as the game of choice to keep things simple—its straightforward rules meant I could focus more on mastering the networking aspects without getting bogged down by game complexity.

## Steps of the Project

Here's the approach I took to build the project:

1. **Initial Game Design:** Started by developing a basic version of Tic-Tac-Toe to get the core mechanics running.
   
2. **Structuring the Code:** Cleaned up the initial code by organizing it into structs to ensure better readability and maintainability.
   
3. **Adding Networking:** Integrated networking capabilities to allow communication between multiple players over the internet.
   
4. **Implementing Concurrency:** Used goroutines to handle concurrent gameplay, enabling multiple games to run simultaneously without issues.
   
5. **Final Touches:** Added features like game history tracking and other enhancements to polish the overall experience.

## How It Works

### TCP Socket Setup

The game runs on a TCP server that juggles multiple games at once. Each game spins off in its own goroutine, so lots of players can jump in and play simultaneously. Here’s a quick look at how it’s set up:

```go
func main() {
    ln, err := net.Listen("tcp", ":8080")
    // ...
    for {
        // Accept player connections
        conn1, err := ln.Accept()
        conn2, err := ln.Accept()
        
        // Start new game in goroutine
        go game.Start(conn1, conn2)
    }
}
```

### Managing the Game

I used a combo of mutexes and structured data to keep the game state steady and synced up between players:

```go
type Game struct {
    board         [3][3]string
    conns         []net.Conn
    currentPlayer int
    Usernames     []string
    mutex         *sync.Mutex
}
```

### Keeping a Record

Each game’s result is saved as a JSON file, making it easy to track stats and see how games played out:

```json
{
    "game_id": "5cbe271a-0513-4c1a",
    "player1": "Alice",
    "player2": "Bob",
    "winner": "X",
    "finished": true,
    "board": [["X","O","X"],
              ["O","X","O"],
              ["X","",""]],
}
```

## What’s Next?

Looking to the future, I’m excited to:
- Create a ui for the game
- Build an AI opponent to make solo play possible.
- Track player stats and rankings.
- Add WebSocket support to play straight from a browser.

## Wrapping Up

Building this Tic-Tac-Toe game is really fun, just a small weekend project. It shows me a lot of knowledge of networking especially in go

Here's the [Full source code on GitHub]([https://github.com/yourusername/go-tic-tac-toe-multiplayer](https://github.com/varomnrg/tictactoe-tcp))
