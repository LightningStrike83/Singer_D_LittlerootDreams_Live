<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get("/shinies/all", "ShinyController@getAll");
$router->get("/shinies/{id}", "ShinyController@getOne");
$router->get("/battle/all", "twfPromptController@getAll");
$router->get("/challenge/all", "twfChallengeController@getAll");
$router->post("/prompts/submit", "twfSuggestionController@save");
$router->get("/updates", "SiteUpdateController@getThree");
$router->get("/lines", "LineController@getAll");
$router->get("/lines/{id}", "LineController@getOne");
$router->get("/trainer-lines/main", "TrainerLineController@getAll");
$router->get("/trainer-lines/main/{id}", "TrainerLineController@getTrainer");
$router->get("/trainer-lines/main-orre", "TrainerOrreLineController@getAll");
$router->get("/trainer-lines/main-orre/{id}", "TrainerOrreLineController@getTrainer");
$router->get("/trainer-lines/all", "TrainerFullLineController@getAll");
$router->get("/trainer-lines/all/{id}", "TrainerFullLineController@getTrainer");
$router->get("/trainer-lines/all-orre", "TrainerFullOrreLineController@getAll");
$router->get("/trainer-lines/all-orre/{id}", "TrainerFullOrreLineController@getTrainer");
$router->get("/api-search/{id}", "SpeciesController@getConvert");
$router->get("/search/{id}", "SpeciesController@getOne");
$router->get("/gen/all", "SpeciesController@getAll");
$router->get("/gen/all-no-alt", "SpeciesController@getAllNoAlt");
$router->get("/gen/all-no-alt/dex", "SpeciesController@getAllNoAltDex");
$router->get("/game/sw-sh", "SpeciesController@getSWSH");
$router->get("/game/la", "SpeciesController@getLA");
$router->get("/game/scar-vio", "SpeciesController@getScarVio");
$router->get("/game/za", "SpeciesController@getZA");
$router->get("/custom/regional", "SpeciesController@getRegionals");
$router->get("/custom/starter", "SpeciesController@getStarters");
$router->get("/custom/legendary", "SpeciesController@getLegendaries");
$router->get("/custom/mega", "SpeciesController@getMegas");
$router->get("/custom/gmax", "SpeciesController@getGMax");
$router->get("/custom/dev-fav", "SpeciesController@getDevFavs");
$router->get("/gen/{generation}", "SpeciesController@getGeneration");
$router->get("/custom/ash", "SpeciesController@getAshPokes");
$router->get("/custom/gift", "SpeciesController@getGifts");
$router->get("/custom/champion", "SpeciesController@getChampion");
$router->get("/types/{type}", "SpeciesController@getTypes");
$router->get("/fully-evolved", "SpeciesController@getEvolved");
$router->post("/guess-who/add", "GuessWhoGameController@save");
$router->get("/guess-who/{id}", "GuessWhoGameController@getOne");
$router->get("/league-trainers/all", "LeagueTrainerController@getAll");
$router->get("/league-trainers/gym", "LeagueTrainerController@getGymLeaders");
$router->get("/league-trainers/e4", "LeagueTrainerController@getE4");
$router->get("/league-trainers/champion", "LeagueTrainerController@getChampions");
$router->get("/league-trainers/superboss", "LeagueTrainerController@getSuperboss");
$router->get("/abilities", "AbilityController@getAll");
$router->get("/moves", "MoveController@getAll");
$router->get("/svmoves", "MoveController@getSVMoves");
$router->get("/pokemon-ability/{id}", "SpeciesAbilityController@getOne");
$router->get("/methods/{id}", "SpeciesShinyMethodController@getMethods");
$router->get("/methods-votes/{id}", "SpeciesShinyMethodController@getOne");
$router->post("/votes/submit/{id}", "SpeciesShinyMethodController@increaseVote");