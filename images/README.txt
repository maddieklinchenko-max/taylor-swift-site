Place your images here so the gallery shows them on the site.

Save the two images you attached to the chat with these filenames:
- taylor1.jpg
- taylor2.jpg

(Optionally add a third image named placeholder3.jpg.)

After saving the files, refresh your browser to see them on the gallery.

PowerShell quick copy example (run in the folder where you downloaded the attachments):

# Move or copy files into the project images folder
Move-Item .\DownloadedFileName1.jpg c:\Users\maddi\taylor-swift-code\images\taylor1.jpg
Move-Item .\DownloadedFileName2.jpg c:\Users\maddi\taylor-swift-code\images\taylor2.jpg

# Then open the site or refresh the browser
Start-Process c:\Users\maddi\taylor-swift-code\index.html
