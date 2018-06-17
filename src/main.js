//cargar variables con json convertido a objeto de cada uno de los archivos json
var usuarios = JSON.parse();
var progresos = JSON.parse();
var cohorts = JSON.parse();

var usuariosStats = computeUsersStats(usuarios, progresos, cohorts);