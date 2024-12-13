FROM php:8.3.0-alpine

WORKDIR /var/www/html

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN docker-php-ext-install pdo_mysql

EXPOSE 8000

CMD ["php", "artisan", "serve"]
