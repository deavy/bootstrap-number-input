
/* ========================================================================
 * bootstrap-spin - v1.0
 * https://github.com/wpic/bootstrap-spin
 * ========================================================================
 * Copyright 2014 WPIC, Hamed Abdollahpour
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */
(function ($) {
    "use strict";
    $.fn.bootstrapNumber = function( options ) {
        var settings = $.extend({
            center: true,
            downClass: 'default',
            downText: '-',
            upClass: 'default',
            upText: '+',
            useStaticControls: false
        }, options);

        return this.each(function(e) {
            var self = $(this),
                clone = self.clone(),
                min = self.attr('min'),
                max = self.attr('max'),
                step = Number(self.attr('step')) || 1;

            function setText(n) {
                if (isNaN(n) || (min && n < min) || (max && n > max)) {
                    return false;
                }
                clone.focus().val(n);
                clone.trigger('change');
                return true;
            }

            var group = (settings.useStaticControls)
                ? $(this).parent('.input-group')
                : $("<div class='input-group'></div>");
            var down = (settings.useStaticControls)
                ? $(this).prev().children('[type="button"]')
                : $("<button type='button'>" + settings.downText + "</button>").addClass('btn btn-' + settings.downClass);
            var up = (settings.useStaticControls)
                ? $(this).next().children('[type="button"]')
                : $("<button type='button'>" + settings.upText + "</button>").addClass('btn btn-' + settings.upClass);

            up.on('click', function() {
                setText(Number(clone.val() || clone.attr('value')) + step);
            });
            down.on('click', function() {
                setText(Number(clone.val() || clone.attr('value')) - step);
            });

            if (!settings.useStaticControls) {
                $("<span class='input-group-btn'></span>").append(down).appendTo(group);
                clone.appendTo(group);
                if(clone && settings.center) {
                    clone.css('text-align', 'center');
                }
                $("<span class='input-group-btn'></span>").append(up).appendTo(group);
            } else {
                clone = group.find('.form-control');
            }

            clone.prop('type', 'text').on('keydown', function(e) {
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
                }
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }

                var c = String.fromCharCode(e.which),
                    n = Number(clone.val() + c);

                console.debug(c, n);
                if ((min && n < min) || (max && n > max)) {
                    e.preventDefault();
                }
            });
            if (!settings.useStaticControls) {
                self.replaceWith(group);
            }
        });
    };
} (jQuery));