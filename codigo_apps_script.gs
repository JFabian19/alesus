/**
 * CÓDIGO DE GOOGLE APPS SCRIPT PARA TU HOJA DE CÁLCULO
 * 
 * INSTRUCCIONES DE INSTALACIÓN:
 * 
 * 1. Abre tu Google Sheet (ID: 1TI-lJqw0Mz6dpPoyPsBTetQZ3GP1dDCTphnW8dGoozA)
 * 2. En el menú superior, haz clic en: Extensiones -> Apps Script
 * 3. Borra el código existente y pega todo este código de abajo.
 * 4. Guarda el proyecto (icono de disquete).
 * 5. Haz clic en el botón azul "Implementar" (arriba a la derecha) -> "Nueva implementación".
 * 6. Selecciona el tipo de implementación haciendo clic en el engranaje: "Aplicación web".
 * 7. Configura los siguientes campos:
 *    - Descripción: Guardar datos de formulario Alesus
 *    - Ejecutar como: "Tú" (Tu cuenta de correo)
 *    - Quién tiene acceso: "Cualquiera" (Es crucial que diga "Cualquiera" para que el frontend pueda enviar datos sin iniciar sesión).
 * 8. Haz clic en "Implementar".
 * 9. Copia la "URL de la aplicación web" que te proporciona.
 * 10. Pega esa URL en el archivo: src/services/googleSheets.ts en la constante WEB_APP_URL.
 */

function doPost(e) {
  try {
    // Analizar los datos recibidos
    const requestData = JSON.parse(e.postData.contents);
    const sheetName = requestData.sheetName;
    const data = requestData.data;
    
    // Obtener la hoja activa
    let ss = null;
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (e) {
      // Ignorar error si no está vinculado
    }
    
    if (!ss) {
      // Abrir por ID (tu ID de Google Sheet)
      ss = SpreadsheetApp.openById('1TI-lJqw0Mz6dpPoyPsBTetQZ3GP1dDCTphnW8dGoozA');
    }
    
    let sheet = ss.getSheetByName(sheetName);
    
    // Si la hoja no existe, la creamos
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Obtener los encabezados existentes
    let headers = [];
    if (sheet.getLastColumn() > 0) {
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    }
    
    // Identificar nuevos encabezados presentes en los datos
    const newHeaders = Object.keys(data).filter(key => !headers.includes(key));
    
    // Si hay nuevos encabezados, los agregamos a la primera fila
    if (newHeaders.length > 0) {
      if (headers.length === 0) {
        headers = newHeaders;
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      } else {
        const startCol = headers.length + 1;
        sheet.getRange(1, startCol, 1, newHeaders.length).setValues([newHeaders]);
        headers = headers.concat(newHeaders);
      }
    }
    
    // Construir la fila con los valores correspondientes a cada encabezado
    const rowValues = headers.map(header => {
      const val = data[header];
      return val !== undefined && val !== null ? val : "";
    });
    
    // Insertar la fila en la hoja de cálculo
    sheet.appendRow(rowValues);
    
    // Devolver respuesta exitosa
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Datos guardados exitosamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // En caso de error, devolver detalles
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Función opcional para probar que el script responda
function doGet(e) {
  return ContentService.createTextOutput("El script de Google Apps Script está activo y listo para recibir POST.");
}
