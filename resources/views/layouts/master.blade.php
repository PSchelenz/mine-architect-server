<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    @vite(['resources/scss/app.scss'])

    <!-- Font Awesome Icons -->
</head>
<body class="bg-gradient-faded-dark">
<noscript>
    <strong>
        Please enable JavaScript in your browser to continue.
    </strong>
</noscript>

<div id="app"></div>

@vite(['resources/js/app.ts'])
</body>
</html>
