<?php
$data = json_decode($HTTP_RAW_POST_DATA);
echo $data->prop1 + $data->prop2;