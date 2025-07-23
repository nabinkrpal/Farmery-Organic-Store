const express = require('express');
const path = require('path');
const app = express();

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: force root URL to load index.html explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen on all network interfaces so other LAN devices can access
const PORT = 3000;
const HOST = '0.0.0.0'; // This makes the server accessible from other devices on your network

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Your local IPs (use these in your phone browser):');
  const os = require('os');
  const interfaces = os.networkInterfaces();
  Object.values(interfaces)
    .flat()
    .filter((iface) => iface.family === 'IPv4' && !iface.internal)
    .forEach((iface) => {
      console.log(`  http://${iface.address}:${PORT}`);
    });
});
