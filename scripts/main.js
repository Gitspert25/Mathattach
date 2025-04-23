function renderCode() {
  const code = document.getElementById('codeEditor').value;
  const output = document.getElementById('output');
  
  // Simplified Example - Injecting raw HTML for now
  output.innerHTML = code; 
  output.innerPython = code; 
}
