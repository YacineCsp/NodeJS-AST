//TP1
//const http = require('http');
//const handles = require('./handles');
//const server = http.createServer(handles.serverHandle);
//server.listen(8080);
import encoding from 'encoding-down'
import leveldown from 'leveldown'
import levelup from 'levelup'
import WriteStream from 'level-ws'
import { UserHandler, User } from './user'
import { MetricsHandler } from './metrics'
import morgan = require('morgan')
import session = require('express-session')
import levelSession = require('level-session-store')
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var path = require('path');
var metrics = require('../dist/metrics')
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static( __dirname + "./views"));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static( __dirname + "./views"));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
const authRouter = express.Router()
const userRouter = express.Router()
const db = levelup(encoding(
  leveldown("path"), 
  { valueEncoding: 'json' })
)

const LevelStore = levelSession(session)
const dbUser: UserHandler = new UserHandler('./db/users')
const dbMet: MetricsHandler = new MetricsHandler('./db/metrics')
const stream = WriteStream(db);

app.use(morgan('dev'))

app.use(session({
  secret: 'my very secret phrase',
  store: new LevelStore('./db/sessions'),
  resave: true,
  saveUninitialized: true
}))


authRouter.get('/login', (req: any, res: any) => {
  res.render('login')
})

authRouter.get('/signup', (req: any, res: any) => {
  res.render('signup')
})

authRouter.get('/logout', (req: any, res: any) => {
  delete req.session.loggedIn
  delete req.session.user
  res.redirect('/login')
})

app.post('/login', (req: any, res: any, next: any) => {
  dbUser.get(req.body.username, (err: Error | null, result?: User) => {
    if (err) next(err)
    if (result === undefined || !result.validatePassword(req.body.password)) {
      res.redirect('/login')
    } else {
      req.session.loggedIn = true
      req.session.user = result
      res.redirect('/')
    }
  })

app.use(authRouter)

userRouter.post('/', (req: any, res: any, next: any) => {
  dbUser.get(req.body.username, function (err: Error | null, result?: User) {
    if (!err || result !== undefined) {
     res.status(409).send("user already exists")
    } else {
      dbUser.save(req.body, function (err: Error | null) {

if (err) next(err)

else res.status(201).send("user persisted")
      })
    }
  })
})
userRouter.get('/:username', (req: any, res: any, next: any) => {
  dbUser.get(req.params.username, function (err: Error | null, result?: User) {
    if (err || result === undefined) {
      res.status(404).send("user not found")
    } else res.status(200).json(result)
  })
})

app.use('/user', userRouter)
})
const authCheck = function (req: any, res: any, next: any) {
  if (req.session.loggedIn) {
    next()
  } else res.redirect('/login')
}

app.get('/', authCheck, (req: any, res: any) => {
  res.render('index', { name: req.session.username })
})

app.post( '/signup',(req, res, next) => {
  try {
    console.log("post received: %s %s %s", req.body.username, req.body.password,req.body.email);

    const newUser = new User(req.body.username, req.body.password, req.body.email, false)
    dbUser.save(newUser, (err: Error | null, result?: User)=> false )
    console.log("post received: %s %s %s", req.body.username, req.body.password,req.body.email);

    //popup.alert({
    //  content:'success, Registration successfully, go ahead and login.'
    //});
    res.redirect('/login')

  } catch(error) {
    next(error)
  }
})

app.get( '/login',(req, res) => res.render('login.ejs'));
app.get( '/signup',(req, res) => res.render('signup.ejs'));


app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})
app.get(
  '/hello/:name', 
  (req, res) => res.render('index.ejs', {name: req.params.name})
);
app.listen(8080);