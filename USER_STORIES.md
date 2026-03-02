# User Stories for Smart Mobile App

## 1. User Registration
As a new user, I want to create an account using my username, email, and password so that I can access personalized features.

**Acceptance Criteria**
- The registration form has fields for username, email, and password.
- Displays an error for invalid or duplicate email.
- Redirects to the home screen after successful signup.

---

## 2. User Login
As a registered user, I want to log into my account using email and password so that I can access my saved preferences.

**Acceptance Criteria**
- Login form with email and password fields.
- Shows an error message for invalid credentials.
- Successfully logs in and navigates to the home screen.

---

## 3. Home Screen Display
As a user, I want to see a home screen with a logo and main features so that I can easily navigate through the app.

**Acceptance Criteria**
- Displays app logo in header.
- Lists main items fetched from API or local storage.

---

## 4. View Item Details
As a user, I want to click on an item to view its detailed information so that I can learn more about it.

**Acceptance Criteria**
- Each item on the home screen is clickable.
- Navigates to a detail screen showing title, image, and description.

---

## 5. Save Favorite Items
As a user, I want to mark items as favorites so that I can access them quickly later.

**Acceptance Criteria**
- Tapping a “favorite” icon saves data to local storage.
- Favorite items persist even after app restart.

---

## 6. Local Storage Persistence
As a user, I want my data to be stored locally so that I don’t lose it when I close the app.

**Acceptance Criteria**
- Uses local storage (or AsyncStorage) to save data.
- Data is retrieved and displayed correctly when reopening the app.

---

## 7. API Integration
As a user, I want the app to fetch data from an external API so that I can see dynamic, updated content.

**Acceptance Criteria**
- Fetches data from a live API or mock endpoint.
- Displays results clearly on the home screen.

---

## 8. Settings and Preferences
As a user, I want to access the settings menu so that I can update preferences and manage notifications.

**Acceptance Criteria**
- Settings icon opens a menu.
- Menu items include options like “Notifications”, “Theme”, or “Account”.

---

## 9. Notifications
As a user, I want to receive notifications so that I can stay informed about updates or reminders.

**Acceptance Criteria**
- Notification permission requested.
- Shows a test notification successfully.
