💬 ChitChat – Real-Time Chat App
ChitChat is a full-stack real-time chat application that allows users to exchange text and images instantly. It supports profile customization and image uploads via Cloudinary, with a beautifully styled frontend powered by DaisyUI's 32 themes. The app features secure authentication and authorization using JWT.

🚀 Features
Real-time messaging with Socket.io

Profile picture upload via Cloudinary

Supports image sharing in chat

32 unique themes with DaisyUI

JWT-based authentication and authorization

Fully responsive design

🛠 Tech Stack
Frontend: React, Vite, DaisyUI, Tailwind CSS

Backend: Node.js, Express.js, Socket.io, Mongoose

Database: MongoDB

Authentication: JWT

File Uploads: Cloudinary

📦 Installation
Make sure you have Node.js, MongoDB, and npm installed.

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/chitchat.git
cd chitchat
2. Install Frontend Dependencies
bash
Copy
Edit
cd frontend
npm install
3. Start the Frontend
bash
Copy
Edit
npm run dev
4. Install Backend Dependencies
bash
Copy
Edit
cd ../backend
npm install
5. Create a .env File in the Backend Folder
env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
6. Start the Backend
bash
Copy
Edit
npm run dev
Now open http://localhost:5173 in your browser to start chatting in real time!

📸 Usage
Sign up and log in to start chatting

Upload a profile picture via Cloudinary

Switch between 32 DaisyUI themes

Send and receive real-time messages and images

🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request with new features or fixes.

📄 License
This project is licensed under the MIT License.
