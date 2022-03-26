<!--  
    comanda per crear migracions --- php artisan make:migration create_flights_table 

-->

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AnimalsProtectora extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('animals_protectora', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('raça');
            $table->string('tamany');
            $table->string('sexe');
            $table->string('imatge');
            $table->string('estat');
            $table->string('estat_actual')->nullable();
            $table->boolean('esterelitzat');
            $table->boolean('vacunat');
            $table->longText('informació');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        
    }
}
