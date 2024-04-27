import { xmlToJson } from "../../lib/xmlToJson";
import { useEffect, useState } from "react";
import {select,forceSimulation,forceCenter,forceManyBody,forceLink} from "d3"
export default function Diagram() {
    // Lire le fichier XML

    const xmlData=`
    const XmlFile = <?xml version="1.0" encoding="UTF-8"?>
<xmi:Model xmi:version="2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xmi="http://www.omg.org/XMI" xmlns:xml="http://www.omg.org/UML/2.5">

  <xml:Class name="Livre">
    <xml:Property name="titre" type="xml:String"/>
    <xml:Property name="auteur" type="xml:String"/>
    <xml:Property name="genre" type="xml:String"/>
    <xml:Property name="ISBN" type="xml:String"/>
    <xml:Property name="disponibilité" type="xml:Boolean"/>
  </xml:Class>

  <xml:Class name="Emprunteur">
    <xml:Property name="nom" type="xml:String"/>
    <xml:Property name="prenom" type="xml:String"/>
    <xml:Property name="adresse" type="xml:String"/>
    <xml:Property name="numéroTéléphone" type="xml:String"/>
    <xml:Property name="livresEmpruntés" type="xml:Set" association="association::livresEmpruntes">
      <xml:AssociationEnd role="empruntéPar" type="xml:Livre"/>
    </xml:Property>
  </xml:Class>

  <xml:Association associationName="livresEmpruntes">
    <xml:AssociationEnd role="emprunte" type="xml:Emprunteur"/>
    <xml:AssociationEnd role="livréPar" type="xml:Livre"/>
  </xml:Association>
</xmi:Model>

    `
      const json = xmlToJson(xmlData)
const data = JSON.parse(json)
      
      const svg = select("body").append("svg")
      .attr("width", 500)
      .attr("height", 300);
    
    const bars = svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 100)
      .attr("y", d => 200 - d.value)
      .attr("width", 80)
      .attr("height", d => d.value)
      .attr("fill", "steelblue");
    
    svg.append("g")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 100 + 30)
      .attr("y", 180)
      .text(d => d.value);
    
    svg.append("g")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 100 + 10)
      .attr("y", 10)
      .text(d => d.name);
   

/* Analyser le fichier XML en un objet JavaScript
const jsData = xml2json.
console.log(jsData)
// Convertir l'objet JavaScript en données pour le diagramme (utilisez vos propres données et code D3 ici)
const data = JSON.parse(jsonData);
const svg = select('body').append('svg');

// Créer un diagramme avec D3.js (exemple simplifié)
svg.append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 100)
    .attr('height', 50)
    .attr('fill', 'blue');
*/



  return (
    <div id="diagram-container"></div>
  )
}

