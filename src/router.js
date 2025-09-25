// if the dynamic import fails, check if the path is correct
// use this router manually import the files and export

import express
	from "express";

import nodeappTestCall6
	from './servers/nodeapp/testCall6.js';
import testTestCall6
	from './servers/test/testCall6.js';
import testCall3
	from './servers/testCall3.js';

const { Router } = express;
const router = Router();
const use = router.use.bind(router);

export default use(
	testCall3,
	nodeappTestCall6,
	testTestCall6
);
