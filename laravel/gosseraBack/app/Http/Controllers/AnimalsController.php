<?php

namespace App\Http\Controllers;

use App\Models\Animals;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

class AnimalsController extends Controller
{
    // funcio que conta el nombre de files coincidents amb la recerca.
    public function getCountAnimals($estat)
    {
        $animalsCountData = Animals::where('estat', $estat)->count();

        return response()->json($animalsCountData);
    }

    // funcio amb la que s'obté l'id de l'ultim element de files coincidents amb la recerca.
    public function getLastAnimals($estat)
    {
        $animalsCountData = Animals::where('estat', $estat)->orderBy('id', 'DESC')->pluck('id')->first();

        return response()->json($animalsCountData);
    }

    // funcio que retorna un nombre de elements que coincideixen amb la recerca.
    public function getAnimals(Request $request)
    {
        $validatedData = Validator::make($request->all(),
        [
            'estat' => 'required|string|max:128',
            'offset' => 'required|integer',
        ]);

        if($validatedData->fails())
        {
            return response()->json($validatedData->errors()->toJson(), 400); 
        }

        try
        {
            $estat = $request->estat;
            $offset = $request->offset;
                
            $animalsData = Animals::where('estat', $estat)->offset($offset)->limit(6)->get();

            return response()->json($animalsData);
        }
        catch(Exception $e)
        {
            return response()->json(['error' => 'fail_to_create_user'], 400);   
        } 

    }

    public function getGos(Request $request)
    {

        $gos = Animals::where('id', $request->id)->get();

        return response()->json($gos);

    }

}
