@extends('creation::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>Module: {!! config('creation.name') !!}</p>
@endsection
