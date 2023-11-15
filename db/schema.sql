DROP DATABASE IF EXISTS grid_dev;
CREATE DATABASE grid_dev;

\c grid_dev;

CREATE TABLE grid (

id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
priority NUMERIC,
CHECK (priority >= 0 AND priority <= 4),
description TEXT NOT NULL,
deadline DATE,
completed BOOLEAN,
category TEXT

);