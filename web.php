<?php

Route::redirect('/', '/home');
Route::get('home', 'HomeController@index')->name('home');
Auth::routes(['register' => '/register']);

Auth::routes(['verify' => true]);

Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');


// web

Route::get('thanks', 'HomeController@thanks')->name('thanks');
Route::get('page/{id}', 'HomeController@page')->name('page');
Route::get('story/{id}', 'HomeController@story')->name('story');
Route::get('event/{id}', 'HomeController@event')->name('event');

// blog routes
Route::get('blog', 'BlogController@index')->name('blogs');
Route::get('blog/{id}', 'BlogController@show')->name('blog');


// package routes
Route::match(['GET', 'POST'], 'package/payment', 'PackageController@payment')->name('package-payment');


Route::get('packages-categories', 'PackageController@categories')->name('packages');
Route::get('packages', 'PackageController@packs')->name('package-list');
Route::get('packages/{id}', 'PackageController@index')->name('package-details');
Route::get('package/{id}', 'PackageController@show')->name('package');
Route::get('package/payfort/{id}', 'PackageController@payfort')->name('package-payfort');
Route::get('app_pay', 'PackageController@appPayment')->name('app_pay');
Route::get('app_pay_event', 'PackageController@appPaymentEvent')->name('app_pay');
Route::get('app_payment', 'PackageController@appCheckPayment')->name('app_pay_check');
Route::get('app_payment_event', 'PackageController@appCheckPaymentEvent')->name('app_pay_check_event');


// media
Route::get('podcasts', 'HomeController@podcast')->name('podcasts');
Route::get('videos', 'HomeController@video')->name('videos');


// features
Route::get('features', 'HomeController@features')->name('features');


Route::get('who', 'HomeController@who')->name('who');
Route::get('why', 'HomeController@why')->name('why');
Route::get('events', 'HomeController@events')->name('events');

