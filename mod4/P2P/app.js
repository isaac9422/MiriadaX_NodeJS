var express = require('express');
var app = express();

app.get('/respuestas', function(req, res){
if(req.query.pregunta === 'pregunta1'){
	if(req.query.respuesta.toUpperCase() == 'CRISTOBAL COLON'){
		res.send('Has respondido acertadamente'+
'<html>'
+'    <head>'
+'        <title>Página de respuesta</title>'
+'        <meta charset="utf-8"/>'
+'    </head>'
+'    <body>'
+'        <a href="preguntas.html">Volver al inicio</a>'
+'    </body>'
+'</html>');
	}else{
		res.send('No es la respuesta correcta, la respuesta correcta era: Cristobal Colon'+
'<html>'
+'    <head>'
+'        <title>Página de respuesta</title>'
+'        <meta charset="utf-8"/>'
+'    </head>'
+'    <body>'
+'        <a href="preguntas.html">Volver al inicio</a>'
+'    </body>'
+'</html>');		
	}
}
else if(req.query.pregunta === 'pregunta2'){
	if(req.query.respuesta.toUpperCase() == 'LISBOA'){
		res.send('Has respondido acertadamente'+
'<html>'
+'    <head>'
+'        <title>Página de respuesta</title>'
+'        <meta charset="utf-8"/>'
+'    </head>'
+'    <body>'
+'        <a href="preguntas.html">Volver al inicio</a>'
+'    </body>'
+'</html>');
	}else{
		res.send('No es la respuesta correcta, la respuesta correcta era: Lisboa'+
'<html>'
+'    <head>'
+'        <title>Página de respuesta</title>'
+'        <meta charset="utf-8"/>'
+'    </head>'
+'    <body>'
+'        <a href="preguntas.html">Volver al inicio</a>'
+'    </body>'
+'</html>');
	}
}
else{
res.send('No has ingresado adecuadamente a esta página \n' +
'<html>'
+'    <head>'
+'        <title>Página de respuesta</title>'
+'        <meta charset="utf-8"/>'
+'    </head>'
+'    <body>'
+'        <a href="preguntas.html">Volver al inicio</a>'
+'    </body>'
+'</html>');
}
});

app.get('/preguntas',function(req,res){
	res.send('<html>'
+'    <head>'
+ '       <title>Página Inicial</title>'
+  '      <meta charset="utf-8"/>'
 +  ' </head>'
  +  '<body>'
   +  '   <form action="respuestas.html" method="GET">'
    +  '      <h4>Pregunta #1</h4>'
     +  '     <b>¿Quién descubrió América?</b><br><br>'
      +  '    <input type="hidden" name="pregunta" value="pregunta1"/>'
       +  '   <input type="text" name="respuesta"/><br><br>'
        +  '  <input type="submit" value="Responder" name="btnRespuesta" />'
        +'</form>'
        
      +'  <form action="respuestas.html" method="GET">'
      + '     <h4>Pregunta #2</h4>'
       + '    <b>¿Capital de Portugal?</b><br><br>'
        + '   <input type="hidden" name="pregunta" value="pregunta2"/>'
         + '  <input type="text" name="respuesta"/><br><br>'
          +'  <input type="submit" value="Responder" name="btnRespuesta" />'
        +'</form>'
+'    </body>'
+'</html>');
});

app.listen(8000);
