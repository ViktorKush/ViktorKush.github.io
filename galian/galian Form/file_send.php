<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Upload file</title>
    </head>
    <body>
        <form action="file_upload.php" method="post" enctype="multipart/form-data">
            <label for="ctl1">Please select the file and click upload button</label>
            <input name="filenamesend" type="file" id="ctl1">
            <input type="submit" value="Upload">
        </form>
    </body>
</html>