Route::group(['middleware' => ['auth', 'verified']], function () {
    // user routes
    Route::get('account', 'UserController@account')->name('account')->middleware('verified');
    Route::get('account', 'UserController@account')->name('account')->middleware('verified');
    Route::get('account/edit', ['as' => 'account.edit', 'uses' => 'UserController@edit'])->name('account.edit')->middleware('verified');
    Route::patch('account/update', ['as' => 'account.update', 'uses' => 'UserController@update'])->name('account.update')->middleware('verified');
    Route::get('account/subscriptions', 'UserController@subscriptions')->name('account.subscriptions')->middleware('verified');
    Route::get('account/events', 'UserController@events')->name('account.event.subscriptions')->middleware('verified');
    Route::get('account/subscription/{id}', 'UserController@subscription')->name('account.subscription')->middleware('verified');
    Route::get('event-pay/{id}', 'UserController@event')->name('account.event')->middleware('verified');

    Route::match(['GET', 'POST'], 'event-payment/payment', 'UserController@payment')->name('event-payment-pay');

    Route::post('package/consulting', 'PackageController@consulting')->name('consulting');
    Route::get('package/{id}/pay', 'PackageController@pay')->name('package-pay');


});

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'namespace' => 'Admin', 'middleware' => ['auth']], function () {
    Route::get('/', 'HomeController@index')->name('home');
    // Permissions
    Route::delete('permissions/destroy', 'PermissionsController@massDestroy')->name('permissions.massDestroy');
    Route::resource('permissions', 'PermissionsController');

    // Roles
    Route::delete('roles/destroy', 'RolesController@massDestroy')->name('roles.massDestroy');
    Route::resource('roles', 'RolesController');

    // Users
    Route::delete('users/destroy', 'UsersController@massDestroy')->name('users.massDestroy');
    Route::resource('users', 'UsersController');

    // Audit Logs
    Route::resource('audit-logs', 'AuditLogsController', ['except' => ['create', 'store', 'edit', 'update', 'destroy']]);

    // Content Categories
    Route::delete('content-categories/destroy', 'ContentCategoryController@massDestroy')->name('content-categories.massDestroy');
    Route::resource('content-categories', 'ContentCategoryController');

    // Content Tags
    Route::delete('content-tags/destroy', 'ContentTagController@massDestroy')->name('content-tags.massDestroy');
    Route::resource('content-tags', 'ContentTagController');

    // Content Pages
    Route::delete('content-pages/destroy', 'ContentPageController@massDestroy')->name('content-pages.massDestroy');
    Route::post('content-pages/media', 'ContentPageController@storeMedia')->name('content-pages.storeMedia');
    Route::post('content-pages/ckmedia', 'ContentPageController@storeCKEditorImages')->name('content-pages.storeCKEditorImages');
    Route::resource('content-pages', 'ContentPageController');

    // Sliders
    Route::delete('sliders/destroy', 'SliderController@massDestroy')->name('sliders.massDestroy');
    Route::post('sliders/media', 'SliderController@storeMedia')->name('sliders.storeMedia');
    Route::post('sliders/ckmedia', 'SliderController@storeCKEditorImages')->name('sliders.storeCKEditorImages');
    Route::resource('sliders', 'SliderController');

    // Main Blocks
    Route::delete('main-blocks/destroy', 'MainBlocksController@massDestroy')->name('main-blocks.massDestroy');
    Route::post('main-blocks/media', 'MainBlocksController@storeMedia')->name('main-blocks.storeMedia');
    Route::post('main-blocks/ckmedia', 'MainBlocksController@storeCKEditorImages')->name('main-blocks.storeCKEditorImages');
    Route::resource('main-blocks', 'MainBlocksController');

    // Clients
    Route::delete('clients/destroy', 'ClientsController@massDestroy')->name('clients.massDestroy');
    Route::post('clients/media', 'ClientsController@storeMedia')->name('clients.storeMedia');
    Route::post('clients/ckmedia', 'ClientsController@storeCKEditorImages')->name('clients.storeCKEditorImages');
    Route::resource('clients', 'ClientsController');

    // Request Meetings
    Route::delete('request-meetings/destroy', 'RequestMeetingController@massDestroy')->name('request-meetings.massDestroy');
    Route::post('request-meetings/media', 'RequestMeetingController@storeMedia')->name('request-meetings.storeMedia');
    Route::post('request-meetings/ckmedia', 'RequestMeetingController@storeCKEditorImages')->name('request-meetings.storeCKEditorImages');
    Route::resource('request-meetings', 'RequestMeetingController', ['except' => ['create', 'store', 'edit', 'update']]);

    // Videos
    Route::delete('videos/destroy', 'VideosController@massDestroy')->name('videos.massDestroy');
    Route::resource('videos', 'VideosController');

    // Events
    Route::delete('events/destroy', 'EventsController@massDestroy')->name('events.massDestroy');
    Route::post('events/media', 'EventsController@storeMedia')->name('events.storeMedia');
    Route::post('events/ckmedia', 'EventsController@storeCKEditorImages')->name('events.storeCKEditorImages');
    Route::resource('events', 'EventsController');

    // Podcasts
    Route::delete('podcasts/destroy', 'PodcastController@massDestroy')->name('podcasts.massDestroy');
    Route::post('podcasts/media', 'PodcastController@storeMedia')->name('podcasts.storeMedia');
    Route::post('podcasts/ckmedia', 'PodcastController@storeCKEditorImages')->name('podcasts.storeCKEditorImages');
    Route::resource('podcasts', 'PodcastController');

    // Packs
    Route::delete('packs/destroy', 'PackController@massDestroy')->name('packs.massDestroy');
    Route::resource('packs', 'PackController');

    // Pack Services
    Route::delete('pack-services/destroy', 'PackServicesController@massDestroy')->name('pack-services.massDestroy');
    Route::resource('pack-services', 'PackServicesController');

    // Courses
    Route::delete('courses/destroy', 'CoursesController@massDestroy')->name('courses.massDestroy');
    Route::post('courses/media', 'CoursesController@storeMedia')->name('courses.storeMedia');
    Route::post('courses/ckmedia', 'CoursesController@storeCKEditorImages')->name('courses.storeCKEditorImages');
    Route::resource('courses', 'CoursesController');

    // Pack Attachments
    Route::delete('pack-attachments/destroy', 'PackAttachmentController@massDestroy')->name('pack-attachments.massDestroy');
    Route::post('pack-attachments/media', 'PackAttachmentController@storeMedia')->name('pack-attachments.storeMedia');
    Route::post('pack-attachments/ckmedia', 'PackAttachmentController@storeCKEditorImages')->name('pack-attachments.storeCKEditorImages');
    Route::resource('pack-attachments', 'PackAttachmentController');

    // Pack Subscriptions
    Route::delete('pack-subscriptions/destroy', 'PackSubscriptionController@massDestroy')->name('pack-subscriptions.massDestroy');
    Route::resource('pack-subscriptions', 'PackSubscriptionController');

    // Package Categories
    Route::delete('package-categories/destroy', 'PackageCategoryController@massDestroy')->name('package-categories.massDestroy');
    Route::resource('package-categories', 'PackageCategoryController');

    // Stories
    Route::delete('stories/destroy', 'StoriesController@massDestroy')->name('stories.massDestroy');
    Route::post('stories/media', 'StoriesController@storeMedia')->name('stories.storeMedia');
    Route::post('stories/ckmedia', 'StoriesController@storeCKEditorImages')->name('stories.storeCKEditorImages');
    Route::resource('stories', 'StoriesController');

    // Consultings
    Route::delete('consultings/destroy', 'ConsultingController@massDestroy')->name('consultings.massDestroy');
    Route::resource('consultings', 'ConsultingController');

    // Consulting Requests
    Route::delete('consulting-requests/destroy', 'ConsultingRequestController@massDestroy')->name('consulting-requests.massDestroy');
    Route::resource('consulting-requests', 'ConsultingRequestController');

    Route::get('system-calendar', 'SystemCalendarController@index')->name('systemCalendar');

    // Event Subscriptions
    Route::resource('event-subscriptions', 'EventSubscriptionController', ['except' => ['create', 'store', 'edit', 'update', 'destroy']]);


});
