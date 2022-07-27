<?php

try{

    // echo json_encode(exec('ls'));
    exec('sudo npm install', $out, $res);
    echo json_encode(['out: '=>$out, 'res: '=>$res]);
}catch(Exception $e){
    print_r($e);
}