function printResume() {
    var pdfWindow = window.open("resume.pdf");
    pdfWindow.onload = function() {
        pdfWindow.focus(); 
        pdfWindow.print(); //triggers the browser print dialog
    };
}