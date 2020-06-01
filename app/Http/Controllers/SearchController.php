<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Business;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function index (Request $request) {
        $query = $request->input('q'); 
        
        $businesses = Business::search($query)->get();
        
        return Inertia::render('Home/Index', compact('businesses'));        
    }
}
