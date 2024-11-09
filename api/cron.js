export default function handler(req, res) {
  const API_KEY = process.env.FIREBASE_PRIVATE_KEY;
  console.log("api:kye",API_KEY)
    // Log or perform any action you want each time this function is called
    console.log("Cron job endpoint accessed");
  
    // Send a JSON response indicating success
    res.status(200).json({ message: "Cron job triggered successfully!" });
  }
  