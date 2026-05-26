import 'dotenv/config';
import http from 'http';

import app from '../app.js';

const port = Number(process.env.PORT) || 8888;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
