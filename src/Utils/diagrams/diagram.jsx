import xml2js from "xml-js"
import d3 from "d3"
const diagram = () => {
    // Lire le fichier XML
const xmlData = fs.readFileSync('../../lib/index.xml', 'utf-8');

// Analyser le fichier XML en un objet JavaScript
const jsonData = xml2js.xml2json(xmlData, { compact: true, spaces: 4 });

// Convertir l'objet JavaScript en données pour le diagramme (utilisez vos propres données et code D3 ici)
const data = JSON.parse(jsonData);
const svg = d3.select('body').append('svg');

// Créer un diagramme avec D3.js (exemple simplifié)
svg.append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 100)
    .attr('height', 50)
    .attr('fill', 'blue');

// Générer le contenu HTML avec le diagramme
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Diagramme à partir de XML</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
  ${svg.node().outerHTML}
</body>
</html>
`;

// Écrire le contenu HTML dans un fichier
fs.writeFileSync('output.html', htmlContent);
  return (
    <div>
      
    </div>
  )
}

export default diagram
