document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function() {
        downloadBtn.disabled = true;
        downloadBtn.textContent = 'Downloading...';

        // Replace 'ruta/al/archivo.pdf' with the actual path to your PDF file
        const pdfPath = './media/CV_Facundo_Machado.pdf';

        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'CV_Facundo_Machado.pdf'; // The name of the downloaded file

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            downloadBtn.disabled = false;
            downloadBtn.textContent = 'Download CV';
        }, 1000);
    });
});