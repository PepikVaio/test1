document.getElementById('generatePdf').addEventListener('click', async function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // První stránka
    doc.setFontSize(16);
    doc.text("Stránka 1", 10, 10);
    doc.setFontSize(12);
    doc.text("Toto je obsah první stránky.", 10, 20);

    // Druhá stránka
    const response = await fetch('page2.html');
    const page2Html = await response.text();

    const parser = new DOMParser();
    const page2Doc = parser.parseFromString(page2Html, 'text/html');
    const page2Content = page2Doc.body.innerText;

    doc.addPage();
    doc.setFontSize(16);
    doc.text("Stránka 2", 10, 10);
    doc.setFontSize(12);
    doc.text(page2Content, 10, 20);

    doc.save("document.pdf");
});
