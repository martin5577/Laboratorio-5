// Inicializar Heatmap
var heatmapInstance = h337.create({
  container: document.querySelector('#heatmapContainer'),
  radius: 40,
  maxOpacity: 0.6,
  minOpacity: 0,
  blur: 0.75
});

let gazeData = [];

// Configurar WebGazer
webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) return;

  let x = Math.floor(data.x);
  let y = Math.floor(data.y);

  gazeData.push({ x, y, value: 1 });

  heatmapInstance.addData({
    x: x,
    y: y,
    value: 1
  });

}).begin();

// Mostrar cámara (opcional)
webgazer.showVideoPreview(true)
        .showPredictionPoints(true);

// Simulación de tarea
alert("Tarea: Encuentra y haz clic en el botón 'Registrarse Ahora'");

// Detener después de 45 segundos
setTimeout(() => {
  webgazer.end();
  console.log("Datos de mirada:", gazeData);
  alert("Captura finalizada. Revisa el mapa de calor.");
}, 45000);
