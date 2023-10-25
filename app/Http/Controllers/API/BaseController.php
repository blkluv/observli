<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;

class BaseController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $status_code = 200, $message = null)
    {
        $response = [
            'data' => $result,
            'status' => $status_code,
            'timestamp' => now()->timestamp,
        ];

        if($message) $response['message'] = $message;

        return response()->json($response, $status_code);
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $status_code = 404, $messages = [])
    {
        $response = [
            'error' => $error,
            'status' => $status_code,
            'timestamp' => now()->timestamp,
        ];


        if(!empty($messages)) {
            $response['data'] = $messages;
        }


        return response()->json($response, $status_code);
    }
}
