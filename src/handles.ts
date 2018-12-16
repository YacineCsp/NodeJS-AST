//const url = require('url');
//const qs = require('querystring');
//const http = require('http');
module.exports = {
    
    serverHandle: function (req, res) {
        const route = url.parse(req.url);
        const path = route.pathname;
        const params = qs.parse(route.query);
    
      res.writeHead(200, {'Content-Type': 'text/html'});
      if (path === '/hello' && 'name' in params && params['name']!='yacine' && params['name']!='Yacine' && params['name']!='YACINE') {
        res.write('Hello ' + params['name']);
      }if (path === '/hello' && (params['name']=='yacine'||params['name']=='Yacine'||params['name']=='YACINE')) {
        res.write('Bonjour, je me présente Yacine Zidi,</br>Étudiant ECE Paris école d\'ingénieurs'+
        'Master 2 - Majeure Systèmes d\'informations spécialité cybersécurité</br>'+'Je n\'aime pas faire de longs discours pour me presenter mais je suis fort sympathique.</br>');
      } 
      if (('name' in params)==false){
        res.write('Error 404 - Not Found');
      }
      res.end();} 
  }