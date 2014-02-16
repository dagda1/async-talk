import CallbackBulkLoader from "callbacks";
import PromiseBulkLoader from "promises";
import GeneratorBulkLoader from "generators";
import PeopleMerger from "people-merger";
import Renderer from "renderer";

function setupHandlers() {
  var content = $(".table-condensed tbody"),
      template = $('#bulk-template');

  var errorHandler = function(error) {
    var el = $('.alert'),
        errorBody = error.responseJSON ||
                    error.response ||
                    error,
        message = errorBody.error || errorBody.message;

    $('span', el).html(message);

    el.fadeIn('slow', function() {
      el.fadeOut(3000);
    });
  };

  var render = function(bulk) {
    var merged = new PeopleMerger(bulk).merge();

    var renderer = new Renderer(content, template, merged);

    renderer.render();
  };

  RSVP.on('error', errorHandler);

  $('.call-back').on('click', function(e) {
    var bulkLoader = new CallbackBulkLoader();

    bulkLoader.load(render);
  });

  $('.promises').on('click', function(e) {
    var bulkLoader = new PromiseBulkLoader();

    bulkLoader.load().then(function(result) {
      render(result);
    }).catch(errorHandler);
  });

  $('.generators').on('click', function(e) {
    var iterator = new GeneratorBulkLoader().iterator();

    var nextResult = iterator.next();

    console.log(nextResult);
    console.log(iterator.next());
    console.log(iterator.next());

    nextResult = iterator.next();

    console.log(nextResult);

    // var users = iterator.next();
    // var contacts = iterator.next(users.value);
    // var companies = iterator.next(contacts.value);

    // var result = iterator.next(companies.value).value;

    // console.log(result);
  });

  $('.clear').on('click', function(e) {
    content.html('');
    content.parent().addClass('hidden');
  });
}

export { setupHandlers };
