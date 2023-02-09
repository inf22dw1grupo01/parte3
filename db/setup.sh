#!/bin/bash
set -e
service mysql start
mysql < /app/pokemon.sql
service mysql stop