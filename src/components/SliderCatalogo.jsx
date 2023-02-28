import * as XLSX from 'xlsx';

export async function sliderCatalogo(archivo) {
  const res = await fetch(archivo);
  const ab = await res.arrayBuffer(); // recover data as ArrayBuffer
  const wb = XLSX.read(ab);
  const wsname =wb.SheetNames[0];
  const ws =wb.Sheets[wsname];
  const data = XLSX.utils.sheet_to_json(ws);
  //cargamos el catalogo en Jason
  return data;
};

