<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $categories = [
            'Accounting & Tax Services','Arts, Culture & Entertainment','Auto Sales & Service','Banking & Finance',
            'Business Services','Community Organizations','Dentists & Orthodontists','Education','Health & Wellness','Health Care',
            'Home Improvement','Insurance','Internet & Web Services','Legal Services','Lodging & Travel','Marketing & Advertising',
            'News & Media','Pet Services','Real Estate','Restaurants & Nightlife','Shopping & Retail','Sports & Recreation',
            'Transportation','Utilities','Wedding, Events & Meetings', 'Web Development', 'Computer Repairs','Programming'
        ];

        foreach ($categories as $category) {
            Category::create(['name' => $category]);
        }
    }
}