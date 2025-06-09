# Input
- Users enter data in the **AddCountry** tab.
- Two text fields collect:
  - **Country Name**
  - **Currency**
- Data is submitted by tapping the “Add Country” button.
- Input is flexible and allows unique entries for each country.

# Process
- The app uses React’s `useState` to store country and currency data locally.
- Data is stored in an array that updates dynamically when new entries are added.
- React Navigation’s **Bottom Tab Navigator** handles screen transitions.
- Tabs include: Cities, AddCity, AddCountry, and Countries.
- State is shared across tabs using props and hooks, ensuring real-time updates.
- The logic is implemented using JavaScript and React Native components.

# Output
- The **Countries** tab displays a real-time list of added countries and their currencies.
- Each item in the list includes:
  - The country’s name
  - Its corresponding currency
- The list updates immediately after a new entry is added.
- The data is shown in a scrollable, user-friendly format.
