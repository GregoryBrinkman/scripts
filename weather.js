var fetch = require('node-fetch');

fetch("http://w1.weather.gov/xml/current_obs/display.php?stid=KMDH").then((res) => {
    res.text().then((response) => {

        // 	<location>
        // 	<station_id>
        // 	<latitude>
        // 	<longitude>
        // 	<observation_time>
        // 	<weather>
        // 	<temperature_string>
        // 	<temp_f>
        // 	<temp_c>
        // 	<relative_humidity>
        // 	<wind_string>
        // 	<wind_dir>
        // 	<wind_degrees>
        // 	<wind_mph>
        // 	<wind_kt>
        // 	<pressure_string>
        // 	<pressure_mb>
        // 	<pressure_in>
        // 	<dewpoint_string>
        // 	<dewpoint_f>
        // 	<dewpoint_c>

        var temp_f = response.match(/<temp_f[^>]*>([^<]+)<\/temp_f>/)[1];
        var weather = response.match(/<weather[^>]*>([^<]+)<\/weather>/)[1];
        // process.stdout.write(temp_f, weather);
        console.log(weather + " - " + temp_f + "° F");
    });
});
