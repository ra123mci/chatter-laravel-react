<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatterController extends Controller {
    

    public function __construct(
        protected Request $request
    ) {}

    final public function index(){
        return inertia('Chatter/Index', [

        ]);
    }
}
