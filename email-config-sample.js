// Sample email configuration for LMS
// Copy this to your .env file and update with your actual email credentials

/*
# Server Configuration
PORT=5000
MONGO_URI=mongodb://localhost:27017/lms
JWT_SECRET=your_jwt_secret_key_here

# Email Configuration (for sending welcome emails to teachers)

# Option 1: Gmail (Recommended)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Option 2: Outlook/Hotmail
# EMAIL_HOST=smtp-mail.outlook.com
# EMAIL_PORT=587
# EMAIL_USER=your_email@outlook.com
# EMAIL_PASS=your_password

# Option 3: Yahoo
# EMAIL_HOST=smtp.mail.yahoo.com
# EMAIL_PORT=587
# EMAIL_USER=your_email@yahoo.com
# EMAIL_PASS=your_app_password

# Important Notes:
# 1. For Gmail, you need to use an App Password, not your regular password
# 2. To generate a Gmail App Password:
#    - Go to your Google Account settings
#    - Enable 2-Step Verification
#    - Go to Security > App passwords
#    - Generate a new app password for "Mail"
# 3. Make sure to add .env to your .gitignore file to keep credentials secure
*/

module.exports = {
  // This is just a sample file - create your actual .env file with the above configuration
  instructions: "Create a .env file in the lms-server directory with the email configuration above"
}; 