# PE06 – Cities with Countries and Currency using Tab and Stack-based Navigations

## Input
- Users interact with the app through multiple tabs in the bottom tab navigator.
- In the **AddCountry** tab, users provide:
  - **Country Name**
  - **Currency Name**
- In the **CitiesNav** tab, users can also enter cities as in previous exercises.
- All inputs are collected via text fields and triggered using submit buttons (e.g., “Add Country”).

## Process
- The app uses `useState` to manage local state for countries, cities, and currencies.
- React Navigation is configured with:
  - Bottom Tab Navigation to switch between `CitiesNav`, `AddCity`, `AddCountry`, and `CountriesNav` tabs.
  - Stack Navigation within **CountriesNav** to switch between a list of countries and the detail view showing currency information.
- Data entered in AddCountry is pushed into a country list state and shared across screens using props or navigation params.

## Output
- The **CountriesNav** tab shows a stack-based navigation structure:
  - First screen displays a list of all countries added.
  - Tapping a country navigates to a second screen that shows the country’s currency.
- The output updates dynamically to reflect newly added data.
- Users can seamlessly navigate between countries and currency detail views.
