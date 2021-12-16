import $ from 'jquery';
export default function execute (shadow,html,styles,time) {
  let openComment, writeStyleChar, writeStyles;

  styles =
    '/* \n * "Myself" v1.0.5\n * Robot rights protected under BOT License\n * Authored by pen#PwLXXP\n */\n\n#heart {\n display:block;\n width:100px; height:100px;\n background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}';

  openComment = false;

  writeStyleChar = function (which) {
    if (which === "/" && openComment === false) {
      openComment = true;
      styles = $("#style-text",shadow).html() + which;
    } else if (which === "/" && openComment === true) {
      openComment = false;
      styles = $("#style-text",shadow)
        .html()
        .replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ":") {
      styles = $("#style-text",shadow)
        .html()
        .replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ";") {
      styles = $("#style-text",shadow)
        .html()
        .replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === "{") {
      styles = $("#style-text",shadow)
        .html()
        .replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $("#style-text",shadow).html() + which;
    }
    $("#style-text",shadow).html(styles);
    return $("#style-tag",shadow).append(which);
  };

  writeStyles = function (message, index, interval) {
    let pre;
    if (index < message.length) {
      pre = document.getElementById("style-text");
      // pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout(function () {
          console.log('-------------------------',$("example",shadow));

        return writeStyles(message, index, interval);
      }, interval);
    }
  };
  html='  <style id="style-tag"></style>\n<span id="echo"></span>\n<span id="heart"><i></i></span>\n<pre id="style-text"></pre>'
  $("example",shadow).append(
    html
  );

  time = 50;

  writeStyles(styles, 0, time);

  /*
    Changelog:
    1.0.0: i exist!
    1.0.1: heart instead of circle
    1.0.2: including standard CSS3 transforms and animations
        was only using `-webkit` to be less verbose (standard transforms dont work in safari)
        now works in FF
    1.0.3: crossbrowser echo 
        nested `scale()` styles (scaled in scaled) only worked in chrome
        moved echo out of heart to fix
    1.0.4: more efficient animations
        `0%, 100% {}` instead of duplicated keyframes
    1.0.5: overflwo fix
      `overflow: auto` on the `pre`
     */
};
