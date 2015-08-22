<!doctype html>
<!-- timestamp: 2013-11-01 10:29 -->
<html>
    <head>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
        <script type="text/javascript">
/*        function showResponse (response) {
            RESPONSE = response;
            if (this && this.url && (typeof(this.url) == "string")) {
                var anchor = jQuery("#url");
                anchor.text(this.url.toString());
                anchor.attr('href', this.url.toString());
            }
            jQuery("#output").text(JSON.stringify(response, null, '  '));
        }
*/
        </script>
<script>
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


        <script src="scriptphrase_d3.js" type="text/javascript"></script>




    </head>
    <body>

<form action="" id="phrase-lookup">
            <div>
                <label for="txt-phrase">Your phrase:</label>
                <input type="text" id="txt-phrase" name="phrase" required />
            </div>
            <div>
                <label for="txt-startdate">Start date:</label>
                <input type="text" id="txt-startdate" name="start date" required />
            </div>
            <div>
                <label for="txt-enddate">End date:</label>
                <input type="text" id="txt-enddate" name="end date" required />
            </div>



            <div>
                <input type="submit" id="btn-lookup" value="Look up a phrase" />
            </div>
        </form>

    <hr />
        <div>
            <pre id="output">
                <!-- content will appear here -->
            </pre>
        </div>


<hr />

        
    </body>
</html>