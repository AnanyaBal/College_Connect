"use strict";

define('question-answer/about/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("question-answer/about/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Wym1OROl", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container\"],[15,\"id\",\"about-container\"],[13],[0,\"\\n\"],[11,\"h2\",[]],[13],[0,\"About\"],[14],[0,\"\\n\"],[11,\"hr\",[]],[15,\"class\",\"about-hr\"],[13],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Quans is a question and answer message board where a user submits a question and other users can respond with answers.\"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\" \"],[11,\"a\",[]],[15,\"href\",\"/\"],[13],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-plus-sign\"],[13],[14],[0,\" Ask Question\"],[14],[14],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/about/template.hbs" } });
});
define('question-answer/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _firebase.default.extend({});
});
define('question-answer/app', ['exports', 'question-answer/resolver', 'ember-load-initializers', 'question-answer/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  // Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('question-answer/components/answer-tile/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            delete: function _delete(answer) {
                if (confirm('Are you sure you want to delete this Answer?')) {
                    this.sendAction('destroyAnswer', answer);
                }
            },
            upVote: function upVote(answer) {
                this.sendAction('upVote', answer);
            },
            downVote: function downVote(answer) {
                this.sendAction('downVote', answer);
            }
        }
    });
});
define("question-answer/components/answer-tile/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lrFXA+oZ", "block": "{\"statements\":[[11,\"hr\",[]],[13],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[1,[28,[\"answer\",\"answer\"]],false],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[11,\"h5\",[]],[15,\"class\",\"text-success\"],[15,\"id\",\"ans-author\"],[13],[0,\"answered by: \"],[1,[28,[\"answer\",\"author\"]],false],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"text-primary\"],[13],[0,\"(\"],[1,[28,[\"answer\",\"createdDate\"]],false],[0,\")\"],[14],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n\"],[11,\"button\",[]],[15,\"class\",\"btn\"],[5,[\"action\"],[[28,[null]],\"delete\",[28,[\"answer\"]]]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-trash\"],[13],[14],[14],[0,\"\\n\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"upVote\",[28,[\"answer\"]]]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-thumbs-up\"],[13],[14],[0,\" \"],[1,[28,[\"answer\",\"upvote\"]],false],[14],[0,\"\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"downVote\",[28,[\"answer\"]]]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-thumbs-down\"],[13],[14],[0,\" \"],[1,[28,[\"answer\",\"downvote\"]],false],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/components/answer-tile/template.hbs" } });
});
define('question-answer/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('question-answer/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('question-answer/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('question-answer/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('question-answer/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('question-answer/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('question-answer/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('question-answer/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('question-answer/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('question-answer/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('question-answer/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('question-answer/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('question-answer/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('question-answer/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('question-answer/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('question-answer/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('question-answer/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('question-answer/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('question-answer/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('question-answer/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('question-answer/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('question-answer/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('question-answer/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('question-answer/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('question-answer/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('question-answer/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('question-answer/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('question-answer/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('question-answer/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('question-answer/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('question-answer/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('question-answer/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('question-answer/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('question-answer/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('question-answer/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('question-answer/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('question-answer/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('question-answer/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('question-answer/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('question-answer/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('question-answer/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('question-answer/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('question-answer/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('question-answer/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('question-answer/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('question-answer/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('question-answer/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('question-answer/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('question-answer/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('question-answer/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('question-answer/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('question-answer/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('question-answer/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('question-answer/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('question-answer/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('question-answer/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('question-answer/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('question-answer/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('question-answer/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('question-answer/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('question-answer/components/new-answer/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            answerFormShow: function answerFormShow() {
                this.set('addNewAnswer', true);
            },
            cancel: function cancel() {
                this.set('addNewAnswer', false);
            },
            saveAnswer: function saveAnswer() {
                var params = {
                    author: this.get('author'),
                    answer: this.get('answer'),
                    post: this.get('post'),
                    createdDate: new Date().toISOString().substring(0, 10)
                };

                this.set('author', '');
                this.set('answer', '');

                this.set('addNewAnswer', false);
                this.sendAction('saveAnswer', params);
            }
        }
    });
});
define("question-answer/components/new-answer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L/y65PSJ", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"addNewAnswer\"]]],null,{\"statements\":[[11,\"div\",[]],[15,\"class\",\"card-layout\"],[13],[0,\"\\n  \"],[11,\"h1\",[]],[13],[0,\"New Answer\"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"answer-form\"],[13],[0,\"\\n    \"],[11,\"form\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"textarea\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"answer\"]],\"answer\",\"Answer\"]]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"author\"]],\"author\",\"Author\"]]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"saveAnswer\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-send\"],[13],[14],[0,\" Submit\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-basic\"],[5,[\"action\"],[[28,[null]],\"cancel\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-remove-sign\"],[13],[14],[0,\" Cancel\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[11,\"button\",[]],[15,\"class\",\"btn btn-info\"],[5,[\"action\"],[[28,[null]],\"answerFormShow\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-pencil\"],[13],[14],[0,\" Answer\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/components/new-answer/template.hbs" } });
});
define('question-answer/components/new-post/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        addNewPost: false,
        actions: {
            postFormShow: function postFormShow() {
                this.set('addNewPost', true);
            },
            postFormHide: function postFormHide() {
                this.set('addNewPost', false);
            },
            savePost1: function savePost1() {
                var params = {
                    author: this.get('author'),
                    detail: this.get('detail'),
                    body: this.get('body'),
                    createdDate: new Date().toISOString().substring(0, 10)

                };
                this.set('author', '');
                this.set('detail', '');
                this.set('body', '');

                this.set('addNewPost', false);
                this.sendAction('savePost2', params);
            }
        }
    });
});
define("question-answer/components/new-post/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YpxpS1kD", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"addNewPost\"]]],null,{\"statements\":[[11,\"h3\",[]],[13],[0,\"New Question\"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n    \"],[11,\"form\",[]],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"textarea\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"body\"]],\"body\",\"Question\"]]],false],[0,\"\\n      \"],[14],[0,\"\\n       \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"textarea\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"detail\"]],\"detail\",\"Details\"]]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"author\"]],\"author\",\"Author\"]]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"savePost1\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-send\"],[13],[14],[0,\" Publish\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-basic\"],[5,[\"action\"],[[28,[null]],\"postFormHide\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-remove-sign\"],[13],[14],[0,\" Cancel\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"postFormShow\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-plus-sign\"],[13],[14],[0,\" Ask Question\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/components/new-post/template.hbs" } });
});
define('question-answer/components/post-detail/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        // sortBy: ['upvote:desc'],
        // sortedAnswers: Ember.computed.sort('post.upvotes', 'sortBy'),
        actions: {
            delete: function _delete(post) {
                if (confirm('Delete question?')) {
                    this.sendAction('destroyPost', post);
                }
            },
            destroyAnswer: function destroyAnswer(answer) {
                this.sendAction('destroyAnswer', answer);
            },
            upVote: function upVote(answer) {
                this.sendAction('upVote', answer);
            },
            downVote: function downVote(answer) {
                this.sendAction('downVote', answer);
            }
        }
    });
});
define("question-answer/components/post-detail/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UfiwNITl", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"view-question-container card-layout\"],[13],[0,\"\\n  \"],[11,\"h2\",[]],[15,\"class\",\"answers\"],[13],[0,\"Question\"],[14],[0,\"\\n\\t\"],[11,\"h3\",[]],[13],[1,[28,[\"post\",\"body\"]],false],[14],[0,\"\\n\\t\"],[11,\"p\",[]],[13],[1,[28,[\"post\",\"detail\"]],false],[14],[0,\"\\n\\t\"],[11,\"h5\",[]],[15,\"class\",\"text-success\"],[13],[0,\"asked by: \"],[1,[28,[\"post\",\"author\"]],false],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"text-primary\"],[13],[0,\"(\"],[1,[28,[\"post\",\"createdDate\"]],false],[0,\")\"],[14],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"answer-container card-layout\"],[13],[0,\"\\n  \"],[11,\"h2\",[]],[15,\"class\",\"answers\"],[13],[0,\"Answers\"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"post\",\"answers\"]]],null,{\"statements\":[[0,\"\\t\"],[1,[33,[\"answer-tile\"],null,[[\"answer\",\"destroyAnswer\",\"upVote\",\"downVote\"],[[28,[\"answer\"]],\"destroyAnswer\",\"upVote\",\"downVote\"]]],false],[0,\"\\n\"]],\"locals\":[\"answer\"]},null],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/components/post-detail/template.hbs" } });
});
define('question-answer/components/post-tile/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("question-answer/components/post-tile/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "S/ZHFskG", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"question-container\"],[13],[0,\"\\n\\t\"],[11,\"hr\",[]],[13],[14],[0,\"\\n\\t\"],[6,[\"link-to\"],[\"post\",[28,[\"post\",\"id\"]]],null,{\"statements\":[[11,\"h3\",[]],[15,\"class\",\"question\"],[13],[1,[28,[\"post\",\"body\"]],false],[14]],\"locals\":[]},null],[0,\"\\n\\t\"],[11,\"h5\",[]],[13],[0,\"asked by: \"],[1,[28,[\"post\",\"author\"]],false],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/components/post-tile/template.hbs" } });
});
define('question-answer/components/update-post/component', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		updatePostForm: false,

		actions: {
			updatePostForm: function updatePostForm() {
				this.set('updatePostForm', true);
			},
			cancel: function cancel() {
				this.set('updatePostForm', false);
			},
			update: function update(post, params) {
				var params = {
					author: this.get('author'),
					detail: this.get('detail'),
					body: this.get('body')
				};

				this.set('author', '');
				this.set('detail', '');
				this.set('body', '');
				this.set('updatePostForm', false);
				this.sendAction('update', post, params);
			}
		}
	});
});
define("question-answer/components/update-post/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K5u/iypD", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"updatePostForm\"]]],null,{\"statements\":[[11,\"h1\",[]],[13],[0,\"Edit Question\"],[14],[0,\"\\n  \"],[11,\"div\",[]],[13],[0,\"\\n    \"],[11,\"form\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"textarea\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"body\"]],\"body\",[28,[\"post\",\"body\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n       \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"textarea\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"detail\"]],\"detail\",[28,[\"post\",\"detail\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[28,[\"author\"]],\"author\",[28,[\"post\",\"author\"]]]]],false],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"update\",[28,[\"post\"]]]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-send\"],[13],[14],[0,\" Publish\"],[14],[0,\"\\n      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-basic\"],[5,[\"action\"],[[28,[null]],\"cancel\"]],[13],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-remove-sign\"],[13],[14],[0,\" Cancel\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"updatePostForm\"]],[13],[0,\"Edit Question\"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/components/update-post/template.hbs" } });
});
define('question-answer/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('question-answer/helpers/app-version', ['exports', 'question-answer/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('question-answer/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('question-answer/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('question-answer/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancel-all', 'cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('question-answer/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', 'perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('question-answer/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('question-answer/helpers/post-popularity', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.postPopularity = postPopularity;
    function postPopularity(params /*, hash*/) {
        var post = params[0];

        if (post.get('answers').get('length') >= 5) {
            return Ember.String.htmlSafe('<span class="glyphicon glyphicon-certificate fire" data-toggle="tooltip" title="Its heating up in here!"></span>');
        }
    }

    exports.default = Ember.Helper.helper(postPopularity);
});
define('question-answer/helpers/post-unanswered', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.postUnanswered = postUnanswered;
    function postUnanswered(params /*, hash*/) {
        var post = params[0];

        if (post.get('answers').get('length') === 0) {
            return Ember.String.htmlSafe('<span class="glyphicon glyphicon-certificate" data-toggle="tooltip" title="Its cold in here :("></span>');
        }
    }

    exports.default = Ember.Helper.helper(postUnanswered);
});
define('question-answer/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('question-answer/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('question-answer/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'question-answer/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('question-answer/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('question-answer/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('question-answer/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('question-answer/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('question-answer/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberfire.default;
});
define('question-answer/initializers/export-application-global', ['exports', 'question-answer/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('question-answer/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('question-answer/initializers/load-bootstrap-config', ['exports', 'question-answer/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('question-answer/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('question-answer/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("question-answer/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('question-answer/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    author: _emberData.default.attr('string'),
    answer: _emberData.default.attr('string'),
    createdDate: _emberData.default.attr('string'),
    upvote: _emberData.default.attr('number'),
    downvote: _emberData.default.attr('number'),
    post: _emberData.default.belongsTo('post', { async: true })
  });
});
define('question-answer/models/post', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    author: _emberData.default.attr('string'),
    body: _emberData.default.attr('string'),
    detail: _emberData.default.attr('string'),
    createdDate: _emberData.default.attr('string'),
    answers: _emberData.default.hasMany('answer', { async: true })
  });
});
define('question-answer/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('question-answer/router', ['exports', 'question-answer/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('post', { path: '/post/:post_id' });
    this.route('about');
  });

  exports.default = Router;
});
define('question-answer/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			return Ember.RSVP.hash({
				posts: this.store.findAll('post'),
				answers: this.store.findAll('answer')
			});
		},


		actions: {
			savePost3: function savePost3(params) {
				var newPost = this.store.createRecord('post', params);
				newPost.save();
				this.transitionTo('index');
			}
		}
	});
});
define('question-answer/routes/post', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      return this.store.findRecord('post', params.post_id);
    },

    actions: {
      update: function update(post, params) {
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            post.set(key, params[key]);
          }
        });
        post.save();
        this.transitionTo('index');
      },
      destroyPost: function destroyPost(post) {
        var answer_deletions = post.get('answers').map(function (answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function () {
          return post.destroyRecord();
        });
        this.transitionTo('index');
      },
      saveAnswer: function saveAnswer(params) {
        params.upvote = 0;
        params.downvote = 0;
        var newAnswer = this.store.createRecord('answer', params);
        var post = params.post;
        post.get('answers').addObject(newAnswer);
        newAnswer.save().then(function () {
          return post.save();
        });
        this.transitionTo('post', post);
      },
      destroyAnswer: function destroyAnswer(answer) {
        answer.destroyRecord();
      },
      upVote: function upVote(answer) {
        var votes = parseInt(answer.get('upvote'));
        votes += 1;
        answer.set('upvote', votes);
        answer.save();
      },
      downVote: function downVote(answer) {
        var votes = parseInt(answer.get('downvote'));
        votes++;
        answer.set('downvote', votes);
        answer.save();
      }
    }
  });
});
define('question-answer/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('question-answer/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebaseApp.default;
});
define('question-answer/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});
define("question-answer/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6nH1TqhB", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n\\t\"],[11,\"a\",[]],[15,\"href\",\"/\"],[15,\"class\",\"logo\"],[13],[11,\"h1\",[]],[13],[0,\"CollegeConnect\"],[14],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n\\t\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"footer\",[]],[13],[0,\"\\nProject by -\\n\"],[11,\"a\",[]],[15,\"href\",\"https://github.com/Anniebbb\"],[13],[0,\"Ananya Bal\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/templates/application.hbs" } });
});
define('question-answer/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("question-answer/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NUvrjyOI", "block": "{\"statements\":[[11,\"h1\",[]],[15,\"class\",\"welcome\"],[13],[0,\"Logged in  as Representative\"],[14],[0,\"\\n\"],[11,\"h3\",[]],[15,\"class\",\"welcome\"],[13],[0,\"Questions :\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"card-layout\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"posts\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"post-tile\"],null,[[\"post\"],[[28,[\"post\"]]]]],false],[0,\"\\n    \"],[11,\"p\",[]],[15,\"class\",\"fire\"],[13],[1,[33,[\"post-popularity\"],[[28,[\"post\"]]],null],false],[14],[0,\"\\n    \"],[1,[33,[\"post-unanswered\"],[[28,[\"post\"]]],null],false],[0,\"\\n\"]],\"locals\":[\"post\"]},null],[14],[0,\"\\n\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/templates/index.hbs" } });
});
define("question-answer/templates/post", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "APTgcXRl", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"update-btn\"],[13],[0,\"\\n\\t\"],[1,[33,[\"new-answer\"],null,[[\"saveAnswer\",\"post\"],[\"saveAnswer\",[28,[\"model\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"],[1,[33,[\"post-detail\"],null,[[\"post\",\"destroyPost\",\"destroyAnswer\",\"upVote\",\"downVote\"],[[28,[\"model\"]],\"destroyPost\",\"destroyAnswer\",\"upVote\",\"downVote\"]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "question-answer/templates/post.hbs" } });
});
define('question-answer/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});

define('question-answer/config/environment', [], function() {
  var prefix = 'question-answer';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("question-answer/app")["default"].create({"name":"question-answer","version":"0.0.0"});
}
//# sourceMappingURL=question-answer.map
