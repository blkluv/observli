<?php

namespace App\Actions;

use Illuminate\Support\Facades\Process;

class GetHostPing
{
    public function handle($domain): string
    {
        $url = parse_url($domain);
        $host = $url['host'];
        $exec = Process::run("ping -c 3 -s 64 -t 64 ".$host);
        $output = $exec->output();
        $first_end = explode("=", $output );
        $last_end = end($first_end);
        $array = explode("/",  $last_end);
        return ceil($array[1]);
    }
}
