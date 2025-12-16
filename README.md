## How to Run the Application

To run this application, follow these steps:

1.  **Install Dependencies**:
    Open your terminal, navigate to the project directory, and install the necessary dependencies using npm:
    ```bash
    npm install
    ```

2.  **Start the Development Server**:
    Once dependencies are installed, start the development server:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:5173/`.

### Handling macOS Security Warnings (e.g., "rollup.darwin-x64.node")

If you are on macOS and encounter a security warning preventing the application from running (e.g., "Apple could not verify 'rollup.darwin-x64.node' is free of malware"), follow these steps to allow the blocked file:

1.  **Dismiss the initial warning**: When the warning pops up, click "Cancel" or "OK" to dismiss it.
2.  **Open System Settings**: Go to `System Settings` (or `System Preferences` on older macOS versions).
3.  **Navigate to Privacy & Security**: Click on `Privacy & Security` in the sidebar.
4.  **Scroll to Security Section**: Scroll down until you find the "Security" section.
5.  **Allow the application**: You should see a message stating that a specific file (e.g., "rollup.darwin-x64.node") was blocked because it's from an "unidentified developer." Next to this message, click the `Allow Anyway` or `Open Anyway` button.
6.  **Authenticate**: If prompted, enter your administrator password to confirm the action.
7.  **Restart the Development Server**: After allowing the file, return to your terminal and run `npm run dev` again. The application should now start without the security warning for that specific file.

This is a one-time process for each unsigned binary that macOS flags.
