const jsFiles = ["/component/head.js?20241015_003", "/component/header.js?20241015_003", "/component/footer.js?20241015_003"];

jsFiles.forEach((jsFile) => {
  import(jsFile).catch((error) => {
    console.error(`Failed to import: ${jsFile}`, error);
  });
});

const cssFiles = ["/component/global.css?20241015_003"];

cssFiles.forEach((cssFile) => {
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = cssFile;
  document.head.appendChild(linkElement);
});
