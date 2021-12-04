<!DOCTYPE html>

<html lang="ja" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>

<body>


<?php

file_put_contents("sample.txt", $_POST['sendPHP']. "\n");

?>
<?php fwrite("hoge.txt", $_POST['sendPHP']. "\n"); ?>


</body>
</html>