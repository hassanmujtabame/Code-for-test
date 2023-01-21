# FrontEnd-Vuejs 
## تعليمات لتنصيب الفرند اند في الباك اند
1- نفذ التعليمة `npm run build`

2- انسخ ما بداخل المجلد dist الى المجلد public للموجود في باك أند

3-قم باضافة هذا السيريب الى web.php 

`
Route::get('/', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');
Route::get('/ar/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');
Route::get('/en/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '.*');

`