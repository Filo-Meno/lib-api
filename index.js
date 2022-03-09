const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
// Routes
app.use(require('./routes/index'));
app.use('/users', require('./routes/crud'));

// Start API
app.listen(app.get('port'), () => {
  console.log(`Api listening on port`, app.get('port'));
})
