# Using @microsoft/mgt components in React

## Authentication
Using `<Login />` component to sign in with Microsoft account. It redirects to Microsoft sign in page on the same tab.

## Calendar events
We can use `<Agenda />` component to show calendar events and we can use template components to customize showing data.
If we are logged in, we can use access token to post calendar events with the Microsoft Graph endpoint

## Email messages
We can show email messages using `<Get />` component with resource prop and template component.

Totally we can use `<Get />` component and template component to call Microsoft Graph endpoints and show data in the customized component
