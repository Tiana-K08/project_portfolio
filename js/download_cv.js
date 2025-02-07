document.getElementById('download-file').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '../files/CV_Tetiana_Kononenko.pdf';
    link.download = 'CV_Tetiana_Kononenko.pdf';
    link.click();
});