#!/usr/bin/env bun
import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import fs from "fs-extra";
import { join } from "path";

function createProject(projectName: string) {
  const projectPath = join(process.cwd(), projectName);

  if (existsSync(projectPath)) {
    console.error(`Error: Directory ${projectName} already exists.`);
    process.exit(1);
  }

  console.log(`Creating project in ${projectPath}...`);
  mkdirSync(projectPath);

  // Copiar plantilla básica
  fs.copySync(join(__dirname, "template"), projectPath);

  console.log("Installing dependencies...");
  execSync(`cd ${projectName} && bun install`, { stdio: "inherit" });

  console.log(`\nProject ${projectName} created successfully!`);
  console.log(`\nRun the following commands to get started:\n`);
  console.log(`  cd ${projectName}`);
  console.log(`  bun run dev`);
}

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("Usage: create-bunfire <project-name>");
  process.exit(1);
}

createProject(args[0]);
