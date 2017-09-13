<?php
sleep(3);
$data = json_decode($HTTP_RAW_POST_DATA);
// var_dump($data);
echo $data->prop1 + $data->prop2;