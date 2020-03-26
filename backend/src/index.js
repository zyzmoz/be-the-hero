const express = require('express');
const cors = require('cors');
const ngoRoutes = require('./routes/ngos');
const incidentsRoutes = require('./routes/incidents');

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
      info: {
          description: 'This is a sample server',
          title: 'Swagger',
          version: '1.0.0',
      },
      host: 'localhost:3000',            
      basePath: '/',
      produces: [
          "application/json",
          "application/xml"
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {
          JWT: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
              description: "",
          }
      }
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options);


app.use(cors());
app.use(express.json());

app.use('/api/ngos', ngoRoutes);
app.use('/api/incidents', incidentsRoutes);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
})

app.listen(3000, () => {
  console.log('Server running at localhost:3000');
});

