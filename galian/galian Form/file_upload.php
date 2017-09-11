<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        if (!(empty($_FILES))) {
            $uploaddir = '/tmp/';
            $uploadfile = $uploaddir . trim(strip_tags($_FILES["filenamesend"]["name"]));

            if ($_FILES["filenamesend"]["size"] > 1024 * 1024) {
                echo ("Размер файла превышает один мегабайт.");
                header('Location: file_send.php'); // Запрещаем повторную пересылку файла.
                exit;
            }
            // Проверяем загружен ли файл
            if (is_uploaded_file($_FILES["filenamesend"]["tmp_name"])) {
// Если файл загружен успешно, перемещаем его из временной директории в директорию постоянного хранения
                move_uploaded_file($_FILES["filenamesend"]["tmp_name"], $uploadfile);
                header('Location: file_send.php'); // Запрещаем повторную пересылку файла.
                exit;
            } else {
                echo("Ошибка загрузки файла");
            }
        }
        ?>
    </body>
</html>