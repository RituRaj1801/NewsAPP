export default function handler(req, res) {
    // Log or perform any action you want each time this function is called
    console.log("Cron job endpoint accessed");
  
    // Send a JSON response indicating success
    res.status(200).json({ message: "Cron job triggered successfully!" });
  }
  