<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use willvincent\Rateable\Rateable;

class Business extends Model
{
    use Searchable, Rateable;

    protected $fillable = [
        'name','slug','description','url','contact','email','phones','address','city',
        'state','country','images','default_image','views','status' 
    ];

    protected $casts = [
        'images' => 'array',
    ];
    protected $appends = ['ratings'];

    public function categories()
    {
        return $this->belongsToMany('App\Category', 'category_business', 'business_id', 'category_id');
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();

        // Customize array...

        return $array;
    }    

    public function getRatingsAttribute()
    {
        return (int) $this->averageRating;
    }    
}
