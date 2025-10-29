console.log("Entrada no arquvo script.js...");

const conteudo = [
  { cod: "Cód001", prod: "Produto001", cor: "Cor001" },
  { cod: "Cód002", prod: "Produto002", cor: "Cor002" },
  { cod: "Cód003", prod: "Produto003", cor: "Cor003" },
];

conteudo.forEach((e) => {
  const tbody = document.getElementById("tbody");

  const tr = document.createElement("tr");
  const tdCod = document.createElement("td");
  const tdProd = document.createElement("td");
  const tdCor = document.createElement("td");

  tdCod.innerText = e.cod;
  tdProd.innerText = e.prod;
  tdCor.innerText = e.cor;

  tr.appendChild(tdCod);
  tr.appendChild(tdProd);
  tr.appendChild(tdCor);

  tbody.appendChild(tr);
});



console.log("Saída do arquivo  script.js...");
