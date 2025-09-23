@echo off

if exist node_modules (
	echo node_modules exists
	code .
) else (
	echo node_modules doesnt exist
	npm i --legacy-peer-deps
	code .
)
