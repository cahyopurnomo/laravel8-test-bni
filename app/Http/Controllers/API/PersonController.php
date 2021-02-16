<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Person;
use Validator;
use App\Http\Resources\Persons as PersonsResource;

class PersonController extends BaseController
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $persons = Person::all();

        return $this->sendResponse(PersonsResource::collection($persons), 'Persons retrieved successfully.');
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'status'    => 'required',
            'position'  => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $person = Person::create($input);

        return $this->sendResponse(new PersonsResource($person), 'Person created successfully.');
    }

    public function show($id)
    {
        $person = Person::find($id);

        if(is_null($person)){
            return $this->sendError('Person  not found.');
        }

        return $this->sendResponse(new PersonsResource($person), 'Person retrieved successfully.');
    }

    public function update(Request $request, Person $person)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'status'    => 'required',
            'position'  => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->error());
        }

        $person->status = $input['status'];
        $person->position = $input['position'];
        $person->save();
        
        return $this->sendResponse(new PersonsResource($person), 'Person updated successfully.');
    }

    public function destroy(Person $person)
    {
        $person->delete();

        return $this->sendResponse([], 'Person deleted successfully.');
    }
}
