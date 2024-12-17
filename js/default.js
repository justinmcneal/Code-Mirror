$(document).ready(function() {
    var code = $(".textarea")[0];
    var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true
    });
});
