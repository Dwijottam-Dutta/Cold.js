/****************************************************************************

MIT License

Copyright (c) 2021 Dwijottam Dutta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

****************************************************************************/

// Cold.js DOM Manipulation
function freeze() {
    const self = {
        element: document.querySelector(selector),
        html: () => self.element,
        val: () => self.element.value,
        rootHTML: () => self.element.innerHTML,
        event: (event, callback) => {
            self.element.addEventListener(event, callback);
        },
        hide: () => {
            self.element.style.display = 'none';
        },
        attr: (name, value) => {
            if (value == null)
                return self.element.getAttribute(name);
            else
                self.element.setAttribute(name, value);
        }
    }

    return self
}

// Cold.js Console
const js = (function (purana_console) {
    return {
        print: function (text) {
            purana_console.log(text);
            // Your code
        },
        info: function (text) {
            purana_console.info(text);
            // Your code
        },
        warn: function (text) {
            purana_console.warn(text);
            // Your code
        },
        error: function (text) {
            purana_console.error(text);
            // Your code
        }
    };
}(window.console));