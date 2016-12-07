'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('QNgPubSub');
  dependencies = module.requires;
  });

  it('dummy test', function() {
    expect(true).to.be.ok;
  });


});
