export const xmlToJson=(xmlData) =>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlData, "text/xml");
  
    // Function to recursively convert XML nodes to JSON
    function convertNode(node) {
      const obj = {};
      const textContent = node.textContent.trim();
  
      if (textContent) {
        obj.text = textContent;
      }
      
  
      // Handle attributes
      if (node.attributes) {
        for (let i = 0; i < node.attributes.length; i++) {
          const attr = node.attributes[i];
          obj[attr.name] = attr.value;
        }
      }
  
      // Handle child nodes
      if (node.childNodes.length > 1) {
        obj.children = [];
        for (let i = 0; i < node.childNodes.length; i++) {
          obj.children.push(convertNode(node.childNodes[i]));
        }
      } else if (node.childNodes.length === 1 && node.firstChild.nodeType === 3) {
        // Handle single text node child
        obj.text = node.firstChild.textContent.trim();
      }
  
      return obj;
    }
  
    const jsonData = convertNode(doc.documentElement);
    return JSON.stringify(jsonData, null, 2); // Stringify with indentation for readability
  }

  