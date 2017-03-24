'use strict';

describe('Routing', function(){
  var $route;
  beforeEach(module('hang'))
});

beforeEach(inject(function($injector){
  $route = $injector.get('$route');
}));

it('Should have /signup route, template, and controller', function () {
  expect($route.routes['/signup']).to.be.defined;
  expect($route.routes['/signup'].controller).to.equal('AuthController');
  expect($route.routes['/signup'].templateUrl).to.equal('/api/users/signin');
});
