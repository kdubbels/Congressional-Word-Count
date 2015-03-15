<!doctype html>
<!-- timestamp: 2013-11-01 10:29 -->
<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript">
        function showResponse (response) {
            RESPONSE = response;
            if (this && this.url && (typeof(this.url) == "string")) {
                var anchor = jQuery("#url");
                anchor.text(this.url.toString());
                anchor.attr('href', this.url.toString());
            }
            jQuery("#output").text(JSON.stringify(response, null, '  '));
        }
        </script>
        <script src="scriptphrase.js" type="text/javascript"></script>




    </head>
    <body>
        <!-- <div>URL:<a id="url"></a></div>
        <hr> -->

<form id="myForm">
    <div class="form-group">
<label for="phrase">Phrase: </label><input id="phrase" class="form-control" name="phrase" type="text" placeholder="phrase" autofocus required />
    <input id="sub" type="submit" value="Submit Data" onclick="ajax_post();"> 
    </div>
</form>

    <hr />
        <div>
            <pre id="output">
                <!-- content will appear here -->
            </pre>
        </div>
    </body>
</html>