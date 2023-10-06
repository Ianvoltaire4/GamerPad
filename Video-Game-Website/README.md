# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

I want to create a nba player creator where i will have a navbar that links to player creator. The player creator will have the option to choose between a PG,SG,SF,PF,and C.
They will be required to choose one of said postions and from there pick there stats like height, weight, dunk, passing, shooting, etc. They will also be able to pick the  team they play for. I will need to add a nba api to populate some nba teams then randomly drafted to a team. I need a child and granchild component the grandparent will be the home, the child of home will be Guard, Forward, and Center, and the childern of that will be the individual positions.