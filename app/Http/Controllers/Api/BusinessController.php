<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Business;
use App\Category;
use Illuminate\Support\Facades\Validator;
use willvincent\Rateable\Rating;

class BusinessController extends Controller
{
    //
    public function list(Request $request)
    {
        $businesses = Business::all();

        return response() ->json([
            'success' => true,
            'businesses' => $businesses
        ], 201);
        
    }    

    public function index (Request $request) {
        $query = $request->input('q'); // <-- Change the query for testing.
        
        $businesses = Business::search($query)->get();
        
        return response() ->json([
            'success' => true,
            'businesses' => $businesses
        ], 201);
    }    

    public function show(Request $request, Business $business)
    {
        $business->increment('views');
        $businessCategories = $business->categories()->get();

        return response() ->json([
            'success' => true,
            'business' => $business,
            'businessCategories' => $businessCategories
        ], 201);
    }    

    public function rate(Request $request, Business $business)
    {
        $input = $request->only('ipAddress', 'rate');

        Validator::make($input, [
            'ipAddress' => 'required',           
            'rate' => 'required',           
        ])->validate(); 

        $ipAddress = $request->input('ipAddress');
        $rate = $request->input('rate');

        $rating = new Rating();
        $rating->rating = $rate;
        $rating->user_id = $ipAddress;
        
        $business->ratings()->save($rating);
        
        return response() ->json([
            'success' => true,
            'business' => $business,
        ], 201);        
    }
}
