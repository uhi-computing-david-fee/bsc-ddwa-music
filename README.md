# 🎵 SoundShelf

SoundShelf is a small Angular application used in:

**Designing and Developing Web Applications (UG409759)**  
**BSc Computing**

It supports **Lecture 7** and provides a simple introduction to:

-   Services as shared application state stores
    
-   `BehaviorSubject`
    
-   Sharing state between unrelated components
    
-   JavaScript object and array references
    
-   Shallow copying
    
-   Basic immutability
    
-   The difference between application state and derived UI state
    

The application is intentionally small so the focus stays on **how shared state is managed in Angular**, rather than on application complexity.

## 🎯 Starting Point

The initial application contains several components which independently consume the same track data:

```text
App
├── Header
├── Track View
│   └── Track List
│       └── Track List Item
└── Favourites

```

Track data is initially retrieved separately by different parts of the application.

This works, but means each component has its own version of the data. Changes made in one component are therefore not automatically reflected elsewhere.

This gives us the central problem for the lecture:

> How can multiple components share and modify the same application state without each maintaining their own independent copy?

From this starting point, the application is progressively refactored so a service owns the shared state and publishes changes using a `BehaviorSubject`.

The application is then used to explore what happens when shared arrays are accidentally modified through references, before introducing shallow copying and basic immutable state updates.

## 🌿 Branch Structure

Each branch represents a checkpoint in the lecture.


| Branch Name | Content |
|---|---|
| `main` | Completed application |
| `0-start` | Starting application with components independently retrieving track data |
| `1-lecture-complete` | All lecture refinements carried out |


## 📌 Important

This repository is primarily intended for **lecture support, reference and catch-up**.

You are encouraged to:

-   Follow the live demonstration
    
-   Make the changes yourself
    
-   Experiment with the code
    
-   Use the branches to compare your work or catch up if needed
    

The examples deliberately favour **simple, readable Angular code** over more advanced state-management libraries or application architecture.