import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './client/pages/HomePage';
// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const HomePage = require("./client/pages/HomePage").default;

// const renderer = require("./helpers/renderer").default;
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.send(renderToString(<HomePage />));
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});