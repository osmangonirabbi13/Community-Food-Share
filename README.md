# Food Sharing - Food Donation Website Overview

Live Site URL: https://foodshare01.web.app/

##  Npm Packages :
    1 .React-icons
    3 .Sweetalert2
    4 .Swiper Js
    5 .react-awesome-reveal
    6 .tanstack/react-query
    7 .lottie-react
    8 .motion/react
    9 .react-hot-toast
    10 .axios
    11 .preline js
    
    
## Key Features: 
1. 🍱 Food Listings
The homepage showcases a clean, intuitive design, featuring the highest-quantity featured food and the project logo prominently.

Donors can list surplus food items they want to share.

Listings include essential details like:
  - ✅ Food name
  - 📦 Quantity
  - 📅 Expiry date
  - 🏷️ Dietary labels (e.g., Vegan, Gluten-Free)

Visitors can click on food cards to view individual food details.

Each listing has clear images and well-organized information for easy understanding.

A search and filter system helps users quickly find the right food based on name or category.

2. 🔐 Private User Routes (Role-Based Access)
Only logged-in users can access certain pages like:
  - 📄 My Food Requests
  - 🧾 Manage Foods (for donors)
  - 👤 User Profile

The platform uses role-based permissions, ensuring:
  - Donors can add/manage their donations.
  - Receivers can request food.

Each user has a custom dashboard, showing their activities and relevant data.

3. 📨 Request Food System
On every food detail page, users can click “Request Food”, which:
  - Opens a modal with confirmation and additional details.
  - Adds the request to the user's virtual request list.

The My Food Requests page lets users:
  - 📋 View all requested items.
  - 🗑️ Cancel or review their food requests.

4. 🛠️ Manage Donated Foods (for Donors)
Donors have access to a Manage Foods page where they can:
  - 📤 Add new food donations.
  - 🗑️ Delete any outdated or incorrect food items.
  - ✏️ Edit food details like quantity or expiry date.

This makes food management simple and effective for contributors.

5. 🔐 Firebase Authentication (Google Login)
Easy Google Sign-In for both donors and receivers.

Firebase handles secure login and account creation.

After logging in, users can:
  - 🧑‍💼 Update their profile info.
  - 🔐 Access private features securely.

All user actions are securely tied to their authenticated account.

6. 📱 Mobile Responsiveness
Fully responsive UI ensures:
  - 🖥️ Great experience on desktop.
  - 📱 Smooth functionality on smartphones and tablets.

Clean layout and intuitive design work across all screen sizes.

