<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use App\User;

class EventsController extends Controller
{
    public function index(Request $request)
    {
        $data = [
            "fname" => 'Olawole',
            "lname" => 'Moses',
        ];
        // dd($users);
        return Inertia::render('Events/Show', $data);
    }
}