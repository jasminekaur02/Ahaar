AHAAR-ONE BYTE AGAINST WASTE 
By empowering users to track pantry items, receive expiration alerts, and share excess food, this app aims to minimize food waste, reduce greenhouse gas emissions, and promote sustainable consumption habits.

## Problem Statement

Household food waste contributes significantly to preventable greenhouse gas emissions (8-10%) and incurs an economic loss of over $1 trillion annually. Much of this waste occurs due to poor planning, forgotten items, and the absence of community-driven sharing solutions. **Ahaar** seeks to solve this problem by providing a comprehensive food management platform that helps users track, share, and reduce food waste effectively.

## Key Features

- **Pantry Tracking**: Users can easily catalog items in their pantry and monitor their usage.
- **Expiry Notifications**: Receive alerts when items are nearing expiration, helping to reduce forgotten food.
- **Waste Histories**: Track food waste trends over time, with records of items thrown away, shared, or consumed.
- **Points System**: Earn points for reducing waste and track your sustainable food management progress.
- **AI Integration**: Scans receipts to import items and suggest expiration dates based on item categories.
- ![WhatsApp Image 2024-11-10 at 09 36 56_0c013db7](https://github.com/user-attachments/assets/4670b971-7dae-4483-a39e-1006ce3f25e1)
- ![WhatsApp Image 2024-11-10 at 09 38 58_a8c5eee3](https://github.com/user-attachments/assets/9eb9007e-8776-4833-81f2-ae8e9804436d)

Google authenticated logins 

- ![WhatsApp Image 2024-11-10 at 09 38 40_7345074d](https://github.com/user-attachments/assets/3697f07f-8d53-45b0-a487-a7f6a1f95b9c)


## Why MongoDB Atlas?

MongoDB Atlas was essential for "Too Good To Waste" due to its flexibility, scalability, and real-time capabilities:
1. **Document Flexibility**: Stores user data such as pantry items, expiration dates, and waste histories in a structure that aligns with user needs.
2. **Scalability**: Supports growing data demands as the user base expands, thanks to MongoDB Atlas’ auto-scaling capabilities.
3. **Real-Time Notifications**: Facilitates real-time notifications for expiration alerts and grocery-sharing opportunities.
4. **AI Integration**: Allows for machine learning features that help predict expiration dates, suggest recipes, and reward users.
5. **Security and Reliability**: Ensures sensitive user data is secure, with automated backups and redundancy for consistent availability.

## Tech Stack

- **Frontend**: React, NextJS , tailwind CSS , Typescript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **AI**: Integration of OCR for receipt scanning, GEN-AI for expiration prediction
 
## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jasminekaur02/ahaar-FE.git
   cd ahaar-FE
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file and add your MongoDB Atlas URI and any other required environment variables.
   ```plaintext
  REACT_APP_BACKEND_URL=https://ahaar-be.vercel.app/
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

## Usage

1. **Pantry Tracking**: Add items to your pantry, categorize, and set expiration dates.
2. **Receive Notifications**: The app will alert you as items near their expiration.
3. **View Waste History**: Access your waste history to see your progress in reducing food waste.
4. **Earn Points**: Track your sustainability journey and earn points for reducing waste.

## MongoDB Atlas Usage

The app leverages MongoDB Atlas to store user-generated data, handle real-time notifications, and support machine learning features. MongoDB’s document model and scalability allow "Ahaar" to efficiently manage data related to user pantries, expiration dates, and waste tracking.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit.
4. Open a pull request.

## Future Improvements
-**Recipe Suggestions**: Recommend recipes based on pantry items close to expiration.
- **Recipe Suggestions**: Recommend recipes based on pantry items close to expiration.
- **Community Waste Statistics**: Aggregate data to show community-wide impact.
- **Enhanced Machine Learning**: Improve AI to suggest optimized storage methods for different food types.
-**Share Excess Groceries**: Use the sharing feature to find people nearby who could use extra items.
## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
