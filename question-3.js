const fs = require("fs");
const path = require("path");

console.log("========== CREATING LOG FILES ==========\n");

const logsDir = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log("Logs directory created.");
} else {
  console.log("Logs directory already exists.");
}

process.chdir(logsDir);
console.log("Current working directory changed to:", process.cwd());
console.log("\nCreated files:");

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  const content = `This is log file number ${i}\nCreated at: ${new Date().toISOString()}\n`;

  fs.writeFileSync(fileName, content);
  console.log(fileName);
}

console.log("\n========== REMOVING LOG FILES ==========\n");

process.chdir("..");

const logsDirToRemove = path.join(process.cwd(), "Logs");

if (fs.existsSync(logsDirToRemove)) {
  const files = fs.readdirSync(logsDirToRemove);

  files.forEach((file) => {
    const filePath = path.join(logsDirToRemove, file);
    console.log(`delete files...${file}`);
    fs.unlinkSync(filePath);
  });

  fs.rmdirSync(logsDirToRemove);
  console.log("\nLogs directory removed.");
} else {
  console.log("Logs directory does not exist.");
}