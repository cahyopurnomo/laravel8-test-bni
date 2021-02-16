<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PersonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		DB::table('persons')->insert(array(
        	['status' => 'ACTIVE', 'position' => 'BOD'],
        	['status' => 'ACTIVE', 'position' => 'HR Manager'],
        	['status' => 'ACTIVE', 'position' => 'IT Manager'],
        	['status' => 'ACTIVE', 'position' => 'IT Staff'],
        	['status' => 'ACTIVE', 'position' => 'Accounting Staff']
        ));
    }
}
