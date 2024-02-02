import express from 'express'
import payload from 'payload'
import cors from 'cors';

require('dotenv').config()
const app = express()
// app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:3001', // Allow requests from this specific origin
//   credentials: true, // Allow requests with credentials
// }));
const corsOptions = {
  origin: 'http://localhost:3001', // Allow only this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent with the request
  optionsSuccessStatus: 204, // Respond with 204 No Content for preflight requests
};

app.use(cors(corsOptions));

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
