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



        <script src="scriptphrase.js" type="text/javascript"></script>




    </head>
    <body>
        <!-- <div>URL:<a id="url"></a></div>
        <hr> -->

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

        <script type="text/javascript">

            //Width and height
            var w = 300;
            var h = 300;

            var dataset = [];

            var outerRadius = w / 2;
            var innerRadius = 0;
            var arc = d3.svg.arc()
                            .innerRadius(innerRadius)
                            .outerRadius(outerRadius);
            
            var pie = d3.layout.pie();
            
            //Easy colors accessible via a 10-step ordinal scale
            var color = d3.scale.category10();

            //Create SVG element
            var svg = d3.select("body")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);
            
            //Set up groups
            var arcs = svg.selectAll("g.arc")
                          .data(pie(dataset))
                          .enter()
                          .append("g")
                          .attr("class", "arc")
                          .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
            
            //Draw arc paths
            arcs.append("path")
                .attr("fill", function(d, i) {
                    return color(i);
                })
                .attr("d", arc);
            
            //Labels
            arcs.append("text")
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("text-anchor", "middle")
                .text(function(d) {
                    return d.value;
                });
                        
        </script>
    </body>
</html>