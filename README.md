# VoteHub - Voting Management System

![Next.js](https://img.shields.io/badge/Next.js-Pages%20Router-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-F56565?style=for-the-badge)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> A modern, responsive voting management system built with Next.js, TypeScript, Tailwind CSS, TanStack Query, and Lucide React.

--
## Overview

Users can enter their name and vote for one candidate. Once a voter has voted, the system prevents the same name from voting again.

![sample](./public/images/sample.png) ![the website like](https://next-js-voting-hub-project.vercel.app/)

--

## Project Overview

**VoteHub** is a responsive voting management application built to demonstrate how a static voting interface can be transformed into a functional web application.

The project allows users to enter their name, select a candidate, cast a vote, view candidate information, and see updated voting results.

It also includes candidate management, voter tracking, results, responsive navigation, and reusable UI components.

The project was built as a **frontend-focused application** using browser `localStorage` for data persistence.

---

## Project Goal

The main goal of this project was to build a practical voting application while gaining hands-on experience with:

- React component architecture
- Next.js
- TypeScript
- Tailwind CSS
- TanStack Query
- Client-side state management
- Browser localStorage
- Responsive design
- Reusable components
- Modals
- Forms
- Navigation
- User interaction
- Debugging

Instead of creating only a static UI, the goal was to make the interface interactive and functional.

---

# ✨ Features

## Voting System

Users can:

- Enter their name
- View available candidates
- Select a candidate
- Vote for a candidate
- See the vote count increase
- Receive feedback after voting
- View their voting status

Each voter name can only vote once.

The name comparison is case-insensitive.

For example:

```text
Rita
rita
RITA
