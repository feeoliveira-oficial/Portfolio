Portfolio Project

This is a personal portfolio project developed using React for the frontend and Flask for the backend. The project showcases technical skills and case studies, such as a Tim Hortons Quality Analysis based on customer feedback, collected and processed using Python.

Technologies Used
React: For building the portfolio’s user interface and navigation between projects.
Flask: Backend used to serve graphs and analysis based on review data.
Python: Data analysis using libraries such as pandas, matplotlib, and wordcloud.
Bootstrap: For responsive styling and layout.
Framer Motion: For smooth animations between page transitions.
Project Features
1. Home - Portfolio Page
Displays different projects with buttons to view more details.
Includes smooth animations using Framer Motion.
Highlighted Projects:
Techbooks: A library management system developed with ASP.NET and SQL Server.
Tim Hortons Quality Analysis: A data analysis project that collects and analyzes customer feedback to improve service quality.
2. Tim Hortons Quality Analysis
Rating Distribution: A graph showing the distribution of customer ratings.
Word Cloud: A visualization of the most frequently used words in the reviews.
Customer Comments: Displays a list of relevant customer comments.
Interactive buttons to show/hide graphs and customer comments.
3. Backend with Flask
The Flask backend processes customer comments, generates graphs (rating distribution and word cloud), and serves images to the React frontend.
Key Flask endpoints:
/rating-distribution: Generates and serves a bar chart showing the rating distribution.
/word-cloud: Generates and serves a word cloud based on customer feedback.
How to Run the Project Locally
1. Running the Backend (Flask)
Ensure you have Python and the required libraries installed.

bash
Copy code
python app.py
The Flask server will start locally at http://127.0.0.1:5000/.

2. Running the Frontend (React)
In the React project directory, run:

bash
Copiar código
npm start
The React development server will start at http://localhost:3000/.

Note: While developing locally, ensure both servers (Flask and React) are running simultaneously to fully test the application.

3. Project Structure
graphql
Copiar código
myportfolioproj/
├── app.py                 # Flask backend
├── static/
│   └── images/            # Dynamically generated images (rating_distribution.png, word_cloud.png)
├── templates/
│   └── index.html         # Main HTML template for Flask
├── src/                   # React project files
│   ├── components/        # React components
│   └── pages/             # Main portfolio pages
└── README.md              # This file
Next Steps
Hosting: The project will be hosted on a server for public access. Currently, it's running locally for development and testing purposes.
BI Tools Integration: There are plans to integrate Business Intelligence (BI) tools for deeper analysis and detailed visualizations.
Mobile Optimization: Further improvements to enhance the mobile responsiveness and design.
Available Scripts (For React)
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

npm test
Launches the test runner in interactive watch mode. See more information in the Create React App documentation.

npm run build
Builds the app for production into the build folder. It optimizes the build for the best performance and bundles React in production mode.

npm run eject
This will remove the single build dependency from your project and allow full control over the configuration files. Use with caution, as this is a one-way operation.

Contributions
Feel free to contribute or suggest improvements! You can open an issue or submit a pull request.

Made with 💻 and ☕ by Felipe.