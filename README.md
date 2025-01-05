# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Unhandled promise rejections can lead to unexpected crashes and instability, making them difficult to debug.  This example shows a simple scenario and a clear solution.

## Problem

The `bug.js` file contains code with an unhandled promise rejection. When run, it will likely log a warning to the console (depending on your Node.js version and settings) but might not crash immediately on some versions. This behavior is inconsistent and potentially problematic.

## Solution

The `bugSolution.js` file shows how to properly handle the promise rejection using a `.catch()` block. This ensures that even if the promise rejects, the application will gracefully handle the error rather than crashing or producing unexpected behavior.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unhandled promise rejection (or potentially no crash).
4. Run `node bugSolution.js` to see the proper handling of the promise rejection. 

This example highlights the importance of handling promise rejections for robust and stable Node.js applications.