import CallbackBulkLoader from "callbacks";
import PromiseBulkLoader from "promises";
import GeneratorBulkLoader from "generators";
import PeopleMerger from "people-merger";
import Renderer from "renderer";

function setupHandlers() {
  var content = $(".table-condensed tbody"),
      template = $('#bulk-template');

  var render = function(bulk) {
    var merged = new PeopleMerger(bulk).merge();

    var renderer = new Renderer(content, template, merged);

    renderer.render();
  };

  var errorHandler = function(error) {
    var el = $('.alert'),
        errorBody = error.responseJSON || error.response;

    $('span', el).html(errorBody.error);

    el.fadeIn('slow', function() {
      el.fadeOut(3000);
    });
  };

  $('.call-back').on('click', function(e) {
    var bulkLoader = new CallbackBulkLoader();

    bulkLoader.load(render);
  });

  $('.promises').on('click', function(e) {
    var bulkLoader = new PromiseBulkLoader();

    bulkLoader.load(render);
  });

  $('.generators').on('click', function(e) {
    var bulkLoader = new GeneratorBulkLoader();

    bulkLoader.load(render);
  });

  $('.clear').on('click', function(e) {
    content.html('');
    content.parent().addClass('hidden');
  });
}

export { setupHandlers };
