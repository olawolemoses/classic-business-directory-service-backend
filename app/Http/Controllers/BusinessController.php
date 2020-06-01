<?php

namespace App\Http\Controllers;

use App\Business;
use App\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BusinessController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $businesses = Business::all();
        return Inertia::render('Business/Index', compact('businesses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->only(
            'name','description','url','contact','email','phones','address','city','state','country','images'
        );

        // dd($input);
        Validator::make($input, [
            'name' => 'required|unique:businesses',
            'description' => 'required',
            'url' => 'required',
            'contact' => 'required',
            'email' => 'required|email|unique:businesses',
            'phones' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',           
            'images' => 'required'            
        ])->validate(); 

        $imageFiles = [];
        // $fn = function($v, $k) use (&$imageFiles) {
        //     foreach($v as $key => $base64_image ){
        //         $extension = explode('/', explode(':', substr($base64_image, 0, strpos($base64_image, ';')))[1])[1];
        //         $replace = substr($base64_image, 0, strpos($base64_image, ',')+1);
        //         $image = str_replace($replace, '', $base64_image);
        //         $image = str_replace(' ', '+', $image);
        //         $imageName = Str::random(64).'.'.$extension;
        //         if(Storage::disk('public')->put($imageName, base64_decode($image)) ) {
        //             $imageFiles[] = $imageName;
        //         }
        //     }
        // };

        $imageFiles = [];
        $fn = function($v, $k) use (&$imageFiles) {
            \Cloudinary::config(array(
                "cloud_name" => env('CLOUDINARY_API_NAME'),
                "api_key" => env('CLOUDINARY_API_KEY'),
                "api_secret" => env('CLOUDINARY_API_SECRET')
            ));
            
            foreach($v as $key => $base64_image){
                $response = \Cloudinary\Uploader::upload($base64_image);
                if(isset($response)){
                    $imageFiles[] = $response['url'];
                }
            }
        }; 

        $args = $input['images'];
        array_walk($args, $fn);
        $input['images'] = json_encode($imageFiles);

        $defaultImage = $imageFiles[0];
        $name = isset($input['name']) ? $input['name'] : "";
        $slug = Str::slug($name, '-');

        Business::create(array_merge($input, ['slug'=>$slug, 'default_image'=>$defaultImage]));
        return redirect(null, 304)->route('business');        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Business $business)
    {
        $categories = Category::all();
        $businessCategories = $business->categories()->get();
        return Inertia::render('Business/Show', compact('business', 'categories', 'businessCategories'));        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function edit(Business $business)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Business $business)
    {
        $input = $request->only(
            'name','description','url','contact','email','phones','address','city','state','country','images','status'
        );

        // dd($input);
        Validator::make($input, [
            'name' => 'required|unique:businesses,name,'.$business->id,
            'description' => 'required',
            'url' => 'required',
            'contact' => 'required',
            'email' => 'required|email|unique:businesses,email,'.$business->id,
            'phones' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'country' => 'required',           
        ])->validate(); 

        
        $name = isset($input['name']) ? $input['name'] : "";
        $slug = Str::slug($name, '-');
        
        $input = array_merge($input, ['slug'=>$slug]);

        if( isset($input['images']) && !empty($input['images'])) {
            $imageFiles = [];
            $fn = function($v, $k) use (&$imageFiles) {
                \Cloudinary::config(array(
                    "cloud_name" => env('CLOUDINARY_API_NAME'),
                    "api_key" => env('CLOUDINARY_API_KEY'),
                    "api_secret" => env('CLOUDINARY_API_SECRET')
                ));
                
                foreach($v as $key => $base64_image){
                    $response = \Cloudinary\Uploader::upload($base64_image);
                    if(isset($response)){
                        $imageFiles[] = $response['url'];
                    }
                }
            };
    
            $args = $input['images'];
            array_walk($args, $fn);
            $input['images'] = json_encode($imageFiles);
    
            $defaultImage = $imageFiles[0];

            $input = array_merge($input, ['default_image'=>$defaultImage]);
        }

        $business->update($input);

        return redirect(null, 304)->route('business');           
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy(Business $business)
    {
        $business->delete();
        return redirect(null, 304)->route('business');         
    }

    public function toggleActivate(Request $request, Business $business)
    {
        $business->status = !(int)$business->status;
        $business->update();
        return redirect(null, 304)->route('business');
    }

    public function addCategory(Request $request, Business $business, Category $category)
    {
        $hasCategory = collect($business->categories()->get())->pluck('id')->contains($category->id);

        if($hasCategory){
            $request->session()->flash('error', 'Category already added!');
            return redirect(null, 304)->route('business.show', ["business" => $business]);
        }

        $business->categories()->attach($category->id);
        return redirect(null, 304)->route('business.show', ["business" => $business]);
    }    
}
