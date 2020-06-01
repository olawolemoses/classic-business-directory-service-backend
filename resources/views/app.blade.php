<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @routes

    <script>
        console.log(Ziggy.namedRoutes, Ziggy.baseProtocol, window.location.protocol);
        Ziggy.baseProtocol = window.location.protocol;
        console.log(Ziggy.baseProtocol, window.location.protocol);
    </script>
  </head>

  <body>
    @inertia
  </body>
</html